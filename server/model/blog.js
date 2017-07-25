/**
 * Created by msi on 18/07/2017.
 */
//todo: selectBlog by ID
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
}

module.exports = Blog
