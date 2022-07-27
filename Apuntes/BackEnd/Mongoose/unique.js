/*Archivo para ver cómo es único un dato*/
require ('./connection');

const User = require('./models/User');

async function createUsers(){
   const user1 = new User({
        username: 'nina',
        password: '456845'
    });

    await user1.save();

    const user2 = new User({
        username: 'Joe',
        password: 'sc123456'
    });

    await user2.save();

    const user3 = new User({
        username: 'clarck',
        password: 'sc1234ç786'
    });

    await user3.save();
}

createUsers();
