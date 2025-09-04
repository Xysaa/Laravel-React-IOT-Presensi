<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_tugas',
        'deskripsi',
        'tanggal_deadline',
        'status',
    ];

    public function pengumpulanTugas()
    {
        return $this->hasMany(PengumpulanTugas::class);
    }
}
