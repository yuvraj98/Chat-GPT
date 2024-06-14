const validateSignup = (req, res, next) => {
    const { firstname, lastname, username, email, password, confirmpassword } = req.body;
  
    if (!firstname || !lastname || !username || !email || !password || !confirmpassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    if (password !== confirmpassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
  
    next();
  };
  
  const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Both fields are required' });
    }
  
    next();
  };
  
  const validatePasswordReset = (req, res, next) => {
    const { email, newPassword } = req.body;
  
    if (!email || !newPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    next();
  };
  
  module.exports = { validateSignup, validateLogin, validatePasswordReset };
  