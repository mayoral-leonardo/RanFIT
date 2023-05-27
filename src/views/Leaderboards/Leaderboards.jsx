import React from "react";
import { Box } from "@mui/material";
import TableComponent from "../../components/TableComponent/TableComponent";
import { columns } from './leaderboardsColumns';
import Header from './../../components/Header/Header';

const data = [
  {
    position: '1',
    name: "Primeiro Colocado",
    score: '1000',
  },
  {
    position: '2',
    name: "Segundo Colocado",
    score: '950',
  },
];

export default function Leaderboards() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      padding="20px"
    >
      <Header
        title="Classificação"
        subtitle="Pontuação dos usuários"
      />

      <TableComponent
        columns={columns}
        data={data}
      />
    </Box>
  )
}