import { Icon } from "@iconify/react";
import React from "react";
import Fade from "react-reveal/Fade";

function Header() {
  const Mailto = ({ email, subject, body, ...props }: any) => {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  };

  return (
    <div className=" flex min-h-screen flex-col-reverse md:flex-row  w-11/12 md:w-9/12 md:pt-0 justify-center items-center">
      {/* <Fade left> */}
      <div className=" text-[#886451] md:w-1/2  md:text-xl md:pr-6 ">
        {/* <Fade left> */}
        <div className=" ">
          <div className=" text-2xl md:text-4xl w-full mb-4 font-bold">
            Hi, I'm{" "}
            <span className=" text-gray-600">Chance Desire IRADUKUNDA.</span>
          </div>
          A <span className=" text-gray-600">Full-Stack Web Developer</span>{" "}
          with a vast experience in{" "}
          <span className="text-gray-600">front-end</span> and{" "}
          <span className="text-gray-600">back-end</span> development. I have a{" "}
          <span className="text-gray-600">bachelor's degree</span> in{" "}
          <span className="text-gray-600">Software engineering</span>. My focus
          is on developing a most perfect product in{" "}
          <span className="text-gray-600">the worldwide IT industry</span>.
        </div>
        <div className="flex flex-wrap mt-4 gap-2">
          <div>
            <a
              href="https://github.com/chanceDira"
              target="_blank"
              className=" flex flex-row items-center border-2 border-[#886451] rounded-full px-2 py-0.5 cursor-pointer "
            >
              <Icon icon="mdi:github" color="#886451" width="24" height="24" />
              <span className=" text-sm">GitHub</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/chance-desire-iradukunda-094405205/"
              target="_blank"
              className=" flex flex-row items-center border-2 border-[#886451] rounded-full px-2 py-0.5 cursor-pointer "
            >
              <Icon
                icon="mdi:linkedin"
                color="#886451"
                width="24"
                height="24"
              />
              <span className=" text-sm">LinkedIn</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.upwork.com/freelancers/~01c50a6d5ca39249ff"
              target="_blank"
              className=" flex flex-row items-center border-2 border-[#886451] rounded-full px-2 py-0.5 cursor-pointer "
            >
              <Icon
                icon="simple-icons:upwork"
                color="#886451"
                width="24"
                height="24"
              />
              <span className="ml-1 text-sm">Upwork</span>
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/chancedira"
              target="_blank"
              className=" flex flex-row items-center border-2 border-[#886451] rounded-full px-2 py-0.5 cursor-pointer "
            >
              <Icon icon="mdi:twitter" color="#886451" width="24" height="24" />
              <span className="ml-1 text-sm">Twitter(X)</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/chancedira/"
              target="_blank"
              className=" flex flex-row items-center border-2 border-[#886451] rounded-full px-2 py-0.5 cursor-pointer "
            >
              <Icon
                icon="uil:instagram-alt"
                color="#886451"
                width="24"
                height="24"
              />
              <span className="ml-1 text-sm">Instagram</span>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div className=" bg-[#886451] hover:bg-[#B18974] cursor-pointer w-28 flex justify-center items-center px-2 py-2 rounded-md text-white">
            <Mailto
              email="foo@bar.baz"
              subject="Hire Chance"
              body="Hello Chance"
            >
              Let's talk
            </Mailto>
          </div>
        </div>
      </div>
      {/* </Fade> */}

      {/* <Fade right> */}
      <div className="w-30">
        {/* <Fade right> */}
        <img
          className=" w-full h-82 rounded-full "
          // src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674816415/chanceProfile-removebg-preview_velgyl.png'
          src="mine.png"
          alt="image"
        />
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default Header;
