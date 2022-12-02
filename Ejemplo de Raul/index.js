let usersStorage = new Storage('users');

function showStorage() {
  const currentUsers = usersStorage.readItems();
  document.getElementById('local-storage').innerText = JSON.stringify(
    currentUsers,
    null,
    2,
  );
}

function createItem() {
  usersStorage.createItem({
    firstName: randomString(10),
    lastName: randomString(15),
  });
  showStorage();
}

function deleteItem() {
  usersStorage.deleteItem(2);
  showStorage();
}

function updateItem() {
  usersStorage.updateItem(3, {
    firstName: randomString(3),
    lastName: randomString(3),
  });
  showStorage();
}

function randomString(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
