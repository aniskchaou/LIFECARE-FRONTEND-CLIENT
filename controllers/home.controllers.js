exports.getHome = async function (req, res, next) {
  res.render("elements/index", { viewTitle: 'Life Care' });
}


exports.getServices = async function (req, res, next) {
  res.render("elements/services", { viewTitle: 'Services' });
}

exports.getAbout = async function (req, res, next) {
  res.render("elements/about", { viewTitle: 'About' });
}

exports.getContact = async function (req, res, next) {
  res.render("elements/contact", { viewTitle: 'Contact' });
}