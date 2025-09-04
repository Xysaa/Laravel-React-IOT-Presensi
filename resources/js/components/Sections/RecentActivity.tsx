import { Calendar, FileText, CheckCircle, XCircle } from "lucide-react";

type Activity = {
  type: "absen" | "tugas" | "selesai" | "terlambat";
  text: string;
  time: string;
};

const typeConfig = {
  absen: { icon: Calendar, color: "bg-green-500", label: "Absen Masuk" },
  tugas: { icon: FileText, color: "bg-blue-500", label: "Tugas Baru" },
  selesai: { icon: CheckCircle, color: "bg-purple-500", label: "Tugas Selesai" },
  terlambat: { icon: XCircle, color: "bg-orange-500", label: "Terlambat" },
};

export default function RecentActivity({ activities }: { activities: Activity[] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h3 className="font-semibold text-lg mb-4">Aktivitas Terbaru</h3>
      <ul className="space-y-4">
        {activities.map((act, idx) => {
          const config = typeConfig[act.type];
          const Icon = config.icon;

          return (
            <li key={idx} className="flex items-start justify-between">
            <div className="flex items-start space-x-3 flex-1">
              {/* Icon */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${config.color} text-white`}
              >
                <Icon size={18} />
              </div>

              {/* Text */}
              <div>
                <p className="font-medium">{config.label}</p>
                <p className="text-sm text-gray-500">{act.text}</p>
              </div>
            </div>

            {/* Time */}
            <span className="text-sm text-gray-400 self-start">{act.time}</span>
          </li>

          );
        })}
      </ul>
    </div>
  );
}
