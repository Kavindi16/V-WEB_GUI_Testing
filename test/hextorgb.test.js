const { expect} = require("chai");
const { hexToRgb } = require("../src/hextorgb");
/*const { it } = require("node:test");*/

/**
 * Unit tests for hextorgb.js
 *
 * @module test/hextorgb
 */

describe("hextorgb.js", () => {

    describe("hexToRgb", () => {
        /**
        * Test cases for hexToRgb function
        */
        it("should convert hex to RGB", () =>{
            expect(hexToRgb("FF5733")).to.deep.equal({r: 255, g: 87, b: 51});
        });

        /**
        * Test case for lowercase hex input
        */

        it("should handle lowercase hex", () =>{
            expect(hexToRgb("ff5733")).to.deep.equal({r: 255, g: 87, b: 51});
        });

        /**
        * Test case for invalid hex input
        */

        it("should throw error for invalid hex", () =>{
            expect(() => hexToRgb("ZZZZZZ")).to.throw("Invalid hex color");
        });

    });
});