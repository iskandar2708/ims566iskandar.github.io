// Simple Login Check
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      if (user === "student" && pass === "12345") {
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("error").classList.remove("d-none");
      }
    });
  }

  // Chart.js for Dashboard
  const ctx = document.getElementById("attChart");
  if (ctx) {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Week 1","Week 2","Week 3","Week 4","Week 5"],
        datasets: [{
          label: "Attendance",
          data: [100, 90, 95, 92, 94],
          borderColor: "#6366f1",
          backgroundColor: "rgba(99,102,241,0.1)",
          borderWidth: 2,
          tension: 0.3
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });
  }
});
