import React from "react";
import { useNavigate  } from 'react-router-dom'
import { Box, Button } from "@mui/material";
import TableComponent from "../../components/TableComponent/TableComponent";
import { columns } from './usersColumns';
import Header from './../../components/Header/Header';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function Users() {
  const navigate = useNavigate()
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