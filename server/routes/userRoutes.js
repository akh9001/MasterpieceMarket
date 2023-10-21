const express = require('express');
const { addUser, login, deleteUser, getAllUsers, getUSerById, search, updateUser } = require('../controllers/userController');
const router = express.Router();
const { authentication, checkUserRole, refreshToken } = require('../middleware/authMiddleware');

// Define your middleware for admin and manager roles


// implement register route
router.post('/', addUser);

// implement login route
router.post('/login', login);

// Implement token refresh logic here to issue a new JWT token
router.post('/refresh-token', refreshToken)


// implement get all users route
router.get('/', authentication, checkUserRole(["admin"]), getAllUsers);

// Implement Search for users by username route
router.get('/search/', authentication, checkUserRole(["admin", "manager"]), search);

// Implement get user by ID route
router.get('/:id', authentication, checkUserRole(["admin", "manager"]), getUSerById);

// Implement get user by ID route
router.put('/:id', authentication, checkUserRole(["admin"]), updateUser);

// Implement delete user route
router.delete('/:id', deleteUser)

module.exports = router;
