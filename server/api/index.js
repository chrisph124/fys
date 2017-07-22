import { Router } from 'express'

import blogs from './blogs'

var router = Router()

// Add BLOGS Routes
router.use(blogs)

export default router
