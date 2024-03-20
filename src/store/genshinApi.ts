import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SingleHeroResponseType,
  transformSingleHeroResponseType
} from "../types/HeroData";
import {
  transformHeroData,
  transformSingleHeroData
} from "../utils/transformHeroData";

export const genshinApi = createApi({
  reducerPath: "genshinApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://genshin.jmp.blue/" }),
  endpoints: build => ({
    getGenshinHero: build.query<SingleHeroResponseType[], void>({
      query: () => `characters/all`,
      transformResponse: (
        response: SingleHeroResponseType[]
      ): transformSingleHeroResponseType[] => transformHeroData(response)
    }),
    getGenshinSingleHeroInfo: build.query<SingleHeroResponseType, string>({
      query: id => `characters/${id}`,
      transformResponse: (
        response: SingleHeroResponseType
      ): transformSingleHeroResponseType => transformSingleHeroData(response)
    })
  })
});

export const { useGetGenshinHeroQuery, useGetGenshinSingleHeroInfoQuery } =
  genshinApi;
