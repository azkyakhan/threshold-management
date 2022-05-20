import { GetterTree } from "vuex";
import ProductState from "./ProductState";
import RootState from "../../RootState";

const getters: GetterTree<ProductState, RootState> = {
  getSearchProducts(state) {
    return state.products.list;
  },
  isScrollable(state) {
    return (
      state.products.list.length > 0 &&
      state.products.list.length < state.products.total.virtual
    );
  },
  getProducts(state) {
    return state.products;
  },
  getAppliedFilters(state) {
    return state.appliedFilters;
  },
  getQuery(state) {
    return state.query;
  },
  getThreshold(state) {
    return state.threshold;
  }
};
export default getters;