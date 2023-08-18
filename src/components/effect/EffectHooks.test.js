import EffectHook from "./EffectHook";
import {render, screen} from "@testing-library/react";

test("check if data is rendering", async () => {
    render(<EffectHook />);
    const data = screen.getByTestId("data").textContent;
   
});