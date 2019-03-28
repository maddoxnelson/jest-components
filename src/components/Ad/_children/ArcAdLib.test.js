import ArcAdLib from "./ArcAdLib";

describe("<ArcAdLib>", () => {
  let singleInstance = null;

  it("returns an instance", () => {
    singleInstance = ArcAdLib.getInstance();
    expect(singleInstance).toBeDefined();
  });

  it("returns the same instance", () => {
    const arcLib = ArcAdLib.getInstance();
    expect(arcLib).toEqual(singleInstance);
  });
});
