const connectToMongo= require('./db');
const express = require('express');
const cors = require('cors');
const Admin = require("./models/Admin");
const bodyParser = require('body-parser');
const authpath = require('./routes/auth');
const inventorypath = require('./routes/inventory');
connectToMongo();

const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json()); // Make sure this line is present

//Available Routes

// // Create a new admin user
// const newAdmin = new Admin({
//     username: 'admin',
//     password: 'password123',
//     email: 'admin@lnmiit.com',
//   });
  
//   // Save the admin user to the database
//   newAdmin.save()
//     .then(() => console.log('Admin user created successfully'))
//     .catch(err => console.error('Error creating admin user:', err.message));

// authpath have routes of
//  post - '/adminlogin' - login by admin
//  post - '/userlogin'  - login by user
//  post -  '/createnewuser' - new user created by admin
//  get -   '/getallusers'  - get all users 
// get  -    'getuser/:userId' - get user as per its userId
//  put -    '/edituser/:username'  - editing user details corresponding to username
app.use('/',authpath);


//inventorypath have routes of 
// post - '/additemsbymangement' - add items by management
// post - '/additemsbymanagementcart' - add items by management but wiht cart system
// post - '/newitementries' - add items by new item entries by admin
// get - '/allinventoryitems'  -Route to get all items not associated with any user
// post - '/requestforinventory' - api request by user for inventory
// get -  '/pendingrequestsuser' - get pending requests for a particular user
// get -  '/approvedrequestsuser' - get approved requests for a particular user
// get -  '/rejectedrequestsuser' - get rejected requests for a particular user
// put -  '/handlerequests/:requestId' - approve and reject inventory requests by admin
// get -  '/allpendingrequests' - get all pending requests for admin
// get  -  '/allrejectedrequests' - get all rejected requests for admin
// get  - '/allapprovedrequests' - get all approved requests for admin
// post -  '/additemsbyusercart' - request for inventory by user but with cart system
app.use('/',inventorypath);

app.listen(port,()=>{
    console.log(`Backend at port http://localhost:${port}`)
}) 


