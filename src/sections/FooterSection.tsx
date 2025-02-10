const FooterSection = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-1 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 font-poppins">
          © 2025{" "}
          <a href="https://enshift.online/" className="hover:underline">
            Enshift Digital
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="#ourServices" className="hover:underline me-4 md:me-6">
              Services
            </a>
          </li>
          <li>
            <a href="#ourProcess" className="hover:underline me-4 md:me-6">
              Our Process
            </a>
          </li>
          <li>
            <a href="#whyUs" className="hover:underline  me-4 md:me-6">
              Why Us
            </a>
          </li>
          <li>
            <a href="#contactUs" className="hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterSection;
