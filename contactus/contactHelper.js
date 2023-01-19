const { check, validationResult } = require('express-validator');


const contactform = [
    check("contact_location")
      .notEmpty()
      .withMessage("Please enter a contact location.")
      .trim(),
      check("contact_email")
      .notEmpty()
      .withMessage("Please enter contact email")
      .trim(),
      check("contact_phone")
      .notEmpty()
      .withMessage("Please enter contact number")
      .trim(),
      check("facebook")
      .notEmpty()
      .withMessage('Please enter facebook Profile Link'),
      check("linklin")
      .notEmpty()
      .withMessage('Enter linklin profile'),
      check("twitter")
      .notEmpty()
      .withMessage('Enter twitter profile'),
      check("github")
      .notEmpty()
      .withMessage('Enter github profile'),
    (req, res, next) => {
      const errors = validationResult(req);
     if (!errors.isEmpty()) {
        const Message = {};
        errors.array().forEach(i => {
          Message[i,"Error"] = i.msg;
        });
        const errorMessage = Message;
        // console.log(errorMessage,'errorMessage')
        res.status(400).json({
          status:false,
          errorMessage:errors.array()
        });
      } else next();
    }
  ];

  


module.exports ={
    contactform
  };