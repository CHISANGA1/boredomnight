import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from  '@material-ui/core/Grid';
function App() {
  const[firstName, setFirstName] = useState('');
const[lastName, setLastName] = useState('');
const[email, setEmail] = useState('');
const[phoneNumber, setPhoneNUmber] = useState('');

const onFirstName =(event)=>{
  setFirstName(event.target.value);
};
const onLastName =(event)=>{
  setLastName(event.target.value);
};
const onEmail =(event)=>{
  setEmail(event.target.value);
};
const onPhoneNumber =(event)=>{
  setPhoneNUmber(event.target.value);
};

const  onSubmit  =(event)=>{
  event.preventDefault();
  fetch(`https://docs.google.com/forms/u/0/d/e/1FAIpQLScCpSq5GkWMwxHNMP5c-pW9-iLxJuIopN_twvC9-bvMWseuAw/formResponse?entry.323478722=${firstName}&entry.1866240478=${lastName}&entry.384912111=${email}&entry.381250201=${phoneNumber}`,{
     method: 'POST',
    }).catch(() => {
    }).finally(() => {
      window.location.reload(false);
      alert('report Sucesslly sent');
    });


}
  return (
    <div >
      <Grid container>
      <Typography variant="h2" > This borred WebSite</Typography>
      <TextField 
      name ="firstName"
      placeholder="first Name"
      onChange={onFirstName}
      variant="outlined"
      />
      <TextField 
      name ="LastName"
      placeholder="Last Name"
      onChange={onLastName}
      variant="outlined"
      />
      <TextField 
      name ="email"
      placeholder="email"
      onChange={onEmail}
      variant="outlined"
      />
      <TextField 
      name ="phoneNumber"
      placeholder="Phone Number"
      onChange={onPhoneNumber}
      variant="outlined"
      />
      <Button onClick={onSubmit}> Submit </Button>
      </Grid>
    </div>
  );
}

export default App;
