import api from '../api/api';

class R1022Service {
  // eslint-disable-next-line class-methods-use-this
  get() {
    return api
      .get('/r1022');
  }

  // eslint-disable-next-line class-methods-use-this
  getByFiltered(query) {
    return api
      .get(`/r1022/${query}`);
  }
}

export default new R1022Service();
