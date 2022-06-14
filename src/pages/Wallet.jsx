import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

import WalletTemplate from "Components/templates/wallet"

const WalletPage = () => {
  const { isAuthenticated } = useAuth0()
  console.log(isAuthenticated)
  const hasWallet = true
  return (
    <div>
      <WalletTemplate
        hasWallet={hasWallet}
      />
    </div>
  )
};

export default WalletPage;