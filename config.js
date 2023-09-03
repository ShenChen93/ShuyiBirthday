// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的树叶",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第一个生日！",
        "虽然见面时间不多，但我见过你",
        "漂亮的样子",
        "可爱的样子",
        "优雅的样子",
        "活泼的样子",
        "疲倦的样子",
        "都是我喜欢的样子",
        "对了，礼物收全了吗？",
        "今年要吃好好的",
        "然后才有力气摸鱼",
        "和想我！",
        "不开心了要找我喝酒",
        "第二年也要手拉手去很多地方",
        "生日快乐亲爱的~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/songxinxin.jpeg",
        "心爱的树叶": "./imgs/xw.jpg",
        "今天是你的生日": "./imgs/shengri.jpeg",
        "这是我们在一起的": "./imgs/zyq.jpeg",
        "第一个生日！": "./imgs/diyi.gif",
        "这两年来，我见过你": "./imgs/yangzi.jpeg",
        "漂亮的样子": "./imgs/xiaoqunzi.png",
        "可爱的样子": "./imgs/keai.png",
        "活泼的样子": "./imgs/huopo.jpeg",
        "优雅的样子": "./imgs/youya.jpeg",
        "疲倦的样子": "./imgs/pijuan.png",
        "都是我喜欢的样子": "./imgs/xihuan.png",
        "对了，礼物收全了吗？": "./imgs/chuo.gif",
        "今年要吃好好的": "./imgs/chifan.png",
        "然后才有力气摸鱼": "./imgs/moyu.gif",
        "和想我！": "./imgs/xw.jpeg",
        "不开心了要找我喝酒": "./imgs/hejiu.png",
        "第二年也要手拉手去很多地方": "./imgs/lashou.jpeg",
        "生日快乐亲爱的~~": "./imgs/srkl.png"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "上音乐",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '爱你的Sam老师~'
};
