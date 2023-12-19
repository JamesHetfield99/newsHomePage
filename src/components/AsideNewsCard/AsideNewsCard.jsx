import "./asideNewsCard.css"

const AsideNewsCard = ({ header, paragraph}) => {
  return (
    <div className="aside-news-card">
        <span>{header}</span>
        <p>{paragraph}</p>
    </div>
  )
}


export default AsideNewsCard
