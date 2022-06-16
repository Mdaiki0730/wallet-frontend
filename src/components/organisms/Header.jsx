import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react"

import { LOGOUT, TITLE } from "Constants/content"

const CustomTypography = styled(Typography)(() => ({
  flexGrow: 1
}));

const Header = () => {
  const { logout } = useAuth0()
  return (
    <AppBar position="absolute">
      <Toolbar>
        <CustomTypography component="h1" variant="h6" color="inherit" noWrap>{TITLE}</CustomTypography>
        <Button color="inherit" onClick={() => {logout()}}>{LOGOUT}</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header
