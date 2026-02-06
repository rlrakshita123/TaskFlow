import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/api";
import "../styles/task.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const navigate = useNavigate();

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }

    if (sortBy === "priority") {
      const order = { high: 1, medium: 2, low: 3 };
      return order[a.priority] - order[b.priority];
    }

    if (sortBy === "status") {
      return a.status.localeCompare(b.status);
    }

    return 0;
  });

  const handleDelete = async (taskId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;
    try {
      await deleteTask(taskId);
      setTasks((prev) => prev.filter((task) => task._id !== taskId));
      console.log("Deleting task id:", taskId);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Your Tasks</h1>
      <div className="dashboard-top">
        <div className="task-summary">
          <p className="summary-label">Total Tasks</p>
          <p className="summary-count">{tasks.length}</p>
        </div>
        <div className="sort-wrapper">
          <label htmlFor="sort" className="sort-label">
            Sort by
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-dropdown"
          >
            <option value="latest">Latest</option>
            <option value="priority">Priority</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <p className="empty-text">No tasks yet.</p>

          <button
            className="empty-cta"
            onClick={() => navigate("/create")}
          >
            Create your first task →
          </button>
        </div>

      ) : (
        
        <div className="task-grid">
          {sortedTasks.map((task) => (
            <div key={task._id} className="task-card">
              <div className="task-header">
                <h3>{task.title}</h3>
                <span className={`priority-badge ${task.priority}`}>
                  {task.priority}
                </span>
              </div>

              <p className="task-desc">{task.description}</p>

              <p className="task-status">
                Status: <strong>{task.status}</strong>
              </p>
              <p className="task-time">
                Last updated: {formatDate(task.updatedAt)}
              </p>
              <div className="task-actions">
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/edit/${task._id}`)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
