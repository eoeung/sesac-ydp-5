// model에 있는 comments 배열을 가지고 온다.
const Comment = require('../model/Comment');

// '/'
exports.main = (req, res) => {
  res.render('index');
};

// '/comments'
exports.comments = (req, res) => {
  res.render('comments', { comments: Comments.getCommentAll() });
};

// '/comment/:id'
exports.comment = (req, res) => {
  console.log('req.params : ', req.params);
  const commentId = Number(req.params.id);
  const comments = Comment.getCommentAll();

  if (!comments[commentId - 1]) {
    res.render('404');
  } else {
    res.render('comment', { comment: comments[commentId - 1] });
  }
};
