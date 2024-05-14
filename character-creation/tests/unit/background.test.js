describe('Background Selection', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <form id="background-form">
                <select id="occupation">
                    <option value="farmer">Farmer</option>
                    <option value="merchant">Merchant</option>
                    <option value="soldier">Soldier</option>
                </select>
                <select id="family-background">
                    <option value="noble">Noble family</option>
                    <option value="commoner">Commoner family</option>
                </select>
                <select id="education">
                    <option value="formal">Formal education in a school or academy</option>
                    <option value="apprenticeship">Apprenticeship with a mentor</option>
                </select>
                <select id="life-event">
                    <option value="disaster">Survived a natural disaster</option>
                    <option value="crime">Witnessed a crime</option>
                </select>
                <select id="personality-trait">
                    <option value="brave">Brave</option>
                    <option value="curious">Curious</option>
                </select>
                <select id="ideal">
                    <option value="justice">Justice</option>
                    <option value="freedom">Freedom</option>
                </select>
                <select id="bond">
                    <option value="family">Family</option>
                    <option value="friends">Friends</option>
                </select>
                <select id="flaw">
                    <option value="greed">Greed</option>
                    <option value="envy">Envy</option>
                </select>
                <button type="submit">Next</button>
            </form>
        `;
    });

    test('selects and submits background', () => {
        const form = document.getElementById('background-form');
        const occupationSelect = document.getElementById('occupation');
        const familyBackgroundSelect = document.getElementById('family-background');
        const educationSelect = document.getElementById('education');
        const lifeEventSelect = document.getElementById('life-event');
        const personalityTraitSelect = document.getElementById('personality-trait');
        const idealSelect = document.getElementById('ideal');
        const bondSelect = document.getElementById('bond');
        const flawSelect = document.getElementById('flaw');

        occupationSelect.value = 'merchant';
        familyBackgroundSelect.value = 'noble';
        educationSelect.value = 'apprenticeship';
        lifeEventSelect.value = 'crime';
        personalityTraitSelect.value = 'curious';
        idealSelect.value = 'freedom';
        bondSelect.value = 'friends';
        flawSelect.value = 'envy';

        form.dispatchEvent(new Event('submit'));

        expect(occupationSelect.value).toBe('merchant');
        expect(familyBackgroundSelect.value).toBe('noble');
        expect(educationSelect.value).toBe('apprenticeship');
        expect(lifeEventSelect.value).toBe('crime');
        expect(personalityTraitSelect.value).toBe('curious');
        expect(idealSelect.value).toBe('freedom');
        expect(bondSelect.value).toBe('friends');
        expect(flawSelect.value).toBe('envy');
    });
});
