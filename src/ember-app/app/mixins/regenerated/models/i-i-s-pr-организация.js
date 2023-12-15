import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наимОрганиз: DS.attr('string'),
  сотрудники: DS.belongsTo('i-i-s-pr-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  наимОрганиз: {
    descriptionKey: 'models.i-i-s-pr-организация.validations.наимОрганиз.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-pr-организация.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизацияE', 'i-i-s-pr-организация', {
    наимОрганиз: attr('Наименование организации', { index: 0 }),
    сотрудники: belongsTo('i-i-s-pr-сотрудники', 'ФИО сотрудника', {
      фИОСотруд: attr('ФИО сотрудника', { index: 2, hidden: true })
    }, { index: 1, hidden: true })
  });

  modelClass.defineProjection('ОрганизацияL', 'i-i-s-pr-организация', {
    наимОрганиз: attr('Наименование организации', { index: 0 }),
    сотрудники: belongsTo('i-i-s-pr-сотрудники', 'ФИО сотрудника', {
      фИОСотруд: attr('ФИО сотрудника', { index: 1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
