import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendMail2 = (e: any) => {
    e.preventDefault();
    const templateParams = {
      name: contactFormData.name,
      email: contactFormData.email,
      message: contactFormData.message,
    };
    emailjs
      .send("service_eztlwjr", "template_cspr1yo", templateParams, {
        publicKey: "eIn3sklKfxwi1grgj",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast({
            title: "Message Sent Successfully!",
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
              "We couldn’t send your message. Please try again or contact us directly.",
          });
        }
      );
    setContactFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative border-t-2 border-color2 overflow-hidden py-12 flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row items-center bg-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="basis-1/2 px-4 lg:px-4 lg:pl-24">
        <div className=" bg-color2/10 border-color2 border-2 backdrop-blur-sm px-8 md:px-12 py-12 rounded-lg">
          <AnimatedGradientText className="mx-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 64 64"
              className="w-5 h-5"
            >
              <g id="SVGRepo_iconCarrier">
                <path
                  id="_x32_0_headset"
                  d="M63 40.22c0-5.947-3.907-10.995-9.288-12.722v-6.015c0-10.57-10.164-19.842-21.752-19.842s-21.752 9.272-21.752 19.842v6.044C4.869 29.28 1 34.303 1 40.22c0 7.368 5.994 13.363 13.362 13.363h3.674a3.51 3.51 0 0 0 3.506-3.506v-19.71a3.504 3.504 0 0 0-3.336-3.492v-5.138c0-6.015 5.882-12.743 13.754-12.743 7.87 0 13.75 6.728 13.75 12.743v5.146c-1.813.133-3.252 1.636-3.252 3.484v19.71a3.51 3.51 0 0 0 3.506 3.506h2.673l-.005 4.56h-5.655a3.325 3.325 0 0 0-3.208-2.492H37.67c-1.835 0-3.328 1.493-3.328 3.328s1.493 3.328 3.328 3.328h2.098a3.325 3.325 0 0 0 3.106-2.165h6.756a1 1 0 0 0 1-.999l.006-5.61C57.538 53.017 63 47.25 63 40.22M39.769 60.307H37.67c-.733 0-1.328-.596-1.328-1.328s.595-1.328 1.328-1.328h2.098c.732 0 1.328.596 1.328 1.328s-.596 1.328-1.328 1.328M13.362 51.54C7.564 51.03 3 46.149 3 40.22S7.564 29.41 13.362 28.9zm6.18-21.173v19.71c0 .83-.676 1.506-1.506 1.506h-2.674V28.857h2.674c.83 0 1.506.678 1.506 1.51M31.96 6.994c-8.245 0-15.754 7.027-15.754 14.743v5.12h-1.844c-.735 0-1.45.076-2.154.19v-5.564c0-9.505 9.23-17.842 19.752-17.842s19.752 8.337 19.752 17.842v5.552a13.3 13.3 0 0 0-2.074-.178H47.71v-5.12c0-7.715-7.507-14.743-15.75-14.743m12.498 43.083v-19.71c0-.832.676-1.51 1.506-1.51h2.674v22.726h-2.674c-.83 0-1.506-.675-1.506-1.506m6.18 1.463V28.9C56.437 29.41 61 34.293 61 40.22s-4.563 10.811-10.362 11.32"
                ></path>
              </g>
            </svg>
            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
            <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
              Contact Us
            </span>
            <ChevronRight className="ml-2 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
          <h2 className="font-poppins text-3xl md:text-4xl text-color5 mt-4">
            Connect With Us
          </h2>
          <p className="font-quicksand mt-2 text-gray-600 text-base md:text-lg">
            Direct communication for immediate insights. Connect with our team
            to discuss your digital transformation. Whether you prefer email,
            phone, or social media, we're ready to listen and guide your
            business towards digital success.
          </p>
          <div className="flex items-center gap-4 md:gap-6 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <g id="SVGRepo_iconCarrier">
                <g id="style=linear">
                  <g
                    id="email"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  >
                    <path
                      id="vector"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5"
                    ></path>
                    <path
                      id="vector_2"
                      d="m18.77 7.769-5.547 4.286a2 2 0 0 1-2.446 0L5.23 7.77"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <div className="flex flex-col gap-1 lg:gap-2">
              <p className="font-poppins text-gray-800 text-lg md:text-xl">
                Email:
              </p>
              <a
                href="mailto:info@enshift.online"
                className="font-lexend text-xl md:text-2xl"
              >
                info@enshift.online
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path
                id="SVGRepo_iconCarrier"
                fill="#000"
                fillRule="evenodd"
                d="M3.5 12a8.5 8.5 0 1 1 8.5 8.5 8.46 8.46 0 0 1-4.542-1.314 1 1 0 0 0-.821-.113l-2.88.859 1.085-2.537a1 1 0 0 0-.07-.92A8.46 8.46 0 0 1 3.5 12M12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.838.473 3.568 1.305 5.073L1.08 21.107a1 1 0 0 0 1.206 1.351l4.5-1.342A10.46 10.46 0 0 0 12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5m2.293 12.682-1.315.926A9.3 9.3 0 0 1 11 13.585a10.2 10.2 0 0 1-1.624-2.114l.835-.709a1 1 0 0 0 .236-1.232l-1.064-2a1 1 0 0 0-1.54-.283l-.316.275c-.759.662-1.208 1.75-.836 2.852A12.05 12.05 0 0 0 9.586 15c1.813 1.813 3.655 2.528 4.733 2.805.868.223 1.689-.076 2.268-.548l.591-.482a1 1 0 0 0-.12-1.634l-1.678-1a1 1 0 0 0-1.088.041"
                clipRule="evenodd"
              ></path>
            </svg>
            <div className="flex flex-col gap-1 lg:gap-2">
              <p className="font-poppins text-gray-800 text-lg md:text-xl">
                Whatsapp (Chat/Call):
              </p>
              <a
                href="https://wa.me/94767230828"
                target="_blank"
                className="font-lexend text-xl md:text-2xl"
              >
                +94 76 723 0828
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <p className="font-poppins text-gray-800 text-lg md:text-xl">
              Follow Our Journey:
            </p>
            <div className="flex gap-6">
              <a
                href="https://facebook.com/profile.php?id=61572244392386"
                target="_blank"
                className="p-2 rounded-md bg-gray-100 border-2 border-color4 hover:bg-transparent duration-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-5 0 20 20"
                  className="w-6 h-6"
                >
                  <g id="SVGRepo_iconCarrier">
                    <g
                      id="Page-1"
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        fill="#000"
                        transform="translate(-385 -7399)"
                      >
                        <g id="icons" transform="translate(56 160)">
                          <path
                            id="facebook-[#176]"
                            d="M335.821 7259v-9h2.733l.446-4h-3.179v-1.948c0-1.03.027-2.052 1.466-2.052h1.458v-2.86c0-.043-1.253-.14-2.52-.14-2.645 0-4.302 1.657-4.302 4.7v2.3H329v4h2.923v9z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/enshift-digital"
                target="_blank"
                className="p-2 rounded-md bg-gray-100 border-2 border-color4 hover:bg-transparent duration-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <g id="SVGRepo_iconCarrier">
                    <g
                      id="Page-1"
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                      className="w-6"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        fill="#000"
                        transform="translate(-180 -7479)"
                      >
                        <g id="icons" transform="translate(56 160)">
                          <path
                            id="linkedin-[#161]"
                            d="M144 7339h-4v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991V7339h-4v-13h4v1.462s1.255-2.202 4.083-2.202 4.917 1.726 4.917 5.298zm-17.558-15.079a2.45 2.45 0 0 1-2.442-2.461 2.45 2.45 0 0 1 2.442-2.46 2.45 2.45 0 0 1 2.441 2.46 2.45 2.45 0 0 1-2.441 2.461M124 7339h5v-13h-5z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/enshift.digital"
                target="_blank"
                className="p-1 rounded-md bg-gray-100 border-2 border-color4 hover:bg-transparent duration-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <g id="SVGRepo_iconCarrier" fill="#0F0F0F">
                    <path
                      fillRule="evenodd"
                      d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                      clipRule="evenodd"
                    ></path>
                    <path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path>
                    <path
                      fillRule="evenodd"
                      d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622M13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 0 0-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 0 0 1.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 0 0 1.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 0 0-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3"
                      clipRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/2">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[668px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
          <div className="rounded-[2rem] flex flex-col justify-center px-6 md:px-8 overflow-hidden h-[640px] md:h-[654px] bg-color4 dark:bg-gray-800">
            <h2 className="font-poppins text-3xl md:text-4xl text-color5">
              Contact Us
            </h2>
            <p className="font-quicksand mt-2 text-gray-600 text-base md:text-lg">
              Tell us your story. We're listening and ready to help.
            </p>
            <form onSubmit={(e) => sendMail2(e)}>
              <div className="w-full flex flex-col gap-3 mt-10">
                <Label htmlFor="name" className="font-poppins w-full">
                  Your Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={contactFormData.name}
                  onChange={(e) =>
                    setContactFormData({
                      ...contactFormData,
                      name: e.target.value,
                    })
                  }
                  placeholder="John Mosh"
                  className="font-quicksand focus:bg-color2/10"
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-3 mt-6">
                <Label htmlFor="email" className="font-poppins w-full">
                  Your Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={contactFormData.email}
                  onChange={(e) =>
                    setContactFormData({
                      ...contactFormData,
                      email: e.target.value,
                    })
                  }
                  placeholder="johnmosh@gmail.com"
                  className="font-quicksand focus:bg-color2/10"
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-3 mt-6">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  rows={6}
                  value={contactFormData.message}
                  onChange={(e) =>
                    setContactFormData({
                      ...contactFormData,
                      message: e.target.value,
                    })
                  }
                  className="resize-none font-quicksand focus:bg-color2/10"
                  required
                />
              </div>
              <Button
                type="submit"
                className="mt-6 w-full font-lexend text-lg font-light group"
              >
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="ml-3 group-hover:translate-x-2 duration-100"
                >
                  <path
                    id="SVGRepo_iconCarrier"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.5 12H5.42m-.173.797L4.242 15.8c-.55 1.643-.826 2.465-.628 2.971.171.44.54.773.994.9.523.146 1.314-.21 2.894-.92l10.135-4.561c1.543-.695 2.314-1.042 2.553-1.524a1.5 1.5 0 0 0 0-1.33c-.239-.482-1.01-.83-2.553-1.524L7.485 5.243c-1.576-.71-2.364-1.064-2.887-.918a1.5 1.5 0 0 0-.994.897c-.198.505.074 1.325.618 2.966l1.026 3.091c.094.282.14.423.159.567a1.5 1.5 0 0 1 0 .385c-.02.144-.066.285-.16.566"
                  ></path>
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
