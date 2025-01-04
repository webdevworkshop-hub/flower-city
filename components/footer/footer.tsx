export default function Footer(){
    return(
        <>
        
        <footer className=" h-screen bg-[#d9d9d9] ">
            
            <div className="bg-[#d9d9d9] text-[#2235a2] w-full flex  h-3/6 ">
                <div className="w-1/2 h-3/6 pl-12 mt-12 ml-12 ">
                  
                     <h1 className="text-[#2235a2] font-bold text-[30px] ">GET IN TOUCH</h1>
                     <p className="w-80 pt-6" >Contact us for questions, technical assistance, or collaboration opportunities via the contact information provided.</p>
                     <ul className="mt-6" >
                        <div className="flex">
                        <img   className= "h-6" src="https://res.cloudinary.com/db6nuto9j/image/upload/v1735903904/zkmntocpzuhwkpahqrj8.png" alt="" />
                        <li className="ml-2">+123-456-7890</li>
                        </div>
                        <div className="flex mt-4 ">
                        <img   className= "h-6" src="https://res.cloudinary.com/db6nuto9j/image/upload/v1735903901/eoazq9nqqh5bv7myi8u7.png" alt="" />
                        <li className="ml-2">hello@reallygreatsite.com</li>
                        </div>
                        <div className="flex mt-4">
                        <img  className= "h-6"src="https://res-console.cloudinary.com/db6nuto9j/media_explorer_thumbnails/5c36d1e61dcdf6dbd814ce0220189e55/detailed" alt="" />
                        <li className="ml-2"> 123 Anywhere ST., Any City, 12345</li>
                        </div>
                     </ul>

                </div>
                <div className="w-1/2  grid place-items-center">
                <iframe className="items-center content-center" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4609.116325610296!2d87.56543567610545!3d23.710059990322485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9df0006772563%3A0xdc33182a62573cd6!2sKhirai%20flower%20garden!5e1!3m2!1sen!2sin!4v1735829134060!5m2!1sen!2sin" 
                width="350" 
                height="290"  loading="lazy" >
                </iframe>
               
                </div>
            </div>


            <div className="h-3/6 flex flex-col justify-between bg-white  ">
                <div className="w-full flex  h-full rounded-t-[25px]  ">
                    <div className="w-1/2 flex mt-6  ml-8">
                       
                        <img  className="h-12 w-12" src="https://res-console.cloudinary.com/db6nuto9j/media_explorer_thumbnails/d5a758daadec391b224018a7286605bf/detailed" alt="" />
                        <h2 className=" text-xl font-bold mt-2 pl-2">THE CITY OF FLOWER</h2>
                    </div>
                    <div className="w-1/2 flex place-content-around pb-8 mt-8"> 
                        <div className="pt-2 ">
                            <h2 className="font-bold text-lg ">Company</h2>
                            <ul className="pt-4">
                                <li>Home</li>
                                <li>About</li>
                                <li>Blogs</li>
                                <li>Guide</li>
                                <li>Team</li>
                                <li>contact</li>
                            </ul>
                        </div>
                        <div className="pt-2 ">
                            <h2 className="font-bold text-lg ">Documentation</h2>
                            <ul className="pt-4">
                                <li>Help Centre</li>
                                <li>Contact</li>
                                <li>FAQ</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="pt-2 ">
                            <h2 className="font-bold text-lg ">Social</h2>
                            <ul className="pt-4">
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <hr className="border-gray-500 "></hr>
                <div className="flex place-content-between px-8 mb-6 mt-2">
                    <div><p>© Wardiere Inc. All Rights Reserved 2023</p></div>
                    <div><p>Terms & Conditions</p></div>
                </div>
            </div>

        </footer>
        
        </>
    )
}