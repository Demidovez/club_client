import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IMaterial,
  IMaterialCategory,
  IMaterialsData,
} from "../../types/types";

export const materialsAPI = createApi({
  reducerPath: "materialsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://club.nikolaydemidovez.by/api/",
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
    getMaterialOne: builder.query<IMaterial, string | undefined>({
      query: (material) => {
        if (material) {
          return `get_material_by_name/${material}`;
        } else {
          throw new Error("Not defined material!");
        }
      },
      transformResponse: (response: IMaterial) => {
        if (!response) {
          throw new Error("Not found material!");
        }
        return response;
      },
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetMaterialsQuery,
  useGetMaterialOneQuery,
} = materialsAPI;
