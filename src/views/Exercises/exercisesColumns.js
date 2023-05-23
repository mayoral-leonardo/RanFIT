import React from "react"
import { Space } from 'antd';


export const columns = [
  {
    title: 'Tipo',
    dataIndex: 'exerciseType',
    key: 'exerciseType',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Duração',
    dataIndex: 'duration',
    key: 'duration',
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
