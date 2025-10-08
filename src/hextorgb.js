/**
 * Converts a hex color code to RGB.
 *
 * 
 *
 * @param {string} hex - The hex color code.
 * @returns {{r:number, g:number, b:number}} RGB object.
 * @throws {Error} If the input is not a valid 6-character hex string.
 */

function hexToRgb(hex){

    /* Remove leading '#' if present */

    hex = hex.replace(/^#/, '');

    /* Validate hex string */

    if (typeof hex !== "string" || !/^[0-9A-Fa-f]{6}$/.test(hex)) {
        throw new Error("Invalid hex color");
    }

    const r = parseInt(hex.substring(0,2), 16);
    const g = parseInt(hex.substring(2,4), 16);
    const b = parseInt(hex.substring(4,6), 16);
    return {r, g, b};
}

module.exports = {hexToRgb};