import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { Line } from '@ant-design/plots';
import Header from "../../components/Header/Header"

const testData = [
  {
    year: '1991',
    value: 3,
  },
  {
    year: '1992',
    value: 4,
  },
  {
    year: '1993',
    value: 3.5,
  },
  {
    year: '1994',
    value: 5,
  },
  {
    year: '1995',
    value: 4.9,
  },
  {
    year: '1996',
    value: 6,
  },
  {
    year: '1997',
    value: 7,
  },
  {
    year: '1998',
    value: 9,
  },
  {
    year: '1999',
    value: 13,
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
      xField: 'year',
      yField: 'value',
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