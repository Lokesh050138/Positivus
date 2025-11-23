import React from "react";

const ProfileCardsSection = () => {
  const cards = [
    {
      title: "Creative Design",
      subtitle: "Modern UI/UX",
      img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800",
      name: "Alex Johnson",
    },
    {
      title: "Fast Development",
      subtitle: "Clean Code",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
      name: "Sarah Williams",
    },
    {
      title: "Scalable Solutions",
      subtitle: "Future Proof",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
      name: "Michael Smith",
    },
  ];

  return (
    <section className="py-30 bg-gray-300 text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-25 uppercase">
          Creative <span className="text-white p-4 bg-blue-900 rounded-full">Solutions</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl p-6 shadow-lg relative flex flex-col items-center"
            >
              {/* Top Heading + Subheading */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold uppercase">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.subtitle}</p>
              </div>

              {/* Image Wrapper */}
              <div className="relative w-full p-2 rounded-xl bg-blue-900">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full h-64 object-cover rounded-xl"
                />

                {/* Floating Name Box */}
                <div className=" text-white font-semibold text-center leading-relaxed capitalize pt-2">
                  {card.name}
                </div>
              </div>
            </div> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileCardsSection;
