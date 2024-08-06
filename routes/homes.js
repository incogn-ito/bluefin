import { Router } from 'express'
import * as homesCtrl from '../controllers/homes.js'

const router = Router()

// GET localhost:3000/users
router.get('/', homesCtrl.index)
router.get('/new', homesCtrl.new)
router.get('/:homeId', homesCtrl.show)
router.get('/:homeId/edit', homesCtrl.edit)
router.post('/', homesCtrl.create)
router.delete('/:homeId', homesCtrl.delete)
router.put('/:homeId', homesCtrl.update)

export { router }
