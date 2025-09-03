import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-3">
      <input
        type="text"
        placeholder="Cari..."
        className="border rounded-lg px-3 py-2 w-1/3"
      />
      <div className="flex items-center gap-4">
        <Bell className="text-gray-500" />
        <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
          AS
        </div>
      </div>
    </header>
  );
}
