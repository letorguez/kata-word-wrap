import { WordWrap } from "../WordWrap";

/**
 * TODO:
 * 
 */
describe("WordWrap Should", () => {
  const wordWrap = new WordWrap();
  it("the same text when is smaller than the max length", () => {
    expect(wordWrap.jumpLine("hola", 5)).toBe("hola");
    expect(wordWrap.jumpLine("hola mundo", 12)).toBe("hola mundo");
  });
  it("separate the text in more lines when is longer than the max length", () => {
    expect(wordWrap.jumpLine("holaholahola", 4)).toBe("hola\nhola\nhola");
    expect(wordWrap.jumpLine("hola mundo", 7)).toBe("hola\nmundo");
  });
});
