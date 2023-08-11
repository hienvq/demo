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

const ProductTable = (props) => {
  return (
    <TableContainer component={Paper} style={{ width: "100%" }} className={styles.ProductTable}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <ProductTableRow {...row} key={row.id} refetch={props.refetch} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ProductTable;
