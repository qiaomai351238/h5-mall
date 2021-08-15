import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutations-types'

export default {
  addCart(context, payload) {
    // 1.payload新添加的商品
    // let oldProduct = null;
    // for(let item of state.cartList) {
    //   if(item.iid === payload.iid) {
    //     oldProduct = item;
    //   }
    // }
    return new Promise((resolve) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      // 2.判断oldProduct
      if(oldProduct) {
        // oldProduct.count += 1;
        context.commit(ADD_COUNT, oldProduct)
        resolve('当前商品的数量+1')
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload)
        resolve('添加了新的商品')
      }
    })
    
  }
}