import React, { useState } from "react";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      content: newPost,
      timestamp: new Date().toLocaleString(),
    };

    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">🏘️ Community Board</h1>

      <form onSubmit={handlePostSubmit} className="mb-6 space-y-3">
        <textarea
          placeholder="What's on your mind? Share updates, ask questions, or discuss anything..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full border border-gray-300 rounded p-3"
          rows="3"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Post
        </button>
      </form>

      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet. Start the conversation!</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 shadow p-4 rounded"
            >
              <p className="text-gray-800">{post.content}</p>
              <p className="text-sm text-gray-400 mt-2">{post.timestamp}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Community;
