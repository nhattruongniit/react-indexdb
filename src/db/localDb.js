import Dexie from 'dexie';

const db = new Dexie('FoodsDB');

db.version(1).stores({
  foods: '++id, name, category',
  users: '++id, email, password, role'
});

export const addProduct = async (name, category) => {
  db.open();
  db.foods.add({
    value: {
      name,
      category
    }
  })
}

export const addUser = async (email, password, role) => {
  db.open();
  db.users.add({
    email,
    password,
    role
  })
}

export const showProduct = async () => {
  return db.foods.toArray();
}

export const showUser = async () => {
  return db.users.toArray();
}