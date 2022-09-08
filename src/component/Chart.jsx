
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ArcElement
  } from 'chart.js';

  import { Doughnut, Line } from 'react-chartjs-2';
  

  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ArcElement
  );


  

const ChartComponent = ({type, viewDate, viewValue, count}) => {



  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Total Sales',
        color: 'white',
        font: {
          size: 10,
          family: 'Nunito'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
    } 
  };



  const labels = viewDate;

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: viewValue,
        borderColor: '#FF5403',
        backgroundColor: 'rgba(255, 84, 3, 0.2)',
      },
    ],
  };

  const douData = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: count,
        backgroundColor: [
          '#599EEA',
          '#844FF6',
          '#0FB77A',
          '#FAB70A',
          '#F09468',
        ],
        borderColor: [
          '#599EEA',
          '#844FF6',
          '#0FB77A',
          '#FAB70A',
          '#F09468',
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <>
      {
        type === 'line' && <Line 
          options={options} 
          data={data} 
          />
      }

{
        type === 'doughnut' && <Doughnut data={douData} />
      }
    </>
    
  )
}

export default ChartComponent 