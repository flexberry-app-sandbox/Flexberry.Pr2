import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УдКлEnum from '../enums/i-i-s-pr-уд-кл';

export default FlexberryEnum.extend({
  enum: УдКлEnum,
  sourceType: 'IIS.Pr.УдКл'
});
