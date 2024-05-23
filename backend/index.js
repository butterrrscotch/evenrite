const express = require("express");
const app = express();
const port = 3002;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3001", // React app origin
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/events", async (req, res) => {
  console.log(req.body);
  const { name, description, location, price, category } = req.body;
  try {
    const event = await prisma.events.create({
      data: {
        name,
        description,
        location,
        price,
        category,
      },
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
