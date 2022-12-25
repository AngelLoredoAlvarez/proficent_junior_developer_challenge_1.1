import { Footer } from "flowbite-react";
import * as React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { HiHome } from "react-icons/hi";

const FooterComponent: React.FC = () => {
  return (
    <Footer className="bg-orange-500" container={true}>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
          <div className="grid-rows-3">
            <div className="flex justify-center">
              <HiHome color="white" size={100} />
            </div>
            <div className="flex">
              <p className="text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page whenters.
              </p>
            </div>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <BsFacebook color="white" size={20} />
              <BsInstagram color="white" size={20} />
              <BsTwitter color="white" size={20} />
            </div>
          </div>
          <div>
            <Footer.Title className="text-white" title="ABOUT US" />
            <Footer.LinkGroup col={true}>
              <Footer.Link className="text-white" href="#">
                About
              </Footer.Link>
              <Footer.Link className="text-white" href="#">
                Privacy & Policy
              </Footer.Link>
              <Footer.Link className="text-white" href="#">
                Terms & Conditions
              </Footer.Link>
              <Footer.Link className="text-white" href="#">
                Faq
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-white" title="NAVIGATE" />
            <Footer.LinkGroup col={true}>
              <Footer.Link className="text-white" href="#">
                How We Work
              </Footer.Link>
              <Footer.Link className="text-white" href="#">
                Services
              </Footer.Link>
              <Footer.Link className="text-white" href="#">
                Faq
              </Footer.Link>
              <Footer.Link className="text-white" href="#">
                Contact
              </Footer.Link>
              <Footer.Link className="text-white" href="#">
                Free Quote
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-white" title="CONTACT US" />
            <Footer.LinkGroup col={true}>
              <Footer.Link className="text-white" href="#">
                Ricardo Margain 444
              </Footer.Link>
              <Footer.Link className="text-white" href="#">
                Call: +52 81 1234 5678
              </Footer.Link>
              <Footer.Link className="text-white" href="#">
                Email: info@challenge.com
              </Footer.Link>
              <div className="grid grid-cols-2 md:grid-cols-4">
                <BsWhatsapp color="white" size={40} />
                <div className="text-2xl text-white">WhatsApp</div>
              </div>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export { FooterComponent };
