import handleLocation from './../../api/location'

const config = {
  state: {
    api:{}
  },
  mutations: {
    SET_API: (state, api) => {
      state.api = api;
    }
  },
  actions: {
    async GetApi ({commit}) {
      console.log(process.env.NODE_ENV);
      let locationList = await handleLocation.getLocationList()
      console.log(locationList)
      commit('SET_API', locationList);
      return locationList;
    }
  }
}

export default config
