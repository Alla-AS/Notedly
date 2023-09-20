const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
const {
  AuthenticationError, 
  ForbiddenError
} = require('apollo-server-express'); 
require('dotenv').config();
const gravatar = require('../util/gravatar');

module.exports = {
  newNote: async (parent, args, { models }) => {
    return await models.Note.create({
      content: args.content,
      author: 'Adam Scott'
    });
  },

  deleteNote: async (parent, {id}, {models}) => {
    try {
      await models.Note.findOneAndRemove({ _id: id});
      return true;
    } catch (err) {
      return false;
    }
  },
  
  updateNote: async (parent, {content, id}, {models}) => {
    return await models.Note.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: {
          content
        }
      },
      {
        new: true
      }
    );
  },

  signUp: async(parent, {username, email, password}, {models}) => {
    email = email.trim().toLowerCase();

    // Хешируем пароль с помощью доп пакета bcrypt
    const hashed = await bcrypt.hash(password, 10);
    // Создаем url gravatar-изображения
    const avatar = gravatar(email); 
    try {
      const user = await models.User.create({ 
        username,
        email, 
        avatar,
        password: hashed
      });
  // Создаем и возвращаем json web token
      return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    } catch (err) { 
      console.log(err);
  // Если при регистрации возникла проблема, выбрасываем ошибку 
      throw new Error('Error creating account');
    }
  }
};
