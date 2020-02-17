const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
    userId: {
        type: Number,
        require
    },
    tableId: {
        type: Number,
        require
    },
    from: {
        type: Date,
        require
    }, 
    to: {
        type: Date,
        require
    },
    players: {
        type: Number,
        require
    }
});