function toggleSection(sectionId, arrowId) {
  var sectionContent = document.getElementById(sectionId);
  var arrow = document.getElementById(arrowId);
  sectionContent.style.display =
    sectionContent.style.display === "block" ? "none" : "block";
  arrow.classList.toggle("collapsed");
}

function render(pagePath, targetId) {
  var sectionContent = document.getElementById("content");
  var sidebarSections = document.querySelectorAll(".sidebar-section");

  // Reset the color of all sidebar sections to black
  sidebarSections.forEach(function (section) {
    section.style.color = "black";
  });

  // Change the color of the clicked section
  var clickedSection = document.getElementById(targetId);
  clickedSection.style.color = "#EC609B";

  // Simulate loading content from the specified HTML page
  fetch(pagePath)
    .then((response) => response.text())
    .then((html) => {
      sectionContent.innerHTML = html;
    });

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
