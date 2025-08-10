import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleDown, faArrowRotateBackward, faHeadset, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function HomeFeatures() {
    return (
        <>
            <div className='bg-white  py-14 my-8'>
                <div className='container grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className="flex items-center gap-2 bg-white shadow-lg rounded-lg py-6 pl-4 pr-10 border-gray-200/50 border ">
                        <div className="bg-primary-200 flex items-center justify-center size-12  rounded-full "> <FontAwesomeIcon icon={faTruck} className="text-primary-700 text-lg" /></div>
                        <div>
                            <h3 className="font-semibold"> Free Delivery</h3>
                            <p className="text-gray-600 text-sm ">orders $50 or more</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white shadow-lg rounded-lg py-6 pl-4 pr-10 border-gray-200/50 border">
                        <div className="bg-primary-200 flex items-center justify-center size-12  rounded-full "> <FontAwesomeIcon icon={faArrowRotateBackward} className="text-primary-700 text-lg" /></div>
                        <div>
                            <h3 className="font-semibold"> 30 Dayes Return</h3>
                            <p className="text-gray-600 text-sm ">satisfaction guaranteed</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2  bg-white shadow-lg rounded-lg py-6 pl-4 pr-10 border-gray-200/50 border">
                        <div className="bg-primary-200 flex items-center justify-center size-12  rounded-full "> <FontAwesomeIcon icon={faShieldHalved} className="text-primary-700 text-lg" /></div>
                        <div>
                            <h3 className="font-semibold"> Secure Payments</h3>
                            <p className="text-gray-600 text-sm">100% protected checkout</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white shadow-lg rounded-lg py-6 pl-4 pr-10 border-gray-200/50 border">
                        <div className="bg-primary-200 flex items-center justify-center size-12  rounded-full "> <FontAwesomeIcon icon={faHeadset} className="text-primary-700 text-lg" /></div>
                        <div>
                            <h3 className="font-semibold"> 24/7 Support</h3>
                            <p className="text-gray-600 text-sm ">ready to help anytime</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
