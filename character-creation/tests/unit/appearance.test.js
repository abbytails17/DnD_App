describe('Physical Appearance Selection', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <form id="appearance-form">
                <select id="hair-color">
                    <option value="black">Black</option>
                    <option value="brown">Brown</option>
                    <option value="blonde">Blonde</option>
                </select>
                <select id="eye-color">
                    <option value="brown">Brown</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
                <select id="skin-color">
                    <option value="fair">Fair</option>
                    <option value="light">Light</option>
                    <option value="medium">Medium</option>
                </select>
                <input type="number" id="height" value="170" min="50" max="250">
                <input type="number" id="weight" value="70" min="20" max="200">
                <textarea id="distinguishing-marks" rows="3">None</textarea>
                <select id="build">
                    <option value="slender">Slender</option>
                    <option value="athletic">Athletic</option>
                    <option value="muscular">Muscular</option>
                </select>
                <select id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="other">Other</option>
                </select>
                <button type="submit">Next</button>
            </form>
        `;
    });

    test('selects and submits appearance', () => {
        const form = document.getElementById('appearance-form');
        const hairColorSelect = document.getElementById('hair-color');
        const eyeColorSelect = document.getElementById('eye-color');
        const skinColorSelect = document.getElementById('skin-color');
        const heightInput = document.getElementById('height');
        const weightInput = document.getElementById('weight');
        const distinguishingMarksTextarea = document.getElementById('distinguishing-marks');
        const buildSelect = document.getElementById('build');
        const genderSelect = document.getElementById('gender');

        hairColorSelect.value = 'brown';
        eyeColorSelect.value = 'green';
        skinColorSelect.value = 'medium';
        heightInput.value = '180';
        weightInput.value = '75';
        distinguishingMarksTextarea.value = 'Scar on left cheek';
        buildSelect.value = 'athletic';
        genderSelect.value = 'non-binary';

        form.dispatchEvent(new Event('submit'));

        expect(hairColorSelect.value).toBe('brown');
        expect(eyeColorSelect.value).toBe('green');
        expect(skinColorSelect.value).toBe('medium');
        expect(heightInput.value).toBe('180');
        expect(weightInput.value).toBe('75');
        expect(distinguishingMarksTextarea.value).toBe('Scar on left cheek');
        expect(buildSelect.value).toBe('athletic');
        expect(genderSelect.value).toBe('non-binary');
    });
});
