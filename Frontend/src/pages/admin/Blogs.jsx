import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "How to Verify Property Legality", published: true },
    { id: 2, title: "What is MCF Approval?", published: false },
    { id: 3, title: "Understanding Risk Scores", published: true },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const blogsPerPage = 5;

  // Pagination logic
  const filteredBlogs = blogs.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (page - 1) * blogsPerPage,
    page * blogsPerPage
  );

  // Handlers
  const openAddModal = () => {
    setCurrentBlog(null);
    setModalOpen(true);
  };

  const openEditModal = (blog) => {
    setCurrentBlog(blog);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentBlog(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((b) => b.id !== id));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const title = e.target.title.value.trim();
    const published = e.target.published.checked;

    if (!title) return alert("Title is required");

    if (currentBlog) {
      // Edit existing
      setBlogs((prev) =>
        prev.map((b) =>
          b.id === currentBlog.id ? { ...b, title, published } : b
        )
      );
    } else {
      // Add new
      const newBlog = {
        id: Date.now(),
        title,
        published,
      };
      setBlogs((prev) => [newBlog, ...prev]);
    }
    closeModal();
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-2xl font-semibold text-blue-700 mb-4">
          Manage Blog Posts
        </h1>
        <div className="mb-6 flex flex-wrap justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            className="border p-2 rounded w-full max-w-xs"
          />
          <button
            onClick={openAddModal}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Add New Blog
          </button>
        </div>

        <table className="w-full border-collapse border border-gray-300 bg-white rounded shadow">
          <thead>
            <tr className="bg-blue-100 text-blue-800">
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Published</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedBlogs.length === 0 && (
              <tr>
                <td colSpan={3} className="p-4 text-center text-gray-500">
                  No blog posts found.
                </td>
              </tr>
            )}
            {paginatedBlogs.map((blog) => (
              <tr key={blog.id} className="border-t">
                <td className="p-3">{blog.title}</td>
                <td className="p-3 text-center">
                  {blog.published ? "✅" : "❌"}
                </td>
                <td className="p-3 text-center space-x-2">
                  <button
                    onClick={() => openEditModal(blog)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-4 flex justify-center space-x-2">
            {[...Array(totalPages).keys()].map((i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  page === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
                title="Close"
              >
                ×
              </button>
              <h2 className="text-xl font-semibold mb-4">
                {currentBlog ? "Edit Blog" : "Add New Blog"}
              </h2>
              <form onSubmit={handleSave} className="space-y-4">
                <input
                  name="title"
                  type="text"
                  defaultValue={currentBlog?.title || ""}
                  placeholder="Blog Title"
                  className="w-full border p-2 rounded"
                  required
                />
                <label className="inline-flex items-center space-x-2">
                  <input
                    name="published"
                    type="checkbox"
                    defaultChecked={currentBlog?.published || false}
                  />
                  <span>Published</span>
                </label>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlogs;
