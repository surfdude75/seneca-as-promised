/**
 * test/async/add.spec.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */
require('./.setup.js');
const test         = require('ava');


test.cb(t => {

  t.context.addAsync('name:a', async args => args);

  t.context.act('name:a', { foo: 'bar' }, (err, res) => {

    t.falsy(err);
    t.is(res.foo, 'bar');

    t.end();

  });

});
