import Button from "@/components/global/button";
import TextInput from "@/components/global/textInput";
import CartItem from "@/components/pages/cart/cartItem";
import Breadcrumb from "@/components/view_product/breadcrumb";
import { products } from "@/constants/dummy";

function Cart() {
  return (
    <div className="container mb-20  min-h-screen">
      <div className="py-10">
        <Breadcrumb />
      </div>
      <div className="py-5">
        {/* Heading */}
        <ul className="grid grid-cols-5 p-4 items-center">
          <li className="col-span-2 text-sm">Product</li>
          <li className="col-span-1 text-sm">Price</li>
          <li className="col-span-1 text-sm">Quality</li>
          <li className="col-span-1 text-sm">Subtotal</li>
        </ul>
        {/* Product */}
        {products.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}

        {/* Action Go back or Sync */}
        <div className="grid gap-5 md:grid-cols-2 py-10 grid-cols-1">
          {/* Coupon Code */}
          <div className="flex flex-col gap-5">
            {/* Action Go back or Sync */}
            <div>
              <Button
                background="bg-white"
                textColor="text-black font-medium"
                title="Return to Shop"
              />
            </div>
            <div className="flex gap-2">
              <div>
                <TextInput name="coupon" placeholder="Coupon Code" />
              </div>
              <div>
                <Button title="Apply Coupon" />
              </div>
            </div>
          </div>
          {/* Total Calculation */}
          <div>
            <div className="border border-black p-5 rounded">
              <h2 className="text- font-bold">Cart Total</h2>
              <div className="divide-y divide-gray-400 flex flex-col">
                <div className="flex py-3 justify-between">
                  <span className="text-sm">Subtotal:</span>
                  <span className="text-sm">$110</span>
                </div>
                <div className="flex  py-3 justify-between">
                  <span className="text-sm">Shipping:</span>
                  <span className="text-sm">free</span>
                </div>
                <div className="flex  py-3 justify-between">
                  <span className="text-sm">Total</span>
                  <span className="text-sm">$110</span>
                </div>
              </div>
              <div className="flex justify-center">
                <Button title="Process to checkout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
