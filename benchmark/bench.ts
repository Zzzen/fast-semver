import b from 'benny'

import { satisfies as satisfiesRust } from '../index'
import { satisfies as satisfiesJs } from 'semver'

async function run() {
  await b.suite(
    'satisfies',
    b.add('Native', () => {
        satisfiesRust('1.0.0', '1.0.0')
        satisfiesRust('1.0.0', '^1.0.0')
        satisfiesRust('1.0.0', '*')
        satisfiesRust('1.0.0', '^2.0.0')
    }),
    b.add('JavaScript ', () => {
        satisfiesJs('1.0.0', '1.0.0')
        satisfiesJs('1.0.0', '^1.0.0')
        satisfiesJs('1.0.0', '*')
        satisfiesJs('1.0.0', '^2.0.0')
    }),
    b.cycle(),
    b.complete(),
  )
}

run().catch((e) => {
  console.error(e)
})