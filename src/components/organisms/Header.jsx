import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { LOGOUT, TITLE } from "Constants/content"

const DivPrimary = styled("div")(() => ({
  flexGrow: 1
}));

const CustomTypography = styled(Typography)(() => ({
  flexGrow: 1
}));

const Header = ({ onClickLogout }) => {
  return (
    <DivPrimary>
      <AppBar position="static">
        <Toolbar>
          <CustomTypography variant="h6">{TITLE}</CustomTypography>
          <Button color="inherit" onClick={() => {onClickLogout()}}>{LOGOUT}</Button>
        </Toolbar>
      </AppBar>
    </DivPrimary>
  );
}

export default Header
