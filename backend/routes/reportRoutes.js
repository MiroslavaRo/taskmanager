const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { exportTasksReport, exportUsersReport } = require("../controllers/reportController");

const router = express.Router();

//Auth Routes
router.get("/export/tasks", protect, adminOnly, exportTasksReport); //Export as Excel/PDF
router.get("/export/users", protect, adminOnly, exportUsersReport); //Export user-task report


module.exports = router;