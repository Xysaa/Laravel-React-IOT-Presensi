import { usePage } from "@inertiajs/react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import StatCard from "../../components/Cards/StatCard";
import AttendanceChart from "../../components/Cards/AttendanceChart";
import TaskCompletionChart from "../../components/Cards/TaskCompletionChart";
import RecentActivity from "../../components/Sections/RecentActivity";
import Announcements from "../../components/Sections/Announcements";
import { CheckCircle, Clock, ClipboardList, AlertCircle } from "lucide-react";

// ====== Definisi tipe data dari Laravel ======
type Stats = {
  attendance: string;
  tasks_completed: string;
  on_time: string;
  late: number;
};

type Activity = {
  type: string;
  text: string;
  time: string;
};

type Announcement = {
  title: string;
  date: string;
  text: string;
};

type AttendanceData = {
  day: string;
  hadir: number;
  terlambat: number;
};

type TaskData = {
  week: string;
  selesai: number;
};

type PageProps = {
  stats: Stats;
  activities: Activity[];
  announcements: Announcement[];
  attendanceChart: AttendanceData[];
  taskChart: TaskData[];
};

// ====== Component Dashboard ======
export default function DashboardPage() {
  const { stats, activities, announcements, attendanceChart, taskChart } = usePage<PageProps>().props;

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Kehadiran"
          value={stats.attendance}
          subText="Naik 2.5% dari bulan lalu"
          icon={<CheckCircle />}
          color="bg-indigo-100 text-indigo-600"
        />
        <StatCard
          title="Tugas Selesai"
          value={stats.tasks_completed}
          subText="Turun 1.5% dari bulan lalu"
          icon={<ClipboardList />}
          color="bg-green-100 text-green-600"
        />
        <StatCard
          title="Tepat Waktu"
          value={stats.on_time}
          subText="Naik 5% dari bulan lalu"
          icon={<Clock />}
          color="bg-blue-100 text-blue-600"
        />
        <StatCard
          title="Terlambat"
          value={stats.late.toString()}
          subText=""
          icon={<AlertCircle />}
          color="bg-red-100 text-red-600"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <AttendanceChart data={attendanceChart} />
        <TaskCompletionChart data={taskChart} />
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentActivity activities={activities} />
        <Announcements announcements={announcements} />
      </div>
    </DashboardLayout>
  );
}
