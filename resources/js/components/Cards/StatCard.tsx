export default function StatCard({ title, value, subText, icon, color }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow flex items-center justify-between">
      <div>
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p className="text-2xl font-bold">{value}</p>
        <span className="text-xs text-gray-400">{subText}</span>
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        {icon}
      </div>
    </div>
  );
}
