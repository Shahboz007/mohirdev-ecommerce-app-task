const router = require("express").Router();
const {
    getUsersPage,
    getUpdateUserPage,
    updateUser,
    createUser,
    deleteUser,
    getCreateUserPage,
} = require("../../controllers/dashboard/dashboardUserController");

router.get("/", getUsersPage);
router.get("/create", getCreateUserPage);
router.post("/create", createUser);
router.get("/:id/update", getUpdateUserPage);
router.post("/:id/update", updateUser);
router.post("/:id/delete", deleteUser);

module.exports = router;
