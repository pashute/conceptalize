// Main application code
console.log('Conceptalize app initialized');

// Initialize status strip
const statusStrip = document.querySelector('.bottom-strip .strip-content');

// Update status function
function updateStatus(message) {
    statusStrip.textContent = `Status: ${message}`;
}

// Initial status
updateStatus('Ready');

// Add event listeners for column control strips
const columnControlStrips = document.querySelectorAll('.column-control-strip');
columnControlStrips.forEach(strip => {
    strip.addEventListener('click', () => {
        updateStatus(`Column ${strip.parentElement.parentElement.dataset.column} control clicked`);
    });
});
