const express = require('express')
const router = express.Router()
const PasswordValidator = require('../models/PasswordValidator')

router.post('/password',async (req,res)=>{
    const { password, steps } = req.body

    // Confirm data
    if (!password) {
        return res.status(400).json({ message: 'All fields are required' })
    }


    const result = await PasswordValidator.create({ password, steps})

    if (result) { // Created 
        return res.status(201).json({ message: 'New result created' })
    } else {
        return res.status(400).json({ message: 'Invalid result data received' })
    }

})


module.exports = router