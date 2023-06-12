import React from "react"

export const columns = [
  {
    title: 'Posição',
    dataIndex: 'position',
    key: 'position',
    render: (_, row) => <span>{row.position}°</span>
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Pontuação',
    dataIndex: 'points',
    key: 'points',
    render: (_, row) => <span>{row.points} pontos</span>
  },
];
