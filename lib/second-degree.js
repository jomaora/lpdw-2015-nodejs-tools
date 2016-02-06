'use strict';

module.exports.resolve = (a, b, c) => {
    let discriminator = Math.pow(b, 2) - 4 * a * c;
    if (discriminator < 0) {
        throw new Error('Not real solution');
    }
    discriminator = Math.sqrt(discriminator);
    const result = [];
    result.push(((- 1 * b) + discriminator) / (2 * a));
    result.push(((- 1 * b) - discriminator) / (2 * a));

    return result;
};