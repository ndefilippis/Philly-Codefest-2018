import express from 'express';
import bcrypt from 'bcrypt';

const app = express();

app.use(express.json());
app.use(authCheck);

const config = {
  apiKey: "AIzaSyADNZ1IAS8asFKdYoHD3VxQgB5M2L5D3xk",
  authDomain: "the-spot-philly-codefest.firebaseapp.com",
  databaseURL: "https://the-spot-philly-codefest.firebaseio.com",
  projectId: "the-spot-philly-codefest",
  storageBucket: "the-spot-philly-codefest.appspot.com",
  messagingSenderId: "989646158505"
};
firebase.initializeApp(config);

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  bcrypt.hash(password, 3, (err, hash) => {
    if(err) {
      res.send(err);
    }
    res.send(`userName: ${userName}, hash: ${hash}`);
    // check if password is already in Firebase; if it is, grant permission
    // if password is not in Firebase, don't grant permission but prompt to sign-up
  });
});

app.post('/signup', (req, res) => {
  const name = req.body.name;
  const birthDate = req.body.birthDate;
  const sex = req.body.sex;
  const userName = req.body.userName;
  const password = req.body.password;

  bcrypt.hash(password, , 3, (err, hash) => {
    if(err) {
      res.send(err);
    }
    res.send(`User ${name} successfully signed up`);

    //check user name is not taken
    //log in?
  });
}

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
