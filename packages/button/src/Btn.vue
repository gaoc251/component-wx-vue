<template>
  <div>
    <div
      class="btn"
      :class="[ {'btnClick': loadingBtn},  btnSize  ]"
      :style="typeBtn"
      @mouseover="itemHover"
      @mouseout="removeHover"
      @click="clickBtn"
    >
      <slot>按钮</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wx-button',
  props: {
    loading: Boolean,
    type: String,
    size: String
  },
  data () {
    return {
      loadingBtn: this.loading,
      typeBtn: {
        background: '#409EFF'
      },
      btnSize: 'btnSize',
      sss: 'aaa'
    }
  },
  watch: {
    loading (data) {
      this.loadingBtn = data
    },
    type (data) {
      // this.type = data;
      this.initBtnType()
    },
    size (data) {
      // this.size = data
      this.initBtnSize()
    }
  },
  methods: {
    init () {
      this.initBtnType()
      this.initBtnSize()
    },
    initBtnType () {
      switch (this.type) {
        case 'primary':
          this.typeBtn.background = '#409EFF'
          break
        case 'success':
          this.typeBtn.background = '#67C23A'
          break
        case 'info':
          this.typeBtn.background = '#909399'
          break
        case 'warning':
          this.typeBtn.background = '#e6a23c'
          break
        case 'danger':
          this.typeBtn.background = '#f56c6c'
          break
        default:
          this.typeBtn.background = '#409EFF'
      }
    },
    initBtnSize () {
      switch (this.size) {
        case 'medium':
          this.btnSize = 'btnSize-medium'
          break
        case 'small':
          this.btnSize = 'btnSize-small'
          break
        case 'mini':
          this.btnSize = 'btnSize-mini'
          break
        default:
          this.btnSize = 'btnSize'
      }
    },
    initBtnHoverType () {
      switch (this.type) {
        case 'primary':
          this.typeBtn.background = '#66b1ff'
          break
        case 'success':
          this.typeBtn.background = '#85ce61'
          break
        case 'info':
          this.typeBtn.background = '#a6a9ad'
          break
        case 'warning':
          this.typeBtn.background = '#ebb563'
          break
        case 'danger':
          this.typeBtn.background = '#f78989'
          break
        default:
          this.typeBtn.background = '#409EFF'
      }
    },
    itemHover () {
      this.initBtnHoverType()
    },
    removeHover () {
      this.initBtnType()
    },
    clickBtn () {
      this.$emit('click', true)
    }
  },
  mounted () {
    this.init()
  }
}
</script>
