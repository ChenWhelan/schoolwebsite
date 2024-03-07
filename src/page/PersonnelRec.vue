<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-menu-item index="1">
                <span slot="title">人才招聘</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <div class="col-md-10 col-sm-9 main-content">
            <div class="breadcumb" style="text-align:left;padding-left:20px">
              <router-link to="/Home">首页</router-link> /人才招聘
            </div>
            <div class="title-bar">
              <h2>电气与计算机工程学院2022年度师资人才招聘公告</h2>
              <br />
              <div class="title-info">
                2020-03-20 09:30:00 &nbsp;&nbsp;&nbsp;&nbsp; 作者：xzb
                &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
            <hr />
            <article class="article">
              <p style="line-height: 180%;  font-size: 14pt;align:left">
                <span style=" font-size: 18px"
                  >根据学校事业发展需要，面向校内外公开招聘广州南方学院电气与计算机工程学院教师，现将本次招聘的有关事项公布如下：</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 20px"
                  ><strong>一、电气与计算机工程学院简介</strong></span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >电气与计算机工程学院，其前身为电子通信与软件工程系，始建于2006年，是广州南方学院（原中山大学南方学院）唯一的理工学院，现设四系一所：电子与移动通信工程系，计算机科学与工程系，电气工程与自动化系，人工智能系，信息技术与计算机应用研究所，包含电子信息科学与技术、通信工程、计算机科学与技术、软件工程、电气工程及其自动化、智能科学与技术、数据科学与大数据技术7个本科专业。学院以培养创新应用型IT工程人才为培养目标，注重学生实践能力的提升，尤其在学科建设、应用型人才培养模式、校企融合等方面进行了深入探索和实践，经过10多年努力奋斗，取得了一系列成果。2021年，计算机科学与技术专业顺利通过IEET资讯教育认证，标志人才培养符合国际标准，是我校首个获得国际认证的专业；计算机科学与技术、电子信息科学与技术专业同时成功申报省级一流专业；艾瑞深中国校友会网本科专业排行榜显示，电子信息科学与技术、计算机科学与技术为六星级专业，，电气工程及其自动化、软件工程为五星级专业，电子信息科学与技术专业、计算机科学与技术专业、数据科学与大数据技术专业学科水平为A+。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >电气学院师资力量雄厚，拥有一支职称学历较高、年龄结构合理、教学与实践经验丰富的教师队伍。师资主要来自香港城市大学、香港大学、日本埼玉大学、英国帝国理工、澳洲皇家墨尔本大学、荷兰格罗宁根大学、清华大学、中科院大学、中山大学、华南理工大学、北京航空航天大学、北京邮电大学等知名院校，以及深圳华为技术有限公司、TCL集团、网易、腾讯、百度等著名IT行业单位。现有专任教师共87人，其中特聘教授9人，教授8人，副教授14人，高级工程师11人，讲师29人，助教16人；博士24人；双师型教师38人，为学院的长远发展提供了有力的支撑。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >学院十分重视科学研究与教学研究工作，且取得较大的突破。截至目前，申报科研项目共141项，包括：成功申报国家级自然科学青年基金项目1个；国际专业认证专业1个（计算机科学与技术）；省级科研项目、教学改革项目、质量工程项目共32个，包括广东省一流专业2个（电子信息科学与技术、计算机科学与技术），广东省普通高校重点科研平台，广东省电子信息技术综合实验教学示范中心，广东省战略性新兴产业特色专业，广东省重点专业（电子信息科学与技术、，广东省电子信息工程人才培养教学团队（电子信息科学与技术），广东省重点学科培育项目（计算机科学与技术），广东省民办教育专项建设专业（计算机科学与技术），广东省课程思政示范团队（程序设计及应用课程思政示范团队），广东省课程教研室（程序设计及应用课程教研室），广东省人才培养模式创新实验区项目，广东省大学生实践教学基地项目2个、广东省精品课程项目（信号与系统）等；市级科研项目8个；校级项目89个。教学与科研经费累计930余万元。教师发表学术论文共220篇，其中SCI论文85篇，EI论文65篇。学院教师根据教学需求和日常使用实际情况，研制了电气与可编程控制实验装置和数字电路实验箱，取得较好的教学成果。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >学院办学水平不断提高，在专任教师和行业兼职教师指导下，学生积极参加各类学科竞赛，获得学科竞赛奖项达400多项，获省级以上学科竞赛奖230余项，大学生创新创业项目289项（国家级31项，省级135项）；师生发表核心论文59篇、专利软件著作权147项。共有60余人选择继续深造并考取国内外知名高校硕士研究生。毕业生就业前景良好，深受用人单位和家长好评，社会认可度高。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >电气学院紧跟信息技术与工程发展趋势，努力向更辉煌的明天迈进。现面向海内外高校以及相关行业诚聘有志于从事高校教学、科研、产学研工作的人才加入我们！</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 20px"
                  ><strong>二、招聘需求</strong></span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <strong
                  ><span style="font-size: 18px">（一）基本条件</span></strong
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >1.遵纪守法，品行良好，爱岗敬业，身心健康；</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >2.热爱教育事业，具有严谨的治学精神和良好的职业道德；</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >3.具有履行相应岗位职责需要的理论水平和专业知识；</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >4.具有较强的沟通协调能力，团队合作和开拓创新精神，工作踏实、责任心强；</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >5.对本校文化认同度高，具有较强的大局意识与服务意识。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <strong
                  ><span style="font-size: 18px">（二）招聘需求</span></strong
                >
              </p>
              <p
                style="
                  line-height: 180%;
                  text-indent: 2em;
                  font-size: 14pt;
                  text-align: center;
                "
              >
                <img
                  src="../images/article/人才招聘.png"
                  title=""
                  alt="image.png"
                />
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <strong
                  ><span style="font-size: 18px; text-indent: 2em"
                    >（三）招聘程序</span
                  ></strong
                ><br />
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >1.受理报名时间：报名从本公告发布之日起，采取邮件报名方式。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >2.资格审查：根据应聘者的学历、业务能力及综合素质，结合招聘基本条件和岗位要求确定面试人员，通知面试。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px">3.面试方式：面试。</span>
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >4.组织考察：对入选者进行组织考察。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px">5.确定拟录用人员。</span>
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >6.聘用：由学校人事处负责办理聘用手续。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <strong style="font-size: 14pt; text-indent: 2em"
                  ><span style="font-size: 18px"><br /></span
                ></strong>
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 20px"></span
                ><span style="font-size: 20px"
                  ><strong>三、薪酬福利</strong></span
                ><br />
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <strong><span style="font-size: 18px">（一）</span></strong
                ><span style="font-size: 18px"
                  ><strong>引进人才的基本待遇</strong></span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >1.具有高校或科研院所工作经历的博士或应届博士。学术思想活跃，富有创新精神，具有国际化学术视野，身心健康，能从事教学科研一线工作，胜任应聘专业课程讲授及科研任务。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >根据应聘人员的经历及业绩，提供富有竞争力的薪资，一人一议，上不封顶。中青年博士年薪30-60万元（含单位承担的社会保险和住房公积金），同时提供安家费10万元，科研启动经费文科类最低5万元，理工类最低10万元。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >2.行业人才。能够胜任应聘专业课程的讲授工作，具有开展产学研用的潜力，且满足下列条件之一：</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px">（1）博士；</span>
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >（2）具有5年以上行业经验的硕士。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >根据应聘人员的经历及业绩，提供富有竞争力的薪资，博士待遇参照人才类别1待遇执行；行业人才硕士待遇按不低于学校讲师待遇执行。学校专门设置教学应用型教师，可以通过产学研用成果，按照应用型教师职称评审标准申报高级职称。</span
                >
              </p>
              <p
                style="
                  text-indent: 37.3333px;
                  line-height: 180%;
                  font-size: 14pt;
                "
              >
                <span style="font-size: 18px; text-indent: 2em"
                  >3.优秀硕士。根据应聘人员的经历及业绩，提供富有竞争力的薪资，年薪14万元起（含单位承担的社会保险和住房公积金）。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <strong style="font-size: 14pt; text-indent: 2em"
                  ><span style="font-size: 18px"
                    >（二）引进人才其它福利待遇</span
                  ></strong
                ><br />
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >1.协助高层次人才申请广州市人才绿卡，协助办理人事档案挂靠及落户广州事宜；</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >2.学校通过人才提升计划对教学、科研、社会服务成果优异者提供支持和奖励；</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >3.引进人才子女可就读附近著名小学；</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px">4.提供校内教师公寓租住；</span>
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px">5.享受寒暑假探亲路费报销；</span>
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >6.提供每年一次免费健康检查；</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >7.享受工会福利，校内设“教职工之家”，免费提供教职工休闲、娱乐、健身场所;</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px">8.提供工作日用餐补贴。</span>
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"><br /></span>
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 20px"
                  ><strong>四、报名方式</strong></span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >报名从本公告发布之日起至2022年12月31日止。报名采取邮件报名方式。应聘者需提供以下材料：</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <a
                  href="https://www.nfu.edu.cn/docs/2022-04/81fe7b7b921345db913adab25ffc373f.doc"
                  style="text-decoration: underline; font-size: 18px"
                  rel="nofollow"
                  ><strong
                    ><span style="font-size: 18px"
                      >（一）《广州南方学院师资人才应聘自荐表》（可点击下载）；</span
                    ></strong
                  ></a
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <a
                  href="https://www.nfu.edu.cn/docs/2022-04/5bf25dd83d934675a149261fe83b702d.xlsx"
                  style="text-decoration: underline; font-size: 18px"
                  rel="nofollow"
                  ><strong
                    ><span style="font-size: 18px"
                      >（二）《广州南方学院教职员招录信息登记表》（可点击下载）。</span
                    ></strong
                  ></a
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <strong
                  ><span style="font-size: 18px">（三）其他附件：</span></strong
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px">1.身份证的扫描件；</span>
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >2.已获得各级学历、学位证书的扫描件；</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >3.职称证书、职（执）业资格证书的扫描件（如无，则不提供）；</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >4.岗前培训证书、教师资格证书的扫描件（如无，则不提供）；</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >5.成绩单的扫描件（应届毕业生需提供）；</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >6.反映教学、学术成果和论文等目录复印件（原件备查，博士毕业生提供博士论文详细摘要）。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"><br /></span>
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >请填写上述自荐表、登记表连同其他附件（压缩包形式，文件不大于50M）发送至招聘邮箱nfrecruit@nfu.edu.cn。邮件主题和附件压缩包命名格式为：姓名（应聘院系-学历-毕业高校-专业）。</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >联系人：020-61787289（刘老师），020-61787160（林老师）</span
                >
              </p>
              <p style="line-height: 180%; text-indent: 2em; font-size: 14pt;text-align:left">
                <span style="font-size: 18px"
                  >通信地址：广州市从化区温泉镇温泉大道882号（510970）</span
                >
              </p>
            </article>

            <hr /></div
        ></el-main>
      </el-container>
    </el-container>
    
  </div>
  
