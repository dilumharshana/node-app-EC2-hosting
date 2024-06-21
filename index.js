import express from "express";
import router from "./routers.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(router);

app.listen(8080, () => {
  console.log("server has started");
});
