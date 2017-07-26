<template>
        <div class="col-left">
            <div>
                <h5 class="title is-5">
                    Chuyên mục
                </h5>
                <div class="content">
                    <ul class="is-marginless">
                        <li>
                            <a href="#">Dự án</a>
                        </li>
                        <li>
                            <a href="#">Nhà đất</a>
                        </li>
                        <li>
                            <a href="#">Mẹo vặt</a>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div>
                <h5 class="title is-5">
                    Bài viết nổi bật
                </h5>
                <div class="content">
                    <article class="media" v-for="data in datas" :key="data.id">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img :src="data.img" :alt="data.title">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content is-marginless is-paddingless">
                                <h6 class="title is-6">
                                    <a href="#">{{data.title}}</a>
                                </h6>
                                <small>{{data.date}}</small>
                            </div>
    
                        </div>
                    </article>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      datas: [
        { title: 'Principal Brand Architect', date: '2017-03-27', img: 'http://lorempixel.com/64/64/city/1' },
        { title: 'Product Integration Coordinator', date: '2017-01-22', img: 'http://lorempixel.com/64/64/city/2' },
        { title: 'Central Creative Producer', date: '2016-08-17', img: 'http://lorempixel.com/64/64/city/3' },
        { title: 'Central Branding Supervisor', date: '2017-04-03', img: 'http://lorempixel.com/64/64/city/4' },
        { title: 'Internal Configuration Liaison', date: '2017-07-04', img: 'http://lorempixel.com/64/64/city/5' }
      ]
    }
  }
}
</script>

<style scoped>

.col-left div {
    margin-bottom: 1rem
}

.title {
    color: black;
    border-bottom: 1px solid black;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem
}

.media-content .content .title {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0
}

.content {
    padding: 0 0.5rem
}

.media {
    margin-top: 0
}

.column {
    margin-bottom: 1rem;
    padding-left: 0
}

li a {
    color: black
}

li a:hover {
    color: #00d1b2;
}


.media {
    border-top: 0
}
</style>
