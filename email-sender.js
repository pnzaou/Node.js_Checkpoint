var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Votre email',
    pass: 'votre mot de passe'
  }
});

var mailOptions = {
  from: 'Votre email',
  to: 'l\'Email  de la personne à qui vous envoyez',
  subject: 'Sujet de votre mail',
  text: 'Son contenu'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});