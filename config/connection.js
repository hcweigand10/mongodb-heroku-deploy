const mongoose = require('mongoose');

const mongoConnectString = "mongodb://localhost:27017/library8DB"

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(mongoConnectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
