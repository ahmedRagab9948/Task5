document.querySelector(".bars-menu").addEventListener("click", () => {
    document.querySelector(".nav_items").classList.toggle("active");
  });
  
  document.querySelectorAll(".nav_link").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".nav_items").classList.toggle("active");
    });
  });