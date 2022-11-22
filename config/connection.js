const mongoose = require('mongoose');

const mongoConnectString = process.env.MONGODB_URI || "mongodb://localhost:27017/library8DB"

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(mongoConnectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
