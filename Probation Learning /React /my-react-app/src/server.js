import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(cors());

// Sample data (like database)
const products = [
  { id: 1, name: "Shoes", price: 2000, qua: 15, img: "laptop.jpeg", available: true },
  { id: 2, name: "T-shirt", price: 500, qua: 30, img: "mobile.jpeg", available: true },
  { id: 3, name: "Watch", price: 1500, qua: 8, img: "laptop.jpeg", available: false }
];

// API route
app.get("/products", (req, res) => {
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});