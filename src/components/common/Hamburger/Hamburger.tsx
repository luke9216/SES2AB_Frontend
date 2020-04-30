import * as React from "react";
import clsx from "clsx";
import { hamburgerStyles } from "./style";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DashboardIcon from "@material-ui/icons/Dashboard";
import WorkIcon from "@material-ui/icons/Work";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export interface HamburgerProps {
  props?: any;
  drawerDetails: Array<IhamburgerTypes>;
}

export interface IhamburgerTypes {
  name: string;
  path: string;
}

const Hamburger: React.SFC<HamburgerProps> = ({ children, drawerDetails }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = hamburgerStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Your Navigation
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {drawerDetails.map((tab: IhamburgerTypes, key) => (
            <ListItem button key={tab.name}>
              <Button href={tab.path}>
                <ListItemIcon>
                  {key === 0 ? (
                    <AssignmentIcon />
                  ) : <DashboardIcon /> && key === 1 ? (
                    <DashboardIcon />
                  ) : <AssignmentIcon /> && key % 4 === 2 ? (
                    <WorkIcon />
                  ) : (
                    <VideoLibraryIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={tab.name} />
              </Button>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        {/*Pushes content below toolbar*/}
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Hamburger;
