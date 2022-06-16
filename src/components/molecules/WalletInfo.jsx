import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Title from "Components/atoms/Title";

const WalletInfo = ({ wallet, deleteWallet }) => {
  if (wallet === undefined) {
    return null
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
