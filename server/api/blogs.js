/**
 * Created by msi on 19/07/2017.
 */
import {Router} from 'express'
let router = Router();

const {db,} = require('../pgp');
const Blog = require('../model/blog');
const blog = new Blog(db);
const Promise = require('bluebird');

router.get('/blogs/index', (req, res, next) => {
  blog.selectAllBlog()
    .then(data => {
      res.json(data);
      //console.log(data)
    })
    .catch(error => {
      res.json({
        success: false,
        error: error.message || error
      });
    })
});

router.get('/blogs/:id', (req, res, next) => {
  let id = req.param.id;
  blog.detailBlog(id)
    .then(data => {
      res.json(data);
      console.log(data);
    })
    .catch(error => {
      res.json({
        success: false,
        error: error.message || error
      });
    })
});

export default router