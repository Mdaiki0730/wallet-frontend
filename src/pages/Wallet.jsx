import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const WalletPage = () => {
  const { isAuthenticated } = useAuth0()
  console.log(isAuthenticated)
  return (
    <>
    </>
  )
};

export default WalletPage;
