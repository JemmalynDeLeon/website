import Link from 'next/link'


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
              <Link href="/" className="px-4 py-3 font-normal center hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer lg:px-4" >Home</Link>
            </li>
            <li className="pt-1 hide ">
              <a href="#" className="py-3 font-normal hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 lg:px-4" >Good Governance</a>
            </li >
            <li className="pt-1 hide">
              <a href="#" className="py-3 font-normal hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 lg:px-4" >Transparency</a>
            </li>
            <li className="pt-1 hide">
              <Link href="/international" className="py-3 font-normal hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 lg:px-4" >International Affairs</Link>
            </li>
            <li className="pt-1 hide">
              <a href="#" className="py-3 font-normal hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 lg:px-4"  >Bid Notices and Invitation</a>
            </li>
            <li className="pt-1 topbar ">
              <Link href="/contact" className="px-4 py-3 font-normal justify-self-end center hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2" >Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default  Navigation