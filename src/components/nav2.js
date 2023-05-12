

// function Navigation() {
//   return (
//     <nav
//       className="flex flex-wrap items-center justify-between pl-20 m-0 text-grey "
//       style={{
//         lineHeight: "23px",
//         fontWeight: 300,
//         backgroundImage: "url(bg.jpg)",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center center",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="mx-20 font-i" >
//         <ul className="flex items-center pr-20 ">
//           <img src="govph.png" />
//           <li>
//             <a href="#"></a>
//             <a href="#" 
//             className="py-2 transition-all rounded text-grey bg-white-300 hover:bg-red" 
//             style={{ padding: '10px 16px' }}>Home</a>
//           </li>
//           <li>
//             <a href="#"></a>
//             <a href="#" className="px-8 py-2 transition-all rounded text-grey bg-white-300 hover:bg-red " >Good Governance</a>
//           </li>
//           <li>
//             <a href="#"></a>
//             <a href="#" className="px-8 py-2 transition-all rounded text-grey bg-white-300 hover:bg-red " >Transparency</a>
//           </li>
//           <li>
//             <a href="#"></a>
//             <a href="#" className="px-8 py-2 transition-all rounded text-grey bg-white-300 hover:bg-red " >International Affairs</a>
//           </li>
//           <li>
//             <a href="#"></a>
//             <a href="#" className="px-8 py-2 transition-all rounded text-grey bg-white-300 hover:bg-red " >Bid Notices and Invitation</a>
//           </li>
//         </ul>
//       </div>
//       <div className="flex items-center">
//         <a href="/src/pages/contact-us.js"></a>
//         <a href="#" className="text-xl font-bold tracking-wide"></a>
//       </div>
//       <div className="flex items-center pr-20">
//         <a href="#"></a>
//         <a href="#" className="px-8 py-2 transition-all rounded text-grey bg-white-300 hover:bg-red" style={{ padding: '10px 16px' }}>Contact Us</a>
//       </div>
//     </nav>
//   );
// }
// export default Navigation;

// function Navigation() { return (
//   <nav
//     className="flex flex-wrap items-center bg-center bg-cover border-b-2 border-white text-gr"
//     style={{
//       backgroundImage: "url(bg.jpg)",
//       backgroundPosition: "center center",
//       backgroundSize: "cover",
//     }}
//   >
//     <div className="mx-auto 2xl:pl-48">
//       <ul className="flex">
//         <li><img src="govph.png" alt="" className="px-2 pb-1 transition-all hover:bg-red" /></li>
//         <li className="">
//           <a href="#"></a>
//           <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr" style={{ padding: '10px 16px' }}>Home</a>
//         </li>
//         <li className="">
//           <a href="#"></a>
//           <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr hidden md:flex" style={{ padding: '10px 16px' }}>Good Governance</a>
//         </li >
//         <li className="">
//           <a href="#"></a>
//           <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr hidden md:flex" style={{ padding: '10px 16px' }}>Transparency</a>
//         </li>
//         <li className="">
//           <a href="#"></a>
//           <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr hidden lg:flex" style={{ padding: '10px 16px' }}>International Affairs</a>
//         </li>
//         <li className="">
//           <a href="#"></a>
//           <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr hidden md:flex" style={{ padding: '10px 16px' }}>Bid Notices and Invitation</a>
//         </li>
//         <div className="flex items-center">
//         <a href="/src/pages/contact-us.js"></a>
//         <a href="#" className="text-xl font-bold tracking-wide"></a>
//       </div>
//       <div className="flex items-center mx-auto xl:pr-72 xl:pl-72">
//         <a href="#"></a>
//         <a href="#" className="flex items-center transition-all text-gr bg-white-300 hover:bg-red hover:text-white font-I text-[10pt] py-2" style={{ padding: '10px 16px' }}>Contact Us</a>
//       </div>
//       </ul>
//     </div>
//   </nav>
// );
// }

function Navigation() {
  return (
    <nav
      className="flex flex-wrap items-center justify-between m-0 text-lg bg-white bg-center bg-cover text-gray font-noto sm:text-xl "
      style={{ lineHeight: "23px", fontWeight: 300, backgroundImage: "url(bg.jpg)", vbackgroundRepeat: "no-repeat", backgroundPosition: "top ", backgroundSize: "cover", }}
    >
      <div className="mx-auto lg:px-10 col-md-12 ">
        <div className="">
          <ul className="flex justify-between ">
            <li>
              <a href="#">
                <img src="govph.png" className="object-cover px-4 center hover:bg-red" />
              </a>
            </li>
            <li className="pt-1">
              <a href="/" className="px-4 py-3 font-normal center hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer lg:px-4" >Home</a>
            </li>
            <li className="pt-1 hide ">
              <a href="#" className="py-3 font-normal hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 lg:px-4" >Good Governance</a>
            </li >
            <li className="pt-1 hide">
              <a href="#" className="py-3 font-normal hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 lg:px-4" >Transparency</a>
            </li>
            <li className="pt-1 hide">
              <a href="/international" className="py-3 font-normal hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 lg:px-4" >International Affairs</a>
            </li>
            <li className="pt-1 hide">
              <a href="#" className="py-3 font-normal hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 lg:px-4"  >Bid Notices and Invitation</a>
            </li>
            <li className="pt-1 topbar ">
              <a href="/contact" className="px-4 py-3 font-normal justify-self-end center hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2" >Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default  Navigation