describe('Physical Appearance Selection', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <form id="appearance-form">
                <input type="text" id="hair-color" value="black">
                <input type="text" id="eye-color" value="blue">
                <button type="submit">Next</button>
            </form>
        `;
    });

    test('selects and submits appearance', () => {
        const form = document.getElementById('appearance-form');
        const hairColorInput = document.getElementById('hair-color');
        const eyeColorInput = document.getElementById('eye-color');

        hairColorInput.value = 'brown';
        eyeColorInput.value = 'green';

        form.dispatchEvent(new Event('submit'));

        expect(hairColorInput.value).toBe('brown');
        expect(eyeColorInput.value).toBe('green');
    });
});
