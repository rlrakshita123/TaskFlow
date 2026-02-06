const express = require("express");
const {
  createTask,
  getUserTasks,
  deleteTask,
  updateTask,
  getSingleTask
} = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getUserTasks);
router.delete("/:id", authMiddleware, deleteTask);
router.put("/:id", authMiddleware, updateTask);
router.get("/:id", authMiddleware, getSingleTask);

module.exports = router;
