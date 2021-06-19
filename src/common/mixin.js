import {debounce} from './utils'

export const itemImageListener = {
  data() {
    return {
      itemImageListener: null
    }
  },
  mounted () {
    let refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImageListener)
    console.log('我是混入')
  }
}