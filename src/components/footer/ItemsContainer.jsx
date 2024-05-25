import Item from "./Item";
import {PROGRAMS, OUTCOMES, RESOURCES, COMPANY } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PROGRAMS} title="PROGRAMS" />
      <Item Links={OUTCOMES} title="OUTCOMES" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
    </div>
  );
};

export default ItemsContainer;