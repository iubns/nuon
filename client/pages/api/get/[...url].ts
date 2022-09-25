import { NextApiRequest, NextApiResponse } from "next";
import { SERVER_FULL_PATH, GET_HEADER } from "../index";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = Array.isArray(req.query.url) ? req.query.url.join('/') : req.query.url || ''
    const result = await fetch(`${SERVER_FULL_PATH}/${url}`,
        {
            method: 'GET',
            headers: GET_HEADER
    })
    res.status(result.status).json(await result.json())
}
  