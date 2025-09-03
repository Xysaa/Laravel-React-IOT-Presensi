import { Home, Bell, User, ClipboardList, FileText, BarChart, Users } from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: Home ,path: "/dashboard"},
  { label: "Pengumuman", icon: Bell ,path: "/pengumuman"},
  { label: "Data Diri", icon: User ,path: "/data-diri"},
  { label: "Riwayat Absen", icon: ClipboardList ,path: "/riwayat-absen"},
  { label: "Riwayat Tugas", icon: FileText ,path: "/riwayat-tugas"},
  { label: "Pelaporan", icon: BarChart ,path: "/pelaporan"},
  { label: "Kontak Tim", icon: Users ,path: "/kontak-tim"},
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-4 text-xl font-bold text-indigo-600">AbsensiKu</div>
      <nav className="mt-6">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.path}
            className="flex items-center gap-3 p-3 hover:bg-indigo-50 text-gray-700"
          >
            <item.icon size={20} />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
