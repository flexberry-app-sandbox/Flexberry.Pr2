import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  товары: DS.belongsTo('i-i-s-pr-товары', { inverse: null, async: false }),
  докумПоставки: DS.belongsTo('i-i-s-pr-докум-поставки', { inverse: 'инфОЗаказе', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-pr-инф-о-заказе.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-pr-инф-о-заказе.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докумПоставки: {
    descriptionKey: 'models.i-i-s-pr-инф-о-заказе.validations.докумПоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнфОЗаказеE', 'i-i-s-pr-инф-о-заказе', {
    товары: belongsTo('i-i-s-pr-товары', 'Наименование товара', {
      наимТовара: attr('Наименование товара', { index: 1, hidden: true }),
      единицыИзмер: attr('Единицы измерения', { index: 3 }),
      цена: attr('Цена', { index: 4 })
    }, { index: 0, displayMemberPath: 'наимТовара' }),
    количество: attr('Количество', { index: 2 })
  });
};
