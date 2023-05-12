import Navbar2 from '@/components/nav2.js'
import Footnote from '@/components/footnote.js'
import Navbar1 from '@/components/nav1'
import Fab from '@/components/fab'
import Footend from '@/components/footend'
import { contents, items } from '@helpers/international_data'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Modal from "@components/modal";

const International = ({ articlesData }) => {
  console.log(articlesData)

const converTimestamp = (timestamp) => {
    const dateObject = new Date(timestamp);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year : "numeric",
      month: "long",
      day : "numeric",
    }).format(dateObject);

    return formattedDate;
  };
  

  return (
    <>
      <Modal/>
      <Navbar2 />
      <Navbar1 />
      <div className="px-4 py-12 container-body">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <div className="flex flex-col lg:flex-row">
          <div className="overflow-x-auto lg:w-9/12">
            <h1 className="text-xl font-bold leading-9 text-left mt-0 text-[34px] text-red">International Affairs</h1>
            <img className="place-self-center" src={'/international.jpg'} width={800} height={300}></img>
            <p className="leading-loose text-gray body-font mb-7">
              The PUP Office of International Affairs is engaged in a wide variety of programs and activities aligned
              with the vision of President Manuel M. Muhi towards establishment of PUP as a National Polytechnic
              University.
            </p>
            <p className="leading-loose text-gray body-font mb-7">
              Thus, the Office for International Affairs provides leadership and coordination for all University-wide
              international activities for coherence and integration of the institution's international linkages,
              cooperation, exchanges, programs and services:
            </p>
            <ul className="list-disc list-inside text-gray body-font">
              {items.map((item) => (
                <li key={item.text} className="mb-2">
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="flex flex-col">
              <div className="flex flex-row ">
                <h4 className="items-start justify-start w-full mt-6 mb-6 text-left border-b border-gray">
                  <Link className="text-base font-semibold underline underline-offset-8" href="/announcements">
                    Articles
                  </Link>
                </h4>
                <div className="flex mt-7 w-9">
                  <button
                    // onClick={handlePrevSlide}
                    className="flex flex-wrap items-center justify-center w-20 h-5 text-sm border rounded text-gray hover:text-white hover:bg-maroon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    // onClick={handleNextSlide}
                    className="flex flex-wrap items-center justify-center w-20 h-5 text-sm border rounded text-gray hover:text-white hover:bg-maroon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-row justify-between pb-6">
                {articlesData &&
                  articlesData.map((value, key) => (
                  
                    <div className="image-container" key={key}>
                      
                      <img src={value.main_article_photo} className=" articles-img" />
                      
                        <div className="overlay">
                          <div className="overlay-content">
                            <div className="note-icon">
                              <Link legacyBehavior key={key} href={{ pathname: `/international/${value.id}` }}>
                              <i class="fa fa-file-text-o"></i></Link>
                            </div>
                          </div>
                        </div>
                      

                      <div className="flex flex-col lg:pt-5 hover:underline">
                        <Link legacyBehavior href={{ pathname: `/international/${value.id}` }}>
                        <p
                          
                          className="font-bold text-red body-font lg:text-left "
                        >
                          {value.title}
                        </p></Link>
                        <p className="text-xs text-center text-gray lg:text-left">{converTimestamp(value.created_at)}</p>
                      </div>
                    </div> 
                  ))}
              </div>
            </div>
          </div>
          <div className="lg:px-4 lg:w-3/12">
            <div className="overflow-hidden mb-50">
              <h4 className="mt-10 text-[14px] text-left lg:mt-0 font-thin text-red">CONTENTS</h4>
              <div className="absolute block w-10 h-0.5 bg-gray"></div>
              <ul className="block w-full pt-2 divide-y text-gray mt-">
                {contents.map((content, index) => (
                  <li className="py-1.5" key={index}>
                    <p className="text-left transition duration-300 ease-in-out transform hover:text-red hover:translate-x-2">
                      <a className="body-font" href={content.link}>
                        {content.name}
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footnote />
      <Footend/>
      <Fab />
      
    </>
  )
}

export async function getStaticProps() {
  // static site generation (data)
  let data = []
  await axios.get('https://api.ahglab.com/api:W7k9W8HQ/articles').then(function (response) {
    data = response.data
  })

  return {
    props: {
      articlesData: data,
    },
    revalidate: 60,
  }
}

export default International
