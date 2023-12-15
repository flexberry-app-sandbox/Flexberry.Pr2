import {
  defineNamespace,
  defineProjections,
  Model as СписокБаржMixin
} from '../mixins/regenerated/models/i-i-s-pr-список-барж';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СписокБаржMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
