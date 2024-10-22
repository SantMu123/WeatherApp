import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";

// Registrar los componentes de Chart.js necesarios
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const temperaturas = [-5, 2, 0, 3, -2, -1, 1];

const LineChart: React.FC = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Temperatura (°C)',
                data: temperaturas,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div style={{ width: "23.8em", height: "11em"}}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
