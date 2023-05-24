const pool = require("./db");
const path = require("path");
const express = require("express");

const PORT = 8000;

//initialize express app
const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

//define route
// app.po

const newLink = await pool.query(
  "INSERT INTO links (link_name, hyperlink) VALUES ($1, $2) RETURNING *",
  [info.link_name, info.hyperlink]
);



app.get("/", (req, res) => {
  res.send({ message: "Testing Route/API!" });
  //send msg to clie
});

app.get("/links", (req, res) => {
  res.json({ message: "Testing Route/API!!!" });
  //send msg to client
});

app.get("/links:id", (req, res) => {
  res.json({ message: "Testing Route/API!!!" });
  //send msg to client
});

app.post("/links", async (req, res) => {
  try {
    const info = req.body;
    const newLink = await pool.query(
      "INSERT INTO links (link_name, hyperlink) VALUES ($1, $2) RETURNING *",
      [info.link_name, info.hyperlink]
    );

    res.status(200).json(newLink.rows);
  } catch (error) {
    console.error(error.message);
  }
});


app.put("/links:id", (req, res) => {
  res.json({ message: "Testing Route/API!!!" });
  //send msg to client
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

//start app
app.listen(PORT, () => console.log(`server is listening on PORT ${PORT}...`));