</template>

<script>
export default {};
</script>

<style>
.col-md-10 col-sm-9 main-content {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  line-height: 1.42857143;
  color: #333;
  font-size: 14px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: STHei, "Microsoft YaHei", "寰蒋闆呴粦", "鍗庢枃榛戜綋",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  min-height: 1px;
  float: left;
  width: 83.33333333%;
  padding-left: 50px;
  padding-right: 20px;
  background-color: white;
  padding-top: 20px;
}

.title-bar {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  line-height: 1.42857143;
  color: #333;
  font-size: 14px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: STHei, "Microsoft YaHei", "寰蒋闆呴粦", "鍗庢枃榛戜綋",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding-top: 10px;
}

.breadcumb {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  line-height: 1.42857143;
  box-sizing: border-box;
  margin: 0;
  font-family: STHei, "Microsoft YaHei", "寰蒋闆呴粦", "鍗庢枃榛戜綋",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #f3f3f3;
  border-radius: 4px;
  padding: 0.8em 1.5em;
  margin-left: -5px;
  color: #000;
}
.artcle {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  line-height: 1.42857143;
  color: #333;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0;
  font-family: STHei, "Microsoft YaHei", "寰蒋闆呴粦", "鍗庢枃榛戜綋",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: block;
  margin: 15px 0px;
}

.artcle p{
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: #333;
    box-sizing: border-box;
    padding: 0;
    font-family: STHei, "Microsoft YaHei", "寰蒋闆呴粦", "鍗庢枃榛戜綋", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0 0 10px;
    line-height: 180%;
    text-indent: 2em;
    font-size: 14pt;

}

</style>