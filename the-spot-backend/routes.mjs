import express from 'express';
import bcrypt from 'bcrypt';
import firebase from 'firebase';

//modify
var config = {
   apiKey: "AIzaSyADNZ1IAS8asFKdYoHD3VxQgB5M2L5D3xk",
   authDomain: "the-spot-philly-codefest.firebaseapp.com",
   databaseURL: "https://the-spot-philly-codefest.firebaseio.com",
   projectId: "the-spot-philly-codefest",
   storageBucket: "the-spot-philly-codefest.appspot.com",
   messagingSenderId: "989646158505"
};

admin.initializeApp(config);
// add path to data
const users = firebase.database().ref('');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
  let userName = req.body.userName;
  let password = req.body.password;
  bcrypt.hash(password, 3, (err, hash) => {
    if(err) {
      res.send(err);
    }
    res.send(`userName: ${userName}, hash: ${hash}`);
    // check if password is already in Firebase; if it is, grant permission
    // if password is not in Firebase, don't grant permission but prompt to sign-up
  });
})

//signup
app.post('/signup', (req, res) => {
  let data: {
      name: req.body.name,
      birthDate = req.body.birthDay,
      sex: req.body.sex,
      userName: req.body.userName,
      password: req.body.password,
  }

  bcrypt.hash(data.password, , 3, (err, hash) => {
    if(err) {
      res.send(err);
    }
    
    users.push({
	"name":data.name,
    	"birthday":data.birthDay,
    	"sex":data.sex,
    	"username": data.userName,
    	"password":hash
    });

    res.send(`User ${data.name} has succesfully logged in`);
  });
  	
}
//

app.listen(3000);