// Require necessary packages and files
const router = require('express').Router();
const {
    addFriend,
    createUser,
    deleteUser,
    getSingleUser,
    getUsers,
    removeFriend,
    updateUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;