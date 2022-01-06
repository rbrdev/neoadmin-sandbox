import { SchemaFaker } from "schema-faker";
import schemas from "./schemas";

const faker = new SchemaFaker();

export const loginRequest = (credentials) => {
  return new Promise((res, rej) => res({ token: "id", user: { id: 1 } }));
};

export const countRequest = (endpoint, defaultFilter = {}) => ({
  filter,
  fields,
}) => {
  return new Promise((res, rej) =>
    res({ count: parseInt(Math.random() * 100) })
  );
};

export const findAllRequest = (endpoint, defaultFilter = {}) => (
  { _ } = {
    pagination: { page: 1, itemsPerPage: 10 },
  }
) => {
  return new Promise((res, rej) =>
    res(faker.fakeApi({ data: schemas[endpoint] }).data)
  );
};

export const findRequest = (endpoint, defaultFilter = {}) => (
  { filter, pagination, fields } = {
    pagination: { page: 1, itemsPerPage: 10 },
  }
) => {
  console.log("endpointendpoint", endpoint);
  return new Promise((res, rej) =>
    res(faker.fakeApi({ data: schemas[endpoint] }).data)
  );
};

export const findOneRequest = (endpoint, defaultFilter = {}) => (data) => {
  return new Promise((res, rej) => res(data));
};

export const upsertRequest = (endpoint) => (data) => {
  return new Promise((res, rej) => res(data));
};

export const deleteRequest = (endpoint) => ({ id }) => {
  return new Promise((res, rej) => res({ id }));
};

export const getRequests = (endpoint, options) => ({
  findAllRequest: findAllRequest(endpoint, options?.findRequest?.defaultFilter),
  findRequest: findRequest(endpoint, options?.findRequest?.defaultFilter),
  countRequest: countRequest(endpoint, options?.findRequest?.defaultFilter),
  findOneRequest: findOneRequest(
    endpoint,
    options?.findOneRequest?.defaultFilter
  ),
  upsertRequest: upsertRequest(endpoint),
  deleteRequest: deleteRequest(endpoint),
});
