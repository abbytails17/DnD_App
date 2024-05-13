class AttributeManager {
    constructor(totalPoints) {
        this.totalPoints = totalPoints;
        this.remainingPoints = totalPoints;
        this.attributes = {
            strength: 8,
            intelligence: 8,
            charisma: 8,
            wisdom: 8,
            constitution: 8,
            dexterity: 8
        };
        this.minAttributeValue = 8;
        this.maxAttributeValue = 15;
    }

    updateAttribute(attribute, value) {
        // Calculate the difference from the current value
        const currentAttributeValue = this.attributes[attribute];
        const difference = value - currentAttributeValue;

        // Check if the new value is within the allowed range
        if (value < this.minAttributeValue || value > this.maxAttributeValue) {
            console.error(`Value for ${attribute} must be between ${this.minAttributeValue} and ${this.maxAttributeValue}.`);
            return;
        }

        // Check if there are enough points remaining to make the update
        if (this.remainingPoints - difference < 0) {
            console.error('Not enough points remaining to increase attribute.');
            return;
        }

        // Update the attribute value and remaining points
        this.attributes[attribute] = value;
        this.remainingPoints -= difference;
        // Assuming DOM elements are properly referenced for updating UI
        document.getElementById('points-remaining').textContent = this.remainingPoints;
        document.getElementById(attribute).value = value;
    }
}

const attributeManager = new AttributeManager(27);
document.querySelectorAll('.attribute input').forEach(input => {
    input.addEventListener('change', () => {
        attributeManager.updateAttribute(input.id, parseInt(input.value));
    });
});

module.exports = AttributeManager;