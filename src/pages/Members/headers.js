import { DateTime } from "luxon";
import { getRequests } from "utils/requests";

const fields = [
  {
    label: "ID",
    property: "id",
    upsertOptions: {
      show: false,
    },
  },
  {
    label: "Nombre",
    property: "name",
    tableOptions: {
      isSearchable: true,
      format: (item) => item.fullname,
    },
  },
  {
    label: "Apellidos",
    property: "surnames",
    tableOptions: {
      show: false,
      isSearchable: true,
    },
  },

  {
    label: "Email",
    property: "email",
    tableOptions: {
      isSearchable: true,
    },
  },
  {
    label: "Fecha de registro",
    property: "userRegistered",
    type: "date",
    tableOptions: {
      format: (item, date) => DateTime.fromISO(date).toFormat("dd/MM/yyyy"),
    },
    upsertOptions: {},
  },
  {
    label: "Fecha de última actividad",
    property: "lastActivityAt",
    type: "datetime-local",
    tableOptions: {
      format: (item, date) =>
        date ? DateTime.fromISO(date).toFormat("dd/MM/yyyy HH:mm") : "-",
    },
    upsertOptions: {},
  },
  // {
  //   label: "Grupos",
  //   property: "groups",
  //   type: "multiselect",
  //   tableOptions: {
  //     show: false,
  //     filter: {
  //       property: "groups",
  //       // values: (aux) => {
  //       //   return aux?.groups?.map(({ id, name }) => ({
  //       //     value: { id },
  //       //     label: name,
  //       //   }));
  //       // },
  //     },
  //   },
  //   relation: {
  //     name: "groups",
  //     isMulti: true,
  //     primaryKey: "id",
  //     nameProps: ["name"],
  //   },
  // },
];

const requests = getRequests("ApplicationUsers", {
  findRequest: {
    defaultFilter: {
      order: "userRegistered DESC",
    },
  },
  findOneRequest: {
    defaultFilter: {
      include: ["groupsTracking"],
    },
  },
});

const headers = {
  type: "CRUD",
  options: {
    name: "Miembro",
    route: { path: "/members", home: true },
    requests,
    tableOptions: {
      isCreatable: false,
      isEditable: true,
      isSearchable: true,
      isFilterable: true,
      isPaginated: true,
      isExportable: true,
      openOnClickRow: true,
      exportToCSV: true,
    },
    upsertOptions: {},
  },
  sections: [
    {
      fields,
    },
  ],
};

export default headers;
