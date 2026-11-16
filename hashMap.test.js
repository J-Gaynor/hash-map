const HashMap = require("./hashMap");

it("hashes two values the same", () => {
    const test = new HashMap();
    expect(test.hash("apple")).toBe(test.hash("apple"));
})

it("sets the key at an index to a specified value, overwriting any data", () => {
    const test = new HashMap();
    expect(test.hash("apple")).toBe(test.hash("apple"));
})

it("retrieves the correct value even when keys collide", () => {
    const test = new HashMap();
    test.set('dog', 'brown');
    test.set('lion', 'golden');

    expect(test.get('dog')).toBe('brown');
    expect(test.get('lion')).toBe('golden');
});

it("returns null for non-existent keys", () => {
    const test = new HashMap();
    test.set('jacket', 'blue');

    expect(test.get('nonExistentKey')).toBe(null);
});

it("returns the correct boolean if a value is present", () => {
    const test = new HashMap();
    test.set('jacket', 'blue');

    expect(test.has('jacket')).toBe(true);
    expect(test.has('jumper')).toBe(false);
});

it("removes elements", () => {
    const test = new HashMap();
    test.set('dog', 'brown');
    test.set('lion', 'golden');

    expect(test.remove('jacket')).toBe(false);
    test.remove('dog');
    expect(test.get('dog')).toBe(true);
});