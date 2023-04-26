const Navbar = () => {


    return (
        <nav class="bg-white-700">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between h-20">
                    <div className="flex-shrink-0 flex flex-row pl-20">
                        <img src="PUPLogo.png" height='80px' width='88px' />
                        <div className="flex flex-col">
                            <h1 className="text-red font-bold text-lg ">
                                POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
                            </h1> 
                            <h2 className="text-blackish font-bold text-lg text-gray-500">
                                The Country's 1st PolytechnicU
                            </h2>
                            <div className="flex flex-row space-x-8 text-red-800  ">
                                <a href="#" className="text-red">About PUP</a>
                                <a href="#" className="text-red">Academic</a>
                                <a href="#" className="text-red">Students</a>
                                <a href="#" className="text-red">Reseaerch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;