import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '94b475ec9emsh55e6ca06218f4fep112d7djsn672f4a23e235',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

const baseUrl='https://bing-news-search1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoNewsHeaders});

export const CryptoNewsApi=createApi({
    reducerPath:'CryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});
export const {
    useGetCryptoNewsQuery,
}=CryptoNewsApi;