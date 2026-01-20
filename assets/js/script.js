document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".faq h3").forEach(q=>{
    q.addEventListener("click", ()=>{
      let ans=q.nextElementSibling;
      ans.style.display=ans.style.display==="block"?"none":"block";
    });
  });
});
