import React from "react"
import { Table } from 'antd';
import { Box } from "@mui/material";

export default function TableComponent({ columns, data }) {
  return (
    <Box
      width="100%"
      height="100%"
      marginTop="10px"
    >
      <Table
        columns={columns}
        dataSource={data}
      />
    </Box>
  )
}