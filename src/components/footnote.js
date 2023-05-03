const Footnote = () => {
    return (

        <>
        <div className="flex flex-col flex-wrap justify-center lg:flex-row bg-dirtywhite font-i">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div>
                <div class="flex flex-col p-10 m-0">
                    <p className="pb-4 text-sm font-bold uppercase text-red ">ONLINE SERVICES</p>
                    <div class="flex flex-col gap-2">
                        <a href="" className="text-gray hover:underline hover:cursor-pointer">PUP WebMail</a>
                        <a href="" className="text-gray hover:underline hover:cursor-pointer">PUP iApply</a>
                        <a href="" className="text-gray hover:underline hover:cursor-pointer">SIS for Students</a>
                        <a href="" className="text-gray hover:underline hover:cursor-pointer">SIS for faculty</a>

                        <p className="pt-8 pb-2 text-sm font-bold uppercase text-red">DOWNLOADS</p>
                        <div class="flex flex-col gap-2">
                            <a href="" className="select-none text-gray text-textsize hover:underline hover:cursor-pointer">For Students</a>
                            <a href="" className="select-none text-gray text-textsize hover:underline hover:cursor-pointer">For Faculty and Employees</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-10">
                <p className="pb-4 text-sm font-bold uppercase text-red">QUICK LINKS</p>
                <div class="flex flex-col gap-2">
                    <a href="" className="select-none text-gray text-textsize hover:underline hover:cursor-pointer ">About PUP</a>
                    <a href="" className="select-none text-gray text-textsize hover:underline hover:cursor-pointer">Admission Information</a>
                    <a href="" className="select-none text-gray text-textsize hover:underline hover:cursor-pointer">Branchesa and Campuses</a>
                    <a href="" className="select-none text-gray text-textsize hover:underline hover:cursor-pointer">Academic Programs</a>
                    <a href="" className="select-none text-gray text-textsize hover:underline hover:cursor-pointer">Transparency Seal</a>
                    <a href="" className="select-none text-gray text-textsize hover:underline hover:cursor-pointer">Bid Notices and Invitation</a>
                    <a href="" className="select-none text-gray text-textsize hover:underline hover:cursor-pointer">International Affairs</a>
                    <a href="" className="select-none text-gray text-textsize hover:underline hover:cursor-pointer">Jobs for PUPians</a>
                    
                </div>
            </div>
            <div className="flex flex-col p-10">
                <p className="pb-4 text-sm font-bold uppercase text-red">KEEP IN TOUCH</p>
                
                <div class="flex space-x-4">
                <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue-500">
                            {/* <i class="fa fa-brands fa-facebook text-white text-lg icon-medium-effect icon-effect-2"></i> */}
                            <i class="fa fa-edit fa-facebook icon-medium-effect icon-effect-2 text-white hover:text-blue " style={{fontSize:'32px'}}></i>
                        </span>
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue-500">
                            <i class="fa fa-brands fa-twitter text-white"></i>
                        </span>
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue-500">
                            <i class=" fa fa-brands fa-youtube text-white"></i>
                        </span>
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue-500">
                            <i class="fa fa-brands fa-linkedin text-white"></i>
                        </span>
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue-500">
                            <i class="fa fa-solid fa-rss text-white"></i>
                        </span>
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue-500">
                            <i class="fa fa-brands fa-spotify text-white "></i>
                        </span>
                </div>
                <p className="pt-5 pb-4 text-sm font-bold uppercase text-red">CONTACT US</p>
                <p class="text-bl text-gray"> Phone: <strong class="text-bl text-grey">(+63 2) 5335-1PUP (5335-1787) or 5335-1777</strong></p>
                <p class="text-bl text-gray"> Email: <strong class="text-bl text-grey">inquire@pup.edu.ph</strong></p>
                <p className="pt-5 pb-4 text-sm font-bold uppercase text-red">PUPWEBSITE 10</p>
                <p class="text-gr text-gray"> Terms of Use | Privacy Statement | About PUPWebSite</p>
            </div>
        </div>
        <section />
        <p class="pb-12 flex justify-center bg-dirtywhite text-[8pt] font-I text-gr">© 1998-2021 POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</p>
        </>

    )
}

export default Footnote


