import { getRequests } from "utils/requests";

const fields = [
  {
    label: "Nombre",
    property: "name",
    tableOptions: {
      isSearchable: true,
    },
    style: {
      flexBasis: "100%",
    },
  },
];

const requests = getRequests("ContentTypes");

const headers = {
  type: "CRUD",
  options: {
    name: "Tipo Contenido",
    route: { path: "/contenttypes" },
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
