export class Enemy {
    #name = ""
    #initiative = 0
    constructor(name, initiative) {
        this.#name = name
        this.#initiative = initiative
    }

    name() {
        return this.#name
    }

    initiative() {
        return this.#initiative
    }
}