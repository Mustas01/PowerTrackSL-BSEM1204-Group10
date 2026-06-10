/* PowerTrack SL - JavaScript */

/* --- Theme Toggle --- */
function initTheme() {
    const toggleBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('powertrack-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply initial theme
    let isDark = false;
    if (savedTheme === 'dark') {
        isDark = true;
    } else if (savedTheme === 'light') {
        isDark = false;
    } else {
        isDark = prefersDark; // Use system preference if no saved theme
    }

    applyTheme(isDark);

    // Toggle on click
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const newDark = !document.documentElement.classList.contains('dark-mode');
            applyTheme(newDark);
            localStorage.setItem('powertrack-theme', newDark ? 'dark' : 'light');
        });
    }
}

function applyTheme(isDark) {
    const html = document.documentElement;
    const toggleBtn = document.getElementById('themeToggle');

    if (isDark) {
        html.classList.add('dark-mode');
        if (toggleBtn) {
            toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    } else {
        html.classList.remove('dark-mode');
        if (toggleBtn) {
            toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}

/* --- Mobile Menu Toggle --- */
function initMobileMenu() {
    const menuBtn = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

/* --- Report Form Handler --- */
function initReportForm() {
    const reportForm = document.querySelector('.standalone-form');
    if (reportForm) {
        reportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const location = document.getElementById('location').value;
            const issue = document.getElementById('issue').value;
            const notes = document.getElementById('notes').value;

            // Simple validation
            if (!location || !issue) {
                alert('Please fill in all required fields!');
                return;
            }

            // Show success message
            alert(`Report Submitted Successfully!\nLocation: ${location}\nIssue: ${issue}`);
            
            // Reset form
            reportForm.reset();
        });
    }
}

/* --- Initialize Everything on Load --- */
document.addEventListener('DOMContentLoaded', () => {
    console.log('PowerTrack SL loaded!');
    initTheme();
    initMobileMenu();
    initReportForm();
});
