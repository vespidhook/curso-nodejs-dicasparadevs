const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cursonodejsdicasparadev.3apwdkw.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJsDicasParaDevs`
    );

    console.log('✅ Successfully connected to the database');
  } catch (error) {
    console.error('❌ Error connecting to the database:', error);
  }
};

module.exports = connectToDatabase;
