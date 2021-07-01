import { Container, CssBaseline } from "@material-ui/core";
import React from "react";
import GridLayout from "./GridLayout";
import NavigationBar from "./NavigationBar";

const Home = () => {
    return (
        <div className="app">
            <CssBaseline />
            <NavigationBar />
            <Container>
                <main>
                    <GridLayout />
                </main>
            </Container>
        </div>
    )
}

export default Home;