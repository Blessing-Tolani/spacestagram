import { useState, useEffect } from "react";

export default function SectionTwo(props) {
  const [planetary, setPlanetary] = useState([]);
  let dateValue = props.input;
  let result;
  let planetaryArray = [];
  async function accept() {
    try {
      let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=Ro1NBJnqPg6HDfrOFQaTl7l0yiAwusPBbi9NsK1S&start_date=${dateValue}`;
      let response = await fetch(apiUrl);
      result = await response.json();
      console.log(result);
      if (!Array.isArray(result)) {
        planetaryArray.push(result);
        setPlanetary(planetaryArray);
      } else {
        setPlanetary(result);
      }
    } catch (err) {
      alert("Error!, Try Again");
    }
    const likes = document.querySelectorAll(".like");
    likes.forEach((like) => {
      if (like.classList.contains("like-yes")) {
        like.classList.remove("like-yes");
        like.classList.add("like-no");
      }
    });
  }

  useEffect(() => {
    accept();
  }, [dateValue]);

  const handleClick = (event) => {
    event.target.classList.toggle("like-no");
    event.target.classList.toggle("like-yes");
    if (event.target.classList.contains("like-yes")) {
    }
  };

  return (
    <div className="w-full gallery-container font-sourcesans">
      {planetary.map((ans, index) => (
        <div className="  card-box rounded-lg shadow" key={index}>
          <div className="bg-white py-6 rounded-lg flex justify-center">
            <div className="w-11/12">
              <div>
                <img
                  src={ans.url}
                  alt={ans.title}
                  className="w-full h-72 rounded-xl"
                />
              </div>
              <div className="h-1/4  pt-2 ">
                <h2 className="h-7 overflow-hidden ">{ans.title}</h2>
                <div className="flex items-center justify-between ">
                  <div
                    className="like like-no cursor-pointer w-9 h-9"
                    onClick={handleClick}
                  ></div>
                  <h2>{ans.date}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
