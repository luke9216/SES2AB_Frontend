import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  List,
  CssBaseline,
  Divider,
  Drawer,
} from "@material-ui/core";
import drawerDetails from "../../common/__data__/data.drawerDetails.json";
import { hamburgerStyles } from "./style";
import clsx;

export interface HamburgerProps {
  name: string;
  path: string;
}

const drawerWidth = 240;

const Hamburger: React.SFC = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(hamburgerStyles.AppBar, {
          [hamburgerStyles.appBarShift]: open,
        })}>
        
      </AppBar>
    </div>
  );
};

export default Hamburger;
