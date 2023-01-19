const { check, validationResult } = require('express-validator');


const graduationform = [
    check("pg_collage")
      .isLength({min:2})
      .withMessage("Please enter a collage name.")
      .trim(),
      check("pg_start")
      .notEmpty()
      .withMessage("Please enter start year")
      .trim(),
      check("pg_end")
      .notEmpty()
      .withMessage("Please enter end year.")
      .trim(),
      check("pg_percentage")
      .notEmpty()
      .withMessage('Please enter percentage'),
      check("pg_location")
      .notEmpty()
      .withMessage('Enter location'),
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
    graduationform
  };