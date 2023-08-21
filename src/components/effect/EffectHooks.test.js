import EffectHook from "./EffectHook";
import {render, screen} from "@testing-library/react";

describe("EffectHook test", () => {
    test("check if email test@gmail.com is displayed", async () => {
       render(<EffectHook/>);

       const emailItem = await screen.findByText("test@gmail.com");
       expect(emailItem).toBeVisible();
    });
})

