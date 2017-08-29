/**
 * Created by msi on 30/07/2017.
 */
'use strict'

const Model = require('./model')

class Post extends Model {
  constructor (db) {
    super(db)
    this.db = db
  }

  selectByPagination (n, pgfrom) {
    return this.db.many(`
      SELECT post_id, title, price, deposit, address, phone, content, status, longitude, latitude, created_at,
      province.name as province, category.name as category,
      district.name as district, ward.name as ward
      FROM post, category, ward, district, province
      WHERE post.wardid = ward.wardid
      AND ward.districtid = district.districtid
      AND district.provinceid = province.provinceid
      AND province."name" like 'Hà Nội'
      AND category.category_id = post.category_id  
      AND status = true 
      ORDER BY post_id DESC
      LIMIT $1 OFFSET $2`, [n, pgfrom]);
  }

  countAll () {
    return this.db.many(`
      SELECT count(*) FROM
      (SELECT post_id, title, price, deposit, address, phone, content, status, longitude, latitude, created_at,
      province.name as province, category.name as category
      FROM post, category, ward, district, province
      WHERE post.wardid = ward.wardid
      AND ward.districtid = district.districtid
      AND district.provinceid = province.provinceid
      AND province."name" like 'Hà Nội'
      AND category.category_id = post.category_id  
      AND status = true) as allPost`);
  }
}

module.exports = Post