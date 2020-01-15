const express = require('express');

const dbActions = require('../db');

const router = express.Router();

router.use(express.json());

// GET all posts
router.get('/', (req, res) => {
  dbActions.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "The posts information could not be retrieved."
      })
    })
})

// GET post by id
router.get('/:id', (req, res) => {
  const id = req.params.id
  dbActions.findById(id)
    .then(post => {
      if(post[0].id) {
      res.status(200).json(post)
    } else {
      res.status(404).json({
        message: "The post with the specified ID does not exist."
      })
    }
  })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        error: "The post information could not be retrieved."
      })
    })
})

// DELETE request by id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  dbActions.remove(id)
    .then(post => {
      if(post > 0) {
        res.status(204).json({
          message: "The post with the specified ID has been removed."
        })
      } else {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        errorMessage: "The post could not be removed"
      })
    })
})

// PUT request by ID
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const reqBody = req.body;
  const reqTitle = req.body.title;
  const reqContents = req.body.contents;

  console.log(reqBody)

  if(reqTitle && reqContents) {
  dbActions.update(id, reqBody)
    .then(post => {
      if(post > 0) {
        res.status(201).json(reqBody)
      } else {
        res.status(404).json({message: "The post with the specified ID does not exist."})
      }
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "The post information could not be modified."
      })
    })
  } else {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    })
  }
})

// POST with title and contents
router.post('/', (req, res) => {
  const reqTitle = req.body.title;
  const reqContents = req.body.contents;

  if(reqTitle && reqContents) {
  dbActions.insert(req.body)
    .then(post => {
      res.status(201).json(req.body);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "There was an error while saving the post to the database"
      })
    })
  } else {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    })
  }
})

//



module.exports = router;