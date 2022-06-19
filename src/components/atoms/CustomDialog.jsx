import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))

const CustomDialog = ({ open, handleClose, title, content, onClickOK }) => {
  const [ disabled, setDisabled ] = useState(false);
  const onClick = () => {
    setDisabled(true)
  }
  useEffect(() => {
    if (!disabled) return
    const clickProcess = async () => {
      await onClickOK()
      await sleep(2000)
      setDisabled(false)
    }
    clickProcess()
  }, [disabled])
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle color="secondary">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" variant="contained" onClick={handleClose}>Cancel</Button>
        <Button color="primary" variant="contained" disabled={disabled} onClick={onClick}>OK</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
