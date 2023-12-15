import { Serializer as ДокумРезПостSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pr-докум-рез-пост';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокумРезПостSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
