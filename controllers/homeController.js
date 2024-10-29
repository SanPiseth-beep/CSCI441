exports.index = (req, res) => {
    res.render('index', {title: 'Homepage', message: 'Welcome to the homepage!'});
  };

exports.renting1 = (req, res) => {
  res.render('../public/pages/renting1');
};
  