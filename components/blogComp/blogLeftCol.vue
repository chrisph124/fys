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
                                <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content is-marginless is-paddingless">
                                <h6 class="title is-6">
                                    <a href="#">{{data}} Sed neque offi unde repudiandae.</a>
                                </h6>
                                <small>01/01/2017</small>
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
      datas: [1, 2, 3, 4, 5, 6]
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
