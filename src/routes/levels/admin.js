import React from "react"
import Dashboard from "../../views/Dashboard/Dashboard";
import { routes } from "../routes";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DataTable from "../../views/DataTable/DataTable";

const users = {
  path: '/users',
  name: 'Usuários',
  icon: PeopleAltIcon,
  sidebar: true,
  component: <DataTable/>
}

export const adminRoutes = [
  ...routes,
  users
]