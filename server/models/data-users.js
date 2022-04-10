import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  level: String,
  keranjang: [Object],
  balance: {
    type: Number,
    dafault: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const UserData = mongoose.model('datausers', userSchema);

export default UserData;
