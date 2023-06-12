import React from "react"
import { translateLevel } from './../../utils/functions';

export const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (name) => <span>{name}</span>,
  },
  {
    title: 'Nível',
    dataIndex: 'level',
    key: 'level',
    render: (level) => <span>{translateLevel(level)}</span>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (email) => <span>{email}</span>,
  },
];
