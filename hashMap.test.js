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
    expect(test.remove('dog')).toBe(true);
    expect(test.remove('dog')).toBe(false);
});

it("checks length ", () => {
    const test = new HashMap();
    test.set('dog', 'brown');
    test.set('lion', 'golden');
    test.set('cat', 'orange');
    test.set('crow', 'black');
    test.set('dragon', 'red');
    test.set('lizard', 'green');
    test.set('whale', 'blue');
    test.set('bird', 'grey');

    expect(test.length()).toBe(8);
});

it("clears the bucket", () => {
    const test = new HashMap();
    test.set('dog', 'brown');
    test.set('lion', 'golden');
    expect(test.length()).toBe(2);
    test.clear();
    expect(test.length()).toBe(0);
});

it("returns an array of all keys", () => {
    const test = new HashMap();
    expect(test.keys()).toEqual([]);
    test.set('dog', 'brown');
    test.set('lion', 'golden');
    test.set('cat', 'orange');
    const keys = test.keys();
    expect(keys).toHaveLength(3);
    expect(keys).toEqual(expect.arrayContaining(['dog', 'lion', 'cat']));
});

it("returns an array of all values", () => {
    const test = new HashMap();
    expect(test.values()).toEqual([]);
    test.set('dog', 'brown');
    test.set('lion', 'golden');
    test.set('cat', 'orange');

    const values = test.values();

    expect(values).toHaveLength(3);
    expect(values).toEqual(expect.arrayContaining(['brown', 'golden', 'orange']));
});

it("returns an array of key-value pair arrays", () => {
    const test = new HashMap();
    expect(test.entries()).toEqual([]);
    test.set('dog', 'brown');
    test.set('lion', 'golden');

    const entries = test.entries();

    expect(entries).toHaveLength(2);
    expect(entries).toEqual(
        expect.arrayContaining([
            ['dog', 'brown'],
            ['lion', 'golden']
        ])
    );
});