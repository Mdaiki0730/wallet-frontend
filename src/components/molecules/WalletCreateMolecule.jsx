import React from "react";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react"

import Title from "Components/atoms/Title";

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
      <Title>Please Create Your Wallet</Title>
      <Button color="primary" onClick={() => createWallet()}>create</Button>
    </>
  );
}

export default WalletCreateMolecule
