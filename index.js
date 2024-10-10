const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/helloworld", (req, res) => {
  res.json({ message: "Hello World" });
});

// Task 1 and 2
app.post("/api/name", (req, res) => {
  const { firstName, lastName } = req.body;
  console.log(firstName)
  res.json({ message: `Hello ${firstName} ${lastName}` });
});

// Task 3
app.post("/api/add", (req, res) => {
  const { num1, num2 } = req.body;
  const sum = num1 + num2;
  res.json({ message: num1 + num2 });
});

//Task 4 and 5
app.post("/api/sub", (req, res) => {
  const { number1, number2 } = req.body;
  const result = number1 - number2;
  res.json({ message: result });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
