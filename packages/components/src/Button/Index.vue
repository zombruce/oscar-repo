<!--
 * @Author: chang
 * @Date: 2025-07-31 16:24:26
 * @Description: 
 * @LastEditTime: 2025-07-31 16:28:25
 * @LastEditors: chang
-->
<template>
  <div>
    <button class="oscar-button">
      <slot>Default Button</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OscarButton'
})
</script>

<style scoped></style>
