
import Rating from "../Rating/Rating";
export default function ReviewTab() {
  return (
   <>
   <div>

    <div className="flex items-center justify-between mb-6">

<h3 className="text-lg font-medium">Customer Reviews</h3>

<button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">

Write a Review

</button>

</div>
<div className="mb-6 space-y-4">
    
    <div>
        <div className="flex items-center mb-2 gap-3">

<Rating rating={4.5}/>


<span className="ml-2 text-lg font-medium">4.5 out of 5</span>


</div>

<p className="text-gray-600">Based on 149 reviews</p>
    </div>


    <div>
        <div className="flex items-center mb-2 gap-3">

<Rating rating={5}/>


<span className="ml-2 text-lg font-medium">John D.</span>


</div>

<p className="text-gray-600">"Absolutely delicious! The strawberries were fresh, sweet, and perfectly ripe. Will definitely order again."</p>
    </div>

  <div>
        <div className="flex items-center mb-2 gap-3">

<Rating rating={4}/>


<span className="ml-2 text-lg font-medium">Sarah M.</span>


</div>

<p className="text-gray-600">"Greate quality organic strawberries. They lasted longer than expected in the fridge"</p>
    </div>

</div>








   </div>
   </>
  )
}
