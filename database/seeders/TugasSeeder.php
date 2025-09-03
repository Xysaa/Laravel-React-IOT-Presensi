<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tugas;
use Carbon\Carbon;

class TugasSeeder extends Seeder
{
    public function run(): void
    {
        $tugas = [
            [
                'nama_tugas' => 'Laporan Mingguan 1',
                'deskripsi' => 'Membuat laporan kegiatan minggu pertama',
                'tanggal_deadline' => Carbon::now()->addDays(7),
                'status' => 'aktif',
            ],
            [
                'nama_tugas' => 'Presentasi Kelompok',
                'deskripsi' => 'Presentasi hasil diskusi kelompok',
                'tanggal_deadline' => Carbon::now()->addDays(14),
                'status' => 'aktif',
            ],
            [
                'nama_tugas' => 'Laporan Akhir',
                'deskripsi' => 'Laporan akhir kegiatan PPLK',
                'tanggal_deadline' => Carbon::now()->addDays(30),
                'status' => 'aktif',
            ],
            [
                'nama_tugas' => 'Survey Evaluasi',
                'deskripsi' => 'Mengisi form survey evaluasi akhir',
                'tanggal_deadline' => Carbon::now()->addDays(35),
                'status' => 'aktif',
            ],
        ];

        foreach ($tugas as $data) {
            Tugas::create($data);
        }
    }
}
