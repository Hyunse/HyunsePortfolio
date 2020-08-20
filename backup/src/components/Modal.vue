<template>
  <modal
    name="project-modal"
    transition="nice-modal-fade"
    :min-width="300"
    :min-height="600"
    :max-height="800"
    width="70%"
    height="auto"
    :scrollable="true"
    :delay="400"
    :adaptive="true"
  >
    <div class="project-modal-content">
      <div class="modal-header">
        <p>{{modalData.title}}</p>
      </div>
      <div class="modal-body">
        <div class="modal-image">
          <carousel :per-page="1">
            <slide class="modal-slide" v-for="(image, index) in modalData.images" :key="index">
              <img :src="image" />
            </slide>
          </carousel>
        </div>
        <div class="modal-content">
          <p style="font-weight:bold;">Info</p>
          <p class="project-info">{{modalData.info}}</p>
          <p style="font-weight:bold;">Technologies</p>
          <p>{{modalData.tech}}</p>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: "infoModal",
  props: ["modalData"],
  data() {
    return {
      modal: {
        title: "",
        info: "",
      },
    };
  },
  methods: {
  },
};
</script>

<style>
.project-modal-content {
  overflow-y: hidden;  
}

.modal-slide > img {
  max-width: 100%;
  max-height: 300px;
}
/* V-Modal */
.v--modal-overlay {
  background: rgba(0, 0, 0, 0.6);
}

.project-modal-content {
  height: auto;
  padding: 10px 20px 10px 20px;
}
.modal-header {
  height: 30%;
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
}
.modal-header > p {
  color: #000000 !important;
}
.modal-body {
  width: 100%;
  max-height: 70%;
}
.VueCarousel-slide-active {
  text-align: center;
}

.modal-content {
  font-size: 15px;
}
</style>
