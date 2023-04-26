const Navbar = () => {


    return (
        <nav class="bg-white-700"
            style={{
            lineHeight: "23px",
            fontWeight: 300,
            backgroundImage: "url(bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"}}>
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between h-20">
                    <div className="flex flex-row flex-shrink-0 pl-20">
                        <img src="PUPLogo.png" height='80px' width='88px' />
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold text-red ">
                                POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
                            </h1> 
                            <h2 className="text-lg font-bold text-gray-500 text-grey">
                                The Country's 1st PolytechnicU
                            </h2>
                            <div className="flex flex-row space-x-8 text-red-800 ">
                                <a href="#" className="text-red">About PUP</a>
                                <a href="#" className="text-red">Academic</a>
                                <a href="#" className="text-red">Students</a>
                                <a href="#" className="text-red">Research</a>
                            </div>
                        </div>
                        
                        
                    </div>
                    <input placeholder="Type keyword here..." className="flex flex-wrap items-center justify-between h-16" class="placeholer"></input>
                </div>
            </div>
        </nav>
        
    );
};
export default Navbar;


// for search bar

// // <div class="search-side hidden-xs">
// <div id="pnlS" onkeypress="javascript:return WebForm_FireDefaultButton(event, 'btnSearch')">
	
//     <span class="input-group input-group-sm">
//     <input name="ctl00$txtSearch" type="text" id="txtSearch" class="form-control" placeholder="Type keyword here...">
//     <span class="input-group-btn">
//     <a id="btnSearch" class="btn btn-system btn-flat" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$btnSearch&quot;, &quot;&quot;, false, &quot;&quot;, &quot;/search&quot;, false, true))"><i class="fa fa-search"></i></a>
//     </span>
//     </span>
    
//     {/* </div></div> */}