// src/components/Blog/Blog.jsx
import './Blog.css'

function Blog() {
  const blogPosts = [
    {
      id: 1,
      date: "Oct 2024",
      category: "Web Development",
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns I learned while developing enterprise-level applications at DRDO.",
      readTime: "5 min read"
    },
    {
      id: 2,
      date: "Sep 2024",
      category: "Data Analytics",
      title: "Power BI Dashboard Design Tips",
      excerpt: "How to create effective and visually appealing dashboards that drive business decisions.",
      readTime: "4 min read"
    },
    {
      id: 3,
      date: "Aug 2024",
      category: "System Design",
      title: "Optimizing Resource Allocation Systems",
      excerpt: "Lessons learned from designing workflow management systems that save 100+ hours annually.",
      readTime: "6 min read"
    }
  ]

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">Latest Insights</h2>
        <p className="blog-subtitle">
          Sharing knowledge and experiences from my journey
        </p>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <span className="read-time">{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <p>More articles coming soon! Stay tuned.</p>
        </div>
      </div>
    </section>
  )
}

export default Blog
