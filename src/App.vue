<template>
  <div id="app">
      <div class="select-end">
          <router-link tag="div" to="/front">前台页面</router-link>
          <router-link tag="div" to="/end">后台页面</router-link>
      </div>
      <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .select-end {
       width: 50%;
       margin: 0 auto;
       display: flex;
       height: 100px;
       background: #3ff;
       justify-content: center;
       align-items: center;
       min-width: 700px;
  }

  .select-end > div {
     height: 30px;
     width: 80px;
     line-height: 30px;
     background: #fce;
     margin-right: 30px;
     text-align: center;
     cursor: pointer;
     border-radius: 10px;
  }

  .view {
    min-width: 700px;
  }
</style>
