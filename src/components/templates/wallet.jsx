import React from "react"

import Header from "Components/organisms/Header"
import AssetDetail from "Components/organisms/AssetDetail"
import WalletDetail from "Components/organisms/WalletDetail"
import WalletCreate from "Components/organisms/WalletCreate"

const WalletTemplate = ({ hasWallet }) => {
  return (
    <div>
      <Header />
      {hasWallet ?
        <div>
          <AssetDetail />
          <WalletDetail />
        </div>
      :
        <div>
          <WalletCreate />
        </div>
      }
    </div>
  )
}

export default WalletTemplate
