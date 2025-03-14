import React from "react";

interface ProgressBarProps {
      value: number; // Nilai progress (0-100)
      max: number;   // Nilai maksimum
}

export default function ProgressBar({ value, max }: ProgressBarProps) {
      return (
            <div className="w-full h-[4px] bg-[#EDF4F8] rounded-full">
                  <div
                        className="h-full bg-theme-green transition-all duration-300 ease-in-out relative rounnded-full"
                        style={{ width: `${(value / max) * 100}%` }}
                  >
                        <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 rounded-full bg-theme-green z-[1]"></div>
                  </div>
            </div>
      );
}
