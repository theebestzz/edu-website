import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Hızlı Erişim",
    link: ["Hakkımızda", "Blog", "İletişime Geç", "Fiyat", "Referanslar"],
  },
  {
    id: 2,
    section: "Destek",
    link: ["Destek Merkezi", "Hizmet Şartları", "Gizlilik Politikası"],
  },
];

const footer = () => {
  return (
    <div className="bg-primary" id="first-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-20 px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-8 xl:gap-x-8">
          <div className="col-span-4">
            <Link href="/">
              <Image
                src="/images/logo/logo2.svg"
                alt="Logo"
                width={48}
                height={64}
              />
            </Link>
            <h3 className="text-white text-lg font-medium leading-9 mb-4 lg:mb-20 mt-5">
              {" "}
              Becerilerinizi geliştirin ve <br /> tutkuyla hayalinizdeki işe
              kavuşun.
            </h3>
            <div className="flex gap-4">
              <Link
                href="/"
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-instagram"
                  className="text-2xl inline-block"
                />
              </Link>
              <Link
                href="/"
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-dribbble"
                  className="text-2xl inline-block"
                />
              </Link>
              <Link
                href="/"
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-twitter-filled"
                  className="text-2xl inline-block"
                />
              </Link>
              <Link
                href="/"
                className="bg-white/20 rounded-full p-2 text-white hover:bg-cream hover:text-primary duration-300"
              >
                <Icon
                  icon="tabler:brand-youtube-filled"
                  className="text-2xl inline-block"
                />
              </Link>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-semibold mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-white/60 hover:text-white text-sm font-normal mb-6"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* All Rights Reserved */}
      <div className="py-8 px-4">
        <h3 className="text-center text-white/60">
          {new Date().getFullYear()} - Tüm Hakları Saklıdır{" "}
          <Link href="#" target="_blank" className="hover:text-white">
            {" "}
            CodeHub Education
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default footer;
