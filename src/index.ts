import express, { Application, Router, Request, Response } from "express";
import cors from "cors";
import { json } from "stream/consumers";
const app :Application = express()
var router :Router= express.Router();

router.get("/", function (req:Request, res:Response) : void {
  res.send("fafagfsghwefwgf");
});
app.use(cors())
app.use(router)
app.listen(8080, ()=>{
  console.log("Server running")
})