const generateAuthenticator = userDatabaseIsh => {
  return (req, res, next) => {
    console.log(userDatabaseIsh, req.path)
    const userObject = userDatabaseIsh[req.session.email]
    const whiteList = ['/', '/login']
    if (userObject || whiteList.includes(req.path)) {
      return next()
    }
    res.redirect('/')
  }

}

module.exports = generateAuthenticator