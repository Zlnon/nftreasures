import React from "react";
import { Button } from "@/components/ui/button"

const page = () => {
  return (
    <div>
      <h1 className="font-orbitron">Test 1</h1>
      <h2 className="font-orbitron">Test 2</h2>
      <p className="text-dark-blue">test3</p>
      <Button variant="default">Button</Button>
      <Button className="  bg-gradient-to-r from-warm-orange to-golden-yellow text-white font-bold py-2 px-4 rounded-xl">
  Click me
</Button>

<Button variant="default" className="bg-gradient-to-r from-[#F2994B] to-[#F2B950] text-deep-blue  font-extrabold py-2 px-4 rounded-3xl hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-[#F2994B]/50 shadow-lg transform active:scale-95 transition-transform">
  Discover More
</Button>
<Button>test cool</Button>


    </div> 
  )
}

export default page;
