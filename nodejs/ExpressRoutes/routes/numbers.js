import express from 'express';

import { createNumber,getNumber,deleteNumber,editNumber,editNumberPut } from '../controllers/numbers.js';

const router = express.Router();


router.get('/',getNumber);


router.post('/',createNumber);


router.delete('/',deleteNumber)

router.patch('/',editNumber)
router.put('/',editNumberPut)

export default router