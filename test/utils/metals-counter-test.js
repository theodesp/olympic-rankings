import test from "ava";
import {MetalsCounter} from "../../src/utils/metals-counter";

test("MetalsCounter constructor initial value is 0 gold, 0 silver and 0 bronze", t => {
    let counter = new MetalsCounter();

    t.true(counter.goldCount === 0);
    t.true(counter.silverCount === 0);
    t.true(counter.bronzeCount === 0);
});

test("MetalsCounter increments gold, silver or bronze counters respectively", t => {
    let counter = new MetalsCounter();
    counter.incGold();
    counter.incGold();
    counter.incBronze();
    counter.incSilver();
    counter.incSilver();
    counter.incGold();

    t.true(counter.goldCount === 3);
    t.true(counter.silverCount === 2);
    t.true(counter.bronzeCount === 1);
});

test("MetalsCounter shows total metals count", t => {
    let counter = new MetalsCounter();
    counter.incGold();
    counter.incGold();
    counter.incBronze();
    counter.incSilver();
    counter.incSilver();
    counter.incGold();

    t.true(counter.totals === 6);
});
