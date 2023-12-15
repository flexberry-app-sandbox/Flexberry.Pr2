import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-pr-докум-рез-пост', 'Unit | Serializer | i-i-s-pr-докум-рез-пост', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-pr-докум-рез-пост',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-pr-ед-изм',
    'transform:i-i-s-pr-состоян-заказа',
    'transform:i-i-s-pr-уд-кл',

    'model:i-i-s-pr-докум-поставки',
    'model:i-i-s-pr-докум-распр',
    'model:i-i-s-pr-докум-рез-пост',
    'model:i-i-s-pr-инф-о-заказе',
    'model:i-i-s-pr-клиенты',
    'model:i-i-s-pr-организация',
    'model:i-i-s-pr-пункт-погрузки',
    'model:i-i-s-pr-сотрудники',
    'model:i-i-s-pr-список-барж',
    'model:i-i-s-pr-список-контей',
    'model:i-i-s-pr-товары',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
