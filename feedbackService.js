const kvStore = {};

const getFeedbackCount = (value) => {
  const count = kvStore[value] || 0;
  return count;
}

const incrementFeedbackCount = (value) => {
  let currentCount = kvStore[value] || 0;
  currentCount++;
  kvStore[value] = currentCount;
  return currentCount;
}

export { kvStore, getFeedbackCount, incrementFeedbackCount };