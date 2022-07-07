import { Request, Response } from "express";
import battleRepository from "../repositories/battleRepository.js";
import { battleService } from "../services/battle.js";

export async function battle(req: Request, res: Response) {
    const { firstUser, secondUser } = req.body;
    const result = await battleService(firstUser, secondUser);
    console.log(result);
    res.send(result);
}

export async function getFighters(req: Request, res: Response) {
    const { rows } = await battleRepository.ranking();
    res.send(rows);
}