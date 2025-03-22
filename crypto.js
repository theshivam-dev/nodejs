import express from "express";
import crypto from "crypto";
import fs from "fs/promises";

const app = express();
app.use(express.urlencoded({ extended: false }));

const hashPassword = (password) => {
  return crypto.createHash("sha256").update(password).digest("hex");
};

app.post("/auth", async (req, res) => {
  const body = req.body;
  const hash = hashPassword(body.first_name);
  const user = body.first_name;
  await fs.writeFile("database.json", JSON.stringify({ userName: user, hashPassword: hash }))
  console.log(body.first_name);
  res.json({ sucess: "user password store" });
});

app.listen(3000, () => console.log("server start : 3000"));
