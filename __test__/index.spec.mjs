import test from "ava";

import { satisfies } from "../index.js";

test("satisfies from native", (t) => {
  t.true(satisfies("1.0.0", "1.0.0"));
  t.true(satisfies("1.0.0", "^1.0.0"));
  t.true(satisfies("1.0.0", "*"));
  t.false(satisfies("1.0.0", "^2.0.0"));
  t.false(satisfies(undefined, "1.0.0"));
  t.false(satisfies("1.0.0", undefined));
  t.false(satisfies(undefined, undefined));
  // ranges
  t.true(satisfies('1.0.3', '1.0.3 - 3.0.0'));
  t.false(satisfies('3.0.6', '1.0.3 - 3.0.0'));
});
