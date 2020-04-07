import React from "react"
import { Typography } from '@material-ui/core';

export interface HomePageProps {

}

const HomePage: React.SFC<HomePageProps> = () => {
    return (
        <Typography variant="h2">UTS: Quantum Computing</Typography>
    );
}

export default HomePage;