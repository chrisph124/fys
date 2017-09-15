/**
 * Created by msi on 19/08/2017.
 */
import Router from 'express'
let router = Router()

const db = require('../pgp')
const post = require('../model/post')

router.get('/posts/', (req, res, next) => {
  let q = parseInt(req.query.page)
  let n = 15
  let pgfrom = 0
  if (q !== undefined && q > 0) {
    pgfrom = (pgfrom + q - 1) * n
  } else {
    q = 1
  }

  db.task(t => {
    return t.batch([
      post.selectByPagination(n, pgfrom),
      post.countAll(),
      q
    ])
  })
    .then(data => {
      let page = 0
      data[1].forEach((index) => {
        page = Math.ceil(index.count / n, 0)
      })
      if (q > page) {
        q = 1
      }
      res.json({
        posts: data[0],
        countAll: data[1],
        allPages: page,
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
