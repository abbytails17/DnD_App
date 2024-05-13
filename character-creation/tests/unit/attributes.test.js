const AttributeManager = require('../../js/attributes');  // Adjust the path as necessary

describe('AttributeManager', () => {
    let manager;

    beforeEach(() => {
        // Set up the necessary HTML elements
        document.body.innerHTML = `
            <div id="attributes-section">
                <p>Points Remaining: <span id="points-remaining">27</span></p>
                <input type="number" id="strength" value="8">
                <input type="number" id="intelligence" value="8">
                <input type="number" id="charisma" value="8">
                <input type="number" id="wisdom" value="8">
                <input type="number" id="constitution" value="8">
                <input type="number" id="dexterity" value="8">
            </div>
        `;
        manager = new AttributeManager(27);
    });

    test('initializes with correct total and remaining points', () => {
        expect(manager.totalPoints).toBe(27);
        expect(manager.remainingPoints).toBe(27);
    });

    test('updates an attribute correctly within point limits', () => {
        manager.updateAttribute('strength', 10);
        expect(manager.attributes.strength).toBe(10);
        expect(manager.remainingPoints).toBe(25); // 27 - (10 - 8)
    });

    test('prevents attribute update that exceeds remaining points', () => {
        manager.updateAttribute('strength', 20); // This should fail due to max limit
        expect(manager.attributes.strength).toBe(8); // Should not change
        expect(manager.remainingPoints).toBe(27); // Should not change
    });

    test('handles multiple attribute updates correctly', () => {
        manager.updateAttribute('strength', 10);
        manager.updateAttribute('intelligence', 12);
        expect(manager.remainingPoints).toBe(21); // 27 - (10 - 8) - (12 - 8)
        expect(manager.attributes.strength).toBe(10);
        expect(manager.attributes.intelligence).toBe(12);
    });

    test('does not allow setting attributes below the base value of 8', () => {
        manager.updateAttribute('strength', 7); // Should not be allowed
        expect(manager.attributes.strength).toBe(8); // Should remain at the minimum
    });
    
    test('does not allow setting attributes above the maximum value of 15', () => {
        manager.updateAttribute('strength', 16); // Should not be allowed
        expect(manager.attributes.strength).toBe(8); // Should remain unchanged
    });
});
