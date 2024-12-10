const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    type: String, // Full-time / Part-time
});

module.exports = mongoose.model('Internship', internshipSchema);
