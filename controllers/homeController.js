exports.index = (req, res) => {
    res.render('index', {title: 'Homepage', message: 'Welcome to the homepage!'});
  };

exports.homepage1 = (req, res) => {
    res.render('../public/pages/homepage1');
  };


exports.renting1 = (req, res) => {
  res.render('../public/pages/renting1');
};

exports.confirmation = (req, res) => {
  res.render('../public/pages/success.ejs');
};

exports.signedIn = (req, res) => {
  res.render('../public/pages/signedIn.ejs');
};

exports.return = (req, res) => {
  res.render('../public/pages/return.ejs');
};