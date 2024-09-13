import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { div } from "framer-motion/client";

export function TimelineDemo() {
  const data = [
    {
      title: (
        <h2 className="gantari-bold text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#17c5ce] to-[#16d2dc] uppercase text-center tracking-wider shadow-emerald-shine hover:scale-105 transition-transform">
          Cohort 3.0
        </h2>
      ),
      content: (
        <div>
          <p className=" dark:text-neutral-200 text-m text-emerald-50 font-sans mb-8">
            Do you have what it takes to present your vision to the thousands in
            the crowd? Has it always been your dream to transform your idea into
            a multibillion-dollar venture? Or is it just that your heart beats
            for thrill and you dare to walk the ‘The Road Not Taken’? Your
            reason could be any but what remains common is your hunger for a
            majestic Entrepreneurial journey. Cohort 3.0 brings to you the one
            opportunity ‘The Entrepreneur’ inside you was waiting for.
          </p>
          <p className=" dark:text-neutral-200 text-m text-emerald-50 font-sans mb-8">
            Unleash your startup potential at the Pitching Sessions, where
            aspiring entrepreneurs present their innovative ideas to a panel of
            seasoned investors and experts. Receive invaluable advice from
            experienced Business minds. Most refined pitchers stand a chance to
            secure funding from the leading Industry professionals. Let the
            ‘Best in the Industry’ guide you in your run for what could be an
            ‘Unprecedented Successful Entrepreneurial Journey’.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/images/cohort-2.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-[#17c5ce] to-[#16d2dc] gantari-bold text-3xl font-bold text-emerald-500 uppercase text-center tracking-wider shadow-emerald-shine hover:scale-105 transition-transform">
          Networking
        </h2>
      ),

      content: (
        <div>
          <p className=" dark:text-neutral-200 text-m text-emerald-50 font-sans mb-8">
            “The bonds we forge in the present are the ones that support us
            during the adversaries in the future”. The Networking Event provides
            just the opportunity to our young Business Tycoons. We bring the
            wisest mentors, most-seasoned investors, and equally-passionate
            fellow entrepreneurs under the same roof. It is the perfect setting
            to forge new partnerships, discuss collaboration opportunities, and
            expand your network in the realm of entrepreneurship. The
            connections you build here would prove to be the key to your future
            success.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/images/networking-2.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#17c5ce] to-[#16d2dc] gantari-bold uppercase text-center tracking-wider shadow-emerald-shine hover:scale-105 transition-transform">
          Experts Talk
        </h2>
      ),
      content: (
        <div>
          <p className=" text-m text-emerald-50 font-sans mb-8">
            “The way of success is the way of continuous pursuit of Knowledge”.
            The true identity of an entrepreneur lies in his passion to
            constantly widen his horizons of knowledge.
          </p>
          <p className=" dark:text-neutral-200 text-m text-emerald-50 font-sans mb-8">
            This is the chance to gain priceless insights from leading Industry
            experts and Sharpest Minds in the Domain! Our young minds possess a
            spark in our eyes and a fire in our hearts. What’s lacking is the
            precious wisdom that one gains through toil and experience. These
            sessions would showcase renowned business experts imparting wisdom
            that would pave the way to success. It&aposs a golden opportunity to
            learn from those who themselves have navigated the entrepreneurial
            landscape, offering you the inspiration and knowledge needed to
            succeed in your own entrepreneurial journey.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/images/expert-talks-1.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#17c5ce] to-[#16d2dc] gantari-bold uppercase text-center tracking-wider shadow-emerald-shine hover:scale-105 transition-transform">
          Startup Success Stories
        </h2>
      ),
      content: (
        <div>
          <p className=" dark:text-neutral-200 text-m text-emerald-50 font-sans mb-8">
            {" "}
            “You would never witness the power of an idea unless it is put to
            Action.” Millions of ideas which have the power to transform this
            world into a better place are born every day, and millions of them
            die the same day. Success is an illusion for the ones who come up
            with the brightest ideas. It becomes a reality for those who dare to
            transform them into action. Startup Success Stories brings to the
            stage these ‘Entrepreneurial Daredevils’ whose determination and
            ambitions introduced to the world the ventures that would continue
            to inspire and impress the entrepreneurial young minds for time
            immemorial. “Practical knowledge is the asset that pays dividends
            for decades to come”. These Industry pundits would provide you with
            just the practical advice that your passion was craving for.
          </p>
          <p className=" dark:text-neutral-200 text-m text-emerald-50 font-sans mb-8">
            {" "}
            Brace yourselves for an inspirational journey as these stories will
            ignite your entrepreneurial drive.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/images/startup-stories.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="events">
      <h1 className="pt-38 text-3xl sm:text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-[#d0fcb3] to-[#b2f886] font-bold text-center mt-96">
        EVENTS
      </h1>
      <div className="flex flex-col ">
        <Timeline data={data} />
      </div>
    </div>
  );
}
