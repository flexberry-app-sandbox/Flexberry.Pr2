import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  наличиеДеф: DS.attr('boolean'),
  статусЗаказа: DS.attr('i-i-s-pr-состоян-заказа'),
  удовлКл: DS.attr('i-i-s-pr-уд-кл'),
  докумРаспр: DS.belongsTo('i-i-s-pr-докум-распр', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-pr-докум-рез-пост.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наличиеДеф: {
    descriptionKey: 'models.i-i-s-pr-докум-рез-пост.validations.наличиеДеф.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статусЗаказа: {
    descriptionKey: 'models.i-i-s-pr-докум-рез-пост.validations.статусЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  удовлКл: {
    descriptionKey: 'models.i-i-s-pr-докум-рез-пост.validations.удовлКл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  докумРаспр: {
    descriptionKey: 'models.i-i-s-pr-докум-рез-пост.validations.докумРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумРезПостE', 'i-i-s-pr-докум-рез-пост', {
    дата: attr('Дата', { index: 0 }),
    докумРаспр: belongsTo('i-i-s-pr-докум-распр', 'Документа распределения', {
      докумПоставки: belongsTo('i-i-s-pr-докум-поставки', '', {
        клиенты: belongsTo('i-i-s-pr-клиенты', '', {
          заказчик: attr('Заказчик', { index: 2 }),
          телефон: attr('Телефон', { index: 3 }),
          адресПоставки: attr('Адрес поставки', { index: 4 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'номерДокРаспр' }),
    статусЗаказа: attr('Статус заказа', { index: 5 }),
    наличиеДеф: attr('Наличие дефектов', { index: 6 }),
    удовлКл: attr('Удовлетворенность клиента', { index: 7 })
  });

  modelClass.defineProjection('ДокумРезПостL', 'i-i-s-pr-докум-рез-пост', {
    дата: attr('Дата', { index: 0 }),
    докумРаспр: belongsTo('i-i-s-pr-докум-распр', 'Номер документа распределения', {
      номерДокРаспр: attr('Номер документа распределения', { index: 1 })
    }, { index: -1, hidden: true }),
    статусЗаказа: attr('Статус заказа', { index: 2 }),
    наличиеДеф: attr('Наличие дефектов', { index: 3 }),
    удовлКл: attr('Удовлетворенность клиента', { index: 4 })
  });
};
