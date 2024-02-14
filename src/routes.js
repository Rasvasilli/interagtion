// src/routes.js
import { Router } from "express";
import { rgb_to_hex } from "./converter.js";
const routes = Router();

// Endpoint GET '{{api_url}}/'
routes.get('/', (req, res) => res.status(200).send("Welcome!"));

// Endpoint GET '{{api_url}}/rgb-to-hex?red=255&green=136&blue=0'
routes.get('/rgb-to-hex', (req, res) => {
    const RED = parseFloat(req.query.red);
    const GREEN = parseFloat(req.query.green);
    const BLUE = parseFloat(req.query.blue);
    const hex = rgb_to_hex(RED, GREEN, BLUE);
    res.status(200).send(hex);
});

// Endpoint GET '{{api_url}}/hex-to-rgb'
routes.get('/hex-to-rgb', (req, res) => {
    res.status(200).send("HEX-to-RGB not implemented yet.")
});

export default routes;