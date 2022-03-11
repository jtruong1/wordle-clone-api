// Ensure that the request has a state object
module.exports = (req, res, next) => {
  if (req.path !== '/' && !req.body.state) {
    return res.status(400).send({
      error: 'Missing state object',
    });
  }

  next();
};
