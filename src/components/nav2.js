

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

function Navigation() { return (
  <nav
    className="flex flex-wrap items-center bg-center bg-cover border-b-2 border-white text-gr"
    style={{
      backgroundImage: "url(bg.jpg)",
      backgroundPosition: "center center",
      backgroundSize: "cover",
    }}
  >
    <div className="mx-auto 2xl:pl-48">
      <ul className="flex">
        <li><img src="govph.png" alt="" className="px-2 pb-1 transition-all hover:bg-red" /></li>
        <li className="">
          <a href="#"></a>
          <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr" style={{ padding: '10px 16px' }}>Home</a>
        </li>
        <li className="">
          <a href="#"></a>
          <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr hidden md:flex" style={{ padding: '10px 16px' }}>Good Governance</a>
        </li >
        <li className="">
          <a href="#"></a>
          <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr hidden md:flex" style={{ padding: '10px 16px' }}>Transparency</a>
        </li>
        <li className="">
          <a href="#"></a>
          <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr hidden lg:flex" style={{ padding: '10px 16px' }}>International Affairs</a>
        </li>
        <li className="">
          <a href="#"></a>
          <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr hidden md:flex" style={{ padding: '10px 16px' }}>Bid Notices and Invitation</a>
        </li>
        <div className="flex items-center">
        <a href="/src/pages/contact-us.js"></a>
        <a href="#" className="text-xl font-bold tracking-wide"></a>
      </div>
      <div className="flex items-center mx-auto xl:pr-72 xl:pl-72">
        <a href="#"></a>
        <a href="#" className="flex items-center transition-all text-gr bg-white-300 hover:bg-red hover:text-white font-I text-[10pt] py-2" style={{ padding: '10px 16px' }}>Contact Us</a>
      </div>
      </ul>
    </div>
  </nav>
);
}
//   return (
//     <nav
//       className="flex flex-wrap items-center justify-between m-0 bg-center sm:pl-20 text-grey "
//       style={{
//         lineHeight: "23px",
//         fontWeight: 300,
//         backgroundImage: "url(bg.jpg)",
//         backgroundPosition: "center center",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="w-full sm:mx-20 font-i" >
//         <ul className="flex items-center w-full sm:pr-20">
//           <img src="govph.png" />
//           <li>
//             <a href="#"></a>
//             <a href="#"
//             className="py-2 transition-all rounded text-grey bg-white-300 hover:bg-red"
//             style={{ padding: '10px 16px' }}>Home</a>
//           </li>
//           <li>
//             <a href="#"></a>
//             <a href="#" className="py-2 transition-all rounded sm:px-8 nav2 text-grey bg-white-300 hover:bg-red ">Good Governance</a>
//           </li>
//           <li>
//             <a href="#"></a>
//             <a href="#" className="py-2 transition-all rounded sm:px-8 nav2 text-grey bg-white-300 hover:bg-red " >Transparency</a>
//           </li>
//           <li>
//             <a href="#"></a>
//             <a href="#" className="py-2 transition-all rounded sm:px-8 nav2 text-grey bg-white-300 hover:bg-red " >International Affairs</a>
//           </li>
//           <li>
//             <a href="#"></a>
//             <a href="#" className="py-2 transition-all rounded sm:px-8 nav2 text-grey bg-white-300 hover:bg-red ">Bid Notices and Invitation</a>
//           </li>
//           {/* <li>
//           <a href="#"></a>
//         <a href="#" className="py-2 transition-all rounded text-grey bg-white-300 hover:bg-red" >Contact Us</a>
            
//           </li> */}
//         </ul>
//       </div>
//       <div className="flex items-center w-right sm:pr-20">
//         <a href="/src/pages/contact-us.js"></a>
//         <a href="#" className="text-xl font-bold "></a>
//       </div>
//       <div className="flex items-center pr-20 ">
//         <a href="#"></a>
//         <a href="#" className="py-2 transition-all rounded text-grey bg-white-300 hover:bg-red" >Contact Us</a>
//       </div>
//     </nav>
//   );
// }
export default Navigation;