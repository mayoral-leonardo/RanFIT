import React, { useState } from "react"
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, Typography } from "@mui/material"
import RunCircleIcon from '@mui/icons-material/RunCircle';
import PieChartIcon from '@mui/icons-material/PieChart';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Link } from "react-router-dom"

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "#FFFFFF",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "#202A44 !important"
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
          color: "#FFFFFF !important"
        },
        "& .pro-menu-item.active": {
          color: "#00FFFF !important"
        },
      }}
    >

      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={<MenuOutlinedIcon />}
            style={{
              margin: "10px 0 20px 0",
              color: "#FFFFFF",
            }}
          />

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <RunCircleIcon
                  sx={{
                    fontSize: "100px",
                    cursor: "pointer",
                    borderRadius: "50%"
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  color="#FFFFFF"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Lorem
                </Typography>
                <Typography variant="h6" color="#FFFFFF">
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<PieChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Classificação"
              to="/leaderboards"
              icon={<LeaderboardIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          </Box>
        </Menu>
      </ProSidebar>

    </Box>
  )
}