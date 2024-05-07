"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <div>
        <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
          Subscribe for future updates
        </h3>
        <input
          type="text"
          name="Name"
          placeholder="Enter your Name"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />

        <input
          type="submit"
          value="Subscribe"
          className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
        />
        <p className="text-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
          Please don’t send any spam mail.
        </p>
      </div>

      <div>
        <span className="absolute left-2 top-7">
          <svg
            width="57"
            height="65"
            viewBox="0 0 57 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
              fill="url(#paint0_linear_1028_600)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_600"
                x1="-18.3187"
                y1="55.1044"
                x2="37.161"
                y2="15.3509"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute bottom-24 left-1.5">
          <svg
            width="39"
            height="32"
            viewBox="0 0 39 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z"
              fill="url(#paint0_linear_1028_601)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_601"
                x1="39.1948"
                y1="38.335"
                x2="10.6982"
                y2="10.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute right-2 top-[140px]">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
              fill="url(#paint0_linear_1028_602)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_602"
                x1="-0.571054"
                y1="-37.1717"
                x2="28.7937"
                y2="26.7564"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute right-0 top-0">
          <svg
            width="162"
            height="91"
            viewBox="0 0 162 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <path
                opacity="0.45"
                d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
                stroke="url(#paint0_linear_1028_603)"
              />
              <path
                opacity="0.45"
                d="M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001C256 -47.0001 252.5 -71.0001 286 -62.5001C312.8 -55.7001 349.167 -70 364 -78"
                stroke="url(#paint1_linear_1028_603)"
              />
              <path
                opacity="0.45"
                d="M4 73.9999C11 61.3332 30.7 34.7999 53.5 29.9999C82 23.9999 98 25.9999 109 14.4999C120 2.99986 129 -19.5001 152 -19.5001C175 -19.5001 190 -11.0001 203.5 -24.5001C217 -38.0001 213.5 -62.0001 247 -53.5001C273.8 -46.7001 310.167 -61 325 -69"
                stroke="url(#paint2_linear_1028_603)"
              />
              <path
                opacity="0.45"
                d="M41 40.9999C48 28.3332 67.7 1.79986 90.5 -3.00014C119 -9.00014 135 -7.00014 146 -18.5001C157 -30.0001 166 -52.5001 189 -52.5001C212 -52.5001 227 -44.0001 240.5 -57.5001C254 -71.0001 250.5 -95.0001 284 -86.5001C310.8 -79.7001 347.167 -94 362 -102"
                stroke="url(#paint3_linear_1028_603)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1028_603"
                x1="291.35"
                y1="12.1032"
                x2="179.211"
                y2="237.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1028_603"
                x1="333.35"
                y1="-12.8968"
                x2="221.211"
                y2="212.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1028_603"
                x1="294.35"
                y1="-3.89678"
                x2="182.211"
                y2="221.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
              <linearGradient
                id="paint3_linear_1028_603"
                x1="331.35"
                y1="-36.8968"
                x2="219.211"
                y2="188.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
<br></br>
<br></br>
      <div className="bg-blue relative z-10 rounded-sm p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
        <div className="mb-4 flex items-center">
          <h3 className="text-xl font-bold leading-tight text-black dark:text-white">
            For Further Information
          </h3>
        </div>

        <div className="flex items-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 30 30"
            className="mr-2 fill-current"
          >
            <path d="M20 19L4 19 4 7 12 12 20 7z" opacity=".5" />
            <path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M19,18H5V6h14V18z" />
            <path d="M3 7.376L12 13 21 7.376 21 4.376 12 10 3 4.376z" />
          </svg>
          <span>
            <a
              href="mailto:info@iaas.org.in"
              className="text-blue-500 hover:text-blue-700"
            >
              info@iaas.org.in
            </a>
          </span>
          </div>
          <div className="flex items-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 30 30"
            className="mr-2 fill-current"
          >
            <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"/>
          </svg>
          <span>
            <a
              href="https://api.whatsapp.com/send?phone=6284348728"
              className="text-blue-500 hover:text-blue-700"
            >
              Send Your Message
            </a>
          </span>
          <br></br>
          </div>


          <div className="flex items-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 55 50"
            className="mr-2 fill-current"
          >
           <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"/>
          </svg>
          <span>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700"
            >
              +91 6284348728
            </a>
          </span>
          </div>
        
      </div>
    </div>
  );
};

export default NewsLatterBox;
