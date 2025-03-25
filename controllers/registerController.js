const registerModel = require('../models/RegisterModel');
const bcrypt = require('bcryptjs'); 

exports.registerUser = (req, res) => {
    const { username, email, phone, password, role } = req.body;

   
    if (!username || !email || !phone || !password || !role) {
        return res.status(400).json({ error: "All fields are required" });
    }

    console.log("Received Data:", { username, email, phone, password, role });

    registerModel.registerUser(username, email, phone, password, role, (err, success, message) => {
        if (err) {
            console.error("Error registering user:", err);
            return res.status(500).json({ error: "Error registering user" });
        }

        if (success) {
            return res.status(200).json({ message });
        } else {
            return res.status(400).json({ error: message });
        }
    });
};
