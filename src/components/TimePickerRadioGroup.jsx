import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default function TimePickerRadioGroup({
  times,
  selectedTime,
  setSelectedTime,
}) {
  return (
    <RadioGroup
      as="div"
      value={selectedTime}
      onChange={setSelectedTime}
      className="flex flex-col gap-2"
    >
      <RadioGroup.Label className="sr-only">Time</RadioGroup.Label>
      {times.map((time) => (
        <RadioGroup.Option
          value={time}
          className="cursor-pointer rounded-lg bg-red-500 p-4 text-white shadow-md ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none ui-checked:cursor-default ui-checked:bg-white ui-checked:text-red-700 ui-active:ring-2"
        >
          {time}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
