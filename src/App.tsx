import heroImg from "./assets/hero-img.svg";
import { useState } from "react";

import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Timeline } from "@/components/ui/timeline";
import { Highlight } from "@/components/ui/hero-highlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

/* Timeline Images */
import part1_1 from "./assets/timeline/part1-1.jpg";
import part1_2 from "./assets/timeline/part1-2.jpg";
import part1_3 from "./assets/timeline/part1-3.jpg";
import part1_4 from "./assets/timeline/part1-4.jpg";
import part2_1 from "./assets/timeline/part2-1.jpg";
import part2_2 from "./assets/timeline/part2-2.jpg";
import part2_3 from "./assets/timeline/part2-3.jpg";
import part2_4 from "./assets/timeline/part2-4.jpg";
import part3_1 from "./assets/timeline/part3-1.jpg";
import part3_2 from "./assets/timeline/part3-2.jpg";
import part3_3 from "./assets/timeline/part3-3.jpg";
import part3_4 from "./assets/timeline/part3-4.jpg";
import part4_1 from "./assets/timeline/part4-1.jpg";
import part4_2 from "./assets/timeline/part4-2.jpg";
import part4_3 from "./assets/timeline/part4-3.jpg";
import part4_4 from "./assets/timeline/part4-4.jpg";

/* Features Images */
import feature2_1 from "./assets/features/feature2-1.svg";
import feature2_2 from "./assets/features/feature2-2.svg";
import feature2_3 from "./assets/features/feature2-3.svg";
import feature3_1 from "./assets/features/feature3-1.svg";
import feature3_2 from "./assets/features/feature3-2.svg";
import feature3_3 from "./assets/features/feature3-3.svg";
import feature1 from "./assets/features/feature1.jpg";
import feature4 from "./assets/features/feature4.jpg";

import { useToast } from "@/hooks/use-toast";
import NavBarSection from "./sections/NavBarSection";
import SubHeroSection from "./sections/SubHeroSection";
import ServicesSection from "./sections/ServicesSection";
import FooterSection from "./sections/FooterSection";
import ContactSection from "./sections/ContactSection";

const SkeletonOne = ({ img }: any) => {
  return (
    <img
      src={img}
      alt="feature1"
      className="w-full h-full min-h-[6rem] rounded-xl object-cover object-center border border-neutral-400"
    />
  );
};

