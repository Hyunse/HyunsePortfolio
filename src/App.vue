<template>
  <div id="app">
    <div class="fs-split">
      <!-- Image Side -->
      <!-- Content Side -->
      <div class="split-content">
        <div class="split-content-vertically-center">
          <div class="split-intro">
            <div>
              <!-- <img src="/static/images/me.jpg" alt="" style="width:30%; height:30%;"> -->
            </div>
            <!-- <h1>Kim Hyunse</h1> -->
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
              <ul>
                <li v-for="( project, index ) in projects" :key="index">
                  <a href="#none" v-on:click="show(project)">{{ project.name }}</a>
                  <p class="split-icon">
                    <i class="far fa-clock"></i>
                  </p>
                  <p class="split-info">
                    {{ project.time }}
                  </p>
                  <p class="split-icon">
                    <i class="far fa-building"></i>
                  </p>
                  <p class="split-info">
                    {{ project.company }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="split-lists">
            <div class="split-list">
              <h3>Connect</h3>
              <ul>
                <li>
                  <i class="far fa-envelope"></i>
                  <span style="margin-left: 15px;">anzmf12@naver.com</span>
                </li>
                <li>
                  <i class="fab fa-github"></i>
                  <span style="margin-left: 15px;">https://github.com/Hyunse</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="split-credit">
          </div>
        </div>
      </div>
    </div>
    <modal name="project-modal"
         transition="nice-modal-fade"
         :min-width="300"
         :min-height="600"
         :max-height="800"
         width="70%"
         height="auto"
         :scrollable="true"
         :delay="100"
         :adaptive="true">
      <div class="project-modal-content">
        <div class="modal-header">
          <p>{{modal.title}}</p>
        </div>
        <div class="modal-body">
          <div class="modal-image">
            <carousel :per-page="1">
              <slide v-for="(image, index) in modal.images" :key="index">
                <img :src="image" style="max-width:100%;max-height:300px;">
              </slide>
            </carousel>
          </div>
          <div class="modal-content">
             <p class="project-info">{{modal.info}}</p>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import infoModal from './components/Modal.vue'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'App',
  data () {
    return {
      modal: {
        title: '',
        info: ''
      },
      projects: [
        {
          name: 'Remote AR Homepage',
          company: 'Virnect',
          time: '2017.06 ~ 2017.12',
          info: `Remote AR Homepage has 3 part pages. First, main page is introducing RemoteAR application.
                 And next part is that RemoteAR service page. Also, it has analytics pages to give usage information for 
                 customers`,
          images: [
            '/static/images/remotear/remotear_1.png',
            '/static/images/remotear/remotear_2.png',
            '/static/images/remotear/remotear_3.png',
            '/static/images/remotear/remotear_4.png']
        },
        {
          name: 'Software Center Busan Univ',
          company: 'Virnect',
          time: '2017.10 ~ 2017.11',
          info: `This site is for university students and teachers for introducing Busan University's software center
                and sharing resources, such as pictures and video`,
          images: [
            '/static/images/busan/busan_1.jpg',
            '/static/images/busan/busan_2.jpg',
            '/static/images/busan/busan_3.jpg',
            '/static/images/busan/busan_4.jpg']
        },
        {
          name: 'See Real Homepage',
          company: 'Virnect',
          time: '2017.04 ~ 2017.05',
          info: `It's a single page web to inroduce SeeReal application.`,
          images: [
            '/static/images/seereal/seereal_1.png']
        },
        {
          name: 'Processed Meat,Red Meat Calculation Program APP',
          company: 'ABC Solutuon',
          time: '2016.12 ~ 2016.12',
          info: `It's a hybrid web app to calculate calorie in a processed meat and red meat user eat. 
          I made a registration page in which user can register a food they eat,
          a board page in which user can check calorie in each time period,
          a graph page to use JqPlot Chart, etc.`,
          images: [
            '/static/images/cal/cal_1.jpg',
            '/static/images/cal/cal_2.jpg',
            '/static/images/cal/cal_3.jpg',
            '/static/images/cal/cal_4.jpg']
        },
        {
          name: 'Kyongnam Bank Internet Banking',
          company: 'ABC Solutuon',
          time: '2016.02 ~ 2016.12',
          info: `It's internet banking system. I made foreign exchange part like Foreign Currency Remittance, 
          Direct Remittance Service, Foreign Currency Time Deposit, Exchange rate inquiry, etc.`,
          images: [
            '/static/images/knbank/k_1.jpg',
            '/static/images/knbank/k_2.jpg',
            '/static/images/knbank/k_3.jpg',
            '/static/images/knbank/k_4.jpg']
        },
        {
          name: 'Nutrient Calculation Program WEB',
          company: 'ABC Solutuon',
          time: '2015.12 ~ 2016.01',
          info: `Nutritional contents program is a tool calculating nutritional contents in food. I did data migration, made a nutritional contents program, made its admin page to use WebSquare.`,
          images: [
            '/static/images/eat/eat_1.jpg',
            '/static/images/eat/eat_2.jpg',
            '/static/images/eat/eat_3.jpg',
            '/static/images/eat/eat_4.jpg']
        },
        {
          name: 'Bosch Master Tool',
          company: 'ABC Solutuon',
          time: '2015.06 ~ 2015.12',
          info: `Master Tool is a web application for a field worker and officer in Bosch.
                It was my first web project in my career. I made a analytics page using c3.js,
                batch program to send Email on specific day and time, 
                validation check form and uploaded Excel, etc.`,
          images: [
            '/static/images/bosch/mastertool_1.png',
            '/static/images/bosch/mastertool_2.png',
            '/static/images/bosch/mastertool_3.png']
        }
      ]
    }
  },
  methods: {
    show (obj) {
      this.modal.title = obj.name
      this.modal.info = obj.info
      this.modal.images = obj.images
      this.$modal.show('project-modal')
    }
  },
  components: {
    infoModal,
    Carousel,
    Slide
  }
}
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
/* V-Modal */
.v--modal-overlay {
  background: rgba(0, 0, 0, 0.6);
}

.project-modal-content{
  height: auto;
  padding: 10px 20px 10px 20px;

}
.modal-header {
  height:30%;
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
