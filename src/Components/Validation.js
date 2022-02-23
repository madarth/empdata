import validator from 'validator';

/*
 * This class contains methods for validating fields using 'validator.js' library methods
 * The methods return error message if validation failed and false otherwise
 * You can use all supported validators and sanitizers of 'validator.js' libaray
 * See their docs here https://github.com/validatorjs/validator.js
 */

class ValidateFields {
  /*
   * A method that takes in the email
   * Validates it
   * Returns the response either error or false if there is no error
   */
  validateName(name) {
    if (validator.isEmpty(name)) {
      return 'Name is required';
    } 
    // else if (!validator.isString(name)) {
    //   return 'Invalid Email';
    // }
    return false;
  }


  validateEmail(email) {
    if (validator.isEmpty(email)) {
      return 'Email is required';
    } else if (!validator.isEmail(email)) {
      return 'Invalid Email';
    }
    return false;
  }

  validateYourid(yourid) {
    if (validator.isEmpty(yourid)) {
      return 'Please Enter Id Number';
    } 
    // else if (!validator.isString(name)) {
    //   return 'Invalid Email';
    // }
    return false;
  }

  validateYourrole(yourrole) {
    if (validator.isEmpty(yourrole)) {
      return 'Your Role is required';
    } 
    // else if (!validator.isString(name)) {
    //   return 'Invalid Email';
    // }
    return false;
  }

  validateDatejoining(datejoining) {
    if (validator.isEmpty(datejoining)) {
      return 'Date of Joining is required';
    } 
    // else if (!validator.isString(name)) {
    //   return 'Invalid Email';
    // }
    return false;
  }

  validateDatebirth(datebirth) {
    if (validator.isEmpty(datebirth)) {
      return 'Date of Birth is required';
    } 
    // else if (!validator.isString(name)) {
    //   return 'Invalid Email';
    // }
    return false;
  }

  validatePassword(password) {
    if (validator.isEmpty(password)) {
      return 'Password is required';
    } else if (!validator.isLength(password, { min: 8 })) {
      return 'Password should be minimum 8 characters';
    }
    return false;
  }
  
  validateConfirmpassword(confirmpassword) {
    if (validator.isEmpty(confirmpassword)) {
      return 'Password is required';
    } else if (!validator.isLength(confirmpassword, { min: 8 })) {
      return 'Password should be minimum 8 characters';
    }
    return false;
  }  
}



const validateFields = new ValidateFields();

// export the class instance, so we can import and use it anywhere
export { validateFields };