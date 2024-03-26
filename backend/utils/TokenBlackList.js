let count = 0;
class TokenBlackList{
    constructor() {
        this.tokens = new Set();
        this.id = count++;
    }

    add(token) {
        this.tokens.add(token);
    }

    has(token) {
        return this.tokens.has(token);
    }

    delete(token) {
        this.tokens.delete(token);
    }

    id() {
        return this.id;
    }
}
let invalid_tokens = new TokenBlackList();


module.exports = invalid_tokens;