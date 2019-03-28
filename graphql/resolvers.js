const suwan = {
  name: "Suwan",
  age: 18,
  gender: "female"
};

const resolvers = {
  Query: {
    person: () => suwan
  }
};

export default resolvers;
