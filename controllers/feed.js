exports.getPosts = (req, res, next) => {
  res.status(200).json({ posts: [{ title: 'First Post', content: 'content of first post' }] });
};

exports.postPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  //post to db
  res.status(201).json({
    message: 'Success!',
    post: {
      id: new Date().toISOString().replace(/:/g, '-'),
      title: title,
      content: content
    }
  });
};
