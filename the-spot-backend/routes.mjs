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
  });
})

//signup
app.post('/signup', (req, res) => {
  let name = req.body.name;
  let birthDate = req.body.birthDate;
  let sex = req.body.sex;
  let userName = req.body.userName;
  let password = req.body.password;

  bcrypt.hash(password, , 3, (err, hash) => {
    if(err) {
      res.send(err);
    }
    res.send(`name: ${name}, sex: ${sex}, FirthDate: ${birthDate}, userName: ${userName}, hash: ${hash}`);

    //check user name is not taken
    //check password is complex enough?
    //log in?
  });
  
}
//

app.listen(3000);