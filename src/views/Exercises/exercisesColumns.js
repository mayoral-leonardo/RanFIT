import React from "react"
import { Space } from 'antd';


export const columns = [
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type',
    render: (text) => <a>{text}</a>,
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
