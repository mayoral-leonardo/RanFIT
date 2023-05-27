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
    dataIndex: 'score',
    key: 'score',
    render: (_, row) => <span>{row.score} pontos</span>
  },
];
