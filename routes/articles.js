import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    console.log('/articles received get')
    return res.status(200).send({"msg":"ok"});
    // return res.send('/articles')
})

export default router;