/* eslint-disable no-undef */

const authSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: Number,
});

const auth = mongoose.model('auth', authSchema);

module.exports = auth;
