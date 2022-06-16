import React from "react"
import Box from "@mui/material/Box"

import Header from "Components/organisms/Header"
import WalletDetail from "Components/organisms/WalletDetail"
import WalletCreate from "Components/organisms/WalletCreate"

const WalletTemplate = ({ hasWallet, wallet }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      {hasWallet ?
        <>
          <WalletDetail wallet={wallet} />
        </>
      :
        <>
          <WalletCreate />
        </>
      }
    </Box>
  )
}

export default WalletTemplate
