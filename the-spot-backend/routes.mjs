import express from 'express';
import bcrypt from 'bcrypt';
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
    // save password in Firebase
  });
});

app.get('/user/:username', (req, res) => {
  let userName = req.params.username;
  let userData;
  // get data about user from Firebase
  res.send(userData);
});



app.listen(3000);
