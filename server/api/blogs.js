/**
 * Created by msi on 19/07/2017.
 */
import { Router } from 'express'
let router = Router()

const { db, } = require('../pgp')
const Blog = require('../model/blog')
const blog = new Blog(db)
const Promise = require('bluebird');

router.get('/blogs', (req, res, next) => {
    blog.selectBlog()
        .then(data => {
            res.json(data)
            //console.log(data)
        })

})

export default router