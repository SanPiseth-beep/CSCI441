exports.index = (req, res) => {
    res.render('index', {title: 'Homepage', message: 'Welcome to the homepage!'});
  };
  
exports.homepage1 = (req, res) => {
    res.render('../public/pages/homepage1');
  };

