const mongoose = require('mongoose');

//latam_user
//pass Diqr4TIUOHlAb6JF

const dbConnection = async () => {

    try {
        await mongoose.connect(
            process.env.DB_CNN,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });

        console.log('DB Online');

    } catch (e) {
        console.log(e);
    }
}

module.exports = dbConnection;