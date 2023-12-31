import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputBase, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useRef, useState } from "react";
import ProductApi from "../../apis/ProductApi";
import ProductTable from "../../components/ProductTable";
import styles from "./index.module.scss";
import CreateProductModal from "../../components/CreateProductModal";
const ProductPage = (props) => {
  const ref = useRef(null);
  const [productList, setProductList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const fetchProductList = async (config = {}) => {
    try {
      const response = await ProductApi.getAll(config);
      setProductList(response);
    } catch (err) {
      console.log("HienVQ ~  err:", err);
    }
  };
  const handleCloseModal = (isRefetch) => {
    setIsOpenModal(false);
    if (isRefetch) {
      fetchProductList();
    }
  };

  const search = React.useCallback(() => {
    const text = ref.current.value?.trim();
    fetchProductList(
      ...(text && [
        {
          params: {
            name: text,
          },
        },
      ])
    );
  }, [ref]);
  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <div className={styles.ProductPage}>
      <CreateProductModal isOpen={isOpenModal} handleClose={handleCloseModal} />
      <div className={styles.ActionBox}>
        <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}>
          <InputBase
            inputRef={ref}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "Search" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search" onClick={search}>
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button color="primary" variant="contained" onClick={() => setIsOpenModal(true)}>
          <AddIcon />
        </Button>
      </div>

      <ProductTable data={productList} refetch={fetchProductList} />
    </div>
  );
};
export default ProductPage;
