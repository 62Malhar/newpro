import React from 'react';
import { Database } from '@nozbe/watermelondb';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './App/model/schema';
import RootNavigation from './App/Navigation/RootNavigation';
import User from './App/model/User';
import Weight from './App/model/Weight';
import Student from './App/model/Student';
function App() {

  const adapter = new SQLiteAdapter({
    dbName: 'WatermelonDemo',
    schema,
  });
  const database = new Database({
    adapter: adapter,
    modelClasses: [Weight,Student],
    actionsEnabled: true,
  })
  return (
    <DatabaseProvider database={database}>
      <RootNavigation database={database} />
    </DatabaseProvider>
  );
};

export default App;
