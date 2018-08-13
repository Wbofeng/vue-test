<template>
    <el-row class="message">
    <el-col :span="7" :offset="0">
        <el-tabs v-model="activeName  " @tab-click="handleClick" class="into">
            <el-tab-pane label="头条" name="first" class="into-a">
                    <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">人民日报：续写中卢友好合作信篇章</a><br>
                    <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">人民日报：美国挑起贸易战的实质是什么？</a><br>
                    <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">长江南京段“绿色蜕变”：转型亲水港湾</a><br>
                    <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">核查组公布武汉生物不合格百白破疫苗处置</a><br>
                    <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">给中国军人点赞：中国军机在南海6次警告美</a><br>
                    <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">中国护照“含金量”再升级 </a><br>
                    <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">核查组:武汉生物未按规程操作 部门处罚偏轻</a><br>
                    <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">中国年轻人为什么不愿生孩子了？</a><br>
                    <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">特斯拉或面临史上最大杠杆收购</a><br>
                    <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">火箭新赛季最多55胜？大数据计算的结果</a><br>
                    <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">数十名也门儿童死于空袭</a><br>
                    <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">习近平的系统思维方法</a><br>
            </el-tab-pane>
            <el-tab-pane label="体育" name="second"  class="into-a">
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">英超夏季转会一览：20强狂烧12亿 切尔西造标</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">克成媒体嘲讽詹皇 卡哇伊致谢马刺 足协罚单</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">中超-19:35播国安vs苏宁 张力被禁赛6场</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">亚运会孙杨确定自由泳4项</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">赵继伟受伤多严重？三处骨折</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">专栏：“圣诞大战”没有马刺</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">男子中体彩千万露脸兑</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">詹姆斯首穿湖人球衣训练</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">卡戴珊的男人再次出轨！</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">2018年NBA夏季签约转会汇总</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">待了5天的东家再满足甜瓜</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">科比获奥斯卡金像奖！</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="intob b">詹皇首穿湖人球服进行训练</a><br>
            </el-tab-pane>
            <el-tab-pane label="汽车" name="third"  class="into-a">
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">高于H系!哈弗F系首款SUV或12万起</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">本田新中型跨界SUV曝光11月发布</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">长安CS35 PLUS内饰官图.月底上市</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">宝马540Li低配版曝光:减配降售价</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">广本全新车22日发布:配1.0T引擎</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">大众全新入门级小型SUV实车曝光</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">广本全新车22日发布:配1.0T引擎</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">国产全新标轴Q5实车曝光多少钱?</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">丰田将推出全新中级轿车</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">汽车主动安全系统的重要性</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">全新G级中国红版到店实拍</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">荣威全新轿车i5内饰曝光</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">机油标号30/40的差异你了解吗</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">雷克萨斯旗舰SUV特别版剑指揽胜</a><br>
            </el-tab-pane>
             <el-tab-pane label="购车" name="fourth"  class="into-a">
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">3强重聚首华晨宝马X3竞争力分析</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">单论颜值这它们称第2没人敢第1?</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">8万内就能拥有的SUV这俩你选谁</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">预算10万元捷达/凯越选哪个更值</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">抢饭碗?日系SUV如何面对C-HR</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">挑战BBA凯迪拉克XT4胜算最大?</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">高清实拍电动SUV蔚来ES8</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">极致诉求，完美进化 Lexus ES全新大改款</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">哈弗H9一脚油门，牧马人服气了，厉害</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">28万起售，宝马3系最强敌手，试驾优雅绅士捷豹XEL</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">吉利出高端轿车啦_新款吉利博瑞_内饰跟宝马有得一拼</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">开哪款最有面 2017款雷克萨斯IS PK 2017款ATS-L</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">紧凑SUV集体发力！探歌/奕歌/哈弗H4该选哪一款？</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">五菱汽车，一个让你无话可说的神车</a><br>
             </el-tab-pane>
             <el-tab-pane label="娱乐" name="fifth"  class="into-a">
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">杨超越清唱伍佰神曲引发热议</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">古天乐曝工作太忙没时间找女友</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">《公寓》悠悠喊话让关谷回归</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">徐佳莹与老公婚后首同框</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">《太后》男星曝曾暗恋宋慧乔</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">《银翼》女主遭警方通缉</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">女星体重曝光陈乔恩程潇过百</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">图：99年嫩模娇小玲珑</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">潘玮柏祝福吴昕愿望成真</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">火箭少女101的惊变24小时</a><br>
             </el-tab-pane>
        </el-tabs>
    </el-col>
        <el-col :span="7" :offset="3">
        <el-tabs v-model="activeName  " @tab-click="handleClick" class="into">
            <el-tab-pane label="财经" name="first" class="into-a">
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">余杭金控扩张背后:金融风险待解</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">中国铁塔上市 欲破三重关系迷局</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">昔日巨头无锡尚德拖欠2亿成老赖</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">ofo从七个国家大撤退下一步如何</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">包裹大战快递格局尚未“固化”</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">百度外卖代理商北京静坐维权</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">乐视第二造车梦压断资金链</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">周五缩量反弹是诱多</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">沙鹰 ：下周延续结构性行情</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">中国移动回应四家子公司独立上市</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">二胎概念股午后快速拉升走强</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">沪指涨0.03% 创业板涨1%</a><br>
            </el-tab-pane>
            <el-tab-pane label="股票" name="second" class="into-a">
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">即将步入量价齐升反弹阶段</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">探底回升暗示反弹有望持续</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">即将步入量价齐升反弹阶段</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">130亿资金偷步炒科技股</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">美商务部长"手脚不干净"?</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">上海房贷利率跌到9折背后的阴谋论</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">大盘将进入磨底期</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">十大博客看后市</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">本轮大盘反弹压力2820点</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">趋势巡航牛家庄</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">市场热点切换的策略</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">下周延续结构性行情</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">高科技将成主流</a><br>
            </el-tab-pane>
            <el-tab-pane label="理财" name="third" class="into-a">
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">工行上海分行：个人住房贷款利率政策没有调整</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">8月10日在售高收益银行理财，银行理财排行榜</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">宜信财富员工涉嫌诈骗：卷走上巨额资金后自首</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">影视圈吐槽征税变化传闻：明星影响不大苦编剧</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">深圳停售单价15万元以上豪宅？三大真楼市动向</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">豆瓣网友独钓寒江雪案件破了输还原嗅探全过程</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">看涨因素正不断积聚 金价反弹或一触即发灯欧</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">里拉崩溃拖累非美 美指升破96关口迎晚间CPI</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">男子中体彩千万露脸兑千万女得主受访:更开心</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b"> 创业板ETF规模暴增40倍成华夏大盘赚超20倍</a><br>
            </el-tab-pane>
            <el-tab-pane label="军事" name="fourth" class="into-a">
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">解放军黄海军事活动台表态</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">预计9月起患者可陆续买到降价</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">唐山"教科书式老赖"已出狱</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">心痛!千年佛像遭"毁容式"修复!</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">七旬老人还清31年前欠款</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">巴基斯坦巴士遭自杀式袭击</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">金门人祖先是大陆来的</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">湖北惩戒"老赖"手段将升级</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">现实版"西虹市首富"</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">83岁"老每天打游戏3小时</a><br>
            </el-tab-pane>
            <el-tab-pane label="军事" name="fifth" class="into-a">
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">天价片酬再见!最高只能拿5000万</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">号外|上海房贷调整引风波</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">梁建章:中国需拿出8万亿</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">百度外卖代理北京静坐维权 </a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">赶时间！美2000亿清单前夜企业</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">中兴通讯市值已狂跌700亿</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">中储粮：全部通过美国以外国家采</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">号外|王卫罕现顺丰发布会</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">张承惠:或将有合资寿险公司被外资</a><br>
                <a href="http://news.sina.com.cn/c/2018-08-10/doc-ihhnunsq4150065.shtml" target="_blank" class="into b">专家:很多外资比国内企业更多</a><br>
            </el-tab-pane>
        </el-tabs>
        </el-col>
      <el-col :span="4" :offset="1">
        <el-carousel height="300px">
          <el-carousel-item v-for="item in items" :key="item.number">
            <a :href="item.href" class="z-Wrod-A" target="_blank">
              <img :src="item.img" class="z-Photo-A">
            </a>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
