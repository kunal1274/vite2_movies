import '../../index.css';

function TableComponent(){
    return(
        <div className="border overflow-auto border-gray-300 m-4 rounded-xl">
            <table className="table-auto w-full border-collapse m-4">
                <caption class="font-sans caption-top mb-5 font-heading font-bold text-center text-2xl sm:text-3xl text-gray-900">
                    Table 3.1: Vendor List
                    <p className="font-sans mb-4 mt-2 text-gray-500 font-normal text-xs">Maintain the Vendor Master List. All types of Vendors like Truckowners , Service Providers , Distributors , Suppliers 
                        and even drivers can be maintained over here.
                    </p>
                </caption>
                <thead className="">
                    
                    
                </thead>
                <tbody className="w-full">
                <tr className="border-b w-full">
                        <th className="px-4 text-left  py-2 justify-self-start"></th>
                        <th className="px-4 text-left  py-2 justify-self-start">Code</th>
                        <th className="px-4 text-left  py-2 justify-self-start">Name</th>
                        <th className="px-4 text-left  py-2 justify-self-start">Address</th>
                        <th className="px-4 text-left  py-2">Contact</th>
                        <th className="px-4 text-left  py-2">Email</th>
                        <th className="px-4 text-left  py-2">Group</th>
                        <th className="px-4 text-center  py-2">Status</th>

                    </tr>
                    <tr className="border-b w-full">
                        <td className="px-4 text-left  py-2"><img className="m-2 h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" alt="christine"/></td>
                        <td className="px-4 text-left  py-2">V001</td>
                        <td className="px-4 text-left  py-2">Christine Ronaldo</td>
                        <td className="px-4 text-left text-balance  py-2">Sector 3D,Qr No. 402,B.S.City,Bokaro,Jharkhand - 827003,India..Sector 3D,Qr No. 402,B.S.City,Bokaro,Jharkhand - 827003,India </td>
                        <td className="px-4 text-left  py-2">+91 9313478554</td>
                        <td className="px-4 text-left  py-2">christine@gmail.com</td>
                        <td className="px-4 text-left  py-2">Local</td>
                        <td className="px-4 text-left text-nowrap  py-2">
                            <div className="rounded-lg w-40 h-10 px-2 py-2 bg-green-100 text-green-500 text-center font-semibold">
                                Active
                            </div>
                            
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-4 text-left  py-2"><img className="m-2 h-10 w-10 rounded-full" src="https://plus.unsplash.com/premium_photo-1674180786953-4223a4208d9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww" alt="Michael"/></td>
                        <td className="px-4 text-left  py-2">V002</td>
                        <td className="px-4 text-left  py-2">Michael Smith</td>
                        <td className="px-4 text-left text-balance   py-2">123 Main Street, Springfield, IL, USA</td>
                        <td className="px-4 text-left  py-2">+1 217-555-0198</td>
                        <td className="px-4 text-left  py-2">michael.smith@example.com</td>
                        <td className="px-4 text-left  py-2">Interstate</td>
                        <td className="px-4 text-left text-nowrap  py-2">
                        <div className="rounded-lg w-40 h-10 px-2 py-2 bg-red-100 text-red-500 text-center font-semibold">
                                Inactive
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b ">
                        <td className="px-4 text-left  py-2"><img className="m-2 h-10 w-10 rounded-full" src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-8110250-6515859.png?f=webp" alt="Image 3"/></td>
                        <td className="px-4 text-left  py-2">V003</td>
                        <td className="px-4 text-left  py-2">Sarah Johnson</td>
                        <td className="px-4 text-left text-balance  py-2">45 Elm Street, London, UK</td>
                        <td className="px-4 text-left  py-2">+44 20 7946 0958</td>
                        <td className="px-4 text-left  py-2">sarah.johnson@example.co.uk</td>
                        <td className="px-4 text-left  py-2">Foreign</td>
                        <td className="px-4 text-left text-nowrap py-2"><div className="rounded-lg w-40 h-10 px-2 py-2 bg-orange-100 text-orange-500 text-center font-semibold">
                                On Hold
                            </div></td>
                    </tr >
                    <tr className="border-b ">
                        <td className="px-4 text-left  py-2"><img className="m-2 h-10 w-10 rounded-full" src="https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg" alt="Image 4"/></td>
                        <td className="px-4 text-left  py-2">V004</td>
                        <td className="px-4 text-left  py-2">Rajesh Kumar</td>
                        <td className="px-4 text-left text-balance  py-2">56 MG Road, Bangalore, Karnataka, India</td>
                        <td className="px-4 text-left  py-2">+91 9988776655</td>
                        <td className="px-4 text-left  py-2">rajesh.kumar@example.in</td>
                        <td className="px-4 text-left  py-2">Local</td>
                        <td className="px-4 text-left text-nowrap  py-2"> 
                            <div className="rounded-lg w-40 h-10 px-2 py-2 bg-green-100 text-green-500 text-center font-semibold">
                                Completed
                            </div></td>
                    </tr>
                    <tr className="px-4 text-left  py-2">
                        <td className="px-4 text-left  py-2"><img className="m-2 h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBpY29ufGVufDB8fDB8fHww" alt="generic_avatar"/></td>
                        <td className="px-4 text-left  py-2">V005</td>
                        <td className="px-4 text-left  py-2">Emily Davis</td>
                        <td className="px-4 text-left text-balance  py-2">789 Broadway, New York, NY, USA</td>
                        <td className="px-4 text-left  py-2">+1 212-555-0123</td>
                        <td className="px-4 text-left  py-2">emily.davis@example.com</td>
                        <td className="px-4 text-left  py-2">Interstate</td>
                        <td className="px-4 text-left text-nowrap  py-2">
                        <div className="rounded-lg w-40 h-10 px-2 py-2 bg-purple-100 text-purple-500 text-center font-semibold">
                                Processing
                            </div>
                        </td>
                    </tr>
                </tbody>
                

            </table>
        </div>
    )
}

