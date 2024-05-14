document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appearance-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const hairColor = document.getElementById('hair-color').value;
        const eyeColor = document.getElementById('eye-color').value;
        console.log('Selected Hair Color:', hairColor);
        console.log('Selected Eye Color:', eyeColor);
        // Save appearance selection or move to the next step
        // Navigate to the next step (if any) or finish character creation
        // For example: window.location.href = 'summary.html';
    });
});
