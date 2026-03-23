const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Mongoose lancé");
    } catch (err) {
        console.error("❌ Impossible de se connecter à MongoDB :");
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;