const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    type: String, // Full-time / Part-time
});

module.exports = mongoose.model('Job', jobSchema);
