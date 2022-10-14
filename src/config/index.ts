const { MONGO_DB, NODE_DOCKER_PORT, BCRYPT_SALT } = process.env;

export default {
  PORT: parseInt(NODE_DOCKER_PORT, 10) || 3000,
  BCRYPT_SALT: Number(BCRYPT_SALT) || 10,
  MONGOD_DB:
    MONGO_DB || 'mongodb://localhost:27017/casco?directConnection=true',
};