// const Footnote = () => {
//     return (
//         <>
//         <div className="flex flex-row justify-center gap-4 space-5 font-i">
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//             <div>
//                 <div class="flex flex-col p-10 m-0">
//                     <p className="pb-4 text-sm font-bold uppercase text-red textco ">ONLINE SERVICES</p>
//                     <div class="flex flex-col gap-4 space-5">
//                         <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer">PUP iApply</a>
//                         <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer">SIS for Students</a>
//                         <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer">SIS for faculty</a>

//                         <p className="pb-4 text-sm font-bold uppercase text-red textco ">DOWNLOADS</p>
//                         <div class="flex flex-col gap-4 space-5">
//                             <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer">For Students</a>
//                             <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer">For Faculty and Employees</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex flex-col p-10">
//                 <p className="pb-4 text-sm font-bold uppercase text-red textco">QUICK LINKS</p>
//                 <div class="flex flex-col gap-4 space-5">
//                     <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer ">About PUP</a>
//                     <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer">Admission Information</a>
//                     <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer">Branchesa and Campuses</a>
//                     <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer">Academic Programs</a>
//                     <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer">Transparency Seal</a>
//                     <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer">Bid Notices and Invitation</a>
//                     <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer">International Affairs</a>
//                     <a href="" className="select-none text-graytext text-textsize hover:underline hover:cursor-pointer">Jobs for PUPians</a>
                    
//                 </div>
//             </div>
//             <div className="flex flex-col p-10 ">
//                 <p className="pb-4 text-sm font-bold uppercase text-red textco">KEEP IN TOUCH</p>
//                 <div  class="flex flex-row gap-7">
//                 <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue">
//                             <i class="fa fa-brands fa-facebook text-white text-lg"></i></span>
//                         <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue">
//                             <i class="fa fa-brands fa-twitter text-white"></i></span>
//                         <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue">
//                             <i class=" fa fa-brands fa-youtube text-white"></i></span>
//                         <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue">
//                             <i class="fa fa-brands fa-linkedin text-white"></i></span>
//                         <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue">
//                             <i class="fa fa-solid fa-rss text-white"></i></span>
//                         <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue">
//                             <i class="fa fa-brands fa-spotify text-white "></i></span>
//                 </div>
                
//                 <p className="pt-5 pb-4 text-sm font-bold uppercase text-red textco">CONTACT US</p>
//                 <p>Phone: (+63 2) 5335-1PUP (5335-1787) or 5335-1777</p>
//                 <p>Email: inquire@pup.edu.ph</p>
//                 <p className="pt-5 pb-4 text-sm font-bold uppercase text-red textco">PUPWEBSITE 10</p>
//                 <p>Terms of Use | Privacy Statement | About PUPWebSite</p>
        
//             </div>
           

            
//         </div>
//         <section />
//         <p class="flex justify-center text-grey  ">© 1998-2021 POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</p>

        
//         </>
//     )
// }

// export default Footnote;


// // <div className="flex flex-col w-full p-1 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row
// <div class=">
// <div class="row">
//     <div class="col-md-5 col-xs-12">
//         {/* <img src="/resources/images/govph-seal-mono-footer.png" style="max-width:148px" alt="Republic of the Philippines" class="pull-left"> */}
//         <h6>Republic of the Philippines</h6>
//         <p>All content is in the public domain unless otherwise stated.</p>
//     </div>
//     <div class="col-md-4 col-xs-12">
//         <h6>About GOVPH</h6>
//         <p>Learn more about the Philippine government, its structure, how government works and the people behind it.</p>
//         <ul>
//             <li><a href="http://www.gov.ph/">Official Gazette</a></li>
//             <li><a href="http://data.gov.ph/">Open Data Portal</a></li>
        
//             <li><a href="#">Send us your feedback</a></li>
            
//         </ul>
//     </div>
//     <div class="col-md-3 col-xs-12">
//         <h6>Government Links</h6>
//         <ul>
//             <li><a href="http://president.gov.ph/">Office of the President</a></li>
//             <li><a href="http://ovp.gov.ph/">Office of the Vice President</a></li>
//             <li><a href="http://www.senate.gov.ph/">Senate of the Philippines</a></li>
//             <li><a href="http://www.congress.gov.ph/">House of Representatives</a></li>
//             <li><a href="http://sc.judiciary.gov.ph/">Supreme Court</a></li>
//             <li><a href="http://ca.judiciary.gov.ph/">Court of Appeals</a></li>
//             <li><a href="http://sb.judiciary.gov.ph/">Sandiganbayan</a></li>
//         </ul>
//     </div>
// </div>
// </div>
// </div>
