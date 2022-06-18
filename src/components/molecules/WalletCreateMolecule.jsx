import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react"

// import Title from "Components/atoms/Title";
//
// const CustomTitle = styled(Title)(() => ({
//   height: "50%",
// }));

const WalletCreateMolecule = () => {
  const { getAccessTokenSilently } = useAuth0()

  const createWallet = async () => {
    const token = await getAccessTokenSilently()
    const response = await fetch(`${process.env.WALLET_API_DOMAIN}/v1/wallets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    alert("complete create wallet");
    window.location.reload()
  }
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, height: "100%" }}>
        <Grid sx={{ height: "70%", textAlign: "center" }}>
          <Typography variant="h2">Please Create Your Wallet</Typography>
        </Grid>
        <Grid sx={{ height: "30%", textAlign: "center" }}>
          <Button color="primary" variant="contained" onClick={() => createWallet()}>create</Button>
        </Grid>
      </Container>
    </>
  );
}

export default WalletCreateMolecule
