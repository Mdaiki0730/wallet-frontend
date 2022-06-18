import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Title from "Components/atoms/Title";
import CustomDialog from "Components/atoms/CustomDialog";

import { useAuth0 } from "@auth0/auth0-react"
const WalletInfo = ({ wallet }) => {
  if (wallet === undefined) {
    return null
  }

  const { getAccessTokenSilently } = useAuth0()
  const [ open, setOpen ] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const deleteWallet = async () => {
    const token = await getAccessTokenSilently()
    const response = await fetch(`${process.env.WALLET_API_DOMAIN}/v1/wallets`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    window.location.reload()
  }
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, height: "100%" }}>
        <Grid sx={{ height: "20%" }}>
          <Title>My Wallet</Title>
        </Grid>
        <Grid sx={{ height: "30%" }}>
          <Typography color="text.secondary">
            address: {wallet.blockchain_address}
          </Typography>
        </Grid>
        <Grid sx={{ height: "30%", textAlign: "center" }}>
          <Typography component="p" variant="h4">
            {`${wallet.value}G`}
          </Typography>
        </Grid>
        <Grid sx={{ height: "20%", textAlign: "center" }}>
          <Button color="secondary" variant="contained" onClick={handleClickOpen}>delete wallet</Button>
        </Grid>
      </Container>
      <CustomDialog
        open={open}
        handleClose={handleClose}
        title={"This operation cannot be undone"}
        content={"You'll lost all of your assets, do you really want to delete it?"}
        onClickOK={deleteWallet}
      />
    </>
  );
}

export default WalletInfo
