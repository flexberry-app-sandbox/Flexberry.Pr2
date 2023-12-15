import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ИнфОЗаказеMixin
} from '../mixins/regenerated/models/i-i-s-pr-инф-о-заказе';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ИнфОЗаказеMixin, Validations, {
});

defineProjections(Model);

export default Model;
