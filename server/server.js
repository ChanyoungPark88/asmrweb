const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Message = require('./models/messageModel');
const colors = require('colors');

dotenv.config();
// Connect to the MongoDB
connectDB();
// Create express app
const app = express();
// Middleware
app.use(express.json());

// Get Method
app.get('/', (req, res) => {
  res.send('API is Running');
});
// SendMessage
app.get('/api/message', (req, res) => {
  const message = new Message({
    name: req.body.details.name,
    message: 'So do I.',
    timestamp: Date.now(),
  });
  message
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// View all Messages
app.get('/api/messages', (req, res) => {
  Message.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Post Method

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`Server is Running on Port ${PORT}`.yellow.bold));

const io = require('socket.io')(server, {
  pingTimeout: 60000,
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket) => {
  console.log('Connected to socket.io');
  socket.on('setup', (details) => {
    socket.join(details.name);
    socket.emit('connected');
  });
});
