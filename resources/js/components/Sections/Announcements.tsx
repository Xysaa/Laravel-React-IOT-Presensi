type Announcement = {
  title: string;
  date: string;
  text: string;
};

export default function Announcements({ announcements }: { announcements: Announcement[] }) {
  // warna untuk garis samping, biar beda-beda kayak di contoh
  const colors = ["border-purple-500", "border-orange-400", "border-green-500"];

  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Pengumuman Terbaru</h3>
        <a href="#" className="text-sm text-purple-600 hover:underline">
          Lihat Semua
        </a>
      </div>

      {/* List */}
      <ul className="space-y-4">
        {announcements.map((item, idx) => (
          <li
            key={idx}
            className={`pl-3 border-l-4 ${colors[idx % colors.length]}`}
          >
            <p className="font-semibold text-gray-800">{item.title}</p>
            <p className="text-gray-600 text-sm">{item.text}</p>
            <span className="text-gray-400 text-xs">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
