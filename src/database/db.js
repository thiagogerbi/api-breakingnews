const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log("Wait connection to the database")

    mongoose.connect(
        "mongodb+srv://root:thigu2014@cluster0.e1gjvlr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
}

module.exports = connectDatabase