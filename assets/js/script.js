document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".faq h3");
  questions.forEach(q => {
    q.addEventListener("click", () => {
      const ans = q.nextElementSibling;
      ans.style.display = ans.style.display === "block" ? "none" : "block";
    });
  });
});
