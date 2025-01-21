import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const defaultOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

interface BaseChartProps {
  className?: string;
}

interface LineChartProps extends BaseChartProps {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
}

interface BarChartProps extends BaseChartProps {
  data: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

export const LineChart = ({ data, options, className }: LineChartProps) => {
  const chartOptions = { ...defaultOptions, ...options } as ChartOptions<'line'>;
  
  return (
    <div className={`w-full h-[300px] ${className || ''}`}>
      <Line data={data} options={chartOptions} />
    </div>
  );
};

export const BarChart = ({ data, options, className }: BarChartProps) => {
  const chartOptions = { ...defaultOptions, ...options } as ChartOptions<'bar'>;
  
  return (
    <div className={`w-full h-[300px] ${className || ''}`}>
      <Bar data={data} options={chartOptions} />
    </div>
  );
};