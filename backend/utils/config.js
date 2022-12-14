require("dotenv").config();

const PORT = process.env.PORT || 3003;

const MONGODB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

const JWT_SECRET =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_SECRET
    : process.env.SECRET;

module.exports = {
  MONGODB_URI,
  PORT,
  JWT_SECRET,
};
