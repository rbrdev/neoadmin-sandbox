import { formatDate } from "utils/date";
import { getRequests } from "utils/requests";

const fields = [
  {
    label: "Id",
    property: "key",
    type: "text",
    tableOptions: {
      isSearchable: true,
    },
  },
  {
    label: "Texto",
    property: "value",
    type: "html",
    tableOptions: {
      isSearchable: true,
      format: (item, __html) => <div dangerouslySetInnerHTML={{ __html }} />,
    },
  },
  {
    label: "Estado",
    property: "active",
    type: "checkbox",
    tableOptions: {
      isSearchable: true,
      format: (item, active) => (active ? "Activo" : "Inactivo"),
    },
  },
  {
    label: "Fecha de Actualización",
    property: "updatedAt",
    tableOptions: {
      format: (item, updatedAt) => formatDate(updatedAt),
    },
  },
];

const requests = getRequests("Literals");

const headers = {
  type: "CRUD",
  options: {
    name: "Literal",
    route: { path: "/literals" },
    requests,
    primaryKey: "key",
    tableOptions: {
      isSearchable: true,
      isEditable: true,
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
