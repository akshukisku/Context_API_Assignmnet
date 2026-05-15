// import React from 'react'
import { ArrowRight} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FashionBanner from "../layout/home/FashionBanner";
const Homepage = () => {

  const navigate = useNavigate()

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pb-6 pt-6 bg-black">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
        {/* Left side */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <p className="max-w-sm text-sm sm:text-base leading-6 text-white/70">
              ZEND fashion is a minimalist style that emphasizes simplicity,
              naturalness, and calmness.
            </p>

            <div className="mt-6 sm:mt-8">
              <h1 className="text-[clamp(4rem,14vw,7.5rem)] font-compact leading-[0.85] font-black tracking-[-0.08em] text-white">
                ZEND
              </h1>
              <h1 className="text-[clamp(4rem,14vw,7.5rem)] font-compact leading-[0.85] font-black tracking-[-0.08em] text-white">
                FASHION
              </h1>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="flex-1 rounded-3xl sm:rounded-[28px] bg-[#1b1b28] p-4 sm:p-5 text-white shadow-lg">
              <p className="text-xs text-white/45">#AboutUs</p>
              <p className="mt-3 max-w-sm text-base sm:text-lg leading-7 text-white/90">
                “Simplicity of design, crafted for you, by our professionals”
              </p>

              <button className="mt-5 inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 sm:px-5 text-sm font-semibold text-black transition hover:bg-white/90" onClick={()=>navigate("/shop")}>
                SHOP COLLECTION
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:col-span-7">
          <div className="relative h-55 sm:h-105 lg:h-full min-h-60 overflow-hidden rounded-3xl sm:rounded-4xl bg-white/10">
            <img
              src="/fashion.png"
              alt="Fashion group"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="mt-6 overflow-hidden border-t border-white/10 pt-4">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
          <span>● Colorful Tshirt</span>
          <span>● Jacket That You Love</span>
          <span>● Short Pants For Beach</span>
          <span>● Nice And Comfy Shirt</span>
          <span>● Jacket That You Love</span>
          <span>● Zen Collection 2023</span>
          <span>● Discount Available</span>
        </div>
      </div>
      <FashionBanner/>
    </section>
  );
};

export default Homepage;
