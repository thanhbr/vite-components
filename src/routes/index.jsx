import {PATH} from "./path";
import Drawer from "../components/drawer";
import ButtonPage from "../pages/button";

const privateRoutes = [
  {path: PATH.HOME, component: ''},
  {path: PATH.BUTTON, component: ButtonPage},
  {path: PATH.DRAWER, component: Drawer},
]

export {privateRoutes}