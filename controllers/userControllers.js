const {User} = require('../models');


// for view data
module.exports = {
    view:async (req,res)=>{
            const user = await User.findAll({
                raw:true
            }).catch(err =>{console.log(err)})
            await res.render('home',{user});
    },
    save:(req,res)=>{
        res.render('addUser')
    },
 // For insert User
form:async(req,res) =>{
    try{
        console.log(req.body);
    const {FirstName,LastName,email,phone} = req.body;
    const user = await User.create({FirstName,LastName,email,phone}).then(res=>{
        console.log(res);
    });
    // return category;
    return res.redirect("/");
    }
    catch(err){
         console.log(err);
    }
},

// for edit data
editUser: async(req,res) =>{
    const {id} = await req.params;
    const user = await  User.findOne({
        where:{
            id:id
        },
        raw:true
    }).catch(err=> console.log(err))
    res.render('edit',{user});
},
updateUser: async (req,res) =>{
    const {id} =  req.params;
    const data = req.body;
    const selector = {where:{id:id}}

    await User.update(data,selector).catch(error => console.log(error))
    res.redirect('/')
},
viewUser: async(req,res) =>{
    const {id} = await req.params;
    const user = await  User.findOne({
        where:{
            id:id
        },
        raw:true
    }).catch(err=> console.log(err))
    res.render('user',{user});
},

deleteUser: async(req,res) =>{
    const {id} = await req.params;
    const user = await  User.destroy({
        where:{
            id:id
        },
        raw:true
    }).catch(err=> console.log(err))
    
    res.redirect('/');
}
    
}
