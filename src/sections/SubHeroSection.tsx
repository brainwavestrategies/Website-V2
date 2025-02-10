import { FlipWords } from "@/components/ui/flip-words";
import hero2Img from "@/assets/hero2-img.svg";

const SubHeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 md:px-24 gap-8 md:gap-12 items-center">
      <div className="basis-5/12">
        <img
          src={hero2Img}
          alt="Hero img"
          className="w-full lg:h-[460px] mx-auto"
        />
      </div>
      <div className="overflow-hidden md:basis-7/12 relative flex flex-col items-end md:items-start gap-8 md:gap-12">
        <div className="font-poppins text-3xl md:text-4xl leading-tight text-right md:text-left text-color5 dark:text-neutral-400">
          Share Your
          <FlipWords
            words={["Story", "Vision", "Legacy", "Impact"]}
            className="pr-0 pl-3"
          />
          <br />
          With The World
        </div>
        <p className="font-quicksand text-lg md:text-2xl text-right md:text-left px-4 lg:px-0 text-black/80">
          Every business deserves to stand out online. At{" "}
          <span className="font-bold font-poppins">Enshift Digital</span>, we
          transform your digital vision into reality through customized
          solutions that drive growth, engage customers, and build lasting
          success.
        </p>
        <button className="mx-4 lg:mx-0 flex shadow-lg hover:shadow-none items-center w-fit gap-4 font-lexend text-xl px-6 md:px-8 py-2 md:py-3 rounded-md bg-color3 text-white font-semibold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-color3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <g id="SVGRepo_iconCarrier" stroke="#292D32" strokeWidth="1.5">
              <path
                strokeMiterlimit="10"
                d="M21.97 18.33c0 .36-.08.73-.25 1.09s-.39.7-.68 1.02c-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a29 29 0 0 1-3.28-2.8 28.4 28.4 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41Q2 8.1 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13s.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.5 9c0-.6-.47-1.52-1.17-2.27-.64-.69-1.49-1.23-2.33-1.23M22 9c0-3.87-3.13-7-7-7"
                opacity="0.4"
              ></path>
            </g>
          </svg>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default SubHeroSection;
