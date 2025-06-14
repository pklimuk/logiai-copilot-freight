
import { MoreHorizontal } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Jan', value: 150 },
  { name: 'Feb', value: 180 },
  { name: 'Mar', value: 220 },
  { name: 'Apr', value: 250 },
  { name: 'May', value: 280 },
  { name: 'Jun', value: 320 },
];

const DashboardChart = () => {
  return (
    <div className="bg-brand-card backdrop-blur-sm border border-brand-green/20 rounded-2xl p-8 animate-scale-in">
      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-brand-light text-lg font-bold tracking-tight">
            Card title
          </h3>
          <MoreHorizontal className="w-6 h-6 text-brand-light" />
        </div>

        {/* Metrics */}
        <div className="flex items-baseline gap-2">
          <span className="text-brand-light text-3xl font-bold tracking-tight">
            12.4k
          </span>
          <span className="text-brand-green text-sm font-medium">
            +10.7% last mo
          </span>
        </div>

        {/* Chart */}
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'rgba(183, 227, 188, 0.6)', fontSize: 13 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'rgba(183, 227, 188, 0.6)', fontSize: 13 }}
                domain={[0, 400]}
                ticks={[0, 100, 200, 300, 400]}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#14AE5C" 
                strokeWidth={2}
                dot={false}
                fill="url(#gradient)"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14AE5C" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#072B12" stopOpacity={0.6} />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
