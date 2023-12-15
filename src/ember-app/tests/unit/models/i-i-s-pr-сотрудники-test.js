import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-pr-сотрудники', 'Unit | Model | i-i-s-pr-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
