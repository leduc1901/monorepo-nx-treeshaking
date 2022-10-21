import { copyImage } from "../copyImage";

jest.mock("dom-to-image", () => {
  const actualExport = jest.requireActual("dom-to-image");
  return {
    ...actualExport,
    toBlob: jest.fn().mockResolvedValue(1),
  };
});

Object.assign(navigator, {
  clipboard: {
    write: () => {},
  },
});

Object.assign(window, {
  ClipboardItem: () => {},
});

describe("copyImage function", () => {
  jest.spyOn(navigator.clipboard, "write");
  jest.spyOn(window, "ClipboardItem");
  beforeAll(() => {
    const { getComputedStyle } = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);
  });

  it("should copy to clipboard", () => {
    const mockElement = document.createElement("div");
    expect(copyImage(mockElement)).toEqual("Success");
  });

  it("should return error", () => {
    expect(copyImage(null)).toEqual("Element not found");
  });
});
