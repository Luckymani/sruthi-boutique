const { Router } = require("express");
const { signup, login, authVerify } = require("../Controller/auth");

const router = Router();

router.post("/register", signup);
router.post("/login", login);
router.post("/authVerify", authVerify);

module.exports.authRouter = router;
