// routes.spec.js
// some imports etc...
import express from 'express';
import { after, before, describe, it } from "mocha";
import { expect } from "chai";
import routes from "../src/routes.js";
const API_URL = "http://localhost:3000/api/v1"
const app = express();

/** @type {import('node:http').Server} */
let server;
describe("REST API Routes", () => {
    before(() => {
        app.use('/api/v1', routes);
        server = app.listen(3000, () => console.log('Test server started...'));
    });

    it("can get response", async () => {
        const response = await fetch(`${API_URL}/`);
        expect(response.ok).to.be.true; // fast check
    });

    it("should convert RGB to HEX correctly", async () => {
        const response = await fetch(`${API_URL}/rgb-to-hex?red=255&green=136&blue=0`);
        const text = await response.text();
        expect(text).to.equal("#ff8800");
    });

    after((done) => {
        server.close(() => done());
    });

});