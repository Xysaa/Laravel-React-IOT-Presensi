import DashboardLayout from '@/components/Layouts/DashboardLayout';


export default function RiwayatTugas() {   
    return(
        <DashboardLayout >
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-6">RIWAYAT TUGAS</h1>
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
                                <th className="border px-4 py-2 underline">TUGAS</th>
                                <th className="border px-4 py-2 underline">LINK TUGAS</th>
                                <th className="border px-4 py-2 underline">DIKUMPUL</th>
                                <th className="border px-4 py-2 underline">NILAI</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 text-center">1</td>
                                <td className="border px-4 py-2 text-center"><input type="text" className='border border-solid' placeholder='masukkan link' /></td>
                                <td className="border px-4 py-2 text-center"><input type="checkbox" /></td>
                                <td className="border px-4 py-2 text-center"><input type="text" className='border border-solid' placeholder='masukkan nilai' /></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>  
        </DashboardLayout>
    );
}