const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use("/", routes);

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, "::", () => {
    console.log(`App running on port ${PORT}`);
  });
}
