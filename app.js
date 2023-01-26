const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// Express specific stuff
app.use("/static", express.static("static")); // For serving static files
app.use(express.urlencoded());
// Pug specific stuff
app.set("view engine", "pug"); // Set the template engine as pug
app.set("views", path.join(__dirname, "views")); //Set the view directory
// Endpoints
app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("home.pug", params);
});

// Start the server
app.listen(port, () => {
  console.log(`The application started successfully on the port: ${port}`);
});
