import { BarChart, LineChart } from './ChartComponent';
import { ChartData } from 'chart.js';

export const PlayerDevelopment = () => {
  // Age group distribution data
  const ageGroupData: ChartData<'bar'> = {
    labels: ['Youth (≤20)', 'Rising (21-25)', 'Peak (26-30)', 'Veteran (>30)'],
    datasets: [
      {
        label: 'Player Count',
        data: [150, 450, 380, 220], // Sample distribution
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Skill progression by age data
  const skillProgressionData: ChartData<'line'> = {
    labels: ['18-20', '21-23', '24-26', '27-29', '30-32', '33+'],
    datasets: [
      {
        label: 'Average Overall Rating',
        data: [72, 76, 79, 81, 78, 75], // Sample progression
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        tension: 0.3,
      },
      {
        label: 'Average Potential',
        data: [82, 84, 83, 81, 78, 75], // Sample potential curve
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.1)',
        tension: 0.3,
      },
    ],
  };

  // Skill tier distribution data
  const skillTierData: ChartData<'bar'> = {
    labels: ['Developing (<75)', 'Professional (75-79)', 'Elite (80-84)', 'World Class (≥85)'],
    datasets: [
      {
        label: 'Player Count',
        data: [300, 400, 200, 100], // Sample distribution
        backgroundColor: [
          'rgba(153, 102, 255, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Age Group Distribution</h3>
        <BarChart data={ageGroupData} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Skill Progression by Age</h3>
        <LineChart data={skillProgressionData} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Skill Tier Distribution</h3>
        <BarChart data={skillTierData} />
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Development Insights</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Peak performance typically occurs between ages 26-30</li>
          <li>Significant skill development in early career (21-25)</li>
          <li>Gradual decline in ratings after age 30</li>
          <li>Most players fall in the Professional tier (75-79 rating)</li>
        </ul>
      </div>
    </div>
  );
};