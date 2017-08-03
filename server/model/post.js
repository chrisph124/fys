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

  selectPost () {
    
  }
}