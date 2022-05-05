import { MutationTree } from 'vuex'
import ProductState from './ProductState'
import * as types from './mutation-types'

const mutations: MutationTree <ProductState> = {
  [types.PRODUCT_LIST_UPDATED] (state, payload) {
    state.products.list = payload.products;
    state.products.total.variant = payload.totalVariant;
    state.products.total.virtual = payload.totalVirtual;
  },
  [types.PRODUCT_FACETS_UPDATED] (state, payload) {
    state.facets = payload
  }
}
export default mutations;