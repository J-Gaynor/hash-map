const outOfBounds = require("./outOfBounds");

class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array(this.capacity).fill(null);
    }

    grow() {
        const spaceAvailable = this.buckets.filter(key => key === null);
        if (spaceAvailable.length < this.loadFactor * this.capacity) {
            this.capacity += this.capacity;
            this.buckets.push(new Array(this.capacity).fill(null));
        }
    }

    hash(key) {
        let hashCode = 0;
        const prime = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key)
        outOfBounds(index, this.capacity);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        const existing = this.buckets[index].find(entry => entry.key === key);
        if (!existing) {
            this.buckets[index].push({ key, value });
        } else {
            existing.value = value;
        }
        // this.grow();
    }

    get(key) {
        const index = this.hash(key);
        outOfBounds(index, this.capacity);

        if (!this.buckets[index]) {
            return null;
        }

        const entry = this.buckets[index].find(entry => entry.key === key);
        if (!entry) {
            return null;
        } else {
            return entry.value;
        }
    }

    has(key) {
        const index = this.hash(key);
        outOfBounds(index, this.capacity);
        if (!this.buckets[index]) {
            return false;
        }

        const entry = this.buckets[index].find(entry => entry.key === key);
        return Boolean(entry);
    }

    remove(key) {
        const index = this.hash(key);
        outOfBounds(index, this.capacity);

        if (!this.buckets[index]) {
            return false;
        }

        const entryIndex = this.buckets[index].findIndex(entry => entry.key === key);

        if (entryIndex === -1) {
            return false;
        }

        this.buckets[index].splice(entryIndex, 1);
        return true;
    }
}

module.exports = HashMap;