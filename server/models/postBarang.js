import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  namaBarang: String,
  kategory: [String],
  deskripsi: String,
  harga: String,
  terjual: String,
  selectedFile: String,
  click: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostBarang = mongoose.model('databarang', postSchema);

export default PostBarang;
