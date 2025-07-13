class ConceptalizeApp {
    constructor() {
        this.columns = {
            discussion: document.querySelector('.discussion'),
            analysis: document.querySelector('.analysis'),
            concepts: document.querySelector('.concepts')
        };
        this.columnToggles = document.querySelectorAll('.column-toggle');
        this.tabButtons = document.querySelectorAll('.tab-button');
        this.tabPanels = document.querySelectorAll('.tab-panel');

        this.initializeEventListeners();
        this.checkColumnVisibility();
    }

    initializeEventListeners() {
        // Column toggle buttons
        this.columnToggles.forEach(toggle => {
            toggle.addEventListener('click', () => this.toggleColumn(toggle));
        });

        // Tab buttons
        this.tabButtons.forEach(button => {
            button.addEventListener('click', () => this.switchTab(button));
        });

        // Window resize event
        window.addEventListener('resize', () => this.checkColumnVisibility());
    }

    toggleColumn(toggleButton) {
        const columnId = toggleButton.dataset.column;
        const column = this.columns[columnId];
        const icon = toggleButton.querySelector('.icon');

        if (column.style.display === 'none' || !column.style.display) {
            column.style.display = 'flex';
            icon.classList.remove('opacity-50');
            column.classList.remove('hidden');
            column.classList.add('flex');
        } else {
            column.style.display = 'none';
            icon.classList.add('opacity-50');
            column.classList.add('hidden');
            column.classList.remove('flex');
        }

        this.checkColumnVisibility();
    }

    switchTab(tabButton) {
        const tabId = tabButton.dataset.tab;
        const parent = tabButton.parentElement;
        const currentTab = parent.querySelector('.tab-button.active');

        // Remove active class from current tab
        if (currentTab) {
            currentTab.classList.remove('active');
        }

        // Add active class to new tab
        tabButton.classList.add('active');

        // Show/hide tab panels
        this.tabPanels.forEach(panel => {
            if (panel.dataset.tab === tabId) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }

    checkColumnVisibility() {
        const visibleColumns = Object.values(this.columns)
            .filter(column => column.style.display !== 'none');

        // Adjust column width based on number of visible columns
        const width = 100 / visibleColumns.length + '%';
        visibleColumns.forEach(column => {
            column.style.width = width;
            column.style.flex = `0 0 ${width}`;
        });

        // If only one column is visible, make it full width
        if (visibleColumns.length === 1) {
            visibleColumns[0].style.width = '100%';
            visibleColumns[0].style.flex = '1 1 100%';
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ConceptalizeApp();
});
