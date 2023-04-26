import Navbar from '@components/navbar2.js'
import Footnote from '@/components/footnote.js'
import Navbar2 from '@/components/navbar'
import Row from '@/components/row'


export default function home() {
  return (
    <>
    
      <Navbar />
      <Navbar2 />
       
      <Row />
      <section class="py-20 px-16 flex-col gap-6 pl-10">

        <iframe src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA" width="50%" height="450" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"loading="lazy"/>
        <iframe src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator" width="50%"height="352"allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Mid-Year Commencement Exercises Schedule 🎓🎓🎓 <a href="https://t.co/QAlrfrH6bJ">pic.twitter.com/QAlrfrH6bJ</a></p>&mdash; PUP (Official) (@ThePUPOfficial) <a href="https://twitter.com/ThePUPOfficial/status/1648137053908135936?ref_src=twsrc%5Etfw">April 18, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
      </section>

      <section class="bg-black-700">
      

      <Footnote />

      </section>
    </>

  )
}