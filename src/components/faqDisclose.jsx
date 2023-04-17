import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React from "react";

export const DisclosureComponent = ({ heading, children }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 mt-6 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <div className="text-xl sm:text-2xl font-Mori text-glow satoshi">
              {heading}
            </div>
            <div>
              <ChevronUpIcon
                className={`text-glow ${
                  !open ? "rotate-180 transform" : ""
                } h-8 w-8 text-white`}
              />
            </div>
          </Disclosure.Button>
          <Transition
            enter="transition duration-200 ease-in-out"
            enterFrom="transform scale-99 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 ease-in-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-99 opacity-0"
          >
            <Disclosure.Panel className="px-4 pt-6 pb-2 font-Mori text-xl sm:text-[1.35rem] text-slate-500">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};