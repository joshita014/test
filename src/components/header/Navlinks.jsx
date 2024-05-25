import React from "react";

const Navlinks = () => {
  const links = [
    { name: "our programs" },
    { name: "outcome" },
    { name: "about us" },
    { name: "careers" },
    { name: "resources" },
  ];
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer">
            <h1 className="py-7 capitalize">{link.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
