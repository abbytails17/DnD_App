// race-class.test.js
const { getSelectedValues } = require('../../js/race-class'); // Updated path

test('selects correct race and class', () => {
    document.body.innerHTML = `
        <select id='race'>
            <option value='elf' selected>Elf</option>
        </select>
        <select id='class'>
            <option value='fighter' selected>Fighter</option>
        </select>`;

    expect(getSelectedValues()).toEqual({ race: 'elf', class: 'fighter' });
});
