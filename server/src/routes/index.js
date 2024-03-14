import express from 'express'
import authRouter from './auth'

const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).send('api endpoint')
})

router.use('/auth', authRouter)

module.exports = router