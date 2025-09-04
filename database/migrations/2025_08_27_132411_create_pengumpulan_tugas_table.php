<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pengumpulan_tugas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // siapa yang ngumpul
            $table->foreignId('tugas_id')->constrained('tugas')->onDelete('cascade'); // tugas apa
            $table->string('file_path')->nullable(); // lokasi file upload
            $table->text('catatan')->nullable();
            $table->timestamp('tanggal_pengumpulan')->nullable();
            $table->enum('status', ['dikumpulkan', 'terlambat', 'belum'])->default('belum');
            $table->timestamps();

            $table->unique(['user_id', 'tugas_id']); // supaya 1 user hanya sekali submit per tugas
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pengumpulan_tugas');
    }
};
