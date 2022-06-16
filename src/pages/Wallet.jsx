import React, { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

import WalletTemplate from "Components/templates/Wallet"

const WalletPage = () => {
  const { getAccessTokenSilently } = useAuth0()
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
        throw new Error(response.statusText)
      }
      const body = await response.json()
      setHasWallet(true);
      setWallet(body)
      console.log(body)
    };
    getWallet();
  }, []);

  return (
    <>
      <WalletTemplate
        hasWallet={hasWallet}
        wallet={wallet}
      />
    </>
  )
};

export default WalletPage;
