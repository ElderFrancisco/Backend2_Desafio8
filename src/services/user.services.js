import UsersDao from '../dao/mongo/usersDao.js';
const UsersDaoManager = new UsersDao();

class UserServices {
  async createNewUser(user) {
    try {
      return await UsersDaoManager.createOne(user);
    } catch (error) {
      console.log('Error on UserServices, createNewUser function: ' + error);
      return error;
    }
  }

  async findOneByEmail(email) {
    try {
      const query = { email: email };
      const user = await UsersDaoManager.getOne(query);
      if (!user) {
        console.log('nose encontro');
        return null;
      }
      return user;
    } catch (error) {
      console.log('Error on UserServices, findOneByEmail function: ' + error);
      return error;
    }
  }

  async findUserById(id) {
    try {
      const query = { _id: id };
      return await UsersDaoManager.getOne(query);
    } catch (error) {
      console.log('Error on UserServices, findUserById function: ' + error);
      return error;
    }
  }
}

export default UserServices;
