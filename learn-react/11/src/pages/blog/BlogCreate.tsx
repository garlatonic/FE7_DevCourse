import { Link } from "react-router";
import { ArrowLeft, Save, Upload } from "lucide-react";

export default function BlogCreate() {
  const categories = [
    "Development",
    "Design",
    "Typography",
    "Components",
    "Tutorial",
  ];

  return (
    <div>
      <div className="mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Write New Post</h1>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <form className="p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Enter your post title..."
                required
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Category
              </label>
              <select
                id="category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="thumbnail"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Thumbnail Image
              </label>
              {/* 
              <div className="relative">
                <img
                  src={""}
                  alt="Thumbnail preview"
                  className="w-full h-80 object-cover rounded-md border border-gray-300"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div> 
                */}
              <div className="h-80 border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-gray-400 transition-colors">
                <div className="flex items-center flex-col justify-center h-full">
                  <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Upload thumbnail image
                  </p>
                  <input
                    type="file"
                    id="thumbnail"
                    accept="image/*"
                    className="hidden"
                  />
                  <label
                    htmlFor="thumbnail"
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    Choose File
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Content
              </label>
              <textarea
                id="content"
                rows={20}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none font-mono text-sm"
                placeholder="Write your post content here... You can use HTML tags for formatting."
                required
              />
            </div>

            <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
              <Link
                to="/blog"
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                <Save size={16} className="mr-2" />
                Publish Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
