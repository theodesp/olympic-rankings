import test from "ava";
import React from "react";
import { render } from 'enzyme';

import {RankingsTable} from "../../src/components/rankings-table";

test("render rankings table", t => {
  const wrapper = render(React.createElement(RankingsTable, {rankings: new Map()}));

  t.is(wrapper.length, 1);
});

