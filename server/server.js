const mongoose = require('mongoose')
const express = require('express')


// app conf
const app = express();
app.use(express.json());

// db connection
const mongoUri = 'mongodb+srv://root:r7wdSpI67ApwyW0b@Tracker.hbwfp.mongodb.net/Tracker?retryWrites=true&w=majority';
mongoose.connect(mongoUri).then(
    () => console.log('Connected to mongo instance')
).catch(
    (err) => console.log('Db connect failed', err)
);

// routers
app.use('/auth', require('./src/routes/auth'))
app.use('/api', require('./src/routes/track'))


// Listen connections
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));