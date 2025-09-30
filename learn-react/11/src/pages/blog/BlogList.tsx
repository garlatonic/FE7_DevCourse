import { Calendar, Tag } from "lucide-react";
import { Link } from "react-router";
// import BlogListSkeleton from "../../components/loading/BlogListSkeleton";

export default function BlogList() {
  const posts = [
    {
      id: 1,
      title: "Building Modern React Applications",
      excerpt:
        "Learn the best practices for building scalable and maintainable React applications with modern tools and techniques.",
      date: "2024-01-15",
      category: "Development",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "The Art of Minimalist Design",
      excerpt:
        "Discover how minimalist design principles can create more impactful and user-friendly interfaces.",
      date: "2024-01-12",
      category: "Design",
      image:
        "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      color: "from-orange-400 to-pink-600",
    },
    {
      id: 3,
      title: "Typography in Web Design",
      excerpt:
        "Understanding how typography choices can dramatically improve user experience and readability on the web.",
      date: "2024-01-10",
      category: "Typography",
      image:
        "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      color: "from-gray-700 to-gray-900",
    },
    {
      id: 4,
      title: "Component-Driven Development",
      excerpt:
        "Explore the benefits of building applications with reusable, composable components and design systems.",
      date: "2024-01-08",
      category: "Components",
      image:
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Thoughts on design, development, and the intersection of technology
          and creativity.
        </p>
      </div>

      <div className="space-y-8">
        {/* <BlogListSkeleton /> */}
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link to={`/blog/${post.id}`} className="block">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative overflow-hidden h-52">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-90`}
                    ></div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <Tag size={14} className="mr-1" />
                        {post.category}
                      </div>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
