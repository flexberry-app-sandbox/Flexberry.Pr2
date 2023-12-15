import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СписокКонтейMixin
} from '../mixins/regenerated/models/i-i-s-pr-список-контей';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СписокКонтейMixin, Validations, {
});

defineProjections(Model);

export default Model;
