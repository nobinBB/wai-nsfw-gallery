   
        // Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const body = document.body;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (mobileMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('.top-btn');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // TOP button functionality
        const topBtns = document.querySelectorAll('a[href="#top"]');
        topBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Lightbox functionality
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = lightbox.querySelector('img');
        const lightboxClose = lightbox.querySelector('.lightbox-close');
        const galleryItems = document.querySelectorAll('.gallery-item');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Hide scroll indicator when scrolling
        let scrollTimer;
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        window.addEventListener('scroll', () => {
            scrollIndicator.style.opacity = '0';
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                if (window.scrollY < 100) {
                    scrollIndicator.style.opacity = '1';
                }
            }, 1000);
        });

        // Add loading class to images
        galleryItems.forEach(item => {
            const img = item.querySelector('img');
            item.classList.add('loading');
            
            img.addEventListener('load', () => {
                item.classList.remove('loading');
            });
        });

        // Parallax effect on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const flowLines = document.querySelector('.flow-lines');
            flowLines.style.transform = `translateY(${scrolled * 0.5}px)`;
        });

        // Dynamic flow lines
        function createFlowLine() {
            const flowLines = document.querySelector('.flow-lines');
            const line = document.createElement('div');
            line.className = 'flow-line';
            line.style.left = Math.random() * 100 + '%';
            line.style.animationDelay = Math.random() * 8 + 's';
            line.style.opacity = Math.random() * 0.3 + 0.1;
            flowLines.appendChild(line);
            
            setTimeout(() => {
                line.remove();
            }, 8000);
        }

        // Create additional flow lines periodically
        setInterval(createFlowLine, 2000);

        // Close mobile menu when resizing to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
            }
        });
