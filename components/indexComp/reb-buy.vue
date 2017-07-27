<template>
  <div class="container-fluid">
  
    <div class="box1">
      <div class="level-item is-pulled-right">
        <a class="button is-primary">
          <div class="fa fa-arrow-left fa-3x"></div>
        </a>
      </div>
    </div>
  
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
        <div class="block has-text-centered">
      <button class="button is-black btn">
        <a href="/blog" style="color: white">Xem tất cả</a>
      </button>
    </div>
    </div>
  
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
export default {
  data () {
    return {
      items: ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10']
    }
  }
}

</script>

<style scoped>
.container-fluid {
  display: flex
}


.box1,
.box3 {
  width: 10%;
  align-self: center;
}

.box1 .button,
.box3 .button {
  height: 200px
}

.box2 {

  max-width: 80%;
}

.level {
  max-width: 100%;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
}

.level-item {
  padding: 5px;
  color: white;
  text-align: center;
}

.btn {
  border-radius: 0;
  border-color: black;
  border-top: none;
  padding: 1.2rem 2.5rem;
  margin-bottom: 3rem;
  line-height: 0
}

</style>
