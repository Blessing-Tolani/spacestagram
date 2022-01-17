import { useState } from "react";
import SectionTwo from "@components/Section-two";

export default function SectionOne() {
  const [date, setDate] = useState("2022-01-01");

  const handleChange = (e) => {
    const dateValue = e.target.value;
    setDate(dateValue);
  };

  return (
    <>
      <div>
        <div className="bg-shopifyGreen h-60 flex flex-col items-center pt-10">
          <h2 className="text-base sm:text-2xl text-white pb-6">
            Check the astronomy picture of the day
          </h2>
          <div className=" border border-shopifyGreenlight w-60 h-11 sm:w-64 sm:h-12 flex items-center justify-center rounded-full bg-shopifyGreenlight">
            <form>
              <div>
                <label className="text-white text-sm sm:text-base font-sourcesans">
                  Start date:{" "}
                </label>
                <input
                  type="date"
                  onChange={(e) => handleChange(e)}
                  value={date}
                  className=" w-36 bg-transparent text-white outline-none font-sourcesans"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <SectionTwo input={date} />
    </>
  );
}
