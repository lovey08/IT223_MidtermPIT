document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("hireBadge").addEventListener("click", function () {
    $("#hireOverlay").addClass("active");
  });

  $("#toggleSkills").on("click", function () {
    $("#skillsWrap").toggle(300);
    $(this).text($("#skillsWrap").is(":visible") ? "▴ Hide Skills" : "▾ Show / Hide Skills");
  });

  $(".filter-btn").on("click", function () {
    $(".filter-btn").removeClass("active"); $(this).addClass("active");
    let f = $(this).data("filter");
    $("#projectList li").each(function () {
      $(this)[f === "all" || $(this).data("cat") === f ? "show" : "hide"]();
    });
    $("#search").val("");
  });

  document.getElementById("search").addEventListener("keyup", function () {
    let f = this.value.toLowerCase();
    document.querySelectorAll("#projectList li").forEach(li =>
      li.style.display = li.querySelector(".proj-title").textContent.toLowerCase().includes(f) ? "" : "none"
    );
  });

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let ok = ["name","email","message"].every(id => document.getElementById(id).value.trim());
    let msg = document.getElementById("formMessage");
    msg.style.color = ok ? "" : "#e91e63";
    msg.innerText = ok ? "✓ Message sent! I'll get back to you soon." : "✕ Please fill out all fields.";
    if (ok) this.reset();
  });


  $("#darkToggle").on("click", function () {
    $("body").toggleClass("dark");
    $(this).text($("body").hasClass("dark") ? "◑" : "◐");
  });

  $("#hireMeBtn").on("click", function () {
    $("#hireOverlay").addClass("active");
  });

  $("#hireClose, #hireOverlay").on("click", function (e) {
    if (e.target === this) $("#hireOverlay").removeClass("active");
  });

  $("#hireCTA").on("click", function () {
    $("#hireOverlay").removeClass("active");
  });

});