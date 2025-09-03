import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type AttendanceData = {
  day: string;
  hadir: number;
  terlambat: number;
};

export default function AttendanceChart({ data }: { data: AttendanceData[] }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <h3 className="font-semibold mb-2">Statistik Kehadiran</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="hadir" fill="#4f46e5" />
          <Bar dataKey="terlambat" fill="#f59e0b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
