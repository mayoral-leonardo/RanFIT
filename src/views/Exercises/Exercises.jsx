import React from "react";
import { useNavigate  } from 'react-router-dom'
import { Box, Button } from "@mui/material";
import TableComponent from "../../components/TableComponent/TableComponent";
import { columns } from './exercisesColumns';
import Header from './../../components/Header/Header';

const data = [
  {
    key: '1',
    exerciseType: 'Esteira',
    date: "14/05/2023",
    duration: '1h',
  },
  {
    key: '2',
    exerciseType: 'Bicicleta',
    date: "14/05/2023",
    duration: '1h',
  }
];

export default function Exercises() {
  const navigate = useNavigate()
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      padding="20px"
    >
      <Header
        title="Exercícios"
        subtitle="Listagem dos exercícios registrados"
      />
      <div className="table_button_container">
        <Button
          type="primary"
          variant="contained"
          onClick={() => navigate('/exercises/registration')}
        >
          Novo Exercício
        </Button>
      </div>
      <TableComponent
        columns={columns}
        data={data}
      />
    </Box>
  )
}