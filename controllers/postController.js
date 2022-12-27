const posts = [
  {
    id: 1,
    banner:
      "https://images.unsplash.com/photo-1664575600397-88e370cb46b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "How you doing?",
    description: "How many crush do you have?",
    authorImage:
      "https://images.unsplash.com/photo-1671877308526-ac799c88db13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    authorName: "Dulguun Puntsag"
  },
  {
    id: 2,
    banner:
      "https://images.unsplash.com/photo-1664575600397-88e370cb46b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "What are you doing?",
    description: "What do you do?",
    authorImage:
      "https://images.unsplash.com/photo-1671877308526-ac799c88db13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    authorName: "Temuulen Alim"
  },
  {
    id: 3,
    banner:
      "https://images.unsplash.com/photo-1664575600397-88e370cb46b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Where have you been?",
    description: "How to be big boss in Nalaikh as Khuslen",
    authorImage:
      "https://images.unsplash.com/photo-1671877308526-ac799c88db13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    authorName: "Khuslen Boss"
  },
  
];

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: posts,
  });
};

exports.createPost = (req, res, next) => {
  console.log(req.body);
  posts.push({ id: posts.length + 1, ...req.body });
  res.status(400).json({ message: "New post is created." });
};

exports.getPost = (req, res, next) => {
  const { id } = req.params;
  if (id > posts.length) {
    res.status(400).json({ message: "id is not exist" });
  } else {
    res.status(200).json(posts[parseInt(id) - 1]);
  }
};
