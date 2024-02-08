const express = require('express');
const app = express();
//const { Op } = require('sequelize');
//const { register_table } = require('./register');

const sequelize = require('./config/sequelize-config');
const { Op } = require('sequelize');
const ec_suppliers =require('./models/ec_suppliers')
sequelize.sync ({force:false})
.then(()=>{
    console.log('Database synced')
})
.catch((error)=>{
    console.error('Error syncing database :',error);
})

const PORT = 3000 || process.env.PORT;
app.use(express.json());

app.post("/supplierRegistration", async (req, res) => {
    try{
    const {full_name,email, password,profile_pic="none"} = req.body;

    if (!email || !password || !full_name) {
        return res.status(422).json({ "error": "Insufficient Data" });
    }
        const newUser = await ec_suppliers.create({ e_mail: email, password:password,full_name:full_name,profile_pic:profile_pic },{raw:true});

        res.status(200).json({ "message": `Hi ${newUser.full_name} , your registration_id is ${newUser.registration_id}your registered mail id is ${newUser.e_mail} and password is ${newUser.password}`});
}
catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ "error": "Internal Server Error" });
}

    
});

app.post("/login", async (req, res) => {
    try{
    const {userType,email, password} = req.body;

    if (!email || !password || !userType) {
        return res.status(422).json({ "error": "Insufficient Data" });
    }
    if(userType==="supplier"){
    const user = await ec_suppliers.findOne({
        where: {
            e_mail: email
        }
    });

    res.status(200).json({ "message": "Login successful" });
}

}
catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ "error": "Internal Server Error" });
}

    
});

app.get("/profile", async (req, res) => {
    try{
    const {userType,registration_id} = req.body;

    if (!registration_id ||!userType) {
        return res.status(422).json({ "error": "Insufficient Data" });
    }
    if(userType==="supplier"){
    const user = await ec_suppliers.findOne({
        where: {
            registration_id: registration_id
        }
    });

    res.status(200).json({"full_name":`${user.full_name}`,"email":`${user.e_mail}`,"profile_pic":`${user.profile_pic}`,"registration_id":`${user.registration_id}`,"registration_time_stamp":`${user.registration_time_stamp}`,});
}

}
catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ "error": "Internal Server Error" });
}

    
});

app.patch("/resetPassword", async (req, res) => {
    try{
    const {userType,email,newPassword} = req.body;

    if (!email ||!userType||!newPassword) {
        return res.status(422).json({ "error": "Insufficient Data" });
    }
    if(userType==="supplier"){
    const user = await ec_suppliers.findOne({
        where: {
            e_mail: email
        }
    });

    if (!user) {
        return res.status(404).json({ "error": "User not found" });
    }

    // Update the password with the new password
    await user.update({ password: newPassword });

    res.status(200).json({"full_name":`${user.full_name}`,"email":`${user.e_mail}`,"password":`${user.password}`,"profile_pic":`${user.profile_pic}`,"registration_id":`${user.registration_id}`,"registration_time_stamp":`${user.registration_time_stamp}`});
}

}
catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ "error": "Internal Server Error" });
}

    
});

app.listen(PORT, () => console.log(`listening to port ${PORT}...`));