<template>
  <div>
    <a href="#none" v-on:click="show(project)">{{ project.name }}</a>
    <div>
      <p class="split-icon">
        <i class="far fa-clock"></i>
      </p>
      <p class="split-info">{{ project.time }}</p>
    </div>
    <div>
      <p class="split-icon">
        <i class="far fa-building"></i>
      </p>
      <p class="split-info">{{ project.company }}</p>
    </div>
    <div>
      <p class="split-icon">
        <i class="fas fa-child"></i>
      </p>
      <p class="split-info">{{ project.position }} Developer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props:['project'],
  data() {
    return {};
  },
  methods: {},
}
</script>

<style>
</style>
