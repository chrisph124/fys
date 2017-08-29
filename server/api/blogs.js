/**
 * Created by msi on 19/07/2017.
 */
import {Router} from 'express'
let router = Router()

const {db} = require('../pgp')
const Blog = require('../model/blog')
const blog = new Blog(db)

router.get('/blogs/index', (req, res, next) => {
  blog.selectBlog()
    .then(data => {
      res.json({blogs: data})
    })
    .catch(error => {
      res.json({
        success: false,
        error: error.message || error
      })
    })
})

router.get('/blogfornd', (req, res, next) => {
  blog.selectBlogForND()
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
  let id = req.params.id
  blog.detailBlog(id)
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

router.get('/blogs/cate/:id', (req, res, next) => {
  /*let id = req.params.id;
  blog.selectBlogForCate(id)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json({
        success: false,
        error: error.message || error
      });
    }) */
  let id = req.params.id
  let q = parseInt(req.query.page) || 1
  let n = 15
  let pgfrom = 0
  if (q != undefined && q > 0) {
    pgfrom = (pgfrom + q - 1) * n
  } else {
    q = 1
  }

  db.task(t => {
    return t.batch([
      blog.selectBlogForCate(id, n, pgfrom),
      blog.countByCate(id),
      q
    ])
  })
    .then(data => {
      let countAll = 0
      let page = 0
      data[1].forEach((index) => {
        countAll = index.count
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
  // console.log(req.query)
  let q = parseInt(req.query.page)
  let n = 15
  let pgfrom = 0
  if (q != undefined && q > 0) {
    pgfrom = (pgfrom + q - 1) * n
  } else {
    q = 1
  }

  db.task(t => {
    return t.batch([
      blog.selectByPagination(n, pgfrom),
      blog.countAll(),
      q
    ])
  })
    .then(data => {
      let countAll = 0
      let page = 0
      data[1].forEach((index) => {
        countAll = index.count
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
