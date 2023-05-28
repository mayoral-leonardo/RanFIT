import React, {useState, useEffect} from "react";
import { useNavigate  } from 'react-router-dom'
import { Box, Button } from "@mui/material";
import TableComponent from "../../components/TableComponent/TableComponent";
import { columns } from './exercisesColumns';
import Header from './../../components/Header/Header';
import exercises from "./consumer";

export default function Exercises() {
  const navigate = useNavigate()

  const [data, setData] = useState()

  useEffect(() => {
    async function getExercises () {
      try {
        const response = await exercises.getAll()
        if (response.exercises) setData(response.exercises)
      } catch (error) {
        console.error(error)
      }
    }
    getExercises()
  },[])

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