const express = require("express");
const path = require("path");
const sendMail = require("./mail");
const log = console.log;
const app = express();

const PORT = 8080;

app.use(express.json());

app.post("/email", async (req, res) => {
  try {
    const { name, email, desc } = req.body;
    const response = await sendMail(name, email, desc);
    if (response.statusCode == 400) {
      res.status(400).json({
        message: "Uh Oh! Looks like the email entered is not correct.",
      });
      return;
    }
    res
      .status(200)
      .json({
        message:
          "Contact form submitted successfully. I will contact you shortly.",
      });
  } catch (error) {
    console.log(error);
  }
});

// Serve static files in prodoction
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.senFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => log("Server is starting on PORT,", 8080));
