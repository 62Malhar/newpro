import {Model} from '@nozbe/watermelondb';
import {field,action,children} from '@nozbe/watermelondb/decorators';

export default class Weight extends Model {
  static table = 'users';
  static associations = {
    students: { type: "has_many", foreignKey: "user_id" }
  };
  @field('note') note;
  @field('weight') weight;
  
  @children("students") student;

  @action async deleteUser(){
    await this.markAsDeleted(); // syncable
    await this.deleteStudent();
    await this.destroyPermanently(); // permanent
  }
  @action async addStudent(body) {
    return this.collections.get("students").create(info => {
      info.user.set(this);
      info.name = body.name;
      info.tag = body.tag;
    });
  }
  async deleteStudent() {
    await this.student.destroyAllPermanently();
  }
}