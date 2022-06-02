const app = require("./src/app");

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("The yellow pages api is working on: " + PORT);
});
