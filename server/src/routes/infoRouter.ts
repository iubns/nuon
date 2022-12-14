import express from 'express'
import {attendInfoDatabase, userDatabase} from '../model/dataSource'
import { InOutInfo } from '../entity/inOutInfo'

const router = express.Router()

router.post('/save-attend-time', async (req, res) => {
    const data = req.body

    const userId: number = data.userId
    const inOutDataList: Array<InOutInfo> = data.inOutData

    const foundUser = await userDatabase.findOneBy({
        id: userId
    })

    try{
        for(const data of inOutDataList){
            const inOutInfo = new InOutInfo()
            inOutInfo.user = foundUser
            inOutInfo.inOutType = data.inOutType
            inOutInfo.day = data.day
            inOutInfo.time = data.time
            inOutInfo.position = data.position
            inOutInfo.howToMove = data.howToMove

            await attendInfoDatabase.save(inOutInfo)
        }
        
        res.send({result: 'success'})
    }catch(e){
        res.send(e)
    }
})

export default router