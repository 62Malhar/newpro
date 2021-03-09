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

  @relation("users", "user_id") user;

  @action updateStudent = async (student, user) => {
    await this.update(contact_info => {
      // contact_info.id = contactInfo.id;
      contact_info.name = student.name;
      contact_info.tag = student.tag;
      contact_info.user.set(user)
    });
  };

  @action async deleteStudent() {
    await this.markAsDeleted(); // syncable
    await this.destroyPermanently(); // permanent
  }
}
