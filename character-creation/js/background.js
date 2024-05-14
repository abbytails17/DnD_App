document.addEventListener('DOMContentLoaded', function() {
    // Fetch the background elements from the JSON file
    fetch('../data/backgrounds.json')
        .then(response => response.json())
        .then(data => {
            populateSelect('occupation', data.occupations);
            populateSelect('family-background', data.familyBackgrounds);
            populateSelect('education', data.education);
            populateSelect('life-event', data.significantLifeEvents);
            populateSelect('personality-trait', data.personalityTraits);
            populateSelect('ideal', data.ideals);
            populateSelect('bond', data.bonds);
            populateSelect('flaw', data.flaws);
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

    const form = document.getElementById('background-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const background = {
            occupation: document.getElementById('occupation').value,
            familyBackground: document.getElementById('family-background').value,
            education: document.getElementById('education').value,
            lifeEvent: document.getElementById('life-event').value,
            personalityTrait: document.getElementById('personality-trait').value,
            ideal: document.getElementById('ideal').value,
            bond: document.getElementById('bond').value,
            flaw: document.getElementById('flaw').value
        };
        console.log('Selected Background:', background);
        // Save background selection or move to the next step
    });
});