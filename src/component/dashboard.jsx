import  { useEffect, useState, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

import data from '../dashboard.json'; // Import the JSON file
import './dashboard.css';

Chart.register(...registerables);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [variable, setVariable] = useState('category');
  const [darkTheme, setDarkTheme] = useState(false);
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const doughnutChartRef = useRef(null);


  useEffect(() => {
    setDashboardData(data);
  }, []);

  const processData = (data, variable) => {
    const processedData = {};

    data.forEach(record => {
      let key;
      if (variable === 'category') {
        key = record?.alert?.category;
      } else if (variable === 'severity') {
        key = record?.alert?.severity;
      } else if (variable === 'timeSeries') {
        key = new Date(record?.timestamp).toLocaleDateString();
      }

      processedData[key] = (processedData[key] || 0) + 1;
    });

    return processedData;
  };

  const processedData = processData(dashboardData, variable);

  const chartData = {
    labels: Object.keys(processedData),
    datasets: [{
      label: variable === 'category' ? 'Category Count' : variable === 'severity' ? 'Severity Count' : 'Events Over Time',
      data: Object.values(processedData),
      backgroundColor: darkTheme ? ['#4CAF50', '#2196F3', '#FFC107', '#FF5722', '#9C27B0'] : ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'],
      borderColor: darkTheme ? ['#4CAF50', '#2196F3', '#FFC107', '#FF5722', '#9C27B0'] : ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
      borderWidth: 1
    }]
  };

  useEffect(() => {
    if (barChartRef.current) barChartRef.current.destroy();
    if (pieChartRef.current) pieChartRef.current.destroy();
    if (lineChartRef.current) lineChartRef.current.destroy();
    if (doughnutChartRef.current) doughnutChartRef.current.destroy();
    

    barChartRef.current = new Chart(document.getElementById('barChart').getContext('2d'), {
      type: 'bar',
      data: chartData,
      options: { responsive: true }
    });

    pieChartRef.current = new Chart(document.getElementById('pieChart').getContext('2d'), {
      type: 'pie',
      data: chartData,
      options: { responsive: true }
    });

    lineChartRef.current = new Chart(document.getElementById('lineChart').getContext('2d'), {
      type: 'line',
      data: chartData,
      options: { responsive: true }
    });

    doughnutChartRef.current = new Chart(document.getElementById('doughnutChart').getContext('2d'), {
      type: 'doughnut',
      data: chartData,
      options: { responsive: true }
    });


    return () => {
      if (barChartRef.current) barChartRef.current.destroy();
      if (pieChartRef.current) pieChartRef.current.destroy();
      if (lineChartRef.current) lineChartRef.current.destroy();
      if (doughnutChartRef.current) doughnutChartRef.current.destroy();
     
    };
  }, [chartData, darkTheme]);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div className={`dashboard-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
        <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={darkTheme} />
        <span className="slider"></span>
      </label>
      <div className="dashboard-container">
        <h2 className="dashboard-title">Dashboard</h2>

        <div className="dashboard-select-container">
          <select className="dashboard-select" onChange={(e) => setVariable(e.target.value)} value={variable}>
            <option value="category">Category</option>
            <option value="severity">Severity</option>
            <option value="timeSeries">Time Series</option>
          </select>
        </div>

        <div className="dashboard-charts">
          <div className="dashboard-chart">
            <h4>Bar Chart</h4>
            <canvas id="barChart"></canvas>
          </div>
          <div className="dashboard-chart">
            <h4>Pie Chart</h4>
            <canvas id="pieChart"></canvas>
          </div>
          <div className="dashboard-chart">
            <h4>Line Chart</h4>
            <canvas id="lineChart"></canvas>
          </div>
          <div className="dashboard-chart">
            <h4>Doughnut Chart</h4>
            <canvas id="doughnutChart"></canvas>
          </div>
         
        </div>
      </div>

      
    </div>
  );
};

export default Dashboard;
