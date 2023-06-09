import Navbar from '@/components/nav2.js'
import Footnote from '@/components/footnote.js'
import Navbar2 from '@/components/nav1'
import Row from '@/components/row'
import Footend from '@/components/footend'
import Icons from '@/components/icons'
import Slider from "@/components/slider";
import Fab from 'src/components/fab.js'
import { Carousel } from 'react-responsive-carousel';
import Modal from "@components/modal";


export default function home() {
  const slides = [
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/1.jpg'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/2.jpg'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/3.jpg'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/4.jpg'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/5.jpg'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/6.jpg'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/7.jpg'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/8.jpg'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/9.jpg'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/10.jpg'
    },
  ]

  const Prev = () => {
    setSlide((slide - 1 + slides.length) % slides.length);
  };

  const Next = () => {
    setSlide((slide + 1) % slides.length);
  };
  
  
  return (
    <>
     <section>
     <Modal/>
      <Navbar />
      <Navbar2 />
    </section>
    
    <section class="bg-gray  ">
      <Slider/>
    </section>


    <section className='' >
      <Icons/>
      <hr class='line mt-0'></hr>
    </section>
    
    <section>
      <Row />
    </section>
     
    <section className=''>
        <div className='mt-10 resize 2xl:mx-60 xl:gap-2 xl:flex-row lg:flex-row md:flex-col'>
          <div class="flex lg:flex-row justify-around sm:flex-col sm:gap-2 lg:gap-0 updatesSec">
            <div className='wid30 md:flex-col lg:flex-col' >
              <div className="announcements" >
                <div className=''>
                  <a className="py-4 pl-8 m-0 mb-2 font-bold announcements2 text-red hover:cursor-pointer">Announcements and Advisories</a>
                  <div className='flex flex-row'>
                    <p className='pl-8 text-red '>____________________________________</p>
                    <p className='text-l hideLine'>___________________</p>
                  </div>
                </div>
                <div className="flex flex-wrap overflow-auto overflow-x-hidden " style={{ height: "600px" }}>
                  <div className="px-8 py-4 text-red">
                    <a href="#" className='hover:underline' >Administrative Applicants for Selection/Promotion: List of All Applicants (First and Second Level) April 2023</a>
                    <p className="pt-2 text-gray">Posted: April 20, 2023</p>
                  </div>
                  <div className="px-8 py-4 text-red">
                    <a href="#" className='hover:underline'>Advisory on the Submission of Online Application for Graduation and Other Scheduled Activities for Year-End Graduation (Second Semester) A.Y. 2022-2023</a>
                    <p className="pt-2 text-gray">Posted: April 10, 2023</p>
                  </div>
                  <div className="px-8 py-4 text-red">
                    <a href="#" className='hover:underline'>PUP ICT Office is looking for Computer Programmers (J.O.)</a>
                    <p className="pt-2 text-gray">Posted: March 02, 2023</p>
                  </div>
                  <div className="px-8 py-4 text-red">
                    <a href="#" className='hover:underline'>List of Qualified Applicants for Promotion (First and Second Level Positions) Batches 1, 2, and 3</a>
                    <p className="pt-2 text-gray" >Posted: February 07, 2023</p>
                  </div>
                  <div className="px-8 py-4 text-red">
                    <a href="#" className='hover:underline'>List of Eligible Applicants for Promotion (First and Second Level Positions)</a>
                    <p className="pt-2 text-gray">Posted: February 01, 2023</p>
                  </div>
                  <div className="px-8 py-4 text-red">
                    <a href="#" className='hover:underline'>Advisory to All Graduates of the PUP Main Campus (Sta. Mesa, Manila)</a>
                    <p className="pt-2 text-gray">Posted: September 16, 2022</p>
                  </div>
                  <div className="px-8 py-4 text-red">
                    <a href="#" className='hover:underline'>Internal Guidelines for Opt-Out and Voluntary Contribution of Students under Republic Act 10931</a>
                    <p className="pt-2 ">Posted: April 04, 2022</p>
                  </div>
                </div>
              </div>
            </div>



            <div className='flex flex-col mw '>
              <div class="flex flex-row justify-between sliderMargin">
                <a className="m-0 font-bold text-red hover:cursor-pointer">Latest News from the University</a>
                <div className='flex-row gap-1'>

                  <div class="flex gap-1">
                    <button className='items-center border rounded-sm bc hover:bg-red hover:text-white' onclick={Prev}>
                      <i class="fa fa-sharp fa-solid fa-chevron-left px-1  text-grayest" style={{ fontSize: '12px' }}></i>
                    </button>
                    <button className='items-center border rounded-sm bc hover:bg-red' onclick={Next}>
                      <i class="fa fa-sharp fa-solid fa-chevron-right px-1  text-grayest" style={{ fontSize: '12px' }}></i>
                    </button>
                  </div>


                </div>
              </div>

              <div className='flex flex-row pb-4 sliderMargin'>
                <div class=" flex flex-row">
                  <p className='flex items-center justify-center text-red'>____________________________________</p>
                  <p className='text-l hideLine'>________________________</p>
                </div>
              </div>

              <div className="mw">

                <div className='sliderMargin'>
                  <Carousel showThumbs={false} autoPlay showArrows={true} showStatus={false} infiniteLoop={true} showIndicators={false}>
                    <div className=''>
                      <img src="https://i.ibb.co/BV3VPxr/2023-04-26-phivolcs-commits-to-training-pup-on-redas.jpg" className='object-cover carouselPics ' style={{ height: '480px' }} alt="" />
                      <div className='text-left pt-7'>
                        <a className='font-bold text-red hover:underline hover:cursor-pointer '>PHIVOLCS commits to training PUP on REDAS</a>
                        <p className='pt-2'>April 26, 2023</p>
                      </div>
                    </div>

                    <div>
                      <img src="https://i.ibb.co/VxB17QQ/2023-04-26-earth-day-2023-celebrated-through-the-arts-1.jpg" className='object-cover carouselPics' style={{ height: '480px' }} alt="" />
                      <div className='text-left pt-7'>
                        <a className='font-bold text-red hover:underline hover:cursor-pointer '>Earth Day 2023 celebrated through the arts</a>
                        <p className='pt-2'>April 26, 2023</p>
                      </div>
                    </div>

                    <div>
                      <img src="https://www.pup.edu.ph/resources/images/fillers/3.jpg" style={{ height: '480px' }} className='object-cover carouselPics' alt="" />
                      <div className='text-left pt-7'>
                        <a className='font-bold text-red hover:underline hover:cursor-pointer '>DBM Sec. Pangandaman and DepEd Usec Jumamil-Mercado receives Tanglaw ng Bayan Award
                        </a>
                        <p className='pt-2'>April 25, 2023</p>
                      </div>
                    </div>

                    <div>
                      <img src="https://www.pup.edu.ph/resources/images/fillers/4.jpg" style={{ height: '480px' }} className='object-cover carouselPics' alt="" />
                      <div className='text-left pt-7'>
                        <a className='font-bold text-red hover:underline hover:cursor-pointer '>#GetThatBar2022: PUP Law retains top performance</a>
                        <p className='pt-2'>April 25, 2023</p>
                      </div>
                    </div>

                    <div>
                      <img src="https://www.pup.edu.ph/resources/images/fillers/5.jpg" style={{ height: '480px' }} className='object-cover carouselPics' alt="" />
                      <div className='text-left pt-7'>
                        <a className='font-bold text-red hover:underline hover:cursor-pointer '>CSSD works with various stakeholders for history and cultural heritage promotion
                        </a>
                        <p className='pt-2'>April 25, 2023</p>
                      </div>
                    </div>

                    <div>
                      <img src="https://www.pup.edu.ph/resources/images/fillers/6.jpg" style={{ height: '480px' }} className='object-cover carouselPics' alt="" />
                      <div className='text-left pt-7'>
                        <a className='font-bold text-red hover:underline hover:cursor-pointer '>Philhealth employees nationwide take Civil Service Review with ICPD</a>
                        <p className='pt-2'>April 20, 2023</p>
                      </div>
                    </div>

                    <div>
                      <img src="https://www.pup.edu.ph/resources/images/fillers/7.jpg" style={{ height: '480px' }} className='object-cover carouselPics' alt="" />
                      <div className='text-left pt-7'>
                        <a className='font-bold text-red hover:underline hover:cursor-pointer '>PUP partners with 350 Pilipinas on "Climate Deals"</a>
                        <p className='pt-2'>April 20  , 2023</p>
                      </div>
                    </div>

                    <div>
                      <img src="https://i.ibb.co/84sW6Fy/2023-04-13-cssd-officially-becomes-an-associate-member-of-the-pssc.jpg" className='object-cover carouselPics' style={{ height: '480px' }} alt="" />
                      <div className='text-left pt-7'>
                        <a className='font-bold text-red hover:underline hover:cursor-pointer '>CSSD officially becomes an associate member of the PSSC
                        </a>
                        <p className='pt-2'>April 12, 2023</p>
                      </div>
                    </div>

                    <div>
                      <img src="https://i.ibb.co/dbPj8ff/2023-04-04-sen-risa-graces-emos-f2f-gender-sensitivity-training-sen-hontiveros.jpg" className='object-cover' style={{ height: '480px' }} alt="" />
                      <div className='text-left pt-7'>
                        <a className='font-bold text-red hover:underline hover:cursor-pointer '>Sen. Risa graces EMO's F2F gender sensitivity training</a>
                        <p className='pt-2'>April 04, 2023</p>
                      </div>
                    </div>

                    <div>
                      <img src="https://i.ibb.co/CWK75gC/2023-04-03-cssd-formally-partners-with-abo-akademi-university.jpg" className='object-cover carouselPics' style={{ height: '480px' }} alt="" />
                      <div className='text-left pt-7'>
                        <a className='font-bold text-red hover:underline hover:cursor-pointer '>CSSD formally partners with Abo Akademi University</a>
                        <p className='pt-2'>April 03, 2023</p>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>


            <div className=''>
              <div className='flex flex-col justify-center gap-3 picsMargin '>
                <img src="//i.imgur.com/vaNWHC9.jpg" alt="" class="rounded-lg pics hover:cursor-pointer" width={210} height={124} />
                <div className="img-container">
                  <img src="//i.imgur.com/T2sYWP4.jpg" alt="" class="rounded-lg pics hover:cursor-pointer" width={210} height={124} />
                </div>
                <div className="img-container">
                  <img src="//i.imgur.com/jIaVBKM.jpg" alt="" class="rounded-lg pics hover:cursor-pointer" width={210} height={124} />
                </div>
                <div className="img-container">
                  <img src="//i.imgur.com/EryMqbT.jpg" alt="" class="rounded-lg pics hover:cursor-pointer" width={210} height={124} />
                </div>
                <div className="img-container">
                  <img src="//i.imgur.com/aqFGgGg.jpg" alt="" class="rounded-lg pics hover:cursor-pointer" width={210} height={124} />
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      <hr class='line mt-10'></hr>


      <section class="flex flex-col space-y-4 embed-links sm:w-full items-center justify-center my-6 " style={{ marginBottom: '-55px' }}>

      <div className='flex flex-row items-center justify-center embedResponsive sm:flex-col md:flex-col lg:flex-row '>
          <div className="flex flex-wrap justify-center twitty lg:mb-6 border-grey">
            <div className="flex justify-center w-full h-auto ">
              <div className="twit">
                <a class="twitter-timeline" data-height="820" data-theme="dark" href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
            </div>
          </div>

          <div class="flex flex-col w-full lg:m-6 pt-4">
            <div className='flex flex-col items-center justify-center space-y-4 youtube-spotMargin '>
              <iframe class="youtube" data-height="350" src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA" title="The Observer Online: Tanglaw Fest 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe class="spotify md:mb-5" data-height="350" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      

      

    <section>
      <Footnote />

      </section>
      <section class="bg-black">
      <Footend />
      </section>

      <Fab />

    </>

  )
}
