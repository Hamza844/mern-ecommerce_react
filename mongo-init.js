db = db.getSiblingDB('mern_stack');
db.createUser({
  user: 'appuser',
  pwd: 'apppassword',
  roles: [{ role: 'readWrite', db: 'mern_stack' }]
});