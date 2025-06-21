import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import {
  MapPin,
  BarChart3,
  Clock,
  Activity,
  Settings2,
} from "lucide-react";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export default function LocationDetails({ selectedLocation }) {
  if (!selectedLocation) {
    return (
      <div className="bg-[#FAFBFD] p-6 border-gray-200 border-t md:border-t-0 md:border-l overflow-y-auto">
        <p className="text-gray-400 italic">Select a location to see details</p>
      </div>
    );
  }

  const { visits = [], resources = [] } = selectedLocation.chartData || {};

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Visits",
        data: visits,
        backgroundColor: "#3b82f6",
        borderRadius: 6,
      },
    ],
  };

  const pieData = {
    labels: ["Traffic", "Power Usage", "Alerts"],
    datasets: [
      {
        label: "Resources",
        data: resources,
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-6 bg-[#FAFBFD] p-6 border-gray-200 border-t md:border-t-0 md:border-l overflow-y-auto text-gray-700">
      
      {/* العنوان والوصف */}
      <div>
        <h3 className="flex items-center gap-2 font-semibold text-gray-800 text-xl">
          <MapPin className="w-5 h-5 text-blue-500" /> {selectedLocation.name}
        </h3>
        <p className="mt-1 text-gray-500 text-sm">{selectedLocation.description}</p>
      </div>

      {/* تفاصيل عامة */}
      <div className="gap-4 grid grid-cols-1 text-sm">
        <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-xl">
          <div className="flex items-center gap-2 mb-1 font-semibold text-gray-500 text-xs uppercase tracking-wide">
            <Activity className="w-4 h-4 text-blue-400" />
            Status
          </div>
          <div className="font-medium text-green-600 text-sm">Active</div>
        </div>

        <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-xl">
          <div className="flex items-center gap-2 mb-1 font-semibold text-gray-500 text-xs uppercase tracking-wide">
            <Clock className="w-4 h-4 text-yellow-400" />
            Last Updated
          </div>
          <div className="text-sm">2 days ago</div>
        </div>

        <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-xl">
          <div className="flex items-center gap-2 mb-1 font-semibold text-gray-500 text-xs uppercase tracking-wide">
            <BarChart3 className="w-4 h-4 text-purple-400" />
            Weekly Visits
          </div>
          <div className="font-medium text-gray-700 text-sm">
            {visits.reduce((a, b) => a + b, 0)}
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-xl">
        <div className="flex items-center gap-2 mb-2 font-semibold text-gray-600 text-sm">
          <BarChart3 className="w-4 h-4 text-blue-500" />
          Weekly Activity
        </div>
        <Bar
          data={barData}
          options={{ responsive: true, plugins: { legend: { display: false } } }}
        />
      </div>

      {/* Pie Chart */}
      <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-xl">
        <div className="flex items-center gap-2 mb-2 font-semibold text-gray-600 text-sm">
          <Settings2 className="w-4 h-4 text-green-500" />
          Resource Usage
        </div>
        <Pie data={pieData} />
      </div>
    </div>
  );
}
