import React from 'react'

const ContactContent = () => {
  return (
    <div className=' flex  mb-20 justify-between gap-y-9 items-center flex-wrap '>
         <div className=' xl:w-[40%]'>
            <p className=' text-[12px] md:text-sm text-[#7ABB40] '>GET IN TOUCH</p>
            <h1 className=' text-xl md:text-2xl lg:text-3xl font-semibold text-[#D8D1BD] mt-4 text-left '>Seamless Communication,
            Global Impact.</h1>
            <p className=' mt-4 text-[white] text-[10px] md:text-[12px]'>Questions? Ideas? We’re Here to Listen.</p>
            <div className=' flex-wrap lg:flex-nowrap mt-5 items-center flex gap-5 '>
                <div>
                   <div className=' flex gap-2 items-center '>
                        <div>
                        <i className="text-[white] py-[4px] px-[11px] lg:py-2 lg:px-[15px] text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-[#02aabd] from-0% to-[#00e696] to-100% rounded-[50px] fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                            <h1 className=' text-[10px] md:text-[12px] xl:text-sm font-semibold text-[#D8D1BD] '>LOCATION</h1>
                            <p className=' text-[10px] mt-1 lg:mt-2 md:text-[12px] text-[#d8d1bdc2] '>Attock, PAC Kamra-Pakistan</p>
                        </div>
                   </div>
                   
                   <div className=' flex gap-2 mt-4 items-center '>
                        <div>
                        <i className="text-[white] py-[4px] px-[10px] lg:py-2 lg:px-[13px] text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-[#02aabd] from-0% to-[#00e696] to-100% rounded-[50px] fa-solid fa-phone"></i>
                        </div>
                        <div>
                            <h1 className=' text-[10px] md:text-[12px] xl:text-sm font-semibold text-[#D8D1BD] '>LET'S TALK</h1>
                            <p className=' text-[10px] mt-1 lg:mt-2 md:text-[12px] text-[#d8d1bdc2]  '>Phone : +92 323 5709342</p>
                        </div>
                   </div>
                </div>
                <div>
                    <div className=' flex gap-2 items-center '>
                            <div>
                            <i className="text-[white] py-[4px] px-[10px] lg:py-2 lg:px-[13px] text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-[#02aabd] from-0% to-[#00e696] to-100% rounded-[50px] fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <h1 className=' text-[10px] md:text-[12px] xl:text-sm font-semibold text-[#D8D1BD] '>EMAIL SUPPORT</h1>
                                <p className=' text-[10px] mt-1 lg:mt-2 md:text-[12px] text-[#d8d1bdc2] '>palmonlineservices@gmail.com</p>
                            </div>
                    </div>
                    <div className=' flex gap-2 mt-4 items-center '>
                            <div>
                            <i className="text-[white] py-[4px] px-[10px] lg:py-[7px] lg:px-[12px] text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-[#02aabd] from-0% to-[#00e696] to-100% rounded-[50px] fa-solid fa-clock"></i>
                            </div>
                            <div>
                                <h1 className='  text-[10px] md:text-[12px] xl:text-sm font-semibold text-[#D8D1BD]  '>WORKING HOURS</h1>
                                <p className=' text-[10px]  md:text-[12px] text-[#d8d1bdc2]  '>Monday - Sunday</p>
                                <p className=' text-[10px]  md:text-[12px] text-[#d8d1bdc2]  '>24 hrs</p>
                            </div>
                    </div>
                </div>
            </div>
         </div>
         <div>
            <iframe width={"400"} height={"300"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1331.7076027952642!2d72.41678912504334!3d33.840758063951924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df191c6e80065b%3A0x430ca7211271e273!2sAPF%20Colony%20Gate!5e0!3m2!1sen!2s!4v1730796544423!5m2!1sen!2s" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
         </div>
    </div>
  )
}

export default ContactContent