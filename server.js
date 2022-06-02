const app = require("./src/app");

let port = process.env.API_YELLOWPAGES_API_PORT;

app.listen(port, () => {
  console.log("The yellow pages api is working on: http://localhost:" + port);
});
