import { normalizeString } from "./normalizeString";
describe("Normalize string", () => {
	it("should normalize input string", () => {
		expect(normalizeString("    LOWERCASE      ")).toStrictEqual(
			"lowercase"
		);
		expect(normalizeString("lowercase")).toStrictEqual("lowercase");
	});
});
