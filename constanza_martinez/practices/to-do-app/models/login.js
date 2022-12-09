/* eslint-disable no-undef */
const authSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: Number,
});

const login = mongoose.model('login', authSchema);

module.exports = login;
