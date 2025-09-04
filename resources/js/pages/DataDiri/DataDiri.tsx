import DashboardLayout from '@/components/Layouts/DashboardLayout';
import { useState } from 'react';

export default function DataDiri() {
    const [edit, setEdit] = useState(false);
    const [form, setForm] = useState({
        nama: '',
        nim: '',
        kelompok: '',
        hpPeserta: '',
        hpOrtu: '',
        alamat: '',
        daplok: '',
        mentor: '',
        riwayat: '',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleEdit() {
        setEdit(true);
    }

    function handleSave() {
        setEdit(false);
        // TODO: kirim data ke backend
    }

    return(
        <DashboardLayout >  
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-6">DATA DIRI</h1>
                </div>
                <div className="flex justify-center gap-12 mt-2">
                    <div className="border border-solid border-black w-64 h-64 flex items-center justify-center text-center font-medium">
                        {/* Foto Profil Peserta Kader */}
                        {edit ? (
                            <input
                                type="file"
                                className="block w-full"
                                accept="image/*"
                            />
                        ) : (
                            "Foto Profil Peserta Kader"
                        )}
                    </div>
                    <div className="bg-lime-400 w-80 p-6 flex flex-col justify-center font-medium text-black gap-2">
                        {edit ? (
                            <>
                                <input name="nama" value={form.nama} onChange={handleChange} placeholder="Nama" className="mb-1 px-2 py-1" />
                                <input name="nim" value={form.nim} onChange={handleChange} placeholder="NIM" className="mb-1 px-2 py-1" />
                                <input name="kelompok" value={form.kelompok} onChange={handleChange} placeholder="Kelompok" className="mb-1 px-2 py-1" />
                                <input name="hpPeserta" value={form.hpPeserta} onChange={handleChange} placeholder="NO. HP Peserta" className="mb-1 px-2 py-1" />
                                <input name="hpOrtu" value={form.hpOrtu} onChange={handleChange} placeholder="NO. HP Orang Tua/Wali" className="mb-1 px-2 py-1" />
                                <input name="alamat" value={form.alamat} onChange={handleChange} placeholder="Alamat" className="mb-1 px-2 py-1" />
                                <input name="daplok" value={form.daplok} onChange={handleChange} placeholder="Daplok" className="mb-1 px-2 py-1" />
                                <input name="mentor" value={form.mentor} onChange={handleChange} placeholder="Mentor" className="mb-1 px-2 py-1" />
                                <textarea name="riwayat" value={form.riwayat} onChange={handleChange} placeholder="Riwayat Penyakit" className="mb-1 px-2 py-1" />
                            </>
                        ) : (
                            <>
                                <div>Nama: {form.nama}</div>
                                <div>NIM: {form.nim}</div>
                                <div>Kelompok: {form.kelompok}</div>
                                <div>NO. HP Peserta: {form.hpPeserta}</div>
                                <div>NO. HP Orang Tua/Wali: {form.hpOrtu}</div>
                                <div>Alamat: {form.alamat}</div>
                                <div>Daplok: {form.daplok}</div>
                                <div>Mentor: {form.mentor}</div>
                                <div className="font-bold mt-2">Riwayat Penyakit: {form.riwayat}</div>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex justify-end mt-6">
                    {edit ? (
                        <button className="bg-lime-400 px-8 py-2 font-bold" onClick={handleSave}>Simpan</button>
                    ) : (
                        <button className="bg-lime-400 px-8 py-2 font-bold" onClick={handleEdit}>Ubah Data</button>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}