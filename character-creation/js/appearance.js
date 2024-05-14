document.addEventListener('DOMContentLoaded', function() {
    // Fetch the appearance elements from the JSON file
    fetch('../data/appearance.json')
        .then(response => response.json())
        .then(data => {
            populateSelect('hair-color', data.hairColors);
            populateSelect('eye-color', data.eyeColors);
            populateSelect('skin-color', data.skinColors);
            populateSelect('build', data.builds);
            populateSelect('gender', data.genders);
        });

    function populateSelect(elementId, options) {
        const select = document.getElementById(elementId);
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            select.appendChild(opt);
        });
    }

    const form = document.getElementById('appearance-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const appearance = {
            hairColor: document.getElementById('hair-color').value,
            eyeColor: document.getElementById('eye-color').value,
            skinColor: document.getElementById('skin-color').value,
            height: document.getElementById('height').value,
            weight: document.getElementById('weight').value,
            distinguishingMarks: document.getElementById('distinguishing-marks').value,
            build: document.getElementById('build').value,
            gender: document.getElementById('gender').value
        };
        console.log('Selected Appearance:', appearance);
        // Save appearance selection or move to the next step
        // For example: window.location.href = 'summary.html';
    });
});
