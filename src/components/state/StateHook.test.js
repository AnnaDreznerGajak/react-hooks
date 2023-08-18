import userEvent from '@testing-library/user-event';
import StateHook from "./StateHook";
import {render, screen} from "@testing-library/react";

test("check if render button", () => {
    render(<StateHook/>);
    const incrementBtn = screen.getByRole("button");
    expect(incrementBtn).toBeInTheDocument();
});

test("check if counter is increment", async () => {
    render(<StateHook/>);
    const counterValue = Number(screen.getByRole("heading").textContent);
    const incrementBtn = screen.getByRole("button");
    const user = userEvent.setup();
    expect(counterValue).toBe(0);
    await user.click(incrementBtn);
    const counterValueNew = Number(screen.getByRole("heading").textContent);
    expect(counterValueNew).toBe(1);
})
