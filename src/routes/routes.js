import React from "react"
import Dashboard from '../views/Dashboard/Dashboard';
import Leaderboards from '../views/Leaderboards/Leaderboards';
import PieChartIcon from '@mui/icons-material/PieChart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
  icon: PieChartIcon,
  sidebar: true,
  component: <Dashboard/>
}

const leaderBoards = {
  path: '/leaderboards',
  name: 'Classificação',
  icon: LeaderboardIcon,
  sidebar: true,
  component: <Leaderboards/>
}

export const routes = [
  dashboard,
  leaderBoards,
]