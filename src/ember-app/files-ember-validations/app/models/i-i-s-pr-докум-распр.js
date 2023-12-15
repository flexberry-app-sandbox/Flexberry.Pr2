import {
  defineNamespace,
  defineProjections,
  Model as ДокумРаспрMixin
} from '../mixins/regenerated/models/i-i-s-pr-докум-распр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокумРаспрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
