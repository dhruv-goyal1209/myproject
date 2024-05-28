var nodemailer =require('nodemailer');
async function sendVarifyMail(email_to){
    var transporter=nodemailer.createTransport({
        service:"gmail",
        host:"mail.gmail.com",
        port:465,
        secure:false,
        auth:{
            user:"dilpreetsingh13122003@gmail.com",
            pass:"qcrbjjfcxyfmcahs"
        }
    });
    var mailmsg="<h1 style=\"color:red;\">Please click on the link to varify your email id</h1><br><a href=\"http://localhost:8080/varify?email="+email_to+"\">Click here</a>";
    try{
        var info= await transporter.sendMail({
            from:"dilpreetsingh13122003@gmail.com",
            to:email_to,
            subject:"Verify email for travel world",

            html:mailmsg
        });
    }
    catch(err){
        console.log(err);
    }

    if(info.messageId)
        return true;
    else
        return false;
    
}

module.exports=sendVarifyMail
