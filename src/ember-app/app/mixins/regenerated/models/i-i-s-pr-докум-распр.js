import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номерДокРаспр: DS.attr('number'),
  докумПоставки: DS.belongsTo('i-i-s-pr-докум-поставки', { inverse: null, async: false }),
  пунктПогрузки: DS.belongsTo('i-i-s-pr-пункт-погрузки', { inverse: null, async: false }),
  списокБарж: DS.belongsTo('i-i-s-pr-список-барж', { inverse: null, async: false }),
  списокКонтей: DS.belongsTo('i-i-s-pr-список-контей', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-pr-докум-распр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокРаспр: {
    descriptionKey: 'models.i-i-s-pr-докум-распр.validations.номерДокРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  докумПоставки: {
    descriptionKey: 'models.i-i-s-pr-докум-распр.validations.докумПоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пунктПогрузки: {
    descriptionKey: 'models.i-i-s-pr-докум-распр.validations.пунктПогрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокБарж: {
    descriptionKey: 'models.i-i-s-pr-докум-распр.validations.списокБарж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокКонтей: {
    descriptionKey: 'models.i-i-s-pr-докум-распр.validations.списокКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумРаспрE', 'i-i-s-pr-докум-распр', {
    дата: attr('Дата', { index: 0 }),
    номерДокРаспр: attr('Номер документа распределения', { index: 1 }),
    докумПоставки: belongsTo('i-i-s-pr-докум-поставки', 'Номер документа поставки', {
      номДокПостав: attr('Номер документа поставки', { index: 3, hidden: true }),
      клиенты: belongsTo('i-i-s-pr-клиенты', '', {
        заказчик: attr('Заказчик', { index: 4 }),
        телефон: attr('Телефон', { index: 5 }),
        адресПоставки: attr('Адрес поставки', { index: 6 })
      }, { index: -1, hidden: true })
    }, { index: 2, displayMemberPath: 'номДокПостав' }),
    пунктПогрузки: belongsTo('i-i-s-pr-пункт-погрузки', 'Адрес пункта погрузки', {

    }, { index: 7, displayMemberPath: 'адрес' }),
    списокБарж: belongsTo('i-i-s-pr-список-барж', 'Номер баржи', {

    }, { index: 8, displayMemberPath: 'номерБаржи' }),
    списокКонтей: belongsTo('i-i-s-pr-список-контей', 'Номер контейнера', {

    }, { index: 9, displayMemberPath: 'номерКонтей' })
  });

  modelClass.defineProjection('ДокумРаспрL', 'i-i-s-pr-докум-распр', {
    дата: attr('Дата', { index: 0 }),
    номерДокРаспр: attr('Номер документа распределения', { index: 1 }),
    докумПоставки: belongsTo('i-i-s-pr-докум-поставки', 'Номер документа поставки', {
      номДокПостав: attr('Номер документа поставки', { index: 2 })
    }, { index: -1, hidden: true }),
    пунктПогрузки: belongsTo('i-i-s-pr-пункт-погрузки', 'Адрес погрузки', {
      адрес: attr('Адрес погрузки', { index: 3 })
    }, { index: -1, hidden: true }),
    списокБарж: belongsTo('i-i-s-pr-список-барж', 'Номер баржи', {
      номерБаржи: attr('Номер баржи', { index: 4 })
    }, { index: -1, hidden: true }),
    списокКонтей: belongsTo('i-i-s-pr-список-контей', 'Номер контейнера', {
      номерКонтей: attr('Номер контейнера', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
