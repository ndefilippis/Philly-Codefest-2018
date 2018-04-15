import express from 'express';
import bcrypt from 'bcrypt';
import Firestore from '@google-cloud/firestore';

const firestore = new Firestore({
  projectId: 'the-spot-philly-codefest'
})

admin.initializeApp(config);
const db = firebase.database().ref('/');

const app = express();

app.use(express.json());
app.use(authCheck);

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  bcrypt.hash(password, 3, (err, hash) => {
    if(err) {
      res.send(err);
    }
    res.status(301).send('Successfully loged in');
    // check if password is already in Firebase; if it is, grant permission
    // if password is not in Firebase, don't grant permission but prompt to sign-up
  });
});

app.post('/signup', (req, res) => {
  let data = {
      name: req.body.name,
      birthDate = req.body.birthDay,
      sex: req.body.sex,
      userName: req.body.userName,
      password: req.body.password,
  }
  bcrypt.hash(data.password, 3, (err, hash) => {
    if(err) {
      res.send(err);
    }
    //check user name is not taken
    //log in?
    users.once.push({
        "name":data.name,
    	"birthday":data.birthDay,
    	"sex":data.sex,
    	"username": data.userName,
    	"password": hash
    });
    res.send(`User ${data.name} successfully signed up`);
  });
});


app.get('/user/:username', (req, res) => {
  let userName = req.params.userName;
  let userData;
  // get data about user from Firebase
  res.send(userData);
});

app.post('/shooting/:location', (req, res) => {
  const { latitude, longitude } = req.body.location;
  // save status for that location as shooting
  res.send(`Shooting has been reported at ${latitude}, ${longitude}`);
});

app.get('/events', (req, res) => {
  const { latitude, longitude } = req.body.location;
  // get nearby events from Firebase
});

app.post('/rate', (req, res) => {
  const { latitude, longitude } = req.body.location;
  const rating = req.body.rating;
  // get current rating for that venue from database
  // update overall rating => average
});

const authCheck = (req, res, next) => {
  const status = req.get("auth");
  if(status) {
    next();
  } else {
    res.status(401).send('Please log in or sign up first');
  }
}

app.listen(3000);
