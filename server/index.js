const express = require('express')
const connectDB = require('./db.js')
const itemModel = require('./models/Item.js')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
connectDB()

app.post('/login', async (req,res) => {
    const { username, password } = req.body;

    try {
        const items = await itemModel.findOne({ username });
        if(!items){
            return res.status(401).json({ message: 'Invalid username or password'})
        }

        if(items.password !== password){
            return res.status(401).json({ message: 'Invalid username or password'})
        }

        res.json({ message: 'Login successful', user: { username }});
    } catch (error) {
        console.error(error);
    }
})

app.post('/register', async (req,res) => {
    const { username, password } = req.body;

    try{
        const items = await itemModel.findOne({ username });
        if(!items){
            const newData = new itemModel(req.body);
            console.log('omg')
            await newData.save();
            res.status(201).json({ message: 'Added successfully'})
        }
    } catch (e) {
        console.error(e)
        console.log('user exists')
        res.status(401).json({ message: 'user already exists'})
    }
})

app.listen(5000, () => {
    console.log('app is running')
})