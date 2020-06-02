var e = getApp();

Page({
    data: {
        url: e.globalData.serviceUrl + "help/" + e.globalData.accountId + "/index.html",
        animationData: {},
        questions: [ {
            id: "实名认证",
            value: "(1)为避免不必要的法律纠纷，请您提供真实姓名及身份证号进行认证，认证成功方可使用。(2)优驱出行承诺不会透露您的个人信息。"
        }, {
            id: "忘记还车",
            value: "忘记还车期间会正常计费，当车辆静止一定时间后，系统会自动结束订单。若还是还车不成功，请您联系人工客服处理。"
        }, {
            id: "临时停车",
            value: "临时停车期间会正常计费，骑行结束关锁后需统一支付费用。"
        }, {
            id: "开锁失败",
            value: "单车已被他人使用、单车电量过低、单车故障等都会导致开锁失败。"
        }, {
            id: "车辆故障",
            value: "(1)开锁后，发现车辆故障影响正常使用，请立即操作还车，避免产生不必要的费用，同时建议您更换附近正常的车辆继续骑行。(2)因车辆故障无法到还车点还车而产生其他费用时，请转人工客服为您核实处理。"
        }, {
            id: "押金退还失败",
            value: "请您确认支付账号正常使用，押金通过支付宝或微信绑定的银行卡支付时，原路退回到银行卡需要1-7个工作日，请耐心等待；若系统提示押金退还失败，请联系人工客服为您处理。"
        }, {
            id: "免押套餐和骑行套餐费用可以退还吗？",
            value: "关于免押套餐和骑行套餐，套餐在期限内有效，费用一旦支付，不能退还。骑行套餐若有其他有效性限制，详见购买须知。"
        }, {
            id: "账户显示异常",
            value: "请您先退出登录，再重启网络，再次尝试登录。"
        }, {
            id: "蓝牙操作失败怎么办？",
            value: "当蓝牙操作出现无响应、超时、搜索失败等情况时，请重启手机蓝牙，再次尝试。"
        }, {
            id: "没有还车点无法还车？",
            value: "请您根据地图指引，尽量在您附近找到还车点还车；若在非还车点处还车，您需支付一定的调度费用。"
        }, {
            id: "在还车点无法还车怎么办？",
            value: "建议您先查看车辆是否在“还车点”，还车点可查看还车范围，然后点击左下角的“定位”按钮，刷新定位；如您有急事需立即离开，请操作“临时锁车”，然后尽快致电人工客服处理。"
        } ]
    },
    showContents: function(e) {
        var a = this, t = e.currentTarget.dataset.selected;
        wx.createAnimation({
            duration: 1e3,
            timingFunction: "ease"
        });
        a.data.selected != t ? a.setData({
            selected: t
        }) : a.setData({
            selected: -1
        });
    },
    onLoad: function(e) {}
});