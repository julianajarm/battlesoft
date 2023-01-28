export class Storage {
    constructor(name) {
        this.name = name
    }

    load() {
        if (localStorage.getItem(this.name)) {
            try {
                return JSON.parse(localStorage.getItem(this.name));
            } catch (e) {
                localStorage.removeItem(this.name);
            }
        }
        return null
    }

    save(data) {
        const parsed = JSON.stringify(data);
        localStorage.setItem(this.name, parsed);
    }
}