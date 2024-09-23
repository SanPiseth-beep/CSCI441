exports.index = (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to the MVC App!' });
  };
  