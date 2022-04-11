//resolvers/users.js
const { users, orders } = require('../data/data');

const usersResolvers = {
    Query: {
        users: () => users,
        getUser: (parent, {id}) => {
            matchingUser = users.find((user) => user.id == id);
            if (matchingUser) {
                return {
                  __typename: "User",
                  ...matchingUser,
                };
            }
            return {
                __typename: "GenericError",
                message: `The user with the id ${id} does not exist.`,
                other: `The user with the id ${id} does not exist.`,
            };
        }
    },
    User: {
        orders: (user) => {
            return orders.filter( (order) => order.userId === user.id);
        }
    }
}

 module.exports = usersResolvers;