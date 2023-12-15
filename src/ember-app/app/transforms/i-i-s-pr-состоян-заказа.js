import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостоянЗаказаEnum from '../enums/i-i-s-pr-состоян-заказа';

export default FlexberryEnum.extend({
  enum: СостоянЗаказаEnum,
  sourceType: 'IIS.Pr.СостоянЗаказа'
});
