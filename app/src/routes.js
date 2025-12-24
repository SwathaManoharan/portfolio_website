const express = require("express");
const fs = require("fs");
const router = express.Router();

// Home page
router.get("/", (req, res) => {
  res.status(200).send(`
    <html>
      <body>
        <h1>Swatha M</h1>
        <p>DevOps & Cloud Engineer</p>
        <p>Skills: Docker, Kubernetes, Terraform, CI/CD</p>
      </body>
    </html>
  `);
});

// Health check
router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Profile API
router.get("/api/profile", (req, res) => {
  let profile = {
    name: process.env.NAME || "Swatha M",
    role: process.env.ROLE || "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "Terraform", "CI/CD"]
  };

  if (fs.existsSync("/config/profile.json")) {
    profile = JSON.parse(fs.readFileSync("/config/profile.json", "utf-8"));
  }

  res.status(200).json(profile);
});

module.exports = router;
