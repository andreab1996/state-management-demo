const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

// router.get('/:userId', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.userId);
//         res.json(user);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });

router.post('/', async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
});

// router.patch('/:userId', async (req, res) => {
//     try {
//         const updatedUser = await User.updateOne
//             (
//                 { _id: req.params.userId },
//                 { $set: { title: req.body.title } }
//             );
//         res.json(updatedUser);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });

// router.delete('/:userId', async (req, res) => {
//     try {
//         const removedUser = await User.remove({ _id: req.params.userId });
//         res.json(removedUser);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });

module.exports = router;