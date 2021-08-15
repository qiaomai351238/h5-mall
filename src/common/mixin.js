import { debounce } from './utils'
import { BACKTOP_DISTANCE } from './const';
import BackTop from "components/content/backTop/BackTop";


export const itemImageListener = {
  data() {
    return {
      itemImageListener: null
    }
  },
  mounted () {
    let newrefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      newrefresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImageListener)
    // console.log('我是混入')
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > BACKTOP_DISTANCE
    }
  }
}