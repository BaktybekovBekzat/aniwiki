import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";

describe("Routes Test", () => {
    it("Characters page", () => {
        render(
            <MockedProvider>
                <MemoryRouter initialEntries={["/characters"]}>
                    <App />
                </MemoryRouter>
            </MockedProvider>
        );
        const charactersLink = screen.getByTestId("characters");
        userEvent.click(charactersLink);
        expect(screen.getByTestId("medias-page")).toBeInTheDocument();
    });

    it("Medias page", () => {
        render(
            <MockedProvider>
                <MemoryRouter initialEntries={["/medias"]}>
                    <App />
                </MemoryRouter>
            </MockedProvider>
        );

        const mediasLink = screen.getByTestId("medias");
        userEvent.click(mediasLink);
        expect(screen.getByTestId("characters-page")).toBeInTheDocument();
    });
});
