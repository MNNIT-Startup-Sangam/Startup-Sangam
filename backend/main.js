const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const path = require('path');
const cors = require('cors'); 

const serviceAccount = require('./key.json');
const firebaseConfig = {
    credential: admin.credential.cert(serviceAccount),
    
    
    databaseURL: "https://startup-sangam-contact-default-rtdb.firebaseio.com",
    
  };
admin.initializeApp(firebaseConfig);

const db = admin.database();
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', 
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/submit', async (req, res) => {
    const { email, subject, message } = req.body;
    console.log('Received data:', { email, subject, message });
    const timestamp = new Date().toISOString();

    try {
        const newMessageRef = db.ref('messages').push();
        await newMessageRef.set({
            email: email,
            subject: subject,
            message: message,
            timestamp: timestamp
        });
        res.status(200).send(`Data stored with ID: ${newMessageRef.key}`);
    } catch (error) {
        res.status(500).send(`Error storing data: ${error}`);
    }
});



const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
