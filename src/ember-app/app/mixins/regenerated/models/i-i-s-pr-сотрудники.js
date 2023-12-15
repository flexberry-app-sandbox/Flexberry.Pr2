import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИОСотруд: DS.attr('string')
});

export let ValidationRules = {
  фИОСотруд: {
    descriptionKey: 'models.i-i-s-pr-сотрудники.validations.фИОСотруд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-pr-сотрудники', {
    фИОСотруд: attr('ФИО сотрудника', { index: 0 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-pr-сотрудники', {
    фИОСотруд: attr('ФИО сотрудника', { index: 0 })
  });
};
