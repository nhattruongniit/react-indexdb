import Dexie from 'dexie';

const db = new Dexie('FoodsDB');

db.version(1).stores({
  foods: '++id, name, category',
  users: '++id, email, password, role'
});

export const addProduct = async (name, category) => {
  await db.foods.add({
    name,
    category
  })
}

export const updateProduct = async name => {
  await db.foods.update(1, { name })
}

export const addUser = async (email, password, role) => {
  db.users.put({
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