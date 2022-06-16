import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Title from "Components/atoms/Title";

import { useAuth0 } from "@auth0/auth0-react"
const WalletInfo = ({ wallet }) => {
  if (wallet === undefined) {
    return null
  }

  const { getAccessTokenSilently } = useAuth0()
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
  }
  return (
    <>
      <Title>My Wallet</Title>
      <Typography component="p" variant="h4">
        {`${wallet.value}G`}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {wallet.blockchain_address}
      </Typography>
      <Button color="primary" onClick={() => deleteWallet()}>delete wallet</Button>
    </>
  );
}

export default WalletInfo
