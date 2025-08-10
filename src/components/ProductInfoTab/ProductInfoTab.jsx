
import { faLeaf, faSeedling } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProductInfoTab({ProductDetails}) {
  return (
    <>
    <div>
        <h3 className="text-lg font-medium mb-4">Product Description</h3>

<p className="text-gray-700 mb-4">

{ProductDetails.description}
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

<div>

<h4 className="font-medium mb-2">Benefits</h4>

<ul className="list-disc pl-5 text-gray-700 space-y-1">

<li>Rich in vitamins C and K</li>

<li>Good source of fiber and antioxidants</li>

<li>Supports heart health</li>

<li>Helps regulate blood sugar</li>

<li>Promotes healthy skin</li>

</ul>

</div>
<div className="space-y-2">
    <h4 className="font-medium mb-2">Benefits</h4>

<div className="flex">

<span className="w-32 font-medium">Origin:</span>

<span>Calitornia</span>

</div>

<div className="flex">

<span className="w-32 font-medium">Cultivation:</span>

<span>Organic</span>

</div>

<div className="flex">

<span className="w-32 font-medium">Storage:</span>

<span>Refrigerate upon arrival</span>

</div>

<div className="flex">

<span className="w-32 font-medium">Shelf Life:</span>

<span>5-7 days when refrigerated</span>

</div>



</div>
    </div>

<h4 className="font-medium mb-3">How to Store</h4>

<p className="text-gray-700 mb-4">

For optimal freshness, refrigerate strawberries unwashed in their original container or in a paper towel-lined container. Wash just before eating. To extend shelf life, remove any damaged berries as soon as possible.

</p>

<h4 className="font-medium mb-3">Certifications</h4>

<div className="flex space-x-4 mb-4">

<div className="flex items-center p-2 border border-gray-200 rounded">

<FontAwesomeIcon icon={faLeaf} className="text-primary-600 mr-2" />

<span className="text-sm">USDA Organic</span>
</div>

<div className="flex items-center p-2 border border-gray-200 rounded">
    <FontAwesomeIcon icon ={faSeedling} className="text-primary-600 mr-2" />

<span className="text-sm">Non-GMO</span>





</div>
</div>


 </div>
    </>
  )
}
