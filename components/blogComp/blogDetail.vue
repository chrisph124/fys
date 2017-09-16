<template>
  <div class="col-right">
    <nav class="breadcrumb">
      <ul>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li class="is-active">
          <a href="#">Post</a>
        </li>
      </ul>
    </nav>
    <div class="content">
      <div class="has-text-centered">
        <h1>details.title
        </h1>
        <span>
          <small>
            <i class="fa fa-calendar"></i>
            details.created_at | moment("DD/MM/YYYY")
          </small>
        </span>
        <span>
          <i class="fa fa-tags"></i>
          <a href="#">details.cate_name</a>
        </span>
        <span>
          <i class="fa fa-user-o"></i>
          <a href="#">details.first_name details.last_name</a>
        </span>
        <span>
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-send"></i>
          </a>
        </span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['details']
}
</script>


<style scoped>
.fa {
  display: inline;
  margin-right: 0.3rem
}

span,
span a {
  margin-right: 0.5rem
}
</style>
