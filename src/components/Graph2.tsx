import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registrar los componentes de Chart.js necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart: React.FC = () => {
    // Datos para el gráfico
    const data = {
        labels: ['7 PM', '8 PM', '9 PM', '10 PM'],
        datasets: [
            {
                label: 'Probabilidad de lluvia',
                data: [27, 44, 56, 88],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    };

    // Configuración del gráfico
    const options = {
        indexAxis: 'y', // Esto convierte el gráfico de barras a horizontal
        scales: {
            x: { // Cambié y -> x porque las escalas horizontales usan 'x' como referencia
                beginAtZero: true
            }
        }
    };

    return (
        <div style={{ width: "23.8em", height: "11em"}}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default HorizontalBarChart;
