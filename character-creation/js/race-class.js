function getSelectedValues() {
    const race = document.getElementById('race') ? document.getElementById('race').value : null;
    const cls = document.getElementById('class') ? document.getElementById('class').value : null;
    return { race, cls };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getSelectedValues }; // Export for testing
}

// Attach event listener only if document object exists (i.e., in browser or Electron, not Node)
if (typeof document !== 'undefined') {
    document.getElementById('race-class-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const { race, cls } = getSelectedValues();
        console.log('Selected Race:', race, '; Selected Class:', cls);
        // Logic to save these choices or pass to the next step
    });
}
