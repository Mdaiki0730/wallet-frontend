import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CustomDialog = ({ open, handleClose, title, content, onClickOK }) => {
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
        <Button color="primary" variant="contained" onClick={onClickOK}>OK</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
