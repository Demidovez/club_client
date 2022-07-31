import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMaterialCategory, IMaterialsData } from "../../types/types";

export const materialsAPI = createApi({
  reducerPath: "materialsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://club.nikolaydemidovez.by:8010/",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<IMaterialCategory[], void>({
      query: () => `get_categories`,
    }),
    getMaterials: builder.query<IMaterialsData, string | undefined>({
      query: (category) => {
        if (category) {
          return `get_materials_by_category_name/${category}`;
        } else {
          throw new Error("Not defined category!");
        }
      },
      transformResponse: (response: IMaterialsData) => {
        if (response.category == "") {
          throw new Error("Not found category!");
        }
        return response;
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useGetMaterialsQuery } = materialsAPI;
