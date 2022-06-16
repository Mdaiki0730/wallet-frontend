import React from "react"
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

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
  height: 240
}));


const WalletDetail = () => {
  return (
    <MainBox component="main">
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <CustomPaper>
            </CustomPaper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <CustomPaper>
            </CustomPaper>
          </Grid>
        </Grid>
      </Container>
    </MainBox>
  )
}

export default WalletDetail
