import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useOnlineStatus } from "../../hooks/useOnlineStatus"
import {faArrowsRotate, faExclamationTriangle, faGlobe,  faSignal } from "@fortawesome/free-solid-svg-icons"


export default function OfflineScreen({children}) {

 const isOnline=useOnlineStatus()

 if (isOnline){
   return children
 }
  return (
    <>
      <section>
        <div className="container max-w-2xl  m-auto text-center p-10 ">
            <div> 
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-600 text-3xl font-bold"/> </div>
               <div className=" bg-white border border-gray-200 shadow-lg rounded-lg p-6 my-3 space-y-2">
                <div>
                <h2 className="font-semibold text-xl mb-2">Connection lost</h2>
               <p>oops! It looks like you've lost your internet connection. don't worry, We'll help you get back online</p>

               </div>
               <div className="bg-gray-100 rounded-md p-4 my-8  ">
                <ul className="*:flex *:items-center *:justify-between">
                    <li className="mb-2">
                        <div className="flex items-center gap-2"><FontAwesomeIcon icon={faSignal}/>
                        <span>Network'status</span></div>
                           <span className="text-red-500">  Offline</span>

                    </li>
                    <li>
                     <div className="flex items-center gap-2"><FontAwesomeIcon icon={faGlobe}/>
                        <span>Last Checked</span></div>
                           <span> 9:55:26 PM</span>
                    </li>
                </ul>
               </div>

               <div>
                <button className="btn w-full flex items-center gap-2 bg-primary-600 text-white justify-center">
                    <FontAwesomeIcon icon={faArrowsRotate}/>
                        <span>Try Again</span>
                </button>
               </div>
               <div className="mt-10 space-y-2">
                <h3 className="font-medium">Qick Fixes:</h3>
                <ul >
                       <li> Check your WiFi connection</li>
                <li>Try moving closer to your router</li>
                <li>Restart your router or mobile data</li>
                <li>Contact your internet provider if the issue persists</li>
                </ul>
              


               </div>
               </div>
               <p className="text-sm text-gray-500">Auto-checking connection every 30 seconds</p>
        </div>
      </section>
    </>
  )
}
