        // JavaScript for additional interactivity
        const profileImg = document.querySelector('.profile-img img');

        // Enhanced hover effect for profile image
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        });

        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        // Contact button click effect
        const contactBtn = document.querySelector('.contact-btn');
        contactBtn.addEventListener('click', () => {
            contactBtn.innerHTML = 'Message Sent!';
            contactBtn.style.backgroundColor = 'rgba(0, 255, 157, 0.2)';
            setTimeout(() => {
                contactBtn.innerHTML = 'Contact Me';
                contactBtn.style.backgroundColor = 'transparent';
            }, 1500);
        });

        // Random glow effect for social icons
        const socialIcons = document.querySelectorAll('.social-icons a');

        setInterval(() => {
            const randomIcon = socialIcons[Math.floor(Math.random() * socialIcons.length)];
            randomIcon.style.boxShadow = '0 0 15px var(--accent)';

            setTimeout(() => {
                randomIcon.style.boxShadow = 'none';
            }, 500);
        }, 2000);
