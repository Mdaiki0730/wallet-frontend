import React from "react";
import Button from "@mui/material/Button";

import Title from "Components/atoms/Title";

const WalletCreateMolecule = ({ createWallet }) => {
  return (
    <>
      <Title>Please Create Your Wallet</Title>
      <Button color="primary" onClick={() => createWallet()}>create</Button>
    </>
  );
}

export default WalletCreateMolecule
