import React from "react"
import { Space } from 'antd';

function translateExerciseTypes (type) {
  if (!type) return "N/A"
  const translatedTypes = {
    "bicycle": "Bicicleta",
    "treadmill": "Esteira"
  }

  return translatedTypes[type]
}

export const columns = [
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type',
    render: (type) => translateExerciseTypes(type),
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Duração',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Distância em metros',
    dataIndex: 'distance',
    key: 'distance',
  },
  {
    title: 'Pontos',
    dataIndex: 'pointsPerExercise',
    key: 'pointsPerExercise',
  },
  {
    title: 'Ações',
    key: 'action',
    render: (_, row) => (
      <Space size="middle" onClick={() => console.log(row)}>
        Deletar
      </Space>
    ),
  },
];
