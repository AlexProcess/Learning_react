const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log("db_online");
    } catch (error) {
        console.log(error);
        throw new Error("Couldn't connect to MongoDB");
    }
};

module.exports = {
    dbConnection,
};
