const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3004;

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/oneyes_info_tech', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Job = require('./models/job');
const Internship = require('./models/internship');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for About Us page
app.get('/about_us', (req, res) => {
    res.sendFile(path.join(__dirname, 'about_us.html'));
});

// Route for FAQ page
app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'faq.html'));
});

// Route for Careers page
app.get('/careers', (req, res) => {
    res.sendFile(path.join(__dirname, 'careers.html'));
});

// Route for How It Works page
app.get('/how_it_works', (req, res) => {
    res.sendFile(path.join(__dirname, 'how_it_works.html'));
});

// Route for Login/Register page
app.get('/login_register', (req, res) => {
    res.sendFile(path.join(__dirname, 'login_register.html'));
});

// Route for fetching Jobs
app.get('/jobs', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching jobs' });
    }
});

// Route for fetching Internships
app.get('/internships', async (req, res) => {
    try {
        const internships = await Internship.find();
        res.json(internships);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching internships' });
    }
});

// Route for submitting an application form (dummy form submission)
app.post('/apply', (req, res) => {
    const { name, email, jobId } = req.body;

    // Normally, you would save this data to a database or send it via email
    console.log(`Application submitted by: ${name} for job ID: ${jobId}`);
    res.json({ message: 'Application submitted successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
