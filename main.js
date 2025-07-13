// Eye icon toggle functionality
function toggleEye(columnId) {
    // Get the button and icon
    const button = document.querySelector(`button[data-column="${columnId}"]`);
    if (!button) {
        console.error(`Button for ${columnId} not found`);
        return;
    }

    const icon = button.querySelector('.icon-container i');
    if (!icon) {
        console.error(`Icon for ${columnId} not found`);
        return;
    }

    // Toggle the icon
    console.log(`Toggling icon for ${columnId}`);
    
    // Remove both classes first to ensure clean toggle
    icon.classList.remove('fa-eye', 'fa-eye-slash');
    
    // Add the opposite class
    if (icon.classList.contains('fa-eye')) {
        icon.classList.add('fa-eye-slash');
        console.log(`Set ${columnId} to eye-slash`);
    } else {
        icon.classList.add('fa-eye');
        console.log(`Set ${columnId} to eye`);
    }
}
const columnControlStrips = document.querySelectorAll('.column-control-strip');
columnControlStrips.forEach(strip => {
    const column = strip.closest('.column');
    const columnNumber = column.dataset.column;
    
    // Add click handler for column settings
    const settingsButton = strip.querySelector('.column-settings');
    if (settingsButton) {
        settingsButton.addEventListener('click', () => {
            updateStatus(`Opening settings for Column ${columnNumber}`);
            // TODO: Implement settings modal
        });
    }

    // Add resize functionality
    const resizeHandle = strip.querySelector('.column-resize-handle');
    if (resizeHandle) {
        let isResizing = false;
        let startX;
        let startWidth;

        resizeHandle.addEventListener('mousedown', (e) => {
            isResizing = true;
            startX = e.clientX;
            startWidth = column.offsetWidth;
            document.body.style.cursor = 'ew-resize';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            const width = startWidth + (e.clientX - startX);
            if (width > 200 && width < 400) {
                column.style.width = `${width}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            if (isResizing) {
                isResizing = false;
                document.body.style.cursor = 'default';
                updateStatus(`Column ${columnNumber} resized`);
            }
        });
    }
});

// Drag and drop functionality for items
const items = document.querySelectorAll('.column-item');
items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.textContent);
        item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});

// Make columns drop targets
const columnContents = document.querySelectorAll('.column-content');
columnContents.forEach(content => {
    content.addEventListener('dragover', (e) => {
        e.preventDefault();
        content.classList.add('drop-target');
    });

    content.addEventListener('dragleave', () => {
        content.classList.remove('drop-target');
    });

    content.addEventListener('drop', (e) => {
        e.preventDefault();
        content.classList.remove('drop-target');
        const data = e.dataTransfer.getData('text/plain');
        const item = document.createElement('div');
        item.className = 'column-item';
        item.textContent = data;
        item.draggable = true;
        content.appendChild(item);
        updateStatus('Item moved between columns');
    });
});
