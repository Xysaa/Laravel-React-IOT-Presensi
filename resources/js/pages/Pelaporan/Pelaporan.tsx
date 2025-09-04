import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { Button } from "@/components/ui/button";

export default function Pelaporan() {
    return (
        <DashboardLayout>
        <div className="flex flex-col items-center min-h-screen bg-white">
            <h1 className="text-2xl font-bold mt-8 mb-6 text-center">PELAPORAN</h1>
            <div className="w-full max-w-3xl   rounded-none p-8 mb-10 relative">
                <div className="flex flex-col gap-2 text-black font-medium">
                    <div>NAMA :</div>
                    <div>NIM :</div>
                    <div>BUKTI :</div>
                    <div className="mt-6">KETERANGAN:</div>
                    <textarea className="w-full h-32 p-2 border border-gray-300 rounded-md resize-none" placeholder="Tulis keterangan di sini..."></textarea>
                </div>
               <Button>
                    KIRIM<br />LAPORAN
               </Button>
                    
                
            </div>
            <div className="text-center font-bold mb-4">KONTAK PENTING</div>
            <div className="flex gap-6 justify-center">
                <div className="w-20 h-20 bg-lime-400">ikon sosmed</div>
                <div className="w-20 h-20 bg-lime-400">ikon sosmed</div>
                <div className="w-20 h-20 bg-lime-400">ikon sosmed</div>
                <div className="w-20 h-20 bg-lime-400">ikon sosmed</div>
            </div>
        </div>
        </DashboardLayout>
    );
}