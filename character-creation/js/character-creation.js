document.addEventListener('DOMContentLoaded', function() {
    const attributes = {
        strength: 8,
        intelligence: 8,
        wisdom: 8,
        dexterity: 8,
        constitution: 8,
        charisma: 8
    };
    const totalPoints = 27;
    let remainingPoints = totalPoints;

    function updateAttributesDisplay() {
        const attributesContainer = document.getElementById('attributes-container');
        attributesContainer.innerHTML = ''; // Clear previous content
        Object.keys(attributes).forEach(attr => {
            const attributeElement = document.createElement('div');
            attributeElement.innerHTML = `
                <label for="${attr}">${attr.charAt(0).toUpperCase() + attr.slice(1)}:</label>
                <input type="number" id="${attr}" name="${attr}" value="${attributes[attr]}" min="8" max="15">
            `;
            attributesContainer.appendChild(attributeElement);

            document.getElementById(attr).addEventListener('change', function(e) {
                const newValue = parseInt(e.target.value);
                const difference = newValue - attributes[attr];
                if (remainingPoints - difference >= 0 && newValue >= 8 && newValue <= 15) {
                    attributes[attr] = newValue;
                    remainingPoints -= difference;
                } else {
                    e.target.value = attributes[attr]; // Reset to previous value
                    alert('Invalid attribute value or not enough points');
                }
            });
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Submitted character data:', {
            race: document.getElementById('race').value,
            class: document.getElementById('class').value,
            attributes
        });
        // Additional logic to save or use this data
        // Navigate to background selection
        window.location.href = 'background.html';
    }

    document.getElementById('character-form').addEventListener('submit', handleSubmit);

    updateAttributesDisplay(); // Initialize the attributes section
});
