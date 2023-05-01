import React from "react"
import { routes } from "../routes";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Users from "../../views/Users/Users";

const users = {
  path: '/users',
  name: 'Usuários',
  icon: PeopleAltIcon,
  sidebar: true,
  component: <Users/>
}

export const adminRoutes = [
  ...routes,
  users
]