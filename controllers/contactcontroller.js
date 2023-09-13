const contact = require("../models/contact");

module.exports ={


//
Addcontact: async (req, res) => {
    try{
        console.log("ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
        
            const { name,email,phone,subject,message} = req.body
            
            await contact.create({name,email,phone,subject,message})
            console.log("contact details  Added Sucessfully");
            res.redirect('/'); 

        }catch(err){
          console.log(err);
        }
    },

 Addcontactpage: async (req, res) => {
        try{
            console.log("ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
            
                const { name,phone,email,subject,message} = req.body
                
                await contact.create({name,email,phone,subject,message})
                console.log("contact details  Added Sucessfully");
                res.redirect('/'); 
    
            }catch(err){
              console.log(err);
            }
        },
    

    Getcontact: async (req, res) => {
        try {
            const contacts = await contact.find()
                res.render('admin/contact/contact', { layout: "adminlayout",contacts });
                
        } catch (err) {
            console.log(err);
        }
    },
    Deletecontact: async (req, res) => {
        try {
            console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
            const { id } = req.params
            await contact.findByIdAndDelete({ _id: id });
            console.log("contact detail Deleted Sucessfully");
            res.redirect('/admin/contact')
        } catch (err) {
            console.log(err);
        }
    },
 
   
}