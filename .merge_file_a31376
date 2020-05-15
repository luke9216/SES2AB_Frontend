import * as React from "react";
import { Button } from "@material-ui/core";
import { navigationButtonsStyles } from "./styles";

interface NavigationButtonsProps {
  navigationTabs: Array<NavigationButtonsTab>;
  children: any;
}

export interface NavigationButtonsTab {
  name: string;
}

const NavigationButtons: React.SFC<NavigationButtonsProps> = ({
  navigationTabs,
  children,
}) => {
  const classes = navigationButtonsStyles();

  return (
    <div>
      {children}
      <div className={classes.button}>
        {navigationTabs.map((tab: NavigationButtonsTab, index: number) => {
          return (
            <Button key={index} variant="contained" color="primary">
              {tab.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationButtons;
