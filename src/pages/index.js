import Navbar from '@/components/nav2.js'
import Footnote from '@/components/footnote.js'
import Navbar2 from '@/components/nav1'
import Row from '@/components/row'
import Footend from '@/components/footend'
import Icons from '@/components/icons'
import Slider from "@/components/slider";


export default function home() {
  return (
    <>
    
      <Navbar />
      <Navbar2 />
      <Icons/>
      <Slider/>
      <Row />

      <div className="flex flex-wrap content-center justify-center h-auto mt-14">
                <div className="flex flex-wrap w-3/4 h-auto center">
                    <div className="w-2/5 content-container">
                        <div className="title">
                            <h1 className="py-4 mb-2 font-bold px-9 text-red">Announcements and Advisories</h1>
                        </div>
                        <div className="flex flex-wrap overflow-auto overflow-x-hidden content">
                            <div className="px-8 py-4 announcements text-red">
                                <a href="#">Administrative Applicants for Selection/Promotion: List of All Applicants (First and Second Level) April 2023</a>
                                <p className="text-grey">Posted: April 20, 2023</p>
                            </div>
                            <div className="px-8 py-4 announcements text-red">
                                <a href="#">Advisory on the Submission of Online Application for Graduation and Other Scheduled Activities for Year-End Graduation (Second Semester) A.Y. 2022-2023</a>
                                <p className="text-grey">Posted: April 10, 2023</p>
                            </div>
                            <div className="px-8 py-4 announcements text-red">
                                <a href="#">PUP ICT Office is looking for Computer Programmers (J.O.)</a>
                                <p className="text-grey">Posted: March 02, 2023</p>
                            </div>
                            <div className="px-8 py-4 announcements text-red">
                                <a href="#">List of Qualified Applicants for Promotion (First and Second Level Positions) Batches 1, 2, and 3</a>
                                <p className="text-grey" >Posted: February 07, 2023</p>
                            </div>
                            <div className="px-8 py-4 announcements text-red">
                                <a href="#">List of Eligible Applicants for Promotion (First and Second Level Positions)</a>
                                <p className="text-grey">Posted: February 01, 2023</p>
                            </div>
                            <div className="px-8 py-4 announcements text-red">
                                <a href="#">Advisory to All Graduates of the PUP Main Campus (Sta. Mesa, Manila)</a>
                                <p className="text-grey">Posted: September 16, 2022</p>
                            </div>
                            <div className="px-8 py-4 announcements text-red">
                                <a href="#">Internal Guidelines for Opt-Out and Voluntary Contribution of Students under Republic Act 10931</a>
                                <p  className="text-grey">Posted: April 04, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 bg-red-500 content-container">
                        
                    </div>
                    <div className="flex flex-col flex-wrap items-center justify-center w-1/5 content-container ">
                        <div className="img-container">
                            <img src="/img1.jpg" alt="" width={200} height={150}/>
                        </div>
                        <div className="img-container">
                            <img src="/img2.jpg" alt="" width={200} height={150}/>
                        </div>
                        <div className="img-container">
                            <img src="/img3.jpg" alt="" width={200} height={150}/>
                        </div>
                        <div className="img-container">
                            <img src="/img4.jpg" alt="" width={200} height={150}/>
                        </div>
                        <div className="img-container">
                            <img src="/img5.jpg" alt="" width={200} height={150}/>
                        </div>
                    </div>
                </div>
            </div>

      
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
