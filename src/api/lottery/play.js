import request from "@/utils/request";


// 获取奖品数据
export function codeDetail(code) {
    return request({
        url: '/lottery/play/codeDetail',
        data: {
            code: code
        },
        method: 'post'
    })
}

// 抽奖
export function lotteryApi(code) {
    return request({
        url: '/lottery/play/lottery',
        data: {
            code: code
        },
        method: 'post'
    })
}

// 返回抽奖并记录
export function lotteryReturnApi(codeData, goodsData) {
    return request({
        url: '/lottery/play/returnLottery',
        data: {
            code: codeData,
            goods: goodsData
        },
        method: 'post'
    })
}

// 查询抽奖记录
export function lotteryQueryApi(codeData) {
    return request({
        url: '/lottery/play/query',
        data: {
            code: codeData
        },
        method: 'post'
    })
}