function TableComponent1(){
    return(
        <>
        <div class="container mx-auto px-4">
            <div class="overflow-x-auto">
            <table class="w-full">
                <tbody>
            <tr>
            <th></th>
            <th>
              <div class="px-12 pb-7 text-left">
                <h3 class="mb-1 font-heading text-xl font-bold text-gray-900">Free</h3>
                <p class="mb-1 font-heading font-bold text-3xl text-transparent bg-clip-text bg-gradient-orange">$0</p>
                <p class="text-sm font-normal text-gray-600">Best for freelancers</p>
              </div>
            </th>
            <th>
              <div class="px-12 pb-7 text-left">
                <h3 class="mb-1 font-heading text-xl font-bold text-gray-900">Starter</h3>
                <p class="text-sm font-normal text-gray-600">Best for small agecny</p>
              </div>
            </th>
            <th>
              <div class="px-12 pb-7 text-left">
                <h3 class="mb-1 font-heading text-xl font-bold text-gray-900">Professional</h3>
                <p  class="mb-1 font-heading font-bold text-3xl text-transparent bg-clip-text bg-gradient-orange">$49/mo</p>
                <p  class="hidden mb-1 font-heading font-bold text-3xl text-transparent bg-clip-text bg-gradient-orange">$588/year</p>
                <p class="text-sm font-normal text-gray-600">Best for big agency</p>
              </div>
            </th>
            <th>
              <div class="px-12 pb-7 text-left">
                <h3 class="mb-1 font-heading text-xl font-bold text-gray-900">Exclusive</h3>
                <p  class="mb-1 font-heading font-bold text-3xl text-transparent bg-clip-text bg-gradient-orange">$99/mo</p>
                <p  class="hidden mb-1 font-heading font-bold text-3xl text-transparent bg-clip-text bg-gradient-orange">$1188/year</p>
                <p class="text-sm font-normal text-gray-600">Best for enterprises</p>
              </div>
            </th>
            </tr>
            <tr>
            <td class="border-b border-t border-gray-200">
              <div class="pt-6 pb-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Cloud Storage</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="pt-6 pb-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">5 GB</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="pt-6 pb-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">100 GB</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="pt-6 pb-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">500 GB</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="pt-6 pb-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">2 TB</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Maximum Interval Time</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">15 mins</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">5 mins</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">No Intervarl</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">No Intervarl</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Number of Websites</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">1</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">10</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">100</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Custom Domain</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">2</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">20</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Queries</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">50</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">150</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">500</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Email Accounts</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">5</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Email Notification</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">SMS Notification</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#A1A1AA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-4 px-12 pl-0"></div>
            </td>
            <td>
              <div class="pt-4 px-12">
                <button class="font-heading font-bold px-11 py-2.5 text-base text-gray-900 border border-gray-200 hover:border-gray-300 rounded-md">Choose</button>
              </div>
            </td>
            <td>
              <div class="pt-4 px-12">
                <button class="group relative font-heading font-bold px-11 py-2.5 text-base bg-gradient-orange text-white overflow-hidden rounded-md">
                  <div class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 transition ease-in-out duration-500"></div>
                  <p class="relative z-10 group-hover:text-white">Choose</p>
                </button>
              </div>
            </td>
            <td>
              <div class="pt-4 px-12">
                <button class="font-heading font-bold px-11 py-2.5 text-base text-gray-900 border border-gray-200 hover:border-gray-300 rounded-md">Choose</button>
              </div>
            </td>
            <td>
              <div class="pt-4 px-12">
                <button class="font-heading font-bold px-11 py-2.5 text-base text-gray-900 border border-gray-200 hover:border-gray-300 rounded-md">Choose</button>
              </div>
            </td>
          </tr>
          </tbody>
            </table>
            </div>
        </div>
       
        </>
    );
}

export default TableComponent;