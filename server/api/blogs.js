/**
 * Created by msi on 19/07/2017.
 */
import {Router} from 'express'
let router = Router();

const { db } = require('../pgp')
const Blog = require('../model/blog')
const blog = new Blog(db)

router.get('/blogs/index', (req, res, next) => {
  blog.selectBlog()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json({
        success: false,
        error: error.message || error
      });
    })
});

router.get('/blogfornd', (req, res, next) => {
  blog.selectBlogForND()
    .then(data => {
      res.json(data)
    })
})

router.get('/blogforda', (req, res, next) => {
  blog.selectBlogForDA()
    .then(data => {
      res.json(data)
    })
})

router.get('/blogformv', (req, res, next) => {
  blog.selectBlogForMV()
    .then(data => {
      res.json(data)
    })
})

router.get('/blogs/:id', (req, res, next) => {
  let id = req.params.id;
  blog.detailBlog(id)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json({
        success: false,
        error: error.message || error
      });
    })
});

export default router