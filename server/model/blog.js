/**
 * Created by msi on 18/07/2017.
 */
'use strict'

const db = require('../pgp.js')

module.exports = {
  selectBlog: () => {
    return db.any(`
    SELECT DISTINCT ON (blog.blog_id)
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM blog, fys_user, blog_category, blog_picture
    WHERE blog.user_id = fys_user.user_id
    AND blog.blog_cate_id = blog_category.blog_cate_id
    AND blog_picture.blog_id = blog.blog_id
    ORDER BY blog.blog_id DESC`)
  },
  selectCate: () => {
    return db.any(`
    select blog_cate_slug as cate_slug, name from blog_category
    `)
  },
  selectBlogForCate: (slug, n, pgfrom) => {
    return db.many(`
    SELECT DISTINCT ON (blog.blog_id)
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM blog, fys_user, blog_category, blog_picture
    WHERE blog.user_id = fys_user.user_id
    AND blog.blog_cate_id = blog_category.blog_cate_id
    AND blog_picture.blog_id = blog.blog_id
    AND blog_category.blog_cate_slug = $1
    ORDER BY blog.blog_id DESC
    LIMIT $2 OFFSET $3`,
    [slug, n, pgfrom])
  },
  selectBlogForND: () => {
    return db.any(`
    SELECT DISTINCT ON (blog.blog_id)
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM blog, fys_user, blog_category, blog_picture
    WHERE blog.user_id = fys_user.user_id
    AND blog.blog_cate_id = blog_category.blog_cate_id
    AND blog_picture.blog_id = blog.blog_id
    AND name = 'Nhà đất'
    ORDER BY blog.blog_id DESC
    LIMIT 15`)
  },
  selectBlogForDA: () => {
    return db.any(`
    SELECT DISTINCT ON (blog.blog_id)
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM blog, fys_user, blog_category, blog_picture
    WHERE blog.user_id = fys_user.user_id
    AND blog.blog_cate_id = blog_category.blog_cate_id
    AND blog_picture.blog_id = blog.blog_id
    AND name = 'Dự án mới'
    ORDER BY blog.blog_id DESC
    LIMIT 15`)
  },
  selectBlogForMV: () => {
    return db.any(`
    SELECT DISTINCT ON (blog.blog_id)
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM blog, fys_user, blog_category, blog_picture
    WHERE blog.user_id = fys_user.user_id
    AND blog.blog_cate_id = blog_category.blog_cate_id
    AND blog_picture.blog_id = blog.blog_id
    AND name = 'Mẹo vặt'
    ORDER BY blog.blog_id DESC
    LIMIT 15`)
  },
  detailBlog: (id) => {
    return db.oneOrNone(`
      SELECT blog.blog_id, title, content, create_at, name, blog_cate_slug, last_name, first_name, url
      FROM blog, fys_user, blog_category, blog_picture
      WHERE blog.blog_cate_id = blog_category.blog_cate_id
      AND fys_user.user_id = blog.user_id
      AND blog.blog_id = blog_picture.blog_id
      AND blog.blog_id = $1
      LIMIT 1`, id)
  },
  selectByPagination: (n, pgfrom) => {
    return db.many(`
    SELECT DISTINCT ON (blog.blog_id)
    blog.blog_id, title, content, create_at, name, last_name, first_name, url
    FROM blog, fys_user, blog_category, blog_picture
    WHERE blog.user_id = fys_user.user_id
    AND blog.blog_cate_id = blog_category.blog_cate_id
    AND blog_picture.blog_id = blog.blog_id
    ORDER BY blog.blog_id DESC
    LIMIT $1 OFFSET $2`, [n, pgfrom])
  },
  countAll: () => {
    return db.many(`SELECT count(*) FROM blog`)
  },
  countByCate: (slug) => {
    return db.many(`
      SELECT b.*, bc.name as name
      FROM blog as b
      INNER JOIN blog_category as bc
      ON b.blog_cate_id = bc.blog_cate_id
      WHERE bc.blog_cate_slug = $1`, slug)
  }
}
