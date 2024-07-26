const mongoose = require('mongoose');

const initDbConnect = () => {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mi_proyecto', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
};

module.exports = initDbConnect;
