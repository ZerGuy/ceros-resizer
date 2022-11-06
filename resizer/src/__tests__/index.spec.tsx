import { fireEvent, prettyDOM, render } from "@testing-library/react";
import { Resizer } from "../index";

/* eslint-disable testing-library/no-container, testing-library/no-node-access */

describe("<Resizer/>", () => {
  const renderComponent = () => {
    return render(
      <Resizer>
        <div>Some text</div>
      </Resizer>
    );
  };

  const getResizerWrapper = (container) => container.children[0];

  it("should update only width, when moving X handle", () => {
    const { container } = renderComponent();
    const xHandle = container.querySelector(".resizer-handle-x");

    fireEvent.mouseDown(xHandle, { clientX: 100, clientY: 100 });
    fireEvent.mouseMove(window, { clientX: 200, clientY: 200 });
    fireEvent.mouseUp(window);

    const computedStyle = getComputedStyle(getResizerWrapper(container))
    expect(computedStyle.width).toEqual("100px");
    expect(computedStyle.height).toEqual("0px");
  });

  it("should update only height, when moving Y handle", () => {
    const { container } = renderComponent();
    const yHandle = container.querySelector(".resizer-handle-y");

    fireEvent.mouseDown(yHandle, { clientX: 100, clientY: 100 });
    fireEvent.mouseMove(window, { clientX: 200, clientY: 200 });
    fireEvent.mouseUp(window);

    const computedStyle = getComputedStyle(getResizerWrapper(container))
    expect(computedStyle.width).toEqual("0px");
    expect(computedStyle.height).toEqual("100px");
  });

  it("should update width and height, when moving XY handle", () => {
    const { container } = renderComponent();
    const xyHandle = container.querySelector(".resizer-handle-xy");

    fireEvent.mouseDown(xyHandle, { clientX: 100, clientY: 100 });
    fireEvent.mouseMove(window, { clientX: 200, clientY: 200 });
    fireEvent.mouseUp(window);

    const computedStyle = getComputedStyle(getResizerWrapper(container))
    expect(computedStyle.width).toEqual("100px");
    expect(computedStyle.height).toEqual("100px");
  });
});
