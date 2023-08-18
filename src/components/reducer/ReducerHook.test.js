import ReducerHook from "./ReducerHook";
import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

test("Is text unvisible when user click a button", async () => {
    render(<ReducerHook/>);
    const user = userEvent.setup();
    const text = screen.getByText(/Text is showing/i);
    const btn = screen.getByRole("button");
    expect(text).toBeInTheDocument();
    await user.click(btn);
    expect(text).not.toBeVisible();
});