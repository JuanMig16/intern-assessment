const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/helloworld", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/api/name", (req, res) => {
  const { firstName, lastName } = req.body;
  console.log(firstName)
  res.json({ message: `Hello ${firstName} ${lastName}` });
});

app.post("/api/add", (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ message: num1 + num2 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
