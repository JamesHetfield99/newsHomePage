import "./blogShowcase.css"

import retroPcImage from "../../images/image-retro-pcs.jpg"
import topLeptopsImage from "../../images/image-top-laptops.jpg"
import gamingImage from "../../images/image-gaming-growth.jpg"

import BlogCard from "../BlogCard/BlogCard"

const BlogShowcase = () => {
  return (
    <div className="blog-showcase-container">
        <BlogCard image={retroPcImage} blogId="01" header="Reviving Retro PCs" paragraph="What happens when old PCs are given modern upgrades?" />
        <BlogCard image={topLeptopsImage} blogId="02" header="Top 10 Laptops of 2022" paragraph="Our best picks for various needs and budgets" />
        <BlogCard image={gamingImage} blogId="03" header="The Growth of Gaming" paragraph="How the pandemic has sparked fresh opportunities." />
    </div>
  )
}


export default BlogShowcase