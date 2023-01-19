const { check, validationResult } = require('express-validator');


const sscform = [
    check("school_name")
      .isLength({min:2})
      .withMessage("Please enter a school name.")
      .trim(),
      check("ssc_start")
      .notEmpty()
      .withMessage("Please enter start year")
      .trim(),
      check("ssc_end")
      .notEmpty()
      .withMessage("Please enter end year.")
      .trim(),
      check("ssc_percentage")
      .notEmpty()
      .withMessage('Please enter percentage'),
      check("ssc_location")
      .notEmpty()
      .withMessage('Enter Percentage'),
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
    sscform
  };