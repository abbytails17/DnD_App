function getSelectedValues() {
    const race = document.getElementById('race') ? document.getElementById('race').value : null;
    const cls = document.getElementById('class') ? document.getElementById('class').value : null;
    return { race, cls };
}

if (typeof document !== 'undefined') {
    const form = document.getElementById('race-class-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const { race, cls } = getSelectedValues();
            console.log('Selected Race:', race, '; Selected Class:', cls);
            // Further logic to save these choices or pass to the next step
        });
    }
}

module.exports = { getSelectedValues }; // Ensure this is at the bottom of your file