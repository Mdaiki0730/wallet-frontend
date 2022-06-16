import React, { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

import WalletTemplate from "Components/templates/Wallet"

const WalletPage = () => {
  const { logout, getAccessTokenSilently } = useAuth0()
  const [ hasWallet, setHasWallet ] = useState(false)
  const [ wallet, setWallet ] = useState()

  useEffect(() => {
    const getWallet = async () => {
      const token = await getAccessTokenSilently()
      console.log(`${process.env.WALLET_API_DOMAIN}/v1/wallets`)
      const response = await fetch(`${process.env.WALLET_API_DOMAIN}/v1/wallets`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      if (!response.ok) {
        setHasWallet(false);
        console.log(hasWallet)
        throw new Error(response.statusText)
      }
      const body = await response.json()
      setHasWallet(true);
      setWallet(body)
    };
    getWallet();
  }, []);

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
      setHasWallet(false);
      throw new Error(response.statusText)
    }
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
      setHasWallet(false);
      throw new Error(response.statusText)
    }
    const body = await response.json()
    return body
  }
  const sendCoin = async () => {
    const token = await getAccessTokenSilently()
    const response = await fetch(`${process.env.WALLET_API_DOMAIN}/v1/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({"recipient_blockchain_address":"", "value":1})
    })
    if (!response.ok) {
      setHasWallet(false);
      throw new Error(response.statusText)
    }
    const body = await response.json()
    return body
  }

  return (
    <>
      <WalletTemplate
        hasWallet={hasWallet}
        wallet={wallet}
        logout={() => logout({ returnTo: window.location.origin })}
        createWallet={() => createWallet()}
        deleteWallet={() => deleteWallet()}
        sendCoin={() => sendCoin()}
      />
    </>
  )
};

export default WalletPage;
