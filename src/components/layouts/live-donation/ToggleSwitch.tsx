import React from 'react'

type Props = {
      value: string
}
export default function ToggleSwitch(props: Props) {
      return (
            <>
                  <label className="w-auto inline-flex items-center cursor-pointer">
                        <input type="checkbox" value={props.value} className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-theme-gray_lg peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-theme-ascent/80"></div>
                  </label>
            </>
      )
}
