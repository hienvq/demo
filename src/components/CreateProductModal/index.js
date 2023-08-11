import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Icon from "@mui/material/Icon";
import styles from "./index.module.scss";
import ProductTableRow from "../ProductTableRow";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, TextField } from "@mui/material";
import ProductApi from "../../apis/ProductApi";

const CreateProductModal = ({ isOpen, handleClose }) => {
  const handleOk = async (event) => {
    event.preventDefault();
    await ProductApi.create({
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
    });
    handleClose(true);
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={handleOk}>
        <DialogTitle id="alert-dialog-title">Add new product</DialogTitle>
        <DialogContent>
          <TextField margin="dense" name="name" label="Name" type="text" fullWidth variant="standard" />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="number"
            fullWidth
            variant="standard"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          <TextField margin="dense" name="description" label="Description" type="text" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button autoFocus color="primary" variant="contained" type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
export default CreateProductModal;
