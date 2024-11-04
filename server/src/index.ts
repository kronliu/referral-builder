import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import referralRoutes from "./routes/referral-routes";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/referrals", referralRoutes);

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
