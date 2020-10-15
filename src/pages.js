module.exports = {
  index(req, res) {
    const city = req.query.city;
    return res.render("index", { city });
  },

  orphanage(req, res) {
    return res.render("orphanage");
  },

  orpanages(req, res) {
    return res.render("orphanages");
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },
};
