import "./aside.css"

import AsideNewsCard from "../AsideNewsCard/AsideNewsCard"

const Aside = () => {
  return (
    <aside className="aside-container">
      <span>New</span>
      <div className="aside-news-wrapper">
        <AsideNewsCard header="New Hydrogen VS Electric Cars" paragraph="Will hydrogen-fueled cars ever catch up to EVs?" />
        <AsideNewsCard header="The Downsides of AI Artistry" paragraph="What are the possible adverse effects of on-demand AI image generation?" />
        <AsideNewsCard header="Is VC Funding Drying Up?" paragraph="Private funding by VC firms is down 50% YOY. We take a look at what that means" />
      </div>
    </aside>
  )
}

export default Aside
