

module.exports={
    // GetLogin: async (req, res) => {
    //     try {
         
    //             res.render('admin/login', { layout: "adminlayout" });
             
           
    //     } catch (err) {
    //         console.log(err);
    //         // Handle the error appropriately, such as sending an error response to the client
    //     }
    // },

    renderDashboard: async (req, res) => {
        try {
         
                res.render('admin/dashbord', { layout: "adminlayout" });
             
           
        } catch (err) {
            console.log(err);
        }
    },
  
   
}