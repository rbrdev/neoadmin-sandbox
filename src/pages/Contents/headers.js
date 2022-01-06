import { formatDate } from "utils/date";
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
    label: "Publicado",
    property: "published",
    type: "checkbox",
    tableOptions: {
      show: false,
    },
    style: {
      flexBasis: "100%",
    },
  },
  {
    label: "Fecha Publicación",
    property: "publishedAt",
    type: "date",
    tableOptions: {
      format: (item) => formatDate(item.publishedAt),
      filter: {
        property: "published",
        label: "Publicado",
        values: [
          { value: 1, label: "Si" },
          { value: 0, label: "No" },
        ],
      },
    },
  },

  {
    label: "Tipo de Contenido",
    property: "contentType",
    type: "multiselect",
    tableOptions: {
      show: false,
      filter: {
        values: [
          { value: "Artículo", label: "Artículo" },
          { value: "Entrevista", label: "Entrevista" },
          { value: "Publicación en Video", label: "VideoPublicacion" },
        ],
      },
    },
    relation: {
      name: "contentType",
      isMulti: false,
      primaryKey: "id",
      nameProps: ["name"],
    },
  },
  {
    label: "Título",
    property: "title",
    type: "html",
    tableOptions: {
      isSearchable: true,
      format: (item) => item.title?.replace(/(<([^>]+)>)/gi, ""),
    },
    style: {
      flexBasis: "100%",
    },
    controlProps: {
      init: { height: 150 },
    },
  },
  {
    label: "URL",
    property: "url",
    tableOptions: {
      show: false,
    },
    style: {
      flexBasis: "100%",
    },
  },
  {
    label: "Imagen",
    property: "imageURL",
    type: "image",
    tableOptions: {
      show: false,
    },
    upsertOptions: {
      uploadImageToServer: { format: (item) => item.slug },
    },
  },
  {
    label: "URL Vídeo",
    property: "videoURL",
    tableOptions: {
      show: false,
    },
    style: {
      flexBasis: "100%",
    },
  },
  {
    label: "Groupos",
    property: "groups",
    type: "multiselect",
    tableOptions: {
      show: false,
    },
    relation: {
      name: "groups",
      isMulti: true,
      primaryKey: "id",
      nameProps: ["name"],
    },
    style: {
      flexBasis: "100%",
    },
  },
  {
    label: "Etiquetas",
    property: "tags",
    type: "multiselect",
    tableOptions: {
      show: false,
    },
    relation: {
      name: "sections",
      isMulti: true,
      primaryKey: "id",
      nameProps: ["name"],
    },
    style: {
      flexBasis: "100%",
    },
  },
  {
    label: "Texto (HTML)",
    property: "text",
    type: "html",
    tableOptions: {
      show: false,
    },
    style: {
      flexBasis: "100%",
      paddingTop: 200,
    },
  },
];

const requests = getRequests("Contents");

const headers = {
  type: "CRUD",
  options: {
    name: "Contenido",
    route: { path: "/contents" },
    requests,
    tableOptions: {
      isEditable: true,
      isPaginated: true,
      isExportable: true,
      isSearchable: true,
      isFilterable: true,
      openOnClickRow: true,
      exportToCSV: true,
    },
  },
  sections: [
    {
      fields,
    },
    {
      title: "Minutatge",
      fields: [
        {
          label: "Minutatge",
          property: "minutes",
          name: "minutes",
          type: "relation-list",
          tableOptions: {
            show: false,
          },
          options: {
            isCreatable: true,
            fields: [
              {
                property: "name",
                label: "Nombre",
              },
              {
                property: "time",
                label: "Minut",
                type: "time",
                step: 1,
              },
            ],
          },
          style: {
            flexBasis: "100%",
          },
        },
      ],
    },
  ],
};

export default headers;
