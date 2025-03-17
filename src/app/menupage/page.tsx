import Headers from "../headerpage/Header";
import OrderPage from "./ordersite";
import MenueList from "./menulist";
import MenuMain from "./menumain";

const MenuPage = () => {


  return (
    <>
      <div>

        <Headers h1="Our Menu" />
        <MenueList />
        <MenuMain />
        <OrderPage />
      </div>
    </>
  );
}

export default MenuPage;