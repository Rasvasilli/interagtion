// src/converter.js

/**
* RGB to HEX conversion
* @param {number} r RED
* @param {number} g GREEN
* @param {number} b BLUE
* @returns {string} in hex color format, e.g., "#00ff00" (green)
*/
export const rgb_to_hex = (r, g, b) => {
    let hex = "#";
    const HEX_RED = r.toString(16);
    const HEX_GREEN = g.toString(16);
    const HEX_BLUE = b.toString(16);
    return hex + pad(HEX_RED)+ pad(HEX_GREEN) + pad(HEX_BLUE);
};

/**
* Padding hex component if necessary.
* Hex component representation requires
* two hexadecimal characters.
* @param {string} comp
* @returns {string} two hexadecimal characters
*/
const pad = (comp) => {
    const padded = comp.length == 2 ? comp : "0" + comp;
    return padded;
}