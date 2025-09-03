import DashboardLayout from '@/components/Layouts/DashboardLayout';



export default function RiwayatAbsen() {   
    return(
        <DashboardLayout >
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-6">RIWAYAT ABSEN</h1>
                    <div className="w-full max-w-xl mb-6">
                        <div className="mb-2">
                            <span className="font-bold">NAMA:</span>                                
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">NIM:</span>
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">KELOMPOK:</span>
                        </div>
                    </div>
                    <table className="min-w-full border border-black">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 underline">Pertemuan</th>
                                <th className="border px-4 py-2 underline">Hadir</th>
                                <th className="border px-4 py-2 underline">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 text-center">1</td>
                                <td className="border px-4 py-2 text-center"><select className='border border-solid px-2 py-1'>
                                        <option value="hadir">Hadir</option>
                                        <option value="sakit">Sakit</option>
                                        <option value="izin">Izin</option>
                                        <option value="alpha">Alpha</option>
                                    </select></td>
                                <td className="border px-4 py-2 text-center"><input type="file" className='border border-solid bg-amber-100' /> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>  
        </DashboardLayout>
    );
}