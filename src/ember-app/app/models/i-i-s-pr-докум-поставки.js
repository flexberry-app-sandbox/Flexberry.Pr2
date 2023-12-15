import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокумПоставкиMixin
} from '../mixins/regenerated/models/i-i-s-pr-докум-поставки';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокумПоставкиMixin, Validations, {
});

defineProjections(Model);

export default Model;
