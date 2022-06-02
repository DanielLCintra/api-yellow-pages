const app = require("./src/app");

let PORT = process.env.API_YELLOWPAGES_API_PORT || 3000;

app.listen(PORT, () => {
  console.log("The yellow pages api is working on: " + port);
});
