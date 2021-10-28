test("Find Substring", ()=> {
	expect("It's raining cats and dogs").toMatch(/dogs/);
})

const expected = 'Hello world!';

test("Find Substring", ()=> {
	expect("It's raining cats and dogs").toEqual(expect.not.stringContaining(expected));
})