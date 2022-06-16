import React from "react"
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

import WalletCreateMolecule from "Components/molecules/WalletCreateMolecule"

const MainBox = styled(Box)(() => ({
  backgroundColor: grey[100],
  flexGrow: 1,
  height: "100vh",
  overflow: "auto"
}));

const CustomPaper = styled(Paper)(() => ({
  p: 2,
  display: "flex",
  flexDirection: "column",
  height: 500
}));

const WalletCreate = () => {
  return (
    <MainBox component="main">
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <CustomPaper>
              <WalletCreateMolecule />
            </CustomPaper>
          </Grid>
        </Grid>
      </Container>
    </MainBox>
  )
}

export default WalletCreate
