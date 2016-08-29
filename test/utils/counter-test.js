import test from "ava";
import {Counter} from "../../src/utils/counter";

test("Counter constructor initial value is 0", t => {
    let counter = new Counter();

    t.true(counter.value() === 0);
});

test("Counter constructor initial step is 1", t => {
    let counter = new Counter();
    counter.inc();

    t.true(counter.value() === 1);
});

test("Counter constructor accepts an initial value", t => {
    let counter = new Counter(10);

    t.true(counter.value() === 10);
});

test("Counter constructor accepts an step value", t => {
    let counter = new Counter(10, 2);
    counter.inc();

    t.true(counter.value() === 12);
});

