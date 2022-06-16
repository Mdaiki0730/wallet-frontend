import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react"

import Title from "Components/atoms/Title";

const CoinSend = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [ blockchainAddress, setBlockchainAddress ] = useState("")
  const [ value, setValue ] = useState(0)

  const sendCoin = async (blockchainAddress, value) => {
    const parsedValue = parseFloat(value)
    if (isNaN(parsedValue)) {
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
      throw new Error(response.statusText)
    }
  }

  return (
    <>
      <Title>Send Coin</Title>
      <TextField id="filled-basic" label="BlockchainAddress" variant="filled" onChange={(e) => setBlockchainAddress(e.target.value)} />
      <TextField id="filled-basic" label="Value" variant="filled" onChange={(e) => setValue(e.target.value)} />
      <Button color="primary" onClick={() => sendCoin(blockchainAddress, value)}>send</Button>
    </>
  );
}

export default CoinSend
