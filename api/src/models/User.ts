import {Schema, model} from 'mongoose';

const schema = new Schema({
  name: {type: String, required: true},
  login: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  role: {type: String, required: true},
  department: {type: String, required: true},
})

export default model('User', schema)