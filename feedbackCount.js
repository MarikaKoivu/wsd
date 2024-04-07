import { kvStore, getFeedbackCount, incrementFeedbackCount } from "./feedbackService.js";

const getFeedback = async (c)  => {
  const value = c.req.param("value");
  const count = await getFeedbackCount(value);
  return c.text(`Feedback ${value}: ${count}`);
}

const incrementAndGetFeedback = async (c) => {
  const value = c.req.param("value");

  let count = await incrementFeedbackCount(value);
  return c.text(`Feedback ${value}: ${count}`);
}

export { getFeedback, incrementAndGetFeedback };