import { getRequests } from "utils/requests";

const fields = [
  { label: "Posición", property: "rank", tableOptions: { isSearchable: true } },
  { label: "Título", property: "question", isSearchable: true },

  {
    label: "Categoría",
    property: "category",
    tableOptions: {
      isSearchable: true,
      isFilterable: true,
      filter: {
        values: [
          { value: "general", label: "General" },
          { value: "section-a", label: "Sección A" },
          { value: "section-b", label: "Sección B" },
        ],
      },
    },
  },
  {
    label: "Respuesta",
    property: "answer",
    type: "html",
    tableOptions: { show: false, isSearchable: true },
  },
];

const requests = getRequests("Faqs");

const headers = {
  type: "CRUD",
  options: {
    name: "FAQ",
    route: { path: "/faqs" },
    requests,
    tableOptions: {
      isSearchable: true,
      isEditable: true,
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
