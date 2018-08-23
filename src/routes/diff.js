module.exports = {
  post: (req, res) => {
    const diff = parseInt(req.body.a) - parseInt(req.body.b);
    res.status(200).json({diff});
  }
};
