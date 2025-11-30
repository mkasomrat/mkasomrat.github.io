    // Filters Tabs
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
tab.addEventListener('click', () =>{
const target = document.querySelector(tab.dataset.target)

tabContents.forEach(tc =>{
tc.classList.remove('filters_active')
})
target.classList.add('filters_active')

tabs.forEach(t =>{
t.classList.remove('filter-tab-active')
})
tab.classList.add('filter-tab-active')
})
})

// Dark Light Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
// Add or remove the dark / icon theme
document.body.classList.toggle(darkTheme)
themeButton.classList.toggle(iconTheme)
// We save the theme and the current icon that the user chose
localStorage.setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())
})

// Search Bar Functionality
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
const cards = document.querySelectorAll('.projects_card');

const filterCards = () => {
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('.projects_title').textContent.toLowerCase();
        const subtitle = card.querySelector('.projects_subtitle').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || subtitle.includes(searchTerm)) {
            // To ensure the grid doesn't break, we set the parent to flex
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none';
        }
    });
};

searchInput.addEventListener('input', filterCards);

searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the page from reloading on form submit
    filterCards();
});


// Scroll Reveal Animation
const sr = ScrollReveal({
origin: "top",
distance: "60px",
duration: 2500,
delay: 400,
})

sr.reveal(".profile_border")
sr.reveal(".profile_name", {delay: 500})
sr.reveal(".profile_profession", {delay: 600})
sr.reveal(".profile_social", {delay: 700})
sr.reveal(".profile_info_group", {interval: 100, delay: 700})
sr.reveal(".profile_buttons", {delay: 800})
sr.reveal(".search_bar", {delay: 850})
sr.reveal(".filters_content", {delay: 900})
sr.reveal(".filters", {delay: 1000}) 

//============== NEW BOOK VIEWER FUNCTIONALITY ==============
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.main');
    let originalMainContentHTML = mainContent.innerHTML;

    const attachBookLinkListeners = () => {
        const bookLinks = document.querySelectorAll('#notebooks .projects_button');
        bookLinks.forEach(link => {
            link.addEventListener('click', handleBookLinkClick);
        });
    };

    const handleBookLinkClick = (event) => {
        event.preventDefault();

        const link = event.currentTarget;
        const card = link.closest('.projects_card');
        const title = card.querySelector('.projects_title').textContent;
        const pdfUrl = link.href;

        if (pdfUrl.endsWith('###') || pdfUrl.endsWith('#')) {
            alert('The link for this book is not available yet.');
            return;
        }

        const bookViewerHTML = `
            <section class="container" style="padding: 2rem 0;">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h2 style="margin-bottom: 1rem;">${title}</h2>
                    <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                        <button id="read-online-btn" class="button">Read Online</button>
                        <a href="${pdfUrl}" class="button" download>Download</a>
                        <button id="back-to-notebooks" class="button button_gray">Back to Notebooks</button>
                    </div>
                </div>
                <div id="pdf-viewer-container" style="display: none;">
                    <iframe id="pdf-iframe" style="width: 100%; height: 80vh; border: 1px solid #ccc;" src="${pdfUrl}"></iframe>
                </div>
            </section>
        `;

        mainContent.innerHTML = bookViewerHTML;

        document.getElementById('read-online-btn').addEventListener('click', () => {
            const pdfViewerContainer = document.getElementById('pdf-viewer-container');
            pdfViewerContainer.style.display = 'block';
        });

        document.getElementById('back-to-notebooks').addEventListener('click', () => {
            mainContent.innerHTML = originalMainContentHTML;
            attachBookLinkListeners(); // Re-attach listeners to the restored content
            reinitializeSearch();
            reinitializeTabs();
        });
    };
    
    const reinitializeSearch = () => {
        const searchInput = document.getElementById('search-input');
        const searchForm = document.getElementById('search-form');
        const cards = document.querySelectorAll('.projects_card');

        const filterCards = () => {
            const searchTerm = searchInput.value.toLowerCase();
            cards.forEach(card => {
                const title = card.querySelector('.projects_title').textContent.toLowerCase();
                const subtitle = card.querySelector('.projects_subtitle').textContent.toLowerCase();
                if (title.includes(searchTerm) || subtitle.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        };

        if(searchInput) {
            searchInput.addEventListener('input', filterCards);
        }
        if(searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                filterCards();
            });
        }
    };
    
    const reinitializeTabs = () => {
        const tabs = document.querySelectorAll('[data-target]');
        const tabContents = document.querySelectorAll('[data-content]');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.target);

                tabContents.forEach(tc => {
                    tc.classList.remove('filters_active');
                });
                target.classList.add('filters_active');

                tabs.forEach(t => {
                    t.classList.remove('filter-tab-active');
                });
                tab.classList.add('filter-tab-active');
            });
        });
    };

    attachBookLinkListeners();
});
