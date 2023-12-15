import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокумРаспрMixin
} from '../mixins/regenerated/models/i-i-s-pr-докум-распр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокумРаспрMixin, Validations, {
});

defineProjections(Model);

export default Model;
