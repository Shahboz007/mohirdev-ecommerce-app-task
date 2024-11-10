const router = require("express").Router();
const {
    getUsersPage,
    getUpdateUserPage,
    updateUser,
    createUser,
    deleteUser,
    getCreateUserPage,
} = require("../../controllers/dashboard/dashboardUserController");
const roleMiddleware = require("../../middlewares/role");
const {protected} = require("../../middlewares/auth");

router.get("/",protected, roleMiddleware(['admin']), getUsersPage);
router.get("/create",protected, roleMiddleware(['admin']), getCreateUserPage);
router.post("/create",protected, roleMiddleware(['admin']), createUser);
router.get("/:id/update",protected, roleMiddleware(['admin']), getUpdateUserPage);
router.post("/:id/update",protected, roleMiddleware(['admin']), updateUser);
router.post("/:id/delete",protected, roleMiddleware(['admin']), deleteUser);

module.exports = router;
