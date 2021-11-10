import React, { useState } from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addToCart } from "../actions/cartActions";

export default function SingleProduct({
  name,
  price,
  img,
  description,
  id,
}) {
  const products = useSelector(
    (state) => state.products,
  );

  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        bgcolor: "background.paper",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: 1,
        fontWeight: "bold",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={`${img}`}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box
          component="span"
          sx={{ fontSize: 16, mt: 1 }}
        >
          {name}
        </Box>
        <Box
          component="span"
          sx={{
            color: "primary.main",
            fontSize: 22,
          }}
        >
          ${price}
        </Box>
        <Box
          sx={{
            mt: 1.5,
            p: 0.5,
            backgroundColor: (theme) =>
              alpha(
                theme.palette.primary.main,
                0.1,
              ),
            borderRadius: "5px",
            color: "primary.main",
            fontWeight: "medium",
            display: "flex",
            cursor: "pointer",
            fontSize: 12,
            alignItems: "center",
            "& svg": {
              fontSize: 21,
              mr: 0.5,
            },
          }}
        >
          <AddShoppingCartIcon />
          ADD TO CART
        </Box>
      </Box>
    </Box>
  );
}