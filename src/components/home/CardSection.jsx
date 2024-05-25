import React from "react";

function CardSection() {
  const cardsData = [
    {
      imageUrl:
        "https://www.charliehealth.com/wp-content/uploads/2022/09/iStock-1758823553-1.png.webp",
      altText: "blog",
      title: "Is Charlie Health Legit?",
      content: "Charlie Health Editorial Team",
    },
    {
      imageUrl:
        "https://www.charliehealth.com/wp-content/uploads/2023/06/6476528bd92a5b885d397624_AlexithymiaTitle.png",
      altText: "blog",
      title: "What Is Alexithymia?",
      content: "Charlie Health Editorial Team",
    },
    {
      imageUrl:
        "https://www.charliehealth.com/wp-content/uploads/2024/05/iStock-1496597578-1.png.webp",
      altText: "blog",
      title: "Considering Lamictal for Depression? Read This",
      content: "Dr. Eli Muhrer, M.D.",
    },
  ];

  return (
    <section className="container-fluid">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12"></div>
        <div className="flex flex-wrap -m-20 py-28">
          {cardsData.map((card, index) => (
            <div key={index} className="p-1 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                <img
                  className="lg:h-72 md:h-40 w-full object-cover object-center "
                  src={card.imageUrl}
                  alt={card.altText}
                />
                <div className=" hover:bg-gray-400 hover:text-white transition  bg-white duration-300 ease-in ">
                  <h1 className="text-xl  px-2 py-2 font-semibold mb-4 h-[60px] overflow-hidden">
                    {card.title}
                  </h1>

                  <p className="leading-relaxed mb-3">{card.content}</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardSection;
