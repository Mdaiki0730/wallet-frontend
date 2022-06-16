import React from "react"
import Box from "@mui/material/Box"

import Header from "Components/organisms/Header"
import AssetDetail from "Components/organisms/AssetDetail"
import WalletDetail from "Components/organisms/WalletDetail"
import WalletCreate from "Components/organisms/WalletCreate"

const WalletTemplate = ({ hasWallet, logout, createWallet }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header logout={() => logout()} />
      {hasWallet ?
        <>
          <AssetDetail />
          <WalletDetail />
        </>
      :
        <>
          <WalletCreate createWallet={() => createWallet()} />
        </>
      }
    </Box>
  )
}

export default WalletTemplate
