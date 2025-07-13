class ConceptalizeApp {
    constructor() {
        this.columns = {
            discussion: document.querySelector('.discussion'),
            analysis: document.querySelector('.analysis'),
            concepts: document.querySelector('.concepts')
        };
        this.columnToggles = document.querySelectorAll('.column-toggle');
        this.tabButtons = document.querySelectorAll('.tab-button');

        this.initializeEventListeners();
        this.checkColumnVisibility();
    }

    initializeEventListeners() {
        document.querySelectorAll('[data-column]').forEach(button => {
            button.addEventListener('click', () => this.toggleColumn(button));
        });

        document.querySelectorAll('[data-tab]').forEach(button => {
            button.addEventListener('click', () => this.switchTab(button));
        });

        // Window resize event
        window.addEventListener('resize', () => this.checkColumnVisibility());
    }

    toggleColumn(toggleButton) {
        const columnId = toggleButton.dataset.column;
        const column = this.columns[columnId];
        const icon = toggleButton.querySelector('svg');

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
        const tabContent = document.querySelector('.tab-content');
        const panels = tabContent.querySelectorAll('.tab-panel');

        // Remove active class from all tabs
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
        });

        // Remove active class from all panels
        panels.forEach(panel => {
            panel.classList.remove('active');
        });

        // Add active class to selected tab
        tabButton.classList.add('active');

        // Add active class to corresponding panel
        const activePanel = tabContent.querySelector(`[data-tab="${tabId}"]`);
        if (activePanel) {
            activePanel.classList.add('active');
        }
    }

    checkColumnVisibility() {
        const visibleColumns = Object.values(this.columns)
            .filter(column => column.style.display !== 'none');

        const width = 100 / visibleColumns.length + '%';
        visibleColumns.forEach(column => {
            column.style.width = width;
            column.style.flex = `0 0 ${width}`;
        });

        if (visibleColumns.length === 1) {
            visibleColumns[0].style.width = '100%';
            visibleColumns[0].style.flex = '1 1 100%';
        }
    }
}

// Initialize the app when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    new ConceptalizeApp();
});
