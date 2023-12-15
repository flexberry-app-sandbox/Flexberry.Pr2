import { Serializer as СписокКонтейSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pr-список-контей';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СписокКонтейSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
