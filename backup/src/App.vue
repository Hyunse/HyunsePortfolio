<template>
  <div id="app">
    <div class="app-container">
      <div class="app-content">
        <div class="app-content-vertically-center">
          <div class="intro">
            <div>
              <img src="@/assets/images/me.jpg" alt style="width:30%; height:30%;" />
            </div>
            <span class="tagline">Web Developer</span>
          </div>
          <div class="my-bio">
            <p>
              Hello, my name is Kim Hyunse. I'm a Web Developer living in Toronto, Canada.
              I'm looking for a job as Web Developer. I love to work with people having a passion and enjoy learning something new.
              I can deal with both front-end and back-end technologies. I know how to create your website
              using the latest technologies available.
              I'm inquisitive about web programming.
            </p>
          </div>
          <div class="app-lists">
            <div class="app-list">
              <h3>Projects</h3>
              <ul v-for="( project, index ) in projects" :key="index">
                <Project :project="project" :openModal="show" />
              </ul>
            </div>
          </div>
          <div class="app-lists">
            <div class="app-list">
              <Contact />
            </div>
          </div>
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
.app-container {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
@media (max-width: 800px) {
  .app-container {
    height: auto;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}
.app-container .app-content {
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
  .app-container .app-content {
    width: 100%;
    height: auto;
  }
}
.app-container .app-content .app-content-vertically-center {
  padding: 80px;
  max-width: 640px;
  margin-top: auto;
  margin-bottom: auto;
}
@media (max-width: 1200px) {
  .app-container .app-content .app-content-vertically-center {
    padding: 60px;
  }
}
@media (max-width: 800px) {
  .app-container .app-content .app-content-vertically-center {
    padding: 40px;
  }
}

.intro {
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: -2px;
}
.intro h1 {
  font-weight: 400;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 40px;
  letter-spacing: 0.4px;
  color: #47bec7;
}
.intro .tagline {
  color: #cccccc;
}

.my-bio {
  padding: 40px 0 40px 0;
  font-family: "Lora", serif;
}
@media (max-width: 1200px) {
  .my-bio {
    padding: 30px 0;
  }
}
@media (max-width: 800px) {
  .my-bio {
    padding: 20px 0;
  }
}
.my-bio p {
  color: #848d96;
}
.my-bio a {
  color: #848d96;
  transition-duration: 0.5s;
  border-bottom: 1px dotted #848d96;
}
.my-bio a:hover {
  color: #ca486d;
  transition-duration: 0.1s;
  border-bottom: 1px dotted #ca486d;
}

.app-lists .app-list {
  width: 100%;
  display: inline-block;
  margin-bottom: 40px;
}
@media (max-width: 500px) {
  .app-lists .app-list {
    width: 90%;
  }
}
.app-lists .app-list h3 {
  font-weight: 400;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 11px;
  margin-bottom: 31px;
  color: #848d96;
  letter-spacing: 2px;
  opacity: 0.5;
}
.app-lists .app-list ul li {
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 20px;
}
.app-lists .app-list ul li a {
  color: #848d96;
  transition-duration: 0.5s;
}
.app-lists .app-list ul li a:hover {
  color: #ca486d;
  transition-duration: 0.1s;
}
.app-lists .app-list ul li p {
  padding-top: 20px;
  /* margin-top: 10px; */
  font-size: 16px;
  line-height: 16px;
}
</style>
