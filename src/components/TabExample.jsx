import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import TimePickerRadioGroup from "comp/TimePickerRadioGroup";
import data from "assets/data.json";

export default function TabExample() {
  const [selectedTime, setSelectedTime] = useState("keine Zeit selected");
  useEffect(() => {}, []);
  return (
    <>
      <h1>{selectedTime}</h1>
      <Tab.Group as="article" className="w-full max-w-xl sm:px-0">
        <Tab.List className="mb-4 flex space-x-1 rounded-lg bg-red-900/20 p-1">
          <Tab className="w-full rounded-lg py-4 text-sm font-medium leading-5 text-red-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 hover:shadow focus:outline-none focus:ring-2 ui-selected:bg-white ui-selected:shadow ui-not-selected:text-red-100 ui-not-selected:hover:bg-white/[0.12] ui-not-selected:hover:text-white">
            Samstag, 21.03
          </Tab>
          <Tab className="w-full rounded-lg py-4 text-sm font-medium leading-5 text-red-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 hover:shadow focus:outline-none focus:ring-2 ui-selected:bg-white ui-selected:shadow ui-not-selected:text-red-100 ui-not-selected:hover:bg-white/[0.12] ui-not-selected:hover:text-white">
            Sonntag, 21.03
          </Tab>
          <Tab className="w-full rounded-lg py-4 text-sm font-medium leading-5 text-red-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 hover:shadow focus:outline-none focus:ring-2 ui-selected:bg-white ui-selected:shadow ui-not-selected:text-red-100 ui-not-selected:hover:bg-white/[0.12] ui-not-selected:hover:text-white">
            Montag, 21.03
          </Tab>
          <Tab className="w-full rounded-lg py-4 text-sm font-medium leading-5 text-red-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 hover:shadow focus:outline-none focus:ring-2 ui-selected:bg-white ui-selected:shadow ui-not-selected:text-red-100 ui-not-selected:hover:bg-white/[0.12] ui-not-selected:hover:text-white">
            Montag, 21.03
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <TimePickerRadioGroup
              setSelectedTime={setSelectedTime}
              selectedTime={selectedTime}
              times={times1}
            />
          </Tab.Panel>
          <Tab.Panel>
            <TimePickerRadioGroup
              setSelectedTime={setSelectedTime}
              selectedTime={selectedTime}
              times={times2}
            />
          </Tab.Panel>
          <Tab.Panel>
            <TimePickerRadioGroup
              setSelectedTime={setSelectedTime}
              selectedTime={selectedTime}
              times={times3}
            />
          </Tab.Panel>
          <Tab.Panel>
            <TimePickerRadioGroup
              setSelectedTime={setSelectedTime}
              selectedTime={selectedTime}
              times={times4}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
