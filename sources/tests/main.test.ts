import { main } from "../src/main";

describe("main", () => {
    it('should log "Hello, world!"', () => {
        const consoleSpy = jest.spyOn(console, "log");
        main();
        expect(consoleSpy).toHaveBeenCalledWith("Hello, world!");
        consoleSpy.mockRestore();
    });
});
