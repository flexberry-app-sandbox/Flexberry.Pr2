import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номДокПостав: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-pr-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-pr-организация', { inverse: null, async: false }),
  инфОЗаказе: DS.hasMany('i-i-s-pr-инф-о-заказе', { inverse: 'докумПоставки', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-pr-докум-поставки.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номДокПостав: {
    descriptionKey: 'models.i-i-s-pr-докум-поставки.validations.номДокПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-pr-докум-поставки.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-pr-докум-поставки.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  инфОЗаказе: {
    descriptionKey: 'models.i-i-s-pr-докум-поставки.validations.инфОЗаказе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставкиE', 'i-i-s-pr-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номДокПостав: attr('Номер документа поставки', { index: 1 }),
    клиенты: belongsTo('i-i-s-pr-клиенты', 'Заказчик', {
      заказчик: attr('Заказчик', { index: 3, hidden: true }),
      телефон: attr('Телефон', { index: 4 }),
      адресПоставки: attr('Адрес поставки', { index: 5 })
    }, { index: 2, displayMemberPath: 'заказчик' }),
    организация: belongsTo('i-i-s-pr-организация', 'Наименование организации', {
      наимОрганиз: attr('Наименование организации', { index: 7, hidden: true }),
      сотрудники: belongsTo('i-i-s-pr-сотрудники', '', {
        фИОСотруд: attr('ФИО сотрудника', { index: 8 })
      }, { index: -1, hidden: true })
    }, { index: 6, displayMemberPath: 'наимОрганиз' }),
    инфОЗаказе: hasMany('i-i-s-pr-инф-о-заказе', 'Информация о заказе', {
      товары: belongsTo('i-i-s-pr-товары', 'Наименование товара', {
        наимТовара: attr('Наименование товара', { index: 1, hidden: true }),
        единицыИзмер: attr('Единицы измерения', { index: 3 }),
        цена: attr('Цена', { index: 4 })
      }, { index: 0, displayMemberPath: 'наимТовара' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ДокумПоставкиL', 'i-i-s-pr-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номДокПостав: attr('Номер документа поставки', { index: 1 }),
    клиенты: belongsTo('i-i-s-pr-клиенты', 'Заказчик', {
      заказчик: attr('Заказчик', { index: 2 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-pr-организация', 'Наименование организации', {
      наимОрганиз: attr('Наименование организации', { index: 3 }),
      сотрудники: belongsTo('i-i-s-pr-сотрудники', '', {
        фИОСотруд: attr('ФИО сотрудника', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
