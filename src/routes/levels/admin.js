import React from "react"
import { routes } from "../routes";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Users from "../../views/Users/Users";
import UserForm from './../../views/Users/UserForm/UserForm';

const users = {
  path: '/users',
  name: 'Usuários',
  icon: PeopleAltIcon,
  sidebar: true,
  component: <Users/>
}

const userForm = {
  path: '/users/form',
  name: 'Usuários',
  component: <UserForm/>
}

export const adminRoutes = [
  ...routes,
  users,
  userForm
]