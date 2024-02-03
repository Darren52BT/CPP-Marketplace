const express = require("express");
const Router = express.Router;
const bcrypt = require("bcrypt");
const passport = require("passport");

//POST /products/create
const createProduct = (supabase) => {
  return async (req, res, next) => {
    let { name, price, image_url, description } = req.body;

    // error handling
    const { error } = await supabase
      .from("Items")
      .insert({ name, price, image_url, description });
    if (error) {
      res.status(400).json({ message: "failure" });
    } else {
      res.json({ message: "success" });
    }
  };
};

//GET /products
const getProducts = (supabase) => {
  return async (req, res, next) => {
    let { data: products } = await supabase.from("Items").select();
    res.json({ products });
  };
};

//GET /products/:productId

const getProductById = (supabase) => {
  return async (req, res, next) => {
    let { productId } = req.params;
    let { data: product, error } = await supabase
      .from("Items")
      .select()
      .eq("id", productId)
      .limit(1)
      .single();
    if (error) {
      res.status(400).json({ message: "failure" });
    } else {
      res.json({ product });
    }
  };
};

//product router

const ProductRouter = (supabase) => {
  const router = Router();

  router.get("/products", getProducts(supabase));
  router.post("/products/create", createProduct(supabase));
  router.get("/products/:productId", getProductById(supabase));

  return router;
};

module.exports = { ProductRouter };
