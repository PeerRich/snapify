import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import VideoRecordModal from "~/components/VideoRecordModal";
import VideoUploadModal from "~/components/VideoUploadModal";

export default function NewVideoMenu() {
  const [recordOpen, setRecordOpen] = useState<boolean>(false);
  const [uploadOpen, setUploadOpen] = useState<boolean>(false);

  return (
    <>
      <VideoRecordModal open={recordOpen} setOpen={setRecordOpen} />
      <VideoUploadModal open={uploadOpen} setOpen={setUploadOpen} />
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>
          <span className="cursor-pointer rounded border border-[#0000001a] px-2 py-2 text-sm text-[#292d34] hover:bg-[#fafbfc]">
            New video
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => setRecordOpen(true)}
                    className={`mx-2 flex h-8 w-40 cursor-pointer flex-row content-center rounded-md p-2 ${
                      active ? "bg-gray-100" : ""
                    }`}
                  >
                    <p className="leading-2 text-sm leading-4">
                      Record a video
                    </p>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => setUploadOpen(true)}
                    className={`mx-2 flex h-8 w-40 cursor-pointer flex-row content-center rounded-md p-2 ${
                      active ? "bg-gray-100" : ""
                    }`}
                  >
                    <p className="leading-2 text-sm leading-4">
                      Upload a video
                    </p>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}