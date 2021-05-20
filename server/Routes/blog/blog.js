const express = require('express')
const router = express.Router()
const {getBlogs,getBlog, createBlog, updateBlog, deleteBlog, likeBlog, commentBlog, shareBlog} = require('../../Controllers/blog/blog')

router.get('/',getBlogs)
router.get('/:id',getBlog)
router.post('/',createBlog)
router.patch('/:id',updateBlog)
router.delete('/:id',deleteBlog)
router.patch('/:id/likePost',likeBlog)
router.post('/:id/comment',commentBlog)
router.patch('/:id/share',shareBlog)

module.exports = router