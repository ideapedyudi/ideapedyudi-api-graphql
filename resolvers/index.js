const User = require('../models/users');

const resolvers = {
    Query: {
        async users() {
            return await User.find();
        },
        async user(_, { id }) {
            return await User.findById(id);
        },
    },
    Mutation: {
        async createUser(_, { name, age }) {
            const user = new User({ name, age });
            return await user.save();
        },
        async updateUser(_, { id, name, age }) {
            return await User.findByIdAndUpdate({ _id: id }, { name, age }, { new: true });
        },
        async deleteUser(_, { id }) {
            return await User.findByIdAndRemove(id);
        },
    },
};

module.exports = resolvers;