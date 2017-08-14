/**
 * Created by msi on 18/07/2017.
 */
'use strict'

const Model = require('./model')

class Blog extends Model {
  constructor (db) {
    super(db)
    this.db = db
  }

  selectBlog () {
    return this.db.any(`
    SELECT DISTINCT ON (blog.blog_id)
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM
    blog, fys_user, blog_category, blog_picture
    WHERE
    blog.user_id = fys_user.user_id
    AND
    blog.blog_cate_id = blog_category.blog_cate_id
    AND
    blog_picture.blog_id = blog.blog_id
    ORDER BY blog.blog_id DESC
    LIMIT 15 `)
  }

  selectBlogForCate (id) {
    return this.db.any(`
    SELECT DISTINCT ON (blog.blog_id)
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM
    blog, fys_user, blog_category, blog_picture
    WHERE
    blog.user_id = fys_user.user_id
    AND
    blog.blog_cate_id = blog_category.blog_cate_id
    AND
    blog_picture.blog_id = blog.blog_id
    AND
    blog_category.blog_cate_id = $1
    ORDER BY blog.blog_id DESC
    LIMIT 15`, id)
  }

  selectBlogForND () {
    return this.db.any(`
    SELECT DISTINCT ON (blog.blog_id)
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM
    blog, fys_user, blog_category, blog_picture
    WHERE
    blog.user_id = fys_user.user_id
    AND
    blog.blog_cate_id = blog_category.blog_cate_id
    AND
    blog_picture.blog_id = blog.blog_id
    AND
    name = 'Nhà đất'
    ORDER BY blog.blog_id DESC
    LIMIT 15`)
  }

  selectBlogForDA () {
    return this.db.any(`
    SELECT DISTINCT ON (blog.blog_id)
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM
    blog, fys_user, blog_category, blog_picture
    WHERE
    blog.user_id = fys_user.user_id
    AND
    blog.blog_cate_id = blog_category.blog_cate_id
    AND
    blog_picture.blog_id = blog.blog_id
    AND
    name = 'Dự án mới'
    ORDER BY blog.blog_id DESC
    LIMIT 15`)
  }

  selectBlogForMV () {
    return this.db.any(`
    SELECT DISTINCT ON (blog.blog_id)
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM
    blog, fys_user, blog_category, blog_picture
    WHERE
    blog.user_id = fys_user.user_id
    AND
    blog.blog_cate_id = blog_category.blog_cate_id
    AND
    blog_picture.blog_id = blog.blog_id
    AND
    name = 'Mẹo vặt'
    ORDER BY blog.blog_id DESC
    LIMIT 15`)
  }


  detailBlog (id) {
    return this.db.oneOrNone(`
    SELECT blog.blog_id, title, content, create_at, name as cate_name, last_name, first_name, url
    FROM blog, fys_user, blog_category, blog_picture
    WHERE blog.blog_cate_id = blog_category.blog_cate_id 
    AND fys_user.user_id = blog.user_id 
    AND blog.blog_id = blog_picture.blog_id
    AND blog.blog_id = $1
    LIMIT 1`, id);
  }

  selectByPagination(n, pgfrom){
    return this.db.many(`
    SELECT DISTINCT ON (blog.blog_id)
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM
    blog, fys_user, blog_category, blog_picture
    WHERE
    blog.user_id = fys_user.user_id
    AND
    blog.blog_cate_id = blog_category.blog_cate_id
    AND
    blog_picture.blog_id = blog.blog_id
    ORDER BY blog.blog_id DESC
    LIMIT $1 OFFSET $2`, [n, pgfrom]);
  }

  countAll() {
    return this.db.many(`SELECT count(*) FROM blog`);
  }

}

module.exports = Blog
