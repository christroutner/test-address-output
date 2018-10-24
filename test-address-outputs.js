/*
  This app is used to test and compare the outputs of new and old versions of
  address.js
*/

"use strict";

// Inspect utility used for debugging.
const util = require("util");
util.inspect.defaultOptions = {
  showHidden: true,
  colors: true,
  depth: 1
};

const BB = require("bitbox-sdk/lib/bitbox-sdk").default;
//const BITBOX = new BB({ restURL: `https://rest.bitcoin.com/v1/` });
const BITBOX = new BB({ restURL: `http://localhost:3000/v1/` })


async function runTest() {
  console.log(`TESTING /ADDRESS/DETAILS`)

  console.log(`Single address in an array:`);
  const details1 = await BITBOX.Address.details([
    "bitcoincash:qpew7vm9sdwdfeu3ag63rkt0r6ary3e2ny5p8lsfpn"
  ]);
  console.log(`details: ${JSON.stringify(details1, null, 2)}`);

  console.log(` `);
  console.log(`Single address without an array:`);
  const details2 = await BITBOX.Address.details(
    "bitcoincash:qpew7vm9sdwdfeu3ag63rkt0r6ary3e2ny5p8lsfpn"
  );
  console.log(`details: ${JSON.stringify(details2, null, 2)}`);

  console.log(` `);
  console.log(`Array of addresses:`);
  const details3 = await BITBOX.Address.details([
    "bitcoincash:qpew7vm9sdwdfeu3ag63rkt0r6ary3e2ny5p8lsfpn",
    "bitcoincash:qq0j0nsc5mfvzhccawgkgv7g3umspezdvupfjg7ze3"
  ]);
  console.log(`details: ${JSON.stringify(details3, null, 2)}`);

  console.log(` `)
  console.log(` `)
  console.log(`TESTING /ADDRESS/UTXO`)

  console.log(`Single address in an array:`);
  const utxo1 = await BITBOX.Address.utxo([
    "bitcoincash:qq0j0nsc5mfvzhccawgkgv7g3umspezdvupfjg7ze3"
  ]);
  console.log(`utxo: ${JSON.stringify(utxo1, null, 2)}`);

  console.log(` `);
  console.log(`Single address without an array:`);
  const utxo2 = await BITBOX.Address.utxo(
    "bitcoincash:qq0j0nsc5mfvzhccawgkgv7g3umspezdvupfjg7ze3"
  );
  console.log(`utxo: ${JSON.stringify(utxo2, null, 2)}`);

  console.log(` `);
  console.log(`Array of addresses:`);
  const utxo3 = await BITBOX.Address.utxo([
    "bitcoincash:qpew7vm9sdwdfeu3ag63rkt0r6ary3e2ny5p8lsfpn",
    "bitcoincash:qq0j0nsc5mfvzhccawgkgv7g3umspezdvupfjg7ze3"
  ]);
  console.log(`utxo: ${JSON.stringify(utxo3, null, 2)}`);
}
runTest();
