const router = require("express").Router();
const {
    getUsersPage,
    getUpdateUserPage,
    updateUser,
    createUser,
    deleteUser,
} = require("../../controllers/dashboard/dashboardUserController");

router.get("/", getUsersPage);
router.get("/", getUpdateUserPage);
router.post("/", createUser);
router.post("/:id", updateUser);
router.post("/:id", deleteUser);

module.exports = router;
