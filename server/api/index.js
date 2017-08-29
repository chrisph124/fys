import { Router } from 'express'

import blogs from './blogs'
import posts from './posts'

var router = Router()

// Add BLOGS Routes
router.use(blogs)
router.use(posts)

export default router
