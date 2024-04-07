import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import { getFeedback, incrementAndGetFeedback } from "./feedbackCount.js";

const app = new Hono();

app.get("/feedbacks/:value", getFeedback);

app.post("/feedbacks/:value", incrementAndGetFeedback);

export default app; 