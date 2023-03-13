import React from "react";

interface DefaultButtonInterface {
  text: string;
}

export function DefaultButton(props: DefaultButtonInterface) {
  return (
    <>
      <button
        type="button"
        className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75 mb-4">
        {props.text}
      </button>
    </>
  );
}
