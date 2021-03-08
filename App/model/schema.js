import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'users',
      columns: [
        {name: 'weight', type: 'string'},
        {name: 'note', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'students',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'tag', type: 'string'},
        { name: 'user_id', type: 'string', isIndexed: true },
      ],
    }),
  ],
});
