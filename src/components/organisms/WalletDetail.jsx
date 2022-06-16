import React from "react"
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

import WalletInfo from "Components/molecules/WalletInfo"
import CoinSend from "Components/molecules/CoinSend"

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


const WalletDetail = ({ wallet }) => {
  return (
    <MainBox component="main">
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={8}>
            <CustomPaper>
              <WalletInfo wallet={wallet} />
            </CustomPaper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={4}>
            <CustomPaper>
              <CoinSend />
            </CustomPaper>
          </Grid>
        </Grid>
      </Container>
    </MainBox>
  )
}

export default WalletDetail
