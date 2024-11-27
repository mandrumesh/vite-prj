const mongoose = require('mongoose')
const Mongo_URI = 'mongodb+srv://admin:Z6gfoUvqN0i6ojqr@cluster0.qhfkd.mongodb.net/vite-prj?retryWrites=true&w=majority&appName=Cluster0';

const dbConnect = () => {
    mongoose.connect(Mongo_URI)
    .then(() => {
        console.log('Successfully Connected to MongoDB');
    })
    .catch(err => {
        console.log("Error Connecting to MongoDB:", err)
    })
}

module.exports = dbConnect