import Dashboard from '../views/Dashboard/Dashboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
  icon: PieChartIcon,
  component: Dashboard,
}

const leaderBoards = {
  path: '/leaderboards',
  name: 'Classificação',
  icon: LeaderboardIcon,
  component: Dashboard,
}

export const routes = [
  dashboard,
  leaderBoards,
]