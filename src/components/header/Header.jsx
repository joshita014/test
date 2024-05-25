import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="container-fluid min-h-[10vh] bg-primaryBgColor">
      <div className="lg:container w-[95%]">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
