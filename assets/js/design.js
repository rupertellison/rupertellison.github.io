document.addEventListener('DOMContentLoaded', function() {
  const gameContainers = document.querySelectorAll(".game-container");
  const content = document.querySelector('.content');

  gameContainers.forEach(container => {
    container.addEventListener("click", () => {
      const target = container.getAttribute("data-target");
      const article = document.getElementById(target);

      if (article) {
        window.scrollTo({top: 0, behavior: 'smooth'});

        // make content non-visible, article visible
        content.style.height = "0";
        content.style.opacity = "0";
        content.style.zIndex = "-1";

        article.style.height = "auto";
        article.style.opacity = "1";
        article.style.zIndex = "1";
      }
    });
  });

  const closeBtns = document.querySelectorAll(".close-btn");
  closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      const article = closeBtn.parentNode;

      if (article) {
        const articleId = article.getAttribute("id");
        const container = document.querySelectorAll(`[data-target=${articleId}]`)[0];
        const position = container.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({top: position, behavior: 'smooth'});

        // make content visible, article non-visible
        content.style.height = "auto";
        content.style.opacity = "1";
        content.style.zIndex = "1";

        article.style.height = "0";
        article.style.opacity = "0";
        article.style.zIndex = "-1";
      }
    });
  });
});
