import faker from "faker";
import shortid from "shortid";

const _a = (amount = 2) => new Array(amount).fill(true);

const users = (amount) =>
  _a(amount).map((u) => ({
    id: shortid.generate(),
    username: faker.name.findName(),
    email: faker.internet.email(),
    fullname: faker.name.findName(),
    first_name: faker.name.firstName(),
    surnames: faker.name.lastName(),
    password: faker.password,
    userRegistered: faker.date.past(21),
    lastActivityAt: faker.date.past(2),
  }));

const contentTypes = (amount) =>
  _a(amount).map((u) => ({
    id: shortid.generate(),
    name: faker.name.findName(),
  }));

const tags = (amount) =>
  _a(amount).map((u) => ({
    id: shortid.generate(),
    name: faker.name.findName(),
    description: faker.lorem.sentences(2),
  }));

const contents = (amount) =>
  _a(amount).map((u) => ({
    id: shortid.generate(),
    text: faker.lorem.sentences(5),
    url: faker.internet.url(),
    imageURL: faker.image.imageUrl(),
    videoURL: faker.image.imageUrl(),
    title: faker.lorem.sentence(),
    published: faker.datatype.boolean(),
    publishedAt: faker.date.past(21),
    lastActivityAt: faker.date.past(2),
  }));

const groups = (amount) =>
  _a(amount).map((u) => ({
    id: shortid.generate(),
    name: faker.name.findName(),
    isAdminGroup: faker.datatype.boolean(),
  }));

const literals = (amount) =>
  _a(amount).map((u) => ({
    id: shortid.generate(),
    key: faker.lorem.word(),
    value: faker.lorem.words(),
    updatedAt: faker.date.past(21),
    active: faker.datatype.boolean(2),
  }));

const faqs = (amount) =>
  _a(amount).map((u) => ({
    id: shortid.generate(),
    rank: faker.datatype.number(99),
    question: faker.lorem.words(9),
    answer: faker.lorem.paragraphs(1),
  }));

const schema = {
  ApplicationUsers: users(9),
  ContentTypes: contentTypes(),
  tags: tags(16),
  Contents: contents(39),
  Groups: groups(8),
  Literals: literals(18),
  Faqs: faqs(22),
};
export default schema;
