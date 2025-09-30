import { useParams, Link } from "react-router";
import { Calendar, Tag, ArrowLeft, Edit, Delete, X } from "lucide-react";
import { useState } from "react";
// import BlogDetailSkeleton from "../../components/loading/BlogDetailSkeleton";

export default function BlogDetail() {
  const { id } = useParams();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Mock post data - in real app, this would come from API
  const post = {
    id: parseInt(id || "1"),
    title: "Building Modern React Applications",
    content: `
      <p>React has revolutionized the way we build user interfaces, and with the constant evolution of the ecosystem, staying up-to-date with best practices is crucial for building scalable and maintainable applications.</p>
      
      <h2>Getting Started with Modern React</h2>
      <p>Modern React development involves several key concepts and tools that have become standard in the industry. From hooks to context, from TypeScript integration to state management patterns, there's a lot to consider when architecting a new React application.</p>
      
      <h2>Key Principles</h2>
      <p>When building React applications, it's important to follow certain principles that will make your code more maintainable and your applications more performant. These include component composition, proper state management, and thinking in React.</p>
      
      <h2>Best Practices</h2>
      <p>Some of the most important best practices include using TypeScript for better developer experience, implementing proper error boundaries, optimizing performance with React.memo and useMemo, and following consistent naming conventions.</p>
      
      <p>By following these guidelines and staying current with React's evolution, you'll be well-equipped to build robust applications that can scale with your needs.</p>
    `,
    date: "2024-01-15",
    category: "Development",
    author: "John Doe",
    readTime: "5 min read",
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    color: "from-blue-500 to-purple-600",
  };

  const handleDelete = () => {
    // Handle post deletion logic here
    console.log("Deleting post:", post?.id);
    setShowDeleteModal(false);
    // In real app, redirect to blog list after deletion
    // navigate('/blog');
  };

  return (
    <div>
      {/* <BlogDetailSkeleton /> */}
      <div className="mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <div className="relative overflow-hidden rounded-lg mb-6">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-90`}
            ></div>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center">
              <Tag size={14} className="mr-1" />
              {post.category}
            </div>
            <span>{post.readTime}</span>
            <span>by {post.author}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-b border-gray-200 pb-6">
            <div className="flex items-center space-x-4">
              <Link
                to={`/edit/${post.id}`}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Edit size={16} className="mr-2" />
                Edit
              </Link>
              <button
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setShowDeleteModal(true)}
              >
                <Delete size={16} className="mr-2" />
                Delete
              </button>
            </div>
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  About the Author
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>{post.author}</strong> is a frontend developer with
                  over 8 years of experience building web applications. He
                  specializes in React, TypeScript, and modern web technologies.
                </p>
                <div className="flex space-x-4 text-sm text-gray-500">
                  <span>15 articles published</span>
                  <span>•</span>
                  <span>Joined March 2023</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </article>
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Delete Post
                </h3>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Are you sure you want to delete "<strong>{post?.title}</strong>
                "? This action cannot be undone.
              </p>

              <div className="flex items-center justify-end space-x-4">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Delete Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
