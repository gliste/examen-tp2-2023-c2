const express = require('express');
const router = express.Router();
const controller = require('../controllers/accounts');

router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;

    res.json(await controller.getAllAccounts(pageSize, page));
});

router.get('/:id', async (req, res) => {
    res.json(await controller.getAccount(req.params.id));
});

router.get('/data/accounts/:limit', (req, res) => {
    const limite = req.params.limit;
    const max = 10000;
    res.json(accounts.findAll(account => account.limit == max));
});


module.exports = router;