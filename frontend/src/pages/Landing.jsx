import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
   const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleCreateTask = () => {
    if (token) {
      navigate("/create");
    } else {
      navigate("/login", {
        state: { from: "/create" },
      });
    }
  };
  return (
    <>
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Manage Your Tasks Effortlessly</h1>
        <p>
          Stay organized, track progress, and boost your productivity with
          TaskFlow.
        </p>
       <button className="hero-btn" onClick={handleCreateTask}>
          Create Task
        </button>
      </div>
    </section>
      <section className="how-it-works">
        <h2 className="section-title">How TaskFlow Works</h2>

        <div className="steps-container">
          <div className="step-card">
            <span className="step-number">1</span>
            <h3>Create an Account</h3>
            <p>
              Sign up or log in securely to access your personal task dashboard.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">2</span>
            <h3>Create & Manage Tasks</h3>
            <p>
              Add tasks with priority and status, and manage them effortlessly.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">3</span>
            <h3>Track & Update Progress</h3>
            <p>
              Edit, update, or delete tasks anytime and stay on top of your work.
            </p>
          </div>
        </div>
      </section>
    </>

  );
};

export default Landing;
