import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { Line } from '@ant-design/plots';
import Header from "../../components/Header/Header"

const testData = [
  {
    mês: 'Janeiro',
    valor: 3,
  },
  {
    mês: 'Fevereiro',
    valor: 1,
  },
  {
    mês: 'Março',
    valor: 4,
  },
  {
    mês: 'Abril',
    valor: 4.5,
  },
  {
    mês: 'Maio',
    valor: 3,
  },
  {
    mês: 'Junho',
    valor: 4.6,
  },
];

export default function Dashboard() {
  const [data, setData] = useState()

  useEffect(() => {
    setData(testData)
  },[])

  const LineChart = () => {
    const config = {
      data,
      xField: 'mês',
      yField: 'valor',
      label: {},
      point: {
        size: 5,
        shape: 'diamond',
        style: {
          fill: 'white',
          stroke: '#5B8FF9',
          lineWidth: 2,
        },
      },
      tooltip: {
        showMarkers: false,
      },
      state: {
        active: {
          style: {
            shadowBlur: 4,
            stroke: '#000',
            fill: 'red',
          },
        },
      },
      interactions: [
        {
          type: 'marker-active',
        },
      ],
    };
    return <Line {...config} />;
  };

  return (
    <Box padding="20px">
      <Header
        title="Dashboard"
        subtitle="Acompanhe aqui os dados dos exercícios"
      />

      {data && data.length > 0 &&
        <Box width="95%" padding="20px">
          <LineChart />
        </Box>
      }
    </Box>
  )
}