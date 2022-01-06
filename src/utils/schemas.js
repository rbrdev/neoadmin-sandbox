const schema = {
  ApplicationUsers: {
    id: "integer",
    username: "username(6,20)",
    email: "email",
    fullname: "name",
    first_name: "name.firstName",
    surnames: "name.lastName",
    password: "password",
    userRegistered: "date",
    lastActivityAt: "date",
  },
  ContentTypes: {
    id: "integer",
    name: "username(6,20)",
  },
  tags: {
    id: "integer",
    name: "username(6,20)",
    description: "html(2,5)",
  },
  Contents: {
    id: "integer",
    publishedAt: "date",
    published: "boolean",
    // contentType: {
    //   value: "Articulo",
    //   label: "Articulo",
    // },
    title: "html(1,2)",
    url: "url",
    imageURL: "url",
    videoURL: "url",
    // groups: "",
    // tags: "",
    text: "html(3,6)",
  },
  Groups: {
    id: "integer",
    name: "username(6,20)",
    isAdminGroup: "boolean",
  },

  Literals: {
    id: "integer",
    key: "username(6,20)",
    value: "username(6,20)",
    updatedAt: "date",
    active: "boolean",
  },
  Faqs: {
    id: "integer",
    rank: "integer",
    question: "html(2,5)",
    answer: "html(2,5)",
    // category: {
    //   value: "html(1,5)",
    //   label: "html(1,5)",
    // },
  },
};
export default schema;
