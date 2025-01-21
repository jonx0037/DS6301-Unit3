import { BarChart, LineChart } from './ChartComponent';
import { ChartData } from 'chart.js';

export const PositionComparison = () => {
  // Sample data for position comparison
  const agilityData: ChartData<'bar'> = {
    labels: ['Left Forward', 'Left Midfielder'],
    datasets: [
      {
        label: 'Average Agility',
        data: [78, 75], // Sample values
        backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const accelerationData: ChartData<'line'> = {
    labels: ['60-69', '70-74', '75-79', '80-84', '85-89', '90+'],
    datasets: [
      {
        label: 'Left Forward',
        data: [5, 15, 25, 30, 20, 5], // Sample distribution
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        tension: 0.3,
      },
      {
        label: 'Left Midfielder',
        data: [8, 20, 35, 25, 10, 2], // Sample distribution
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Average Agility Comparison</h3>
        <BarChart data={agilityData} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Acceleration Distribution</h3>
        <LineChart data={accelerationData} />
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Statistical Insights</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Left Forwards show higher average agility</li>
          <li>Distribution patterns reveal position-specific traits</li>
          <li>Significant differences in acceleration ranges</li>
        </ul>
      </div>
    </div>
  );
};