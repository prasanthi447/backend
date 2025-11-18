const express = require('express');
const app = express();

const usersdb = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
];




app.get('/users', (req, res) => {
    res.send(usersdb);
});


// localhost:8181/users/alice
app.get('/users/:name', (req, res) => {
    const userName = req.params.name;
    const user = usersdb.find(u => u.name.toLowerCase() === userName.toLowerCase());
    res.send(user || { message: 'User not found' });
});

app.get('/', (req, res) => {
    res.send('Welcome to Prsnthi Backend!');
});

// Post method:
app.post('/users', (req, res) => {
    const newUser = { id:4, name: 'David', age: 28 };
    usersdb.push(newUser);
    res.send({massage:'userr dded',users:usersdb});
});

// delete method:
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
   usersdb.splice(userId-1, 1);
   res.send({message:'user deleted',users:usersdb});
    });

app.listen(8181, () => {
    console.log('Server is running on port 8888');
});

