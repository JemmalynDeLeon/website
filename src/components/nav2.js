

function Navigation() {
  return (
    <nav
      className="flex flex-wrap items-center justify-between pl-20 m-0 text-grey "
      style={{
        lineHeight: "23px",
        fontWeight: 300,
        backgroundImage: "url(bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-20 font-i" >
        <ul className="flex items-center pr-20 ">
          <img src="govph.png" />
          <li>
            <a href="#"></a>
            <a href="#" 
            className="py-2 transition-all rounded text-grey bg-white-300 hover:bg-red" 
            style={{ padding: '10px 16px' }}>Home</a>
          </li>
          <li>
            <a href="#"></a>
            <a href="#" className="px-8 py-2 transition-all rounded text-grey bg-white-300 hover:bg-red " >Good Governance</a>
          </li>
          <li>
            <a href="#"></a>
            <a href="#" className="px-8 py-2 transition-all rounded text-grey bg-white-300 hover:bg-red " >Transparency</a>
          </li>
          <li>
            <a href="#"></a>
            <a href="#" className="px-8 py-2 transition-all rounded text-grey bg-white-300 hover:bg-red " >International Affairs</a>
          </li>
          <li>
            <a href="#"></a>
            <a href="#" className="px-8 py-2 transition-all rounded text-grey bg-white-300 hover:bg-red " >Bid Notices and Invitation</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <a href="/src/pages/contact-us.js"></a>
        <a href="#" className="text-xl font-bold tracking-wide"></a>
      </div>
      <div className="flex items-center pr-20">
        <a href="#"></a>
        <a href="#" className="px-8 py-2 transition-all rounded text-grey bg-white-300 hover:bg-red" style={{ padding: '10px 16px' }}>Contact Us</a>
      </div>
    </nav>
  );
}
export default Navigation;