</template>
<script>
export default {
    data(){
        return{
            activeName: 'second',
            currentDate: new Date(),
                  items:
      [
        {
          number: 1,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/最强大脑.jpg')
        },
        {
          number: 2,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/减肥.jpg')
        },
        {
          number: 3,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/恋情.jpg')
        },
        {
        number: 4,
        href:'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
        img: require('../assets/罚款.jpg')
        },
        {
        number: 5,
        href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
        img: require('../assets/判刑.jpg')
        }
      ]
        }
    },
    methods:{
      handleClick (tab, event) {
      console.log(tab, event)
      }
    }
}
</script>
<style scoped>
.message{
    width: 1050px;
}
.into {
  line-height: 0px;
  height: 210px;
}
.into-a {
  line-height: 20px;
  padding: 0 0px;
}
.intob{
  font-size: 15px;
  line-height: 0px;
  height: 60px;
  padding: 0 0px;
}
.b{
 text-decoration: none !important;
}
a{
    color:rgb(0, 16, 156);
}
.z-Wrod-A {
  line-height: 0px;
  height: 60px;
  width: 10px;
}
.z-Photo-A {
  width: 100%;
  height: 100%;
  display: block;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 100px;
  margin: 0;
  height: 110px;
}
.el-carousel__item:nth-child(2n) {
  background-color: rgb(251, 253, 255);
}
.el-carousel__item:nth-child(2n+1) {
  background-color:  rgb(251, 253, 255);
}
</style>


