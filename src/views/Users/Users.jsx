import React, {useState, useEffect} from "react";
import { useNavigate  } from 'react-router-dom'
import { Box, Button } from "@mui/material";
import TableComponent from "../../components/TableComponent/TableComponent";
import { columns } from './usersColumns';
import users from "./consumer";
import Header from './../../components/Header/Header';

export default function Users() {
  const navigate = useNavigate()

  const [data, setData] = useState()

  useEffect(() => {
    async function getUsers () {
      try {
        const response = await users.getAll()
        if (response.users) setData(response.users)
      } catch (error) {
        console.error(error)
      }
    }

    getUsers()
  },[])

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      padding="20px"
    >
      <Header
        title="Usuários"
        subtitle="Listagem dos usuários cadastrados"
      />
      <div className="table_button_container">
        <Button
          type="primary"
          variant="contained"
          onClick={() => navigate('/users/form')}
        >
          Novo usuário
        </Button>
      </div>
      <TableComponent
        columns={columns}
        data={data}
      />
    </Box>
  )
}