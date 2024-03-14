import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SingleHeroResponseType } from "../types/HeroData";

export const genshinApi = createApi({
  reducerPath: "genshinApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://genshin.jmp.blue/" }),
  endpoints: build => ({
    getGenshinHero: build.query<SingleHeroResponseType[], null>({
      query: () => `characters/all`
    })
  })
});

export const { useGetGenshinHeroQuery } = genshinApi;
