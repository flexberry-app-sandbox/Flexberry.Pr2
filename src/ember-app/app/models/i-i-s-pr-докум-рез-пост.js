import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокумРезПостMixin
} from '../mixins/regenerated/models/i-i-s-pr-докум-рез-пост';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокумРезПостMixin, Validations, {
});

defineProjections(Model);

export default Model;
