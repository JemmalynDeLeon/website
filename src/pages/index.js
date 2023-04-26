import Navbar from '@/components/nav2.js'
import Footnote from '@/components/footnote.js'
import Navbar2 from '@/components/nav1'
import Row from '@/components/row'
import Footend from '@/components/footend'
import Icons from '@/components/icons'


export default function home() {
  return (
    <>
    
      <Navbar />
      <Navbar2 />
      <Icons/>
      <Row />
      <section class="flex flex-col space-y-4 items-end justify-end m-6">
      <section class="flex flex-col space-y-4 items-center justify-center m-6">
        <div className='flex flex-row'>
          <div className="flex flex-wrap justify-center mt-10 border-b-[1px] border-grey">
            <div className="flex justify-center w-3/4 h-auto">
              <div className="mr-5">
                <a class="twitter-timeline" data-width="350" data-height="700" data-theme="dark" href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-4 items-center justify-center m-6">
            <iframe width="750" height="422" src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA" title="The Observer Online: Tanglaw Fest 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator" width="750" height="280" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </section>
      </section>

      <section class="bg-white-700">
      
      
      <Footnote />

      </section>
      <section class="bg-black">
      <Footend />
      </section>
    </>

  )
}
