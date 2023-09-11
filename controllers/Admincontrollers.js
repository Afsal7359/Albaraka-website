const  adminlogin  = require("../models/adminlogin");



module.exports={

    GetLogin: async (req, res) => {
        try {
          
                res.render('admin/login', { layout: "adminlayout" });
                
        } catch (err) {
            console.log(err);
            // Handle the error appropriately, such as sending an error response to the client
        }
    },
    PostLogin: async (req, res) => {
        try {
            console.log(req.body);
            const { email, password } = req.body;

            const loginadmin = await adminlogin.findOne({ email });
            if (!loginadmin) {
                // res.render('admin/login', { layout: "adminlayout", adminlogin: true });
               
                res.redirect('/login')
            }
            let passwordCorrect
            if(password===loginadmin.password){
                passwordCorrect=true
            }else{
                passwordCorrect=false
            }
            // const passwordCorrect = await bcrypt.compare(password, loginadmin.password);
            if (!passwordCorrect) {
             
                res.redirect('/login')
            } else {
              
                res.redirect('/admin')
            }




        } catch (err) {
            console.log(err);
            // Handle the error appropriately, such as sending an error response to the client
        }
    },
    AdminLogout: async (req, res) => {
        try {
          
            res.redirect('/admin/login')
        } catch (err) {
            console.log(err);
        }

    },

    renderDashboard: async (req, res) => {
        try {
         
                res.render('admin/dashbord', { layout: "adminlayout" });
             
           
        } catch (err) {
            console.log(err);
        }
    },
  
   
}