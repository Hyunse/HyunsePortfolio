<template>
  <div id="app">
    <div class="fs-split">
      <div class="split-content">
        <div class="split-content-vertically-center">
          <div class="split-intro">
            <div>
              <img src="@/assets/images/me.jpg" alt style="width:30%; height:30%;" />
            </div>
            <span class="tagline">Web Developer</span>
          </div>
          <div class="split-bio">
            <p>
              Hello, my name is Kim Hyunse. I'm a Web Developer living in Toronto, Canada.
              I'm looking for a job as Web Developer. I love to work with people having a passion and enjoy learning something new.
              I can deal with both front-end and back-end technologies. I know how to create your website
              using the latest technologies available.
              I'm inquisitive about web programming.
            </p>
          </div>
          <div class="split-lists">
            <div class="split-list">
              <h3>Projects</h3>
              <ul v-for="( project, index ) in projects" :key="index">
                <Project :project="project" :openModal="show" />
              </ul>
            </div>
          </div>
          <div class="split-lists">
            <div class="split-list">
              <Contact />
            </div>
          </div>
          <div class="split-credit"></div>
        </div>
      </div>
    </div>
    <infoModal :modalData="modal" />
  </div>
</template>

<script>
import "@/assets/css/reset.css";
import infoModal from "./components/Modal.vue";
import Project from "./components/Project.vue";
import Contact from "./components/Contact.vue";
import { Carousel, Slide } from "vue-carousel";
import { porjectsData } from "../projectsData";

export default {
  name: "App",
  data() {
    return {
      ready: false,
      modal: {
        title: "",
        info: "",
        images: [],
        tech: "",
      },
      projects: porjectsData,
    };
  },
  moounted() {},
  methods: {
    show(obj) {
      this.modal.title = obj.name;
      this.modal.info = obj.info;
      this.modal.images = obj.images;
      this.modal.tech = obj.tech;
      this.$modal.show("project-modal");
    },
  },
  components: {
    Carousel,
    Slide,
    infoModal,
    Project,
    Contact,
  },
};
</script>

<style>
.fs-split {
  /* width: 100vw; */
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
@media (max-width: 800px) {
  .fs-split {
    height: auto;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}
.fs-split .split-image {
  width: 20%;
  height: 20%;
  background-position: center center;
  background-size: cover;
}
@media (max-width: 800px) {
  .fs-split .split-image {
    height: 80vh;
    width: 100%;
  }
}
.fs-split .split-content {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
@media (max-width: 800px) {
  .fs-split .split-content {
    width: 100%;
    height: auto;
  }
}
.fs-split .split-content .split-content-vertically-center {
  padding: 80px;
  max-width: 640px;
  margin-top: auto;
  margin-bottom: auto;
}
@media (max-width: 1200px) {
  .fs-split .split-content .split-content-vertically-center {
    padding: 60px;
  }
}
@media (max-width: 800px) {
  .fs-split .split-content .split-content-vertically-center {
    padding: 40px;
  }
}

.split-intro {
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: -2px;
}
.split-intro h1 {
  font-weight: 400;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 40px;
  letter-spacing: 0.4px;
  color: #47bec7;
}
.split-intro .tagline {
  color: #cccccc;
}

.split-bio {
  padding: 40px 0 40px 0;
  font-family: "Lora", serif;
}
@media (max-width: 1200px) {
  .split-bio {
    padding: 30px 0;
  }
}
@media (max-width: 800px) {
  .split-bio {
    padding: 20px 0;
  }
}
.split-bio p {
  color: #848d96;
}
.split-bio a {
  color: #848d96;
  transition-duration: 0.5s;
  border-bottom: 1px dotted #848d96;
}
.split-bio a:hover {
  color: #ca486d;
  transition-duration: 0.1s;
  border-bottom: 1px dotted #ca486d;
}

.split-lists .split-list {
  width: 100%;
  display: inline-block;
  margin-bottom: 40px;
}
@media (max-width: 500px) {
  .split-lists .split-list {
    width: 90%;
  }
}
.split-lists .split-list h3 {
  font-weight: 400;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 11px;
  margin-bottom: 31px;
  color: #848d96;
  letter-spacing: 2px;
  opacity: 0.5;
}
.split-lists .split-list ul li {
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 20px;
}
.split-lists .split-list ul li a {
  color: #848d96;
  transition-duration: 0.5s;
}
.split-lists .split-list ul li a:hover {
  color: #ca486d;
  transition-duration: 0.1s;
}
.split-lists .split-list ul li p {
  padding-top: 20px;
  /* margin-top: 10px; */
  font-size: 16px;
  line-height: 16px;
}
.split-credit {
  opacity: 0.4;
}
.split-credit p {
  font-size: 12px;
  line-height: 14px;
}
.split-credit p a {
  color: #848d96;
}
</style>
