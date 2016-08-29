import {Counter} from "./counter";

/**
 * Helper class that hold the metals counters for a country
 */
export class MetalsCounter {
    constructor() {
        this._goldCount = new Counter();
        this._silverCount = new Counter();
        this._bronzeCount = new Counter();
    }

    incGold() {
        this._goldCount.inc();
    }

    incSilver() {
        this._silverCount.inc();
    }

    incBronze() {
        this._bronzeCount.inc();
    }

    get goldCount() {
        return this._goldCount.value();
    }

    get silverCount() {
        return this._silverCount.value();
    }

    get bronzeCount() {
        return this._bronzeCount.value();
    }

    get totals() {
        return this._goldCount.value() + this._silverCount.value() + this._bronzeCount.value();
    }

    update(metalType) {
        switch (metalType.toString().toLowerCase()) {
            case "gold": {
                this.incGold();
                break;
            }

            case "silver": {
                this.incSilver();
                break;
            }

            case "bronze": {
                this.incBronze();
                break;
            }
        }
    }
}