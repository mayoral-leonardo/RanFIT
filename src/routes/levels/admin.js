import Dashboard from "../../views/Dashboard/Dashboard";
import { routes } from "../routes";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const users = {
  path: '/users',
  name: 'Usuários',
  icon: PeopleAltIcon,
  component: Dashboard,
}

export const adminRoutes = [
  ...routes,
  users
]