import React from "react";
import frontbar from "../assets/frontbar.jpeg";
import logo from "../assets/iconbgr.png";

function Home() {
  return (
    <div>
      <div
        className="flex justify-center items-center mt-6   h-60"
        style={{ width: "100%" }}
      >
        <div className="bg-white border-2 rounded-2xl border-white w-80 h-60 flex justify-center items-center">
          <iframe
            className="bg-white border-1 border-black"
            width="300"
            height="200"
            src="https://maps.google.com/maps?width=300&amp;height=200&amp;hl=en&amp;q=Avenida%20Dr.%20Cavalcante,%20811+(Boteco%20Do%20Bene)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Mapa do Boteco Do Bene"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 ">
        <img className="w-72 rounded-2xl border-4 border-white" src={frontbar} alt="Logo do Boteco Do Bene" />
        <img className="absolut  w-24" src={logo} alt="Logo do Boteco Do Bene" />
      </div>
    </div>
  );
}

export default Home;
