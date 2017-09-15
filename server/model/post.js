/**
 * Created by msi on 30/07/2017.
 */
'use strict'

const db = require('../pgp.js')

module.exports = {
  selectByPagination: (n, pgfrom) => {
    return db.many(`
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
      LIMIT $1 OFFSET $2`, [n, pgfrom])
  },
  countAll: () => {
    return db.many(`
      SELECT count(*) FROM
      (SELECT post_id, title, price, deposit, address, phone, content, status, longitude, latitude, created_at,
      province.name as province, category.name as category
      FROM post, category, ward, district, province
      WHERE post.wardid = ward.wardid
      AND ward.districtid = district.districtid
      AND district.provinceid = province.provinceid
      AND province."name" like 'Hà Nội'
      AND category.category_id = post.category_id
      AND status = true) as allPost`)
  }
}
