import { Home, Bell, User, ClipboardList, FileText, BarChart, Users } from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: Home },
  { label: "Pengumuman", icon: Bell },
  { label: "Data Diri", icon: User },
  { label: "Riwayat Absen", icon: ClipboardList },
  { label: "Riwayat Tugas", icon: FileText },
  { label: "Pelaporan", icon: BarChart },
  { label: "Kontak Tim", icon: Users },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-4 text-xl font-bold text-indigo-600">AbsensiKu</div>
      <nav className="mt-6">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href="#"
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
