import { API } from 'aws-amplify';

export const fetchListItems = async (query, queryName) => {
  try {
    const apiData = await API.graphql({ query: query });
    const itemsFromAPI = apiData.data[queryName].items;
    await Promise.all(
      itemsFromAPI.map(async (item) => {
        return item;
      }),
    );
    return await itemsFromAPI;
  } catch (error) {
    console.log(error);
  }
};
