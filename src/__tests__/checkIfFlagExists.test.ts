/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { WorldData } from "../data/WorldData";

const fs = require("fs");

describe("Flags", () => {
  const fileExistsSync = (file: string) => {
    try {
      fs.accessSync(file);
      return true;
    } catch (err) {
      console.log(file);
      return false;
    }
  };

  it("should find the flag", () => {
    WorldData.forEach((item: any) => {
      expect(fileExistsSync(`src/assets/world/${item.name}.svg`)).toBe(true);
    });
  });
});