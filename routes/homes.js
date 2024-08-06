import { Router } from 'express'
import * as homesCtrl from '../controllers/homes.js'

const router = Router()

// GET localhost:3000/users
router.get('/', homesCtrl.index)
router.get('/new', homesCtrl.new)

router.post('/', homesCtrl.create)
router.delete('/:toyId', homesCtrl.delete)

export { router }
