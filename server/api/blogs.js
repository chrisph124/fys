/**
 * Created by msi on 19/07/2017.
 */
import { Router } from 'express'
let router = Router()

const { db } = require('../pgp')
const Blog = require('../model/blog')
const blog = new Blog(db)

router.get('/blogs', (req, res, next) => {
  blog.selectBlog()
        .then(data => {
          res.json(data)
        })
})

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

export default router
