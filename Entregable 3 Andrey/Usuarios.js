import express from 'express'
import {USER_BBDD}  from './DB/Usuarios_BD.js'

const accountRouter = express.Router();

accountRouter.use((req, res, next) => {
    console.log(req.ip);
  
    next()
})
accountRouter.get('/companyName/:company', (req, res) => {
    const { company } = req.params;

    const user = USER_BBDD.filter( user => user.company === company);
    
    if (!company) return res.status(400).send();

    return res.send(user);
});


accountRouter.get('/age/30', (req, res) => {
    const users = USER_BBDD.map(user => {
      if (user.age < 30);
        return user;
    })
    return res.send(users);
  });
accountRouter.put('/:guid', (req, res) => {
    console.log('hola')
    const { guid } = req.params;
    const { age, name, gender, company, email, phone } = req.body
    
        const user = USER_BBDD.find( user => user.guid === guid);
        
        if (!user) return res.status(404).send();
   
        console.log(user);
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.company = company;
    user.email = email;
    user.phone = phone;
   
    console.log(user);
    return res.send();

    })

    accountRouter.delete('/:guid', (req, res) => {
        const { guid } = req.params;
    
        const userIndex = USER_BBDD.findIndex( user => user.guid === guid)
        
        if (userIndex === -1) return res.status(404).send()
    
        USER_BBDD.splice(userIndex, 1)
        console.log(userIndex);
        return res.send()
    })


    accountRouter.get('/users', (req, res) => {
        return res.send(USERS_BBDD)
    })

    accountRouter.get('/:guid', (req, res) => {
        const { guid } = req.params;
    
        const user = USER_BBDD.find( user => user.guid === guid);
        
        if (!user) return res.status(404).send();
    
        return res.send(user);
    });
    
   
      accountRouter.post('/', (req, res) => {
        const { _id, index, guid, age, name, gender, company, email, phone }  = req.body;
           
            console.log(_id, index, guid, age, name, gender, company, email, phone);
            USER_BBDD.push({
                "_id": _id,
                "index": index,
                "guid": guid,
                "age": age,
                "name": name,
                "gender": gender,
                "company": company,
                "email": email,
                "phone": phone
            });
            const user = USER_BBDD.find( user => user.guid === guid);
            console.log(user);
     
        return res.send();
    })
    export default accountRouter;