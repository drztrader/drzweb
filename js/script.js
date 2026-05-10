/* ========================= */
/* Loader */
/* ========================= */

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1000);
        }
    }, 1000); // Reduced from 2000 to 1000
});

/* ========================= */
/* Cursor */
/* ========================= */

const cursor = document.getElementById('cursor');

if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });

    document.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });
}

/* ========================= */
/* Hover Sound with Toggle */
/* ========================= */

const hoverSound = document.getElementById('hoverSound');
let soundEnabled = localStorage.getItem('soundEnabled') !== 'false';

const updateSoundToggle = () => {
    const toggle = document.querySelector('.sound-toggle');
    if (toggle) {
        toggle.innerHTML = soundEnabled ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
    }
};

const initSoundToggle = () => {
    const toggle = document.querySelector('.sound-toggle');
    if (toggle) {
        updateSoundToggle();
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            soundEnabled = !soundEnabled;
            localStorage.setItem('soundEnabled', soundEnabled);
            updateSoundToggle();
        });
    }
};

const playHoverSound = () => {
    if (soundEnabled && hoverSound) {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(e => console.log('Audio play failed:', e));
    }
};

// Add sound effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', playHoverSound);
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initSoundToggle);

/* ========================= */
/* Form Handling */
/* ========================= */

const initContactForm = () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Build mailto link
            const subject = `Contact from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailtoLink = `mailto:drzbusinesss@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            window.location.href = mailtoLink;
            
            // Reset form
            form.reset();
        });
    }
};

/* ========================= */
/* Copy Email to Clipboard */
/* ========================= */

const initCopyEmail = () => {
    const copyButton = document.querySelector('.copy-email');
    if (copyButton) {
        copyButton.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                await navigator.clipboard.writeText('drzbusinesss@gmail.com');
                const originalText = copyButton.textContent;
                copyButton.textContent = '✓ Copied!';
                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    }
};

/* ========================= */
/* Smooth Scroll Active Link */
/* ========================= */

const updateActiveLink = () => {
    const sections = document.querySelectorAll('.section, .hero');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            const sectionId = section.getAttribute('id');
            document.querySelectorAll('a[href^="#"]').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', updateActiveLink);

/* ========================= */
/* Enhanced Accessibility */
/* ========================= */

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any modals if needed
        document.querySelectorAll('[role="dialog"]').forEach(dialog => {
            if (dialog.open) dialog.close();
        });
    }
});

// Add skip to main content link
const addSkipLink = () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: white;
        color: black;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
};

document.addEventListener('DOMContentLoaded', () => {
    addSkipLink();
    initContactForm();
    initCopyEmail();
});

/* ========================= */
/* Scroll Animations */
/* ========================= */

const observeElements = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
};

document.addEventListener('DOMContentLoaded', observeElements);
