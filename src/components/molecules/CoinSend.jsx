import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useAuth0 } from "@auth0/auth0-react"

import Title from "Components/atoms/Title";

const CoinSend = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [ blockchainAddress, setBlockchainAddress ] = useState("")
  const [ value, setValue ] = useState(0)

  const sendCoin = async (blockchainAddress, value) => {
    const parsedValue = parseFloat(value)
    if (isNaN(parsedValue)) {
      alert("please enter value")
      return
    }
    let confirm_result = confirm(`Are you sure you want to send ${value}G to ${blockchainAddress}?`);
    if (confirm_result !== true) {
      alert("Canceled")
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
      alert("failed to send")
      throw new Error(response.statusText)
    }
    alert("complete send. *It will take some time to reflect")
    window.location.reload()
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, height: "100%" }}>
        <Grid sx={{ height: "20%" }}>
          <Title>Send Coin</Title>
        </Grid>
        <Grid sx={{ height: "30%", textAlign: "center" }}>
          <TextField
            id="filled-basic"
            label="BlockchainAddress"
            variant="filled"
            onChange={(e) => setBlockchainAddress(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid sx={{ height: "30%", textAlign: "center" }}>
          <TextField
            id="filled-basic"
            label="Value"
            variant="filled"
            onChange={(e) => setValue(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid sx={{ height: "20%", textAlign: "center" }}>
          <Button color="primary" variant="contained" onClick={() => sendCoin(blockchainAddress, value)}>send</Button>
        </Grid>
      </Container>
    </>
  );
}

export default CoinSend
