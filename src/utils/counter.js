/**
 *  A Counter tool is provided to support convenient and rapid tallies. For example:
 *  cnt = new Counter(); // initial value = 0, step = 1
 *  cnt.inc()
 *  cnt.inc()
 *  cnt.inc()
 *  console.log(cnt.value()) // prints 3
 */

export class Counter {
    constructor(initial = 0, step = 1) {
        this._value = initial;
        this._step = step;
    }

    inc() {
        this._value += this._step;
    }

    value() {
        return this._value
    }
}
