exports.index = (req, res) => {
    res.render('index', {title: 'Homepage', message: 'Welcome to the homepage!'});
  };

exports.homepage1 = (req, res) => {
    res.render('../public/pages/homepage1');
  };


exports.renting1 = (req, res) => {
  res.render('../public/pages/renting1');
};

exports.status = (req, res) => {
    res.render('../public/pages/status');
};
