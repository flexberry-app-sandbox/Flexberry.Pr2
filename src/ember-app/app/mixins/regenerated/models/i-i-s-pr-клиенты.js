import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адресПоставки: DS.attr('string'),
  заказчик: DS.attr('string'),
  расчетСчет: DS.attr('number'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  адресПоставки: {
    descriptionKey: 'models.i-i-s-pr-клиенты.validations.адресПоставки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказчик: {
    descriptionKey: 'models.i-i-s-pr-клиенты.validations.заказчик.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расчетСчет: {
    descriptionKey: 'models.i-i-s-pr-клиенты.validations.расчетСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-pr-клиенты.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-pr-клиенты', {
    заказчик: attr('Заказчик', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    адресПоставки: attr('Адрес поставки', { index: 2 }),
    расчетСчет: attr('Расчетный счет', { index: 3 })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-pr-клиенты', {
    заказчик: attr('Заказчик', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    адресПоставки: attr('Адрес поставки', { index: 2 }),
    расчетСчет: attr('Расчетный счет', { index: 3 })
  });
};
