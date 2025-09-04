<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kehadiran;
use Carbon\Carbon;

class AttendanceSeeder extends Seeder
{
    public function run(): void
    {
        $days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum'];

        foreach ($days as $index => $day) {
            Kehadiran::create([
                'user_id' => 1,
                'tanggal' => Carbon::now()->startOfWeek()->addDays($index),
                'jam_masuk' => rand(40, 50),
                'jam_keluar' => rand(0, 5),
            ]);
        }
    }
}
