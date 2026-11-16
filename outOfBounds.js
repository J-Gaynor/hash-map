const outOfBounds = (index, bucketLength) => {
    if (index < 0 || index >= bucketLength) {
        return new Error("Trying to access index out of bounds");
    }
}

module.exports = outOfBounds;