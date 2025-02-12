import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import socialMedia from "@/assets/media-management.jpg";
import digitalMarketing from "@/assets/digital-marketing.jpg";
import webDevelopment from "@/assets/web-development.jpg";
import check from "@/assets/check.png";

const services = [
  {
    title: (
      <>
        Social Media
        <br />
        Management
      </>
    ),
    img: socialMedia,
    description:
      "Connect with your audience where they are. Our social media expertise delivers:",
    benefits: [
      "Engaging content that builds brand loyalty",
      "Active community management",
      "Strategic campaign planning",
      "Performance tracking",
      "Consistent brand messaging",
    ],
  },
  {
    title: (
      <>
        Website
        <br />
        Development
      </>
    ),
    img: webDevelopment,
    description:
      "Your website is your digital storefront. We create professional, high-performance websites that:",
    benefits: [
      "Capture your brand's unique identity",
      "Convert visitors into customers",
      "Scale with your growing business",
      "Provide seamless user experiences",
      "Drive measurable results",
    ],
  },
  {
    title: (
      <>
        Digital
        <br />
        Marketing
      </>
    ),
    img: digitalMarketing,
    description:
      "Stand out in the digital landscape. Our marketing strategies include:",
    benefits: [
      "Search engine optimization (SEO)",
      "Targeted email campaigns",
      "Strategic advertising",
      "Content marketing",
      "Analytics-driven decisions",
    ],
  },
];

const ServicesSection = () => {
  return (
    <>
      <AnimatedGradientText>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <g id="SVGRepo_iconCarrier">
            <g
              id="页面-1"
              fill="none"
              fillRule="evenodd"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            >
              <g
                id="导航图标"
                stroke="#212121"
                strokeWidth="1.5"
                transform="translate(-329 -334)"
              >
                <g id="服务" transform="translate(329 334)">
                  <g id="编组" transform="translate(2 3)">
                    <path
                      id="路径"
                      d="m8 12.5 3 1s7.5-1.5 8.5-1.5 1 1 0 2-4.5 4-7.5 4-5-1.5-7-1.5H0"
                    ></path>
                    <path
                      id="路径"
                      d="M0 10.5C1 9.5 3 8 5 8s6.75 2 7.5 3-1.5 2.5-1.5 2.5M6 5V1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8"
                    ></path>
                    <path id="矩形" d="M10.5 0h5v4.5h-5z"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
        <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
          Our Services
        </span>
      </AnimatedGradientText>
      <h1 className="font-poppins text-3xl md:text-4xl text-color5 leading-normal mx-auto text-center mt-6">
        Comprehensive Digital <br className="lg:block hidden" />
        Solutions
      </h1>
      <div className="flex flex-col lg:flex-row justify-around items-start mt-10 lg:mt-0">
        {services.map((service, index) => (
          <CardContainer
            key={index}
            className="inter-var max-lg:!transform-none"
          >
            <CardBody className="shadow-xl bg-color1/5 relative group/card cursor-grab dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto lg:w-[24rem] 2xl:w-[26rem] h-auto rounded-xl p-6 lg:p-8 border">
              <CardItem
                translateZ="40"
                className="max-lg:!transform-none text-2xl font-normal text-neutral-600 dark:text-white font-poppins"
              >
                {service.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="50"
                className="max-lg:!transform-none font-quicksand text-neutral-500 text-base sm:text-lg max-w-sm mt-2 dark:text-neutral-300"
              >
                {service.description}
              </CardItem>
              <CardItem translateZ="60" className="w-full mt-4">
                <img
                  src={service.img}
                  className="max-lg:!transform-none h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex flex-col items-start mt-8 gap-2 font-quicksand">
                {service.benefits.map((benefit, index) => (
                  <CardItem
                    key={index}
                    translateZ={50}
                    as="div"
                    className="max-lg:!transform-none flex gap-2 items-center"
                  >
                    <img src={check} alt="Right Tick" className="w-6 h-6" />
                    <div
                      style={{
                        backgroundColor: "rgba(var(--color2-rgb), 0.4)",
                      }}
                      className="px-4 py-2 rounded-lg text-xs sm:text-sm font-normal dark:text-white hover:scale-105 duration-200"
                    >
                      {benefit}
                    </div>
                  </CardItem>
                ))}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
};

export default ServicesSection;
