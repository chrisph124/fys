<template>
    <div class='col-right'>
        <div class="box">
            <article class="media" v-for="blog in blogs" :key="blog.id">
                <div class="media-left">
                    <img :src="blog.url" alt="Image" class="image is-128x128">
                </div>
                <div class="media-content">
                    <div class="content is-paddingless">
                        <h6 class="subtitle" style="color: #00d1b2">{{blog.name}}</h6>
                        <h3 class="title">
                            <router-link :to="'/blog/' + blog.blog_id">{{blog.title}}</router-link>
                            <!--<router-link :to="{name: 'blog_id', params:{id: blog.blog_id}}">{{blog.title}}</router-link>
                            -->
                        </h3>
                        <small>{{blog.create_at | moment("DD/MM/YYYY")}}
                            <a href="#" style="color: #D32F2F">{{blog.first_name}} {{blog.last_name}}</a>
                        </small>
                        <p>
                            {{blog.content | truncate(700)}}
                        </p>
                        <router-link :to="'/blog/' + blog.blog_id" class="is-pulled-right">Xem thêm</router-link>
                        <nav class="level is-mobile">
                            <div class="level-left">
                                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fa fa-share"></i>
                  </span>
                                </a>
                                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fa fa-heart"></i>
                  </span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </article>
            <nav class="pagination is-centered"><!--
                <a class="pagination-previous">Previous 5 pages</a>
                <a class="pagination-next">Next 5 pages</a>-->
                <ul class="pagination-list">
                    <li v-if="pagecurrent > 1">
                        <a class="pagination-link" :href="`${url}${pagecurrent-1}`">Prev</a>
                    </li>
                    <li v-for="i in (1, allpage)">
                        <a v-if="pagecurrent == i" class="pagination-link is-current" :href="`${url}${i}`">{{i}}</a>
                        <a v-else class="pagination-link" :href="`${url}${i}`">{{i}}</a>
                    </li>
                    <li v-if="pagecurrent < allpage">
                        <a class="pagination-link" :href="`${url}${pagecurrent+1}`">Next</a>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
</template>

<script>
  export default {
    props: ['blogs', 'countall', 'allpage', 'pagecurrent', 'url']
  }
</script>

<style scoped>
    .box {
        border-radius: 0;
        box-shadow: none;
        padding: 0
    }

    .has-text-centered {
        padding: 10px 25px;
    }

    .title {
        margin-bottom: 0
    }

    .content {
        padding: 1rem;
    }

    .content p {
        color: black;
        margin-bottom: 0.5rem
    }

    h3.title {
        margin-bottom: 0
    }

    .is-128x128 {
        width: 256px;
        height: 256px
    }

    .media {
        border-top: 1px solid rgba(0, 0, 0, 0.4)
    }

    .media:first-child {
        border-top: 0
    }

    .level a {
        color: #00d1b2
    }

    .pagination {
        margin-top: 2rem
    }
</style>
