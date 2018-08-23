module.exports = {
  post: (req, res) => {
    const sum = parseInt(req.body.a) + parseInt(req.body.b);
    res.status(200).json({sum});
  }
};
