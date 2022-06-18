import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import Slide from "@mui/material/Slide"
import { useAuth0 } from "@auth0/auth0-react"

import Title from "Components/atoms/Title";
import CustomDialog from "Components/atoms/CustomDialog";

const TransitionDown = (props) => {
  return <Slide {...props} direction="down" />
}

const CoinSend = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [ blockchainAddress, setBlockchainAddress ] = useState("")
  const [ value, setValue ] = useState(0)
  const [ open, setOpen ] = useState(false);
  const [ alertInfo, setAlertInfo ] = useState({
    open: false,
    message: "",
    severity: "info"
  });

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleAlertClose = () => {
    if (alertInfo.severity == "success") {
      window.location.reload()
    }
    setAlertInfo({
      open: false,
      message: "",
      severity: "info"
    })
  }

  const sendCoin = async (blockchainAddress, value) => {
    const parsedValue = parseFloat(value)
    if (isNaN(parsedValue) || parsedValue == 0) {
      setAlertInfo({
        open: true,
        message: "please enter value",
        severity: "error"
      })
      setOpen(false)
      return
    }
    if (blockchainAddress.length !== 34) {
      setAlertInfo({
        open: true,
        message: "please enter valid blockchain address",
        severity: "error"
      })
      setOpen(false)
      return
    }
    const token = await getAccessTokenSilently()
    const response = await fetch(`${process.env.WALLET_API_DOMAIN}/v1/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({"recipient_blockchain_address":String(blockchainAddress), "value":parsedValue})
    })
    if (!response.ok) {
      setAlertInfo({
        open: true,
        message: "failed to send",
        severity: "error"
      })
      setOpen(false)
      throw new Error(response.statusText)
    }
    setAlertInfo({
      open: true,
      message: "complete send. *It will take some time to reflect",
      severity: "success"
    })
    setOpen(false)
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, height: "100%" }}>
        <Grid sx={{ height: "20%" }}>
          <Title>Send Coin</Title>
        </Grid>
        <Grid sx={{ height: "30%", textAlign: "center" }}>
          <TextField
            required
            id="filled-basic"
            label="BlockchainAddress"
            variant="filled"
            onChange={(e) => setBlockchainAddress(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid sx={{ height: "30%", textAlign: "center" }}>
          <TextField
            required
            id="filled-basic"
            label="Value"
            variant="filled"
            onChange={(e) => setValue(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid sx={{ height: "20%", textAlign: "center" }}>
          <Button color="primary" variant="contained" onClick={handleClickOpen}>send</Button>
        </Grid>
      </Container>
      <CustomDialog
        open={open}
        handleClose={handleClose}
        title={"This operation cannot be undone"}
        content={`Are you sure you want to send ${value}G to ${blockchainAddress}?`}
        onClickOK={() => sendCoin(blockchainAddress, value)}
      />
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={alertInfo.open}
        onClose={handleAlertClose}
        TransitionComponent={TransitionDown}
      >
        <Alert onClose={handleAlertClose} severity={alertInfo.severity}>
          {alertInfo.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default CoinSend
