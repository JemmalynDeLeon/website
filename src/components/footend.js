const Footend = () => {
    return (
        <>
            <div className="flex flex-row justify-center gap-40 ">
                <div className="flex flex-row">
                    <img src="govphseal.png" class="pt-2" height="10px" width="164"/>
                    <div>
                        <p className="pt-8 pb-2 font-bold text-white uppercase text-sssm p-ft">Republic of the Philippines</p>
                        <div class="flex flex-col gap-2">
                            <p className="pt-2 text-white text-ssssm">All content is in the public domain unless<br></br> otherwise stated.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="pt-8 pb-2 font-bold text-white uppercase text-sssm p-ft">About GOVPH</p>
                    <div class="flex flex-col gap-1 ">
                        <p className="pt-2 text-white text-ssssm">Learn more about the Philippine government, its <br></br>structure, how government works and the people behind<br></br> it.</p>
                        <a href="" className="text-white select-none text-ssssm hover:underline hover:cursor-pointer">Official Gazette</a>
                        <a href="" className="text-white select-none text-ssssm hover:underline hover:cursor-pointer">Open Data Portal</a>
                    </div>
                </div>
                <div className="">
                    <p className="pt-8 pb-2 font-bold text-white uppercase text-sssm p-ft">Government links</p>
                    <div class="flex flex-col pt-2 space-y-2">
                        <a href="" className="text-white select-none text-ssssm hover:underline hover:cursor-pointer">Office of the President</a>
                        <a href="" className="text-white select-none text-ssssm hover:underline hover:cursor-pointer">Office of the Vice President</a>
                        <a href="" className="text-white select-none text-ssssm hover:underline hover:cursor-pointer">Senate of the Philippines</a>
                        <a href="" className="text-white select-none text-ssssm hover:underline hover:cursor-pointer">House of Representatives</a>
                        <a href="" className="text-white select-none text-ssssm hover:underline hover:cursor-pointer">Supreme Court</a>
                        <a href="" className="text-white select-none text-ssssm hover:underline hover:cursor-pointer">Court of Appeals</a>
                        <a href="" className="text-white select-none text-ssssm hover:underline hover:cursor-pointer">Sandiganbayan</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footend