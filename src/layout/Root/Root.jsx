import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
