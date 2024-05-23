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

app.get("/events", async (req, res) => {
  const events = await prisma.events.findMany();
  res.json(events);
});

app.get("/events/search", async (req, res) => {
  const { query, category } = req.query;
  try {
    const result = await prisma.events.findMany({
      where: {
        AND: [
          query ? { name: { startsWith: query } } : {},
          category ? { category: { equals: category } } : {},
        ],
      },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/events/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const event = await prisma.events.findUnique({
      where: { id: parseInt(id) },
    });
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch event details" });
  }
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
