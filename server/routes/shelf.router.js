const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware.js')


/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    console.log("/pet GET route");
    console.log("is authenticated?", req.isAuthenticated());
    console.log("user", req.user);
    let queryText = `SELECT * FROM "pets" WHERE user_id = $1`;
    pool
      .query(queryText, [req.user.id])
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/',rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log("/pet POST route");
  console.log(req.body);
  console.log("is authenticated?", req.isAuthenticated());
  console.log("user", req.user);
  let queryText = `INSERT INTO item (description, image_url, user_id) 
  VALUES ($1, $2, $3 )`;
  pool.query(queryText, [req.body.name, req.user.id]).then(result => {
    res.sendStatus(201);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
