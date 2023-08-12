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
import { useFormik } from "formik";
import * as yup from "yup";
import DisplayModalContext from "../../contexts/DisplayModalContext";

const CreateProductModal = ({}) => {
  const { isOpenModal, handleCloseModal, productDataModal } = React.useContext(DisplayModalContext);

  const validationSchema = yup.object({
    name: yup.string("Enter product name").required("Name is required"),
    price: yup.number("Enter product price").max(1000, "Price must less than 1000$").required("Price is required"),
    description: yup
      .string("Enter your password")
      .min(10, "Description should be of minimum 10 characters length")
      .required("Description is required"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: productDataModal.id ?? "",
      name: productDataModal.name ?? "",
      price: productDataModal.price ?? "",
      description: productDataModal.description ?? "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (!values.id)
        await ProductApi.create({
          name: values.name,
          price: values.price,
          description: values.description,
        });
      else
        await ProductApi.update(values.id, {
          name: values.name,
          price: values.price,
          description: values.description,
        });
      handleCloseModal(true);
    },
  });
  // const handleOk = async (event) => {
  //   event.preventDefault();
  //   await ProductApi.create({
  //     name: event.target.name.value,
  //     price: event.target.price.value,
  //     description: event.target.description.value,
  //   });
  //   handleClose(true);
  // };
  return (
    <Dialog
      open={isOpenModal}
      onClose={() => handleCloseModal()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle id="alert-dialog-title">Add new product</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            {...formik.getFieldProps("name")}
          />
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
            {...formik.getFieldProps("price")}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            {...formik.getFieldProps("description")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal()}>Cancel</Button>
          <Button autoFocus color="primary" variant="contained" type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
export default React.memo(CreateProductModal);
