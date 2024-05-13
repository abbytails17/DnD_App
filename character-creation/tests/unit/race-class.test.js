const { getSelectedValues } = require('../../js/race-class');

document.body.innerHTML = `
    <form id="race-class-form">
        <select id='race'>
            <option value='elf' selected>Elf</option>
        </select>
        <select id='class'>
            <option value='fighter' selected>Fighter</option>
        </select>
    </form>`;

test('selects correct race and class', () => {
    const { race, cls } = getSelectedValues();
    expect(race).toEqual('elf');
    expect(cls).toEqual('fighter');
});
