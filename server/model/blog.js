/**
 * Created by msi on 18/07/2017.
 */
// todo: selectBlog by ID
'use strict'

const Model = require('./model')

class Blog extends Model {
  constructor (db) {
    super(db)
    this.db = db
  }

  selectBlog () {
    return this.db.any(`
    SELECT
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM
    blog, fys_user, blog_category, blog_picture
    WHERE
    blog.user_id = fys_user.user_id
    AND
    blog.blog_cate_id = blog_category.blog_cate_id
    AND
    blog_picture.blog_id = blog.blog_id
    ORDER BY RANDOM()
    LIMIT 15`)
  }

  selectBlogForND () {
    return this.db.any(`
    SELECT
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
    ORDER BY RANDOM()
    LIMIT 4`)
  }

  selectBlogForDA () {
    return this.db.any(`
    SELECT
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
    ORDER BY RANDOM()
    LIMIT 4`)
  }

  selectBlogForMV () {
    return this.db.any(`
    SELECT
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
    ORDER BY RANDOM()
    LIMIT 4`)
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

}

module.exports = Blog
