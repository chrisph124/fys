<template>
  <div class="container">
  
    <div class="box1">
      <div class="level-item is-pulled-right">
        <a class="button is-primary">
          <div class="fa fa-arrow-left fa-3x"></div>
        </a>
      </div>
    </div>
  
    <media :query="{maxWidth: 1920}">
      <div class="box2">
        <nav class="level">
          <div class="level-item has-text-centered" v-for="(item, index) in items" :key="item.index">
            <div class="card">
              <div class="card-image">
                <figure class="image is-1by1">
                  <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
                </figure>
                <div class="card-content">
                  <div class="content">
                    <a>@bulmaio</a>.
                    <a>{{item}}</a>
                    <a>#responsive</a>
                    <br>
                    <small>11:09 PM - 1 Jan 2016</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </media>
  
    <div class="box3">
      <div class="level-item is-pulled-left">
        <a class="button is-primary">
          <div class="fa fa-arrow-right fa-3x"></div>
        </a>
      </div>
    </div>
  
  </div>
</template>

<script>
import Media from 'vue-media'
export default {
  components: { Media },
  data () {
    return {
      items: ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8']
    }
  }
}

</script>

<style scoped>
.container {
  display: flex;
  margin: auto;
  padding: 0;
}


.box1,
.box3 {
  max-width: 10%;
  align-self: center;
}

.box1 .button,
.box3 .button {
  height: 200px;
}

.box2 {
  max-width: 100%;
  margin-bottom: 2.5rem
}

.level {
  list-style: none;
  flex-flow: row wrap;
}

.level-item {
  padding: 5px 5px 5px 0;
  color: white;
  text-align: center;
}

.level-item:last-child {
  padding-right: none
}

.btn {
  border-radius: 0;
  border-color: black;
  border-top: none;
  padding: 1.2rem 2.5rem;
  margin-bottom: 3rem;
  line-height: 0
}

.is-primary {
  background-color: transparent;
  color: #EEE;
  opacity: 0.75;
  -webkit-transition: background-color 0.3s ease-out;
  -moz-transition: background-color 0.3s ease-out;
  -o-transition: background-color 0.3s ease-out;
  transition: background-color 0.3s ease-out;
}

.is-primary:hover {
  background-color: #00d1b2;
  color: #FFF;
  opacity: 0.5;
  transition: background-color 0.3s ease;
  -webkit-transition: background-color 0.3s ease;
  -moz-transition: background-color 0.3s ease;
  -o-transition: background-color 0.3s ease;
}
</style>
