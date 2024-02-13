const router = require('express').Router();
const { checkToken } = require('../../auth/token_validations');
const { createUser, getUsers, getUserById, updateUser, deleteUser, login } = require('./user.controller');
// const {create} = require('./user.service');

router.post('/', createUser);
router.get('/', checkToken, getUsers);
router.get('/:id', checkToken, getUserById);
router.patch('/', checkToken, updateUser);
router.delete('/', checkToken, deleteUser);
router.post('/login',login);


module.exports = router;