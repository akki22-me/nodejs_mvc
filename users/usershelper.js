const { check, validationResult } = require('express-validator');


const validateUser = [
    check("user_email")
      .isEmail()
      .withMessage("Please enter a valid email address.")
      .trim(),
      check("user_name")
      .isLength({min:2})
      .withMessage("Please add user name with at least 2 characters long")
      .trim(),
    check("user_password")
      .isLength({ min: 6 })
      .withMessage("Please add a password with at least 6 characters long.")
      .trim(),
      check("password").custom((value,{req})=>{
         if(value !== req.body.confirmpass){
            // return res.status(400).json({
            //     status:false,
            //     errorMessage:"Confirmpass not match"
            //   });
            throw new Error('Password confirmation does not match password');
         }
          // Indicates the success of this synchronous custom validator
    return true;
      }),
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

  const loginuser = [
    check("user_email")
      .isEmail()
      .withMessage("Please enter a valid email address.")
      .trim(),
    check("user_password")
      .isLength({ min: 6 })
      .withMessage("Please add a password with at least 6 characters long.")
      .trim(),
      check("password").custom((value,{req})=>{
         if(value !== req.body.confirmpass){
            // return res.status(400).json({
            //     status:false,
            //     errorMessage:"Confirmpass not match"
            //   });
            throw new Error('Password confirmation does not match password');
         }
          // Indicates the success of this synchronous custom validator
    return true;
      }),
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
    validateUser,
    loginuser
  };