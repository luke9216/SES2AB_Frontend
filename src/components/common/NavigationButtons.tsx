import * as React from 'react';
import { Button } from '@material-ui/core';
import { navigationButtonsStyles } from "./styles"


interface NavigationButtonsProps {
    path: string;
    navigationTabs: Array<NavigationButtonsTab>;
    children: any;
}

export interface NavigationButtonsTab {
    name: string;
    path: string;
}


const NavigationButtons: React.SFC<NavigationButtonsProps> = ({ path, navigationTabs, children }) => {
    const classes = navigationButtonsStyles();
    // const [tabValue, setTabValue] = React.useState(0);
    // onClick={() => setTabValue(index)}
    // component={Link}
    // to={`${path}${tab.path}`}

    return (
        <div>
            {children}
            <div className={classes.button}>
                {navigationTabs.map((tab: NavigationButtonsTab, index: number) => {
                    return (

                        <Button key={index}
                            variant="contained" color="primary">
                            {tab.name}
                        </Button>

                    )

                })}
            </div>
        </div>
    );
}

export default NavigationButtons;