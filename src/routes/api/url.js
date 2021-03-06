const url = require('../../models/url.js');
const utilityDebugTool = require('utility_debug_tool');

module.exports = (express) => {
  const router = express.Router();

// create
  router.get('/urls', (req, res) => {
    url.findAll(((err) => {
      res.status(500).json(err);
    }), (data) => {
      res.status(200).json(data);
    });
  });

// Read One
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });


  // Delete
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Update
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
