<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->name('dashboard');

Route::get('/riwayat-tugas', function () {
    return Inertia::render('RiwayatTugas/RiwayatTugas');
});

Route::get('/riwayat-absen', function () {
    return Inertia::render('RiwayatAbsen/RiwayatAbsen');
});

Route::get('/pelaporan', function () {
    return Inertia::render('Pelaporan/Pelaporan');
});

Route::get('/data-diri', function () {
    return Inertia::render('DataDiri/DataDiri');
});

Route::get('/pengumuman', function () {
    return Inertia::render('Pengumuman/Pengumuman');
});

Route::get('/kontak-tim', function () {
    return Inertia::render('KontakTim/KontakTim');
});



require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
