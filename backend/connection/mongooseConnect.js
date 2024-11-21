const mongoose = require('mongoose');
require('dotenv').config();
const Connection = mongoose.connect(process.env.BACKEND_MONGOOSE_CONNECTION);
// const Connection = mongoose.connect("mongodb://localhost:27017/Data")

module.exports = Connection;