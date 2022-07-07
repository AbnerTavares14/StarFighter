import axios from "axios";
import { isPromise } from "util/types";
import battleRepository from "../repositories/battleRepository.js";


export async function battleService(firstUser: string, secondUser: string) {
    const verifyFirstUser: any = await axios.get(`http://api.github.com/users/${firstUser}/repos`);
    const verifySecondUser: any = await axios.get(`http://api.github.com/users/${secondUser}/repos`);

    let contFirstUser: number = 0;
    let contSecondUser: number = 0;

    if (verifyFirstUser.data.length === 0) {
        throw { type: "Not found" };
    }

    if (verifySecondUser.data.length === 0) {
        throw { type: "Not found" };
    }
    console.log("aqui")
    for (let i: number = 1; i < verifyFirstUser.data.length; i++) {
        contFirstUser += verifyFirstUser.data[i].stargazers_count;
    }

    for (let i: number = 1; i < verifySecondUser.data.length; i++) {
        contSecondUser += verifySecondUser.data[i].stargazers_count;
    }

    if (contFirstUser > contSecondUser) {
        await battleRepository.insertFighter(firstUser, 'win');
        await battleRepository.insertFighter(secondUser, 'loss');
        return {
            winner: firstUser,
            loser: secondUser,
            draw: false
        }
    }
    if (contSecondUser > contFirstUser) {
        await battleRepository.insertFighter(secondUser, 'win');
        await battleRepository.insertFighter(firstUser, 'loss');
        return {
            winner: secondUser,
            loser: firstUser,
            draw: false
        }
    }
    if (contSecondUser === contFirstUser) {
        await battleRepository.insertFighter(secondUser, 'draw');
        await battleRepository.insertFighter(firstUser, 'draw');
        return {
            winner: null,
            loser: null,
            draw: true
        }
    }
}