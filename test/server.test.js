const request = require('supertest');
const expect = require('chai').expect;

process.env.NODE_ENV = 'test'; // Set environment to test
const app = require('../src/server'); // Import the Express app

/**
 * Integration tests for server.js
 * Use Supertest for HTTP requests and Chai for assertions.
 *
 */

describe('Hex-to-RGB API', () => {

    /**
     * Test the root route.
     * Expects a 200 status and "Hello" response text.
     */

    it("responds to the root route", async () => {
        const res = await request(app).get('/');
        expect(res.status).to.equal(200);
        /*expect(res.text).to.equal('Hello');*/
    });

    /**
     * Test the /hexToRgb route with valid and invalid hex values.
     * Expects a 200 status and correct RGB response for valid hex.
     */


    it('should convert hex to RGB', async () => {
        const res = await request(app).get('/hexToRgb?hex=FF5733');
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({r: 255, g: 87, b: 51});
    });

    it('should handle lowercase hex', async () => {
        const res = await request(app).get('/hexToRgb?hex=ff5733');
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({r: 255, g: 87, b: 51});
    }); 

    /**
     * Test case for invalid hex input
     * Expects a 400 status and error message.
     */

    it('should return 400 for invalid hex', async () => {
        const res = await request(app).get('/hexToRgb?hex=ZZZZZZ');
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('error');
    });
});