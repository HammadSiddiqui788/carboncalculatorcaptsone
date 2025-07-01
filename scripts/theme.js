document.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) document.body.classList.add("dark");

  // Add toggle only if it doesn't already exist
  if (!document.getElementById("darkToggle")) {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      const label = document.createElement("label");
      label.style.color = "white";
      label.innerHTML = `
        <input id="darkToggle" type="checkbox" style="margin-right: 8px;">Dark Mode
      `;
      sidebar.appendChild(document.createElement("hr"));
      sidebar.appendChild(label);
    }
  }

  // Assign toggle after it might have been created
  const toggle = document.getElementById("darkToggle");
  if (toggle) {
    toggle.checked = isDark;
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
    });
  }
});
