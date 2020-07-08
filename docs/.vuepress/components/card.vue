<template>
  <div>
    <vuep :template="code"></vuep>
  </div>
</template>

<script>
import vuep from 'vuep'
import 'vuep/dist/vuep.css'
export default {
  components: {
    vuep
  },
  created: function () {
    this.code = `
<template>
    <div>Hello, {{ name }}!</div>
</template>
<style>
    div{
        color:#f00
    }
</style>
<script>
module.exports = {
    data: function () {
        return { name: 'Vue' }
    }
}
<\/script>

    `
  }
}
</script>

