import test from "ava";
import {MedalsCounter} from "../../src/utils/medals-counter";

test("MedalsCounter constructor initial value is 0 gold, 0 silver and 0 bronze", t => {
    let counter = new MedalsCounter();

    t.true(counter.goldCount === 0);
    t.true(counter.silverCount === 0);
    t.true(counter.bronzeCount === 0);
});

test("MedalsCounter increments gold, silver or bronze counters respectively", t => {
    let counter = new MedalsCounter();
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

test("MedalsCounter shows total metals count", t => {
    let counter = new MedalsCounter();
    counter.incGold();
    counter.incGold();
    counter.incBronze();
    counter.incSilver();
    counter.incSilver();
    counter.incGold();

    t.true(counter.totals === 6);
});

test("MedalsCounter updates total metals count", t => {
    let counter = new MedalsCounter();
    counter.update("Bronze");
    counter.update("Bronze");
    counter.update("Silver");
    counter.update("Gold");

    t.true(counter.totals === 4);
    t.true(counter.goldCount === 1);
    t.true(counter.silverCount === 1);
    t.true(counter.bronzeCount === 2);
});
