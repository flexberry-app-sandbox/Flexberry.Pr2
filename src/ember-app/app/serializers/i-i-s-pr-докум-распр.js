import { Serializer as ДокумРаспрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pr-докум-распр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокумРаспрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
