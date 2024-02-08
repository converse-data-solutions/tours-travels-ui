import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

interface LogoutConfirmationPopupProps {
  open: boolean;
  onClose: () => void;
  onConfirmLogout: () => void;
}

const LogoutConfirmationPopup: React.FC<LogoutConfirmationPopupProps> = ({
  open,
  onClose,
  onConfirmLogout,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Logout</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to logout?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirmLogout}>Logout</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutConfirmationPopup;
