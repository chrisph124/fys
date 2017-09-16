/**
 * Created by msi on 19/07/2017.
 */
import Router from 'express'
let router = Router()

const db = require('../pgp')
const blog = require('../model/blog')

router.get('/get-cate-sidebar', (req, res, next) => {
  blog
    .selectCate()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
      res.json({
        success: false,
        error: error.message || error
      })
    })
})

router.get('/blogfornd', (req, res, next) => {
  blog
    .selectBlogForND()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
      res.json({
        success: false,
        error: error.message || error
      })
    })
})

router.get('/blogforda', (req, res, next) => {
  blog.selectBlogForDA().then(data => {
    res.json(data)
  })
})

router.get('/blogformv', (req, res, next) => {
  blog.selectBlogForMV().then(data => {
    res.json(data)
  })
})

router.get('/blog/:id', (req, res, next) => {
  let id = req.params.id
  blog
    .detailBlog(id)
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      res.json({
        success: false,
        error: error.message || error
      })
    })
})

router.get('/blogs/:slug', (req, res, next) => {
  let slug = req.params.slug
  let q = parseInt(req.query.page) || 1
  let n = 15
  let pgfrom = 0

  if (q !== undefined && q > 0) {
    pgfrom = (pgfrom + q - 1) * n
  } else {
    q = 1
  }

  db
    .task(t => {
      return t.batch([
        blog.selectBlogForCate(slug, n, pgfrom),
        blog.countByCate(slug),
        q
      ])
    })
    .then(data => {
      let page = 0
      data[1].forEach(index => {
        page = Math.ceil(index.count / n, 0)
      })
      if (q > page) {
        q = 1
      }
      res.json({
        blogs: data[0],
        countAll: data[1],
        allpage: page,
        pageCurrent: q
      })
    })
    .catch(error => {
      res.json({
        success: false,
        error: error.message || error
      })
    })
})

router.get('/blogs/', (req, res, next) => {
  let q = parseInt(req.query.trang)
  let n = 15
  let pgfrom = 0
  if (q !== undefined && q > 0) {
    pgfrom = (pgfrom + q - 1) * n
  } else {
    q = 1
  }

  db
    .task(t => {
      return t.batch([blog.selectByPagination(n, pgfrom), blog.countAll(), q])
    })
    .then(data => {
      let page = 0
      data[1].forEach(index => {
        page = Math.ceil(index.count / n, 0)
      })
      if (q > page) {
        q = 1
      }
      res.json({
        blogs: data[0],
        countAll: data[1],
        allpage: page,
        pageCurrent: q
      })
    })
    .catch(error => {
      res.json({
        success: false,
        error: error.message || error
      })
    })
})

export default router
