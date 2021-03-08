import { Model } from '@nozbe/watermelondb';
import { field, action, relation } from "@nozbe/watermelondb/decorators";

export default class Student extends Model {
  static table = 'students'

  static associations = {
    users: { type: "belongs_to", key: "user_id" }
  };

  // @field('user_id') userId
  @field('name') name
  @field('tag') tag
  // @field('user_id') userId

  @relation("users", "user_id") user;


  @action async deleteStudent() {
    await this.markAsDeleted(); // syncable
    await this.destroyPermanently(); // permanent
  }
}
