const Error = require('../error');

module.exports = class SaveError extends Error {
    constructor(message) {
        super(message);

        this.type = 'SaveError';
    }
}
