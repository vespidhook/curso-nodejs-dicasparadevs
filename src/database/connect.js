const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ifjpzqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log('✅ Successfully connected to the database');
  } catch (error) {
    console.error('❌ Error connecting to the database:', error);
  }
};

module.exports = connectToDatabase;