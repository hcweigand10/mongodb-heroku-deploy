const router = require('express').Router();
const libraryRoutes = require('./libraryRoutes');

router.use('/library', libraryRoutes);

module.exports = router;
