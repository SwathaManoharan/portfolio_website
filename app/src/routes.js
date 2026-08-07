const express = require("express");
const fs = require("fs");
const { version } = require("../package.json");
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

// Version
router.get("/version", (req, res) => {
  res.status(200).json({ version });
});

// Profile API
router.get("/api/profile", (req, res) => {
  const defaultProfile = {
    name: process.env.NAME || "Swatha M",
    role: process.env.ROLE || "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "Terraform", "CI/CD"]
  };

  const profilePath = "/config/profile.json";
  fs.access(profilePath, fs.constants.R_OK, (accessErr) => {
    if (accessErr) {
      return res.status(200).json(defaultProfile);
    }
    fs.readFile(profilePath, "utf-8", (readErr, data) => {
      if (readErr) {
        return res.status(200).json(defaultProfile);
      }
      try {
        const profile = JSON.parse(data);
        return res.status(200).json(profile);
      } catch {
        return res.status(500).json({ error: "Invalid profile configuration" });
      }
    });
  });
});

module.exports = router;
