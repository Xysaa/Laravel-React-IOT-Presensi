<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Kehadiran;
use App\Models\Tugas;
use App\Models\PengumpulanTugas;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // === Stats ===
        $totalKehadiran = Kehadiran::where('status', 'hadir')->count();
        $total = Kehadiran::count();
        $attendancePercent = $total > 0 ? round(($totalKehadiran / $total) * 100, 2) . '%' : '0%';

        $totalTugas = Tugas::count();
        $tugasSelesai = PengumpulanTugas::where('status', 'dikumpulkan')->count();
        $tasksCompleted = "{$tugasSelesai}/{$totalTugas}";

        $onTime = PengumpulanTugas::where('status', 'dikumpulkan')->count();
        $late = PengumpulanTugas::where('status', 'terlambat')->count();

        $stats = [
            'attendance' => $attendancePercent,
            'tasks_completed' => $tasksCompleted,
            'on_time' => $onTime,
            'late' => $late,
        ];

        // === Activities (ambil 5 terakhir dari kehadiran + tugas) ===
        $activities = Kehadiran::latest()->take(3)->get()->map(function ($item) {
            return [
                'type' => $item->status === 'terlambat' ? 'terlambat' : 'absen',
                'text' => $item->status === 'terlambat'
                    ? "Anda terlambat masuk pada {$item->jam_masuk}"
                    : "Anda telah melakukan absen masuk pukul {$item->jam_masuk}",
                'time' => $item->tanggal->format('d M Y') . ', ' . $item->jam_masuk,
            ];
        });

        $taskActivities = PengumpulanTugas::latest()->take(2)->get()->map(function ($item) {
            return [
                'type' => $item->status === 'dikumpulkan' ? 'selesai' : 'tugas',
                'text' => $item->status === 'dikumpulkan'
                    ? "Anda telah menyelesaikan {$item->tugas->nama_tugas}"
                    : "Tugas {$item->tugas->nama_tugas} telah ditugaskan kepada Anda",
                'time' => $item->created_at->diffForHumans(),
            ];
        });

        $activities = $activities->merge($taskActivities)->take(5);

        // === Announcements (sementara bisa dummy atau bikin tabel sendiri) ===
        $announcements = [
            ['title' => 'Rapat Bulanan', 'date' => '23 Jul 2023', 'text' => 'Rapat evaluasi bulanan akan dilaksanakan pada tanggal 30 Juli 2023 pukul 10:00 WIB.'],
            ['title' => 'Pelatihan Karyawan', 'date' => '20 Jul 2023', 'text' => 'Pelatihan penggunaan sistem baru akan dilaksanakan pada tanggal 25 Juli 2023.'],
            ['title' => 'Libur Nasional', 'date' => '15 Jul 2023', 'text' => 'Tanggal 17 Agustus 2023 adalah libur nasional dalam rangka Hari Kemerdekaan RI.'],
        ];
        // Statistik Kehadiran per Hari (mingguan)
        $attendanceChart = Kehadiran::select(
                DB::raw('DAYNAME(tanggal) as day'),
                DB::raw('SUM(CASE WHEN status = "hadir" THEN 1 ELSE 0 END) as hadir'),
                DB::raw('SUM(CASE WHEN status = "terlambat" THEN 1 ELSE 0 END) as terlambat')
            )
            ->groupBy('day')
            ->get();

        // Statistik Penyelesaian Tugas per Minggu
        $taskChart = PengumpulanTugas::select(
                DB::raw('WEEK(created_at) as week'),
                DB::raw('COUNT(CASE WHEN status = "dikumpulkan" THEN 1 END) as selesai')
            )
            ->groupBy('week')
            ->get()
            ->map(function ($item, $index) {
                return [
                    'week' => "Minggu " . ($index + 1),
                    'selesai' => $item->selesai,
                ];
            });

        return Inertia::render('Dashboard/DashboardPage', [
            'stats' => $stats,
            'activities' => $activities,
            'announcements' => $announcements,
            'attendanceChart' => $attendanceChart,
            'taskChart' => $taskChart,
        ]);

        
    }
}
