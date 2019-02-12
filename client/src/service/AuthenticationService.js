import api from "./api";

export default {
  register(credentails) {
    return api().post("register", credentails);
  }
};
