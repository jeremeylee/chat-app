require('dotenv').config();

const { MONGODB_URI } = process.env;
const { PRIVATE_KEY } = process.env;
const { PUBLIC_KEY } = process.env
module.exports = { MONGODB_URI, PRIVATE_KEY, PUBLIC_KEY };
