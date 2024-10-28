exports.index = (req, res) => {
    res.render('index', {title: 'Homepage', message: 'Welcome to the homepage!'});
  };
  