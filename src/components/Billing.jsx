import Image from "next/image";
import Apple from "../../public/assets/apple.svg";
import Google from "../../public/assets/google.svg";
import building from "/public/assets/building-facility.png";

import styles, { layout } from "../pages/style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className="w-[100%] h-[100%] relative z-[5]">
        <Image src={building} />
      </div>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control with your <br className="sm:block hidden" /> Web & Mobile
        Phone
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        You can use our service with your Web and also mobile phone. Espacially,
        mobile environment will gives you a great efficiency to do your work.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <div className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer">
          <Apple />
        </div>
        <div className="w-[144.17px] h-[43.08px] object-contain cursor-pointer">
          <Google />
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
