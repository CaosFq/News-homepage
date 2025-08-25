import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

import { Article } from "./Article"

export const ArticlesContainer = () => {
  return (
    <section className="mt-6 md:flex md:flex-wrap md:gap-10">
      <Article
      img={img1}
      number='01'
      title="Reviving Retro PCs"
      description="What happens when old PCs are given modern upgrades?"
       />
      <Article
      img={img2}
      number='02'
      title="Top 10 Retro Games"
      description="A countdown of the best retro games to play today."
       />
      <Article
      img={img3}
      number='03'
      title="The Rise of Retro Gaming"
      description="Exploring the resurgence of interest in retro gaming."
       />
      
    </section>

  )
}


