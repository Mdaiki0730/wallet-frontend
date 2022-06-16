import React from "react"
import Box from "@mui/material/Box"

import Header from "Components/organisms/Header"
import WalletDetail from "Components/organisms/WalletDetail"
import WalletCreate from "Components/organisms/WalletCreate"

const WalletTemplate = ({ hasWallet, wallet, logout, createWallet, deleteWallet }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header logout={() => logout()} />
      {hasWallet ?
        <>
          <WalletDetail wallet={wallet} deleteWallet={() => deleteWallet()} />
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
