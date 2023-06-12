import React, {useState, useEffect} from "react";
import { Box } from "@mui/material";
import TableComponent from "../../components/TableComponent/TableComponent";
import { columns } from './leaderboardsColumns';
import Header from './../../components/Header/Header';
import leaderboards from "./consumer";

export default function Leaderboards() {
  const [data, setData] = useState()

  useEffect(() => {
    async function getLeaderboard () {
      try {
        const response = await leaderboards.getAll()
        if (response.ranking) setData(response.ranking)
      } catch (error) {
        console.error(error)
      }
    }

    getLeaderboard()
  },[])

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