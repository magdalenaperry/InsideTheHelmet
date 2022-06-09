const { AuthenticationError } = require("apollo-server-express");
const { User, Demographics } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {

    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    demographics: async (_, args) => {
      return Demographics.find();
    },
    
  },



  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      console.log(args)
      const token = signToken(user);
      return { token, user };
    },


    addDemographics: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const demographics = new Demographics(args);

        const user = await User.findByIdAndUpdate(
          context.user._id,
          { $push: { demographics: demographics } },
          { new: true }
        )
          .populate("demographics")
          // .populate({ path: "orders", populate: "items" });

        return user.demographics.id(demographics._id);
      }

      throw new AuthenticationError("Not logged in");
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
