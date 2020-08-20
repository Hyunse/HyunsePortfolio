<template>
  <li>
    <a href="#none" v-on:click="openModal(project)">{{ project.name }}</a>
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
  </li>
</template>

<script>
export default {
  name: "Project",
  props: ["project", "openModal"],
  data() {
    return {};
  },
};
</script>

<style>
.split-icon {
  position: absolute;
  padding-left: 20px;
  font-size: 0.7em !important;
  color: #848d96 !important;
}

.split-info {
  padding-left: 40px;
}
</style>
