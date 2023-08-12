import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from "@mui/icons-material/Delete";
import Icon from "@mui/material/Icon";
import styles from "./index.module.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TableRow,
} from "@mui/material";
import ProductApi from "../../apis/ProductApi";
import EditIcon from "@mui/icons-material/Edit";
import CreateProductModal from "../CreateProductModal";
import DisplayModalContext from "../../contexts/DisplayModalContext";
const ProductTableRow = (props) => {
  const [open, setOpen] = React.useState(false);
  const { isOpenModal, setIsOpenModal, handleCloseModal, productDataModal, setProductDataModal } =
    React.useContext(DisplayModalContext);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const remove = async (id) => {
    await ProductApi.remove(id);
    props.refetch();
  };
  const handleEdit = () => {
    setProductDataModal(props);
    setIsOpenModal(true);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Are you sure?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => remove(props.id)} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left">{props.name}</TableCell>
        <TableCell align="left">{props.price}</TableCell>
        <TableCell align="left">{props.description}</TableCell>
        <TableCell align="right">
          <IconButton onClick={handleEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleClickOpen}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};
export default ProductTableRow;
