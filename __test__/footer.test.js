import { screen, render } from "@testing-library/react";
import Footer from "../components/Footer";
import "@testing-library/jest-dom";

describe("Testing footer components", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it(`Should be render copyright`, () => {
    const textCopy = screen.getByText(/Copyright/i);
    expect(textCopy).toBeInTheDocument();
  });
  it(`Should be render powered`, () => {
    const textPowered = screen.getByText(/Powered by/i);
    expect(textPowered).toBeInTheDocument();
  });
});
