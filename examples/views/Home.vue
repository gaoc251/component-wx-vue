<template>
  <div class="home">
    <wx-button class="button" type="primary" size="medium" @click="btnComponent">按钮组件</wx-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    btnComponent () {
      this.$router.push('/Wxbutton')
    }
  }
}
</script>