const SkeletonThree = ({ img1, img2, img3 }: any) => {
  const first = {
    initial: {
      x: 20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img src={img1} alt="avatar" />
      </motion.div>
      <motion.div className="relative z-20 w-1/3 p-4 rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img src={img2} alt="avatar" />
      </motion.div>
      <motion.div
        variants={second}
        className="w-1/3 rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img src={img3} alt="avatar" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Industry Expertise",
    description: (
      <ul className="text-base">
        <li>Latest digital technologies</li>
        <li>Professional development team</li>
        <li>Marketing specialists</li>
        <li>Dedicated project managers</li>
      </ul>
    ),
    header: <SkeletonOne img={feature1} />,
    className: "md:col-span-7",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Client-First Approach",
    description: (
      <ul className="text-base">
        <li>Transparent communication</li>
        <li>Regular progress updates</li>
        <li>Responsive support</li>
        <li>Flexible solutions</li>
      </ul>
    ),
    header: (
      <SkeletonThree img1={feature2_1} img2={feature2_2} img3={feature2_3} />
    ),
    className: "md:col-span-5",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Future-Ready Solutions",
    description: (
      <ul className="text-base">
        <li>Scalable platforms</li>
        <li>Mobile-optimized designs</li>
        <li>Security-focused development</li>
        <li>Growth-driven strategies</li>
      </ul>
    ),
    header: (
      <SkeletonThree img1={feature3_1} img2={feature3_2} img3={feature3_3} />
    ),
    className: "md:col-span-5",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Innovative Approach",
    description: (
      <ul className="text-base">
        <li>Data-driven decision making</li>
        <li>Cutting-edge tools and techniques</li>
        <li>Creative problem-solving</li>
        <li>Continuous learning and adaptation</li>
      </ul>
    ),
    header: <SkeletonOne img={feature4} />,
    className: "md:col-span-7",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

const data = [
  {
    title: "Consultation",
    content: (
      <div>
        <p className="text-black/80 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          We dive deep into understanding your business vision and goals through
          comprehensive discovery sessions. Our team analyzes your current
          digital presence, market position, and growth opportunities to create
          a foundation for success.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[part1_1, part1_2, part1_3, part1_4].map((image, index) => (
            <img
              key={index}
              src={image}
              alt="startup template"
              className="rounded-sm object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Strategy Development",
    content: (
      <div>
        <p className="text-black/80 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          Based on our findings, we craft a customized digital strategy that
          aligns with your objectives. Every plan is tailored to your unique
          business needs, ensuring maximum impact and return on investment.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[part2_1, part2_2, part2_3, part2_4].map((image, index) => (
            <img
              key={index}
              src={image}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Implementation",
    content: (
      <div>
        <p className="text-black/80 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          We bring your digital strategy to life with precision and expertise.
          Our experienced team handles every aspect of implementation while
          keeping you informed and involved throughout the process.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[part3_1, part3_2, part3_3, part3_4].map((image, index) => (
            <img
              key={index}
              src={image}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Continuous Optimization",
    content: (
      <div>
        <p className="text-black/80 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          Success is an ongoing journey. We continuously monitor, analyze, and
          optimize your digital presence to ensure sustained growth and improved
          performance over time.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[part4_1, part4_2, part4_3, part4_4].map((image, index) => (
            <img
              key={index}
              src={image}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          ))}
        </div>
      </div>
    ),
  },
];

function App() {
  const [requestMail, setRequestMail] = useState("");
  const { toast } = useToast();

  const sendMail = (e: any) => {
    e.preventDefault();
    const templateParams = {
      email: requestMail,
    };
    emailjs
      .send("service_eztlwjr", "template_9dgxk7q", templateParams, {
        publicKey: "eIn3sklKfxwi1grgj",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast({
            title: "Request Sent Successfully!",
            description:
              "We’ll get back to you quickly to discuss your business needs. Thank you for reaching out!",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          toast({
            variant: "destructive",
            title: "Oops! Something Went Wrong",
            description:
              "We couldn’t send your request. Please try again or contact us directly.",
          });
        }
      );
    setRequestMail("");
  };

  return (
    <>
      <AuroraBackground>
        <motion.div>
          <NavBarSection />
          <div className="h-16 w-full"></div>
          <ScrollProgress className="top-16" />
          <section className="h-full">
            <div className="flex flex-col-reverse lg:flex-row overflow-hidden w-screen md:w-auto">
              <div className="flex flex-col gap-8 md:gap-10 -mt-4 md:mt-0 lg:-mr-24 2xl:-mr-36 basis-1/2 z-10 px-6 sm:px-12 lg:pl-8 2xl:pl-16 lg:pr-8 2xl:pr-24 lg:pt-20">
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="text-2xl md:text-4xl lg:text-5xl font-poppins text-color5 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center md:text-left"
                >
                  Your Journey to Online Success{" "}
                  <Highlight className="text-black dark:text-white">
                    Starts Here
                  </Highlight>
                </motion.h1>
                <p className="font-quicksand text-lg md:text-2xl text-center md:text-left text-black/80">
                  In today's digital age, your online presence matters. We help
                  businesses like yours thrive in the digital marketplace with
                  expert solutions that deliver results.
                </p>
                <div className="w-full md:max-w-sm z-10">
                  <form
                    className="flex items-center"
                    onSubmit={(e) => sendMail(e)}
                  >
                    <Input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={requestMail}
                      onChange={(e) => setRequestMail(e.target.value)}
                      className="font-lexend bg-color3/40 text-sm md:text-base rounded-none rounded-l-xl pl-6 py-6 focus:outline-red-500"
                      required
                    />
                    <Button
                      className="font-lexend rounded-none bg-color3 hover:bg-white border-color3 border-2 rounded-r-xl text-black py-6 px-6"
                      type="submit"
                    >
                      Let's Talk
                    </Button>
                  </form>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 350 350"
                  className="w-52 md:w-64 h-52 md:h-64 -mt-16 md:-mt-20 ml-36 md:ml-40 z-0"
                >
                  <g clipPath="url(#clip0_1_311)">
                    <path
                      fill="url(#paint0_linear_1_311)"
                      fillRule="evenodd"
                      d="M227.64 90.021c1.179 2.965 1.941 4.635 2.585 6.467 6.184 17.141 8.536 34.952 6.771 52.976-2.803 27.419-17.84 46.157-42.899 57.085-1.214.475-2.347 1.01-3.422 1.464-.17.743-.443 1.286-.436 1.786-2.174 25.031-16.602 39.88-39.465 47.459-13.8 4.66-28.013 5.305-42.315 2.171-2.286-.43-4.578-1.36-6.554-2.554-2.439-1.409-3.037-4.321-1.6-6.12 1.694-1.982 3.465-1.185 5.419-.131 1.41.782 2.938 1.402 4.482 1.662 17.5 2.992 34.414.852 50-7.952 11.775-6.634 19.225-16.672 21.387-30.322.207-.963.033-2.08.094-3.521-2.258.209-4.214.515-6.192.68-12.802 1.427-24.908-.475-36.132-6.809-7.999-4.476-14.458-10.552-17.377-19.615-3.861-12.351 2.482-24.435 14.752-28.355 10.159-3.233 19.684-1.357 28.379 4.37 11.802 7.747 19.246 18.751 23.143 32.241a440 440 0 0 0 1.68 6.179c1.891-.725 3.487-1.045 4.937-1.844 19.411-9.974 31.531-25.394 33.965-47.387 1.787-17.885-.382-35.438-6.883-52.315a43 43 0 0 0-1.172-2.465c-.227-.537-.653-.972-1.365-1.862-.502 1.366-1.128 2.395-1.314 3.497-.786 4.131-1.352 8.299-2.138 12.429-.371 2.205-1.631 3.762-4.218 3.235-2.146-.452-2.828-2.063-2.714-4.085s.448-4.006.701-6.049a5311 5311 0 0 1 2.362-22.913 1.6 1.6 0 0 1-.007-.5c.07-2.301.361-4.565 2.686-5.715 2.465-1.173 4.521.08 6.541 1.554 2.93 2.262 5.8 4.605 8.826 6.566 7.242 4.666 14.601 9.17 21.821 13.697 3.951 2.388 5.219 4.552 3.708 6.792-1.393 2.078-4.01 2.272-7.859.082-5.2-3.052-10.363-6.325-15.564-9.378-1.109-.685-2.358-1.349-4.613-2.5m-46.461 112.176c.151-15.984-15.123-35.426-29.866-38.634-4.373-.963-8.652-.868-12.831.787-8.181 3.067-11.834 11.295-8.171 19.168 1.443 3.282 3.606 6.594 6.256 8.899 13.069 11.271 28.351 12.892 44.612 9.78"
                      clipRule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_311"
                      x1="202.35"
                      x2="276.157"
                      y1="58.688"
                      y2="112.555"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#8A2387"></stop>
                      <stop offset="0.527" stopColor="#E94057"></stop>
                      <stop offset="1" stopColor="#F27121"></stop>
                    </linearGradient>
                    <clipPath id="clip0_1_311">
                      <path
                        fill="#fff"
                        d="m147.38 0 201.939 147.38-147.38 201.938L0 201.938z"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-right w-fit font-poppins ml-3 md:ml-0 -mt-32 md:-mt-36 text-xl md:text-2xl">
                  Get Free
                  <br />
                  Consultation Now
                </span>
              </div>
              <div className="flex-1 z-0 -mt-4 md:mt-0 w-full">
                <img src={heroImg} alt="Hero img" />
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="mt-6 sm:mt-0 w-10 md:w-16 h-10 md:h-16 relative md:absolute bottom-0 left-1/2 -translate-x-1/2"
            >
              <path
                id="SVGRepo_iconCarrier"
                fill="#d6d6d6"
                d="M5.707 9.71a1 1 0 0 0 0 1.415l4.892 4.887a2 2 0 0 0 2.828 0l4.89-4.89a1 1 0 1 0-1.414-1.415l-4.185 4.186a1 1 0 0 1-1.415 0L7.121 9.71a1 1 0 0 0-1.414 0"
              ></path>
            </svg>
          </section>
        </motion.div>
      </AuroraBackground>
      <section className="pt-16 md:pt-10">
        <SubHeroSection />
      </section>
      <section id="ourServices" className="pt-32 px-6 2xl:px-24">
        <ServicesSection />
      </section>
      <section id="ourProcess" className="pt-24 px-6 lg:px-12 2xl:px-24">
        <div className="w-full">
          <AnimatedGradientText className="mx-4 md:mx-18 lg:mx-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              id="Capa_1"
              fill="#000"
              version="1.1"
              viewBox="0 0 32 32"
              className="w-5 h-5"
            >
              <g id="SVGRepo_iconCarrier">
                <g id="loop_x5F_alt3" fill="#030104">
                  <path d="M28 16v2c0 1.102-.898 2-2 2H11.996L12 16l-8 6 8 6-.004-4H26c3.309 0 6-2.695 6-6v-2zM4 14c0-1.105.898-2 2-2h14v4l7.992-6L20 4v4H6c-3.309 0-6 2.688-6 6v2h4z"></path>
                </g>
              </g>
            </svg>
            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
            <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
              Our Process
            </span>
          </AnimatedGradientText>
          <Timeline data={data} />
        </div>
      </section>
      <section id="whyUs" className="pt-24 px-8 lg:px-24">
        <AnimatedGradientText>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            id="Competitive_x5F_advantage"
            fill="#000"
            version="1.1"
            viewBox="0 0 512 512"
            className="w-5 h-5"
          >
            <g id="SVGRepo_iconCarrier">
              <path d="M254.5 40.55c3.416 0 7-2.771 7-6.188V19.653c0-3.416-3.584-6.188-7-6.188s-7 2.771-7 6.188v14.709c0 3.416 3.584 6.188 7 6.188M304.469 60.081a6.17 6.17 0 0 0 4.375-1.813l10.402-10.402a6.188 6.188 0 0 0-8.75-8.75l-10.402 10.402a6.188 6.188 0 0 0 4.375 10.563M201.533 60.032c1.209 1.209 2.791 1.813 4.375 1.813s3.166-.604 4.375-1.813a6.184 6.184 0 0 0 0-8.75l-10.402-10.4a6.18 6.18 0 0 0-8.748 0 6.18 6.18 0 0 0 0 8.748zM172.318 126.876a86 86 0 0 1-1.604-16.641c0-6.27.688-12.514 2.043-18.559a6.187 6.187 0 0 0-4.684-7.391c-3.309-.736-6.643 1.346-7.393 4.684a97.4 97.4 0 0 0-2.342 21.266c0 6.465.619 12.871 1.842 19.043a6.19 6.19 0 0 0 6.063 4.988 6 6 0 0 0 1.207-.121 6.183 6.183 0 0 0 4.868-7.269M339.18 145.001a6.187 6.187 0 0 0-8.295 2.787c-14.387 28.951-43.391 46.941-75.695 46.951-32.305-.01-61.307-18-75.693-46.951-1.523-3.061-5.244-4.311-8.295-2.787-3.061 1.52-4.309 4.924-2.789 7.987 16.486 33.176 49.711 53.512 86.729 53.512h.097c37.018 0 70.246-20.336 86.73-53.512 1.519-3.063.271-6.467-2.789-7.987M350.166 129.288a97.6 97.6 0 0 0 1.875-19.053c0-7.193-.797-14.375-2.363-21.344-.75-3.336-4.064-5.436-7.395-4.678a6.186 6.186 0 0 0-4.678 7.393 85 85 0 0 1 2.061 18.629c0 5.594-.553 11.191-1.639 16.631a6.19 6.19 0 0 0 12.139 2.422M314.971 228.5H194.48c-3.711 0-7.98 4.386-7.98 8.122v255.344c0 3.713 4.27 6.534 7.98 6.534h120.49c3.711 0 6.529-2.821 6.529-6.534V236.622c.001-3.736-2.817-8.122-6.528-8.122"></path>
              <path d="m207.842 104.726 22.078 16.433c1.637 1.189 2.32 3.492 1.697 5.416l-8.434 26.053c-1.396 4.301 3.525 7.927 7.184 5.269l22.078-16.019a4.67 4.67 0 0 1 5.488.012l22.078 16.049c3.658 2.658 8.58-.917 7.182-5.217l-8.432-25.953a4.67 4.67 0 0 1 1.695-5.218l22.08-16.826c3.66-2.658 1.777-9.226-2.744-9.226h-27.291c-2.021 0-3.814-.52-4.439-2.444l-8.434-25.563c-1.396-4.303-7.48-4.106-8.879.195l-8.432 25.27c-.627 1.924-2.42 2.542-4.441 2.542h-27.293c-4.52.001-6.399 6.569-2.741 9.227M162.5 366.25a6.75 6.75 0 0 0-6.75-6.75H34.25a6.75 6.75 0 0 0-6.75 6.75v126.5a6.75 6.75 0 0 0 6.75 6.75h121.5a6.75 6.75 0 0 0 6.75-6.75zM81.66 284.896a2.96 2.96 0 0 1 1.076 3.313l-2.916 8.971c-.885 2.729 2.236 4.996 4.557 3.311l7.633-5.545a2.96 2.96 0 0 1 3.48 0l7.633 5.545c2.32 1.686 5.441-.582 4.557-3.311l-2.916-8.971a2.97 2.97 0 0 1 1.074-3.313l7.635-5.792c2.32-1.682 1.127-5.604-1.74-5.604h-9.436c-1.281 0-2.42-.578-2.814-1.797l-2.916-8.848c-.885-2.729-4.746-2.668-5.631.061l-2.916 8.755c-.396 1.221-1.535 1.829-2.818 1.829H75.77c-2.867 0-4.061 3.922-1.74 5.604z"></path>
              <path d="M93.75 337.503c30.131 0 54.643-24.512 54.643-54.641S123.881 228.22 93.75 228.22c-30.129 0-54.643 24.514-54.643 54.643s24.514 54.64 54.643 54.64m0-96.908c23.344 0 42.268 18.924 42.268 42.268s-18.924 42.266-42.268 42.266c-23.342 0-42.268-18.922-42.268-42.266s18.926-42.268 42.268-42.268M483.5 366.25a6.75 6.75 0 0 0-6.75-6.75h-121.5a6.75 6.75 0 0 0-6.75 6.75v126.5a6.75 6.75 0 0 0 6.75 6.75h121.5a6.75 6.75 0 0 0 6.75-6.75zM403.609 284.896a2.96 2.96 0 0 1 1.076 3.313l-2.914 8.971c-.887 2.729 2.236 4.996 4.557 3.311l7.631-5.545a2.96 2.96 0 0 1 3.48 0l7.633 5.545c2.32 1.686 5.443-.582 4.559-3.311l-2.916-8.971a2.96 2.96 0 0 1 1.074-3.313l7.633-5.792c2.32-1.682 1.127-5.604-1.74-5.604h-9.436c-1.283 0-2.418-.578-2.814-1.797l-2.916-8.848c-.885-2.729-4.746-2.668-5.631.061l-2.916 8.755c-.396 1.221-1.533 1.829-2.816 1.829h-9.434c-2.867 0-4.061 3.922-1.74 5.604z"></path>
              <path d="M415.699 337.503c30.131 0 54.645-24.512 54.645-54.641s-24.514-54.643-54.645-54.643c-30.129 0-54.643 24.514-54.643 54.643s24.514 54.641 54.643 54.641m0-96.908c23.344 0 42.27 18.924 42.27 42.268s-18.926 42.266-42.27 42.266c-23.342 0-42.268-18.922-42.268-42.266s18.926-42.268 42.268-42.268"></path>
            </g>
          </svg>
          <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
          <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
            Why Choose Us
          </span>
        </AnimatedGradientText>
        <h1 className="font-poppins text-color5 text-3xl md:text-4xl leading-tight mx-auto text-center mt-6">
          The Enshift Advantage
        </h1>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[24rem] mt-12">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={`${item.className} border-color2/60 bg-color2/5`}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </section>
      <section id="contactUs" className="pt-24">
        <div className="pt-24">
          <h1 className="font-poppins text-3xl md:text-4xl leading-tight mx-auto text-center text-color5">
            Take the First Step
          </h1>
          <p className="text-black/80 font-quicksand px-4 text-lg md:text-2xl max-w-4xl text-center mx-auto mt-8">
            Transform your digital presence today. Schedule a{" "}
            <span className="font-semibold text-color1">free consultation</span>{" "}
            to discuss how we can help your business thrive online.
          </p>
          <div className="w-full md:max-w-md mx-auto mt-8 px-8">
            <form className="flex items-center" onSubmit={(e) => sendMail(e)}>
              <Input
                type="email"
                placeholder="yourname@gmail.com"
                value={requestMail}
                onChange={(e) => setRequestMail(e.target.value)}
                className="font-lexend bg-color3/40 text-sm md:text-base rounded-none rounded-l-xl pl-6 py-6 focus:outline-red-500"
                required
              />
              <Button
                className="font-lexend rounded-none bg-color3 hover:bg-white border-color3 border-2 rounded-r-xl text-black py-6 px-6"
                type="submit"
              >
                Let's Talk
              </Button>
            </form>
          </div>
        </div>
        <Separator className="my-16 md:my-24 mx-auto bg-gray-500 w-64" />
        <ContactSection />
      </section>
      <FooterSection />
    </>
  );
}

export default App;
