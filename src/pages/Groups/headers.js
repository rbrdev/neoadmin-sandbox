import { getRequests } from "utils/requests";

const fields = [
  {
    label: "Nombre",
    property: "name",
    tableOptions: {
      isSearchable: true,
    },
  },
  {
    label: "Grupo Admin",
    property: "isAdminGroup",
    type: "checkbox",
    tableOptions: {
      format: (state, field) => (state.isAdminGroup ? "Si" : "No"),
      filter: {
        values: [
          { value: true, label: "Si" },
          { value: false, label: "No" },
        ],
      },
    },
  },
];

const requests = getRequests("Groups");

const headers = {
  type: "CRUD",
  options: {
    name: "Grupo",
    route: { path: "/groups" },
    requests,
    tableOptions: {
      isSearchable: true,
      isEditable: true,
      isPaginated: true,
      isExportable: true,
      isFilterable: true,
      openOnClickRow: true,
      exportToCSV: true,
    },
  },
  sections: [
    {
      fields,
    },
  ],
};

export default headers;
