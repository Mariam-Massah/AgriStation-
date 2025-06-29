document.addEventListener("DOMContentLoaded", function () {
  // ======= Temperature Chart =======
  const tempCtx = document.getElementById("temperatureChart").getContext("2d");

  const temperatureChart = new Chart(tempCtx, {
    type: "line",
    data: {
      labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "Temperature (°C)",
          data: [23, 25, 27, 26, 28, 29, 24],
          backgroundColor: "rgba(187, 108, 40, 0.2)",
          borderColor: "#bb6c28",
          borderWidth: 2,
          fill: true,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: "#333" } }
      },
      scales: {
        y: { ticks: { color: "#333" } },
        x: { ticks: { color: "#333" } }
      }
    }
  });

  // ======= Humidity Chart =======
  const humidityCtx = document.getElementById("humidityChart").getContext("2d");

  const humidityChart = new Chart(humidityCtx, {
    type: "bar",
    data: {
      labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "Humidity (%)",
          data: [55, 40, 62, 58, 30, 61, 63],
          backgroundColor: "#bb6c28",
          borderRadius: 8
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: "#333" } }
      },
      scales: {
        y: { beginAtZero: true, ticks: { color: "#333" } },
        x: { ticks: { color: "#333" } }
      }
    }
  });
});
