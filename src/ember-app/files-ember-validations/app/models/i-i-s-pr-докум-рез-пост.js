import {
  defineNamespace,
  defineProjections,
  Model as ДокумРезПостMixin
} from '../mixins/regenerated/models/i-i-s-pr-докум-рез-пост';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокумРезПостMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
