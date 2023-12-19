import "./blogCard.css"

const BlogCard = ( {image , blogId, header, paragraph}) => {
  return (
    <div className="blog-card">
        <img src={image} alt="blog-content" />
        <div className="blog-info">
            <span className="id-span">{blogId}</span>
            <span className="header-span">{header}</span>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default BlogCard
