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
    label: "Descripción",
    property: "description",
    type: "html",
    tableOptions: {
      show: false,
      isSearchable: true,
    },
  },
];

const requests = getRequests("tags", {
  findRequest: { defaultFilter: { order: "order" } },
});

const headers = {
  type: "CRUD",
  options: {
    name: "Etiqueta",
    route: { path: "/tags" },
    requests,
    tableOptions: {
      isSearchable: true,
      isEditable: true,
      isFilterable: false,
      isPaginated: true,
      isExportable: true,
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
