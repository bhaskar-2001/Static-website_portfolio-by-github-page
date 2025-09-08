
    // Theme toggle
    const toggleBtn = document.getElementById("themeToggle");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      const icon = toggleBtn.querySelector("i");
      if (document.body.classList.contains("light")) {
        icon.classList.replace("fa-moon", "fa-sun");
      } else {
        icon.classList.replace("fa-sun", "fa-moon");
      }
    });

    // Scroll reveal animations
    const sections = document.querySelectorAll("section");
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < triggerBottom) {
          sec.classList.add("show");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
