import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const DivPrimary = styled("div")(() => ({
  flexGrow: 1
}));

const CustomTypography = styled(Typography)(() => ({
  flexGrow: 1
}));

const Header = () => {
  return (
    <DivPrimary>
      <AppBar position="static">
        <Toolbar>
          <CustomTypography variant="h6">
            GariCoinWallet
          </CustomTypography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </DivPrimary>
  );
}

export default Header
