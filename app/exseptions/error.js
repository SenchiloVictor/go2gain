module.exports = class Error {
    constructor(message) {
        this.message = message;
        this.type = "Error";
    }
}