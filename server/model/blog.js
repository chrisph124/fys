/**
 * Created by msi on 18/07/2017.
 */
'use strict'

const Model = require('./model')

class Blog extends Model {
    constructor(db) {
        super(db)
        this.db = db
    }

    selectBlog() {
        return this.db.any("SELECT blog_id, title, content, create_at, name, last_name, first_name FROM blog, fys_user, blog_category WHERE blog.user_id = fys_user.user_id AND blog.blog_cate_id = blog_category.blog_cate_id AND blog_category.name = 'Nhà đất' LIMIT 2")
    }

    selectBlog_duAn() {
        return this.db.any("SELECT blog_id, title, content, create_at, name, last_name, first_name FROM blog, fys_user, blog_category WHERE blog.user_id = fys_user.user_id AND blog.blog_cate_id = blog_category.blog_cate_id AND blog_category.name = 'Nhà đất' LIMIT 5")
    }

    selectBlog_meoVat() {
        return this.db.any("SELECT blog_id, title, content, create_at, name, last_name, first_name FROM blog, fys_user, blog_category WHERE blog.user_id = fys_user.user_id AND blog.blog_cate_id = blog_category.blog_cate_id AND blog_category.name = 'Nhà đất' LIMIT 5")
    }

}

module.exports = Blog