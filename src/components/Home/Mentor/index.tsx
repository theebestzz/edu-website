import Image from "next/image";
import Link from "next/link";

import { MentorData } from "@/app/api/data";

const Mentor = () => {
  return (
    <section className="bg-primary/10 py-20">
      <div
        id="mentors-section"
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4"
      >
        <div className="sm:flex justify-between items-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
            Öğreticilerimiz ile Tanışın!
          </h2>
          <div>
            <button className="bg-transparent hover:bg-primary text-primary font-medium hover:text-white py-3 px-4 border border-primary hover:border-transparent rounded duration-300">
              Tüm Öğreticilerimiz
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {MentorData.map((item, index) => (
            <div key={index} className="group relative">
              <div className="min-h-80 w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={700}
                  height={700}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                />
              </div>
              <div className="mt-4 flex justify-center ">
                <div>
                  <div className="border border-white rounded-lg -mt-8 bg-white p-2 shadow-mentorShadow flex items-center justify-center">
                    <Link
                      href="#"
                      className="text-sm text-gray-700 text-center"
                    >
                      {item.name}
                    </Link>
                  </div>
                  <p className="mt-3 text-2xl font-semibold text-black/80 text-center">
                    {item.color}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
