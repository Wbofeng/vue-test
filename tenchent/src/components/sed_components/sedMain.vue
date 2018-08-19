<template>
  <div>
    <el-row>
      <el-col :span="2" :offset="2">
        <br>
        <el-row>
          <el-col :span="6" :offset="2" class="hr"><hr></el-col>
          <el-col :span="8" class="wd1">{{year}}</el-col>
          <el-col :span="6" class="hr"><hr></el-col>
        </el-row>
        <br>
        <el-row class="wd2">
          <el-col :span="24">
            {{month}}/{{day}}
          </el-col>
        </el-row>
        <br>
        <el-cow>
          <el-col :span="24" class="w3">
            {{hour}}:{{min}}
          </el-col>
        </el-cow>
        <br><br><br><br>
        <el-row>
          <el-col :span="24" class="w3">
            光明网
          </el-col>
        </el-row>
        <br><br><br><br><br><br><br><br>
        <el-row>
          <el-col :span="6" :offset="2" class="hr"><hr></el-col>
          <el-col :span="7" class="wd4">分享</el-col>
          <el-col :span="6" class="hr"><hr></el-col>
        </el-row>
        <br><br>
        <el-row>
          <el-col :span="24" class="shape1">
            <a href="http://news.qq.com/">
              <i class="el-icon-star-off shape1"></i>
            </a>
          </el-col>
          <el-col :span="24" class="shape1">
            <a href="http://news.qq.com/">
              <i class="el-icon-share shape1"></i>
            </a>
          </el-col>
          <el-col :span="24" class="shape1">
            <a href="http://news.qq.com/">
              <i class="el-icon-info shape1"></i>
            </a>
          </el-col>
        </el-row>
        <br><br>
        <el-row>
          <el-col :span="6" :offset="2" class="hr"><hr></el-col>
          <el-col :span="7" class="wd4">评论</el-col>
          <el-col :span="6" class="hr"><hr></el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="shape2">
            <a href="http://news.qq.com/">
              <i class="el-icon-edit-outline shape2"></i>
            </a>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="1">
        <hr class="long">
      </el-col>
      <el-col :span="12">
        <el-row style="font-size: 18px; padding-top: 50px;">
          {{t1}}
        </el-row>
        <el-row v-for="text in texts" :key='text.nub' style="font-size: 18px; padding-top: 40px; line-height: 40px;">
          {{text.msg}}
        </el-row>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-row>
          <el-col :span="8">
            <i class="el-icon-minus" style="font-weight: 800;">相关推荐</i>
          </el-col>
          <el-col :span="7" :offset="9" style="text-align: center;">
            <a href="http://news.qq.com/">
              <i class="el-icon-refresh">换一换</i>
            </a>
          </el-col>
        </el-row>
        <el-row>
          <el-col v-for="recommend in recomends" :key="recommend.nub">
            <a href="recommend.href"  target="_blank" class="wd5">
              <img :src="recommend.img" class="picture"><br>
              {{recommend.msg}}
            </a>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: '2018',
      month: '08',
      day: '10',
      hour: '09',
      min: '04',
      t1: '光明网评论员',
      texts:
      [
        {
          nub: 1,
          msg: '最近，颇受关注的日本电影《小偷家族》正在国内院线上映，与此同时，中国青年报刊发了一篇调查报道《偷来的“家”》，其中诸多相似的情节，被网友解读为现实版的“小偷家族”。'
        },
        {
          nub: 2,
          msg: '调查报道呈现的细节是有冲击力的：两名没有血缘的留守儿童，逸出家庭与社会秩序之外，变成了相依为命的兄弟，22岁的“哥哥”偷盗，9岁的“弟弟”销赃，构建了靠偷支撑起来的“家”。两名原本缺乏生活温暖的少年，却在这种关系中寻找到了情感支撑：弟弟害怕销赃，也知道偷东西“是不对的”，但比起这些，他更怕失去这个偷来的“家”，怕失去那个从天而降的“哥哥”；哥哥甚至计划好了，多干几笔，多攒一些钱留给弟弟，然后“离开这个世界”，于是拼命偷盗。'
        },
        {
          nub: 3,
          msg: '曾有某前杂志主编在文章中写道：“什么内容好卖，不是一句能说得清，但什么东西不好卖，大家却有一致共识，只要封面和农村题材沾边的，不管具体讲什么，销量都会大幅下降。”他总结，原因在于谈论这些令人心酸的社会面相，会给以城市中等收入人群为主的杂志读者带来认知错位上的痛楚。这是作者的个人体验，未必具有普遍性，但也是一种提醒，我们应当对社会的边缘群体加以关注与救助。'
        },
        {
          nub: 4,
          msg: '城镇居民乃至一线城市居民主导的网络话语，会无意中有选择性地呈现社会面貌。在舆论场上，大量舆论资源投向买房卖房、时尚打扮、职场心得、明星动向等，这虽是“自然选择”的结果，但也客观上留下了扫视不到暗角。也由此，有网友将社会底层的情形总结为“另一半中国”“隔壁的中国”，概念未必精确，但也某种程度上提示着互联网上有存在的群体失语现象。'
        },
        {
          nub: 5,
          msg: '事实是，这“另一半”或是“隔壁”，并不会因为看不到而不与每个人的生活发生关联。仅以新闻源中的留守儿童为例，根据媒体和公益组织一直引用的数据——我国有6000多万农村留守儿童，后经农村留守儿童摸底排查工作修正为902万人，无论哪个数据，这都是一个庞大的数字。这样一个庞大的群体，他们长期处于教育贫瘠、关爱缺乏、社会规则影响不到的环境，也必然产生由全社会买单的相应后果。正如新闻源中所呈现的，“哥哥”在城市里大肆偷盗，“最疯狂的一夜，连续砸了渭南市区的11辆车”。留守儿童的痛点，很可能演化为社会治理的难点。'
        },
        {
          nub: 6,
          msg: '因此，社会、舆论理当对民生疾苦抱有高度的敏感。最近一段时间以来，出现了数次有关贫苦的关注与讨论：河北女孩考上北大后“感谢贫穷”的言论引发关注，在菜场帮父母干活的“杀鱼弟”服用农药，以及前文所引的偷盗兄弟。类似的关注是必要的，也是应当唤起的。在扶贫成为时代热词的当下，社会认识层面也应当凝聚起对底层群体的救助与打捞共识，让这部分群体以与其人口比重相符的体量浮现于社会话语之中。'
        },
        {
          nub: 7,
          msg: '现实版的“小偷家族”，在民警和学校的帮助下，目前看得到了有力的救助。“哥哥”有警察正尝试与其父母沟通；“弟弟”在民警的多方协调下已经被安排入学，目前来看，正沿着多数孩子的路径成长。从实际情况看，他们所需要的救助未必是不可承受的巨大成本，可能只是正常的义务教育机遇，相关机构的注意，志愿者的帮助。正如办案警察所说：“人的因素是千变万化的，更重要的是从制度上去保障。”关键是如何构建可以及时通达这些群体的保障机制，实现对他们的精准探测，畅通他们的诉求渠道。通过制度兜底，将个体因素导致人生走偏的概率降到最低。'
        },
        {
          nub: 8,
          msg: '而社会舆论对民间疾苦的敏感，正是实现制度改革的起点与支撑，是发现这些群体并理解他们、探讨救助路径的有效办法。'
        }
      ],
      recomends:
      [
        {
          nub: 1,
          href: 'http://news.qq.com/',
          img: require('../../assets/r1.png'),
          msg: '古力娜扎姐姐公布婚讯，国庆举办婚礼，姐夫比张翰还帅'
        },
        {
          nub: 2,
          href: 'http://news.qq.com/',
          img: require('../../assets/r2.png'),
          msg: '张柏芝深夜晒怀孕B超迎接家庭新成员，网友：真生第三胎？'
        },
        {
          nub: 3,
          href: 'http://news.qq.com/',
          img: require('../../assets/r3.png'),
          msg: '6月赴韩中国游客同比增长49% 乐天：大促销吸引中国人'
        },
        {
          nub: 4,
          href: 'http://news.qq.com/',
          img: require('../../assets/r4.png'),
          msg: '被称为“最美琼瑶女郎”的女星，被相爱13年丈夫抛弃，儿子很帅'
        }
      ]
    }
  }
}
</script>

<style scoped>
.el-main {
    background-color: rgb(239, 248, 115);
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 2000px;
}
.wd{
  text-align: center;
}
.wd1{
  padding-left: 2px;
  font-size: 16px;
}
.hr{
  padding-top: 3px;
}
.long{
  width: 1px;
  height: 750px;
  border-top: 1px solid rgba(252, 250, 250, 0.993);
  border-bottom: 1px solid rgb(255, 255, 255);
  border-right: 1px solid rgba(252, 250, 250, 0.993);
}
.wd2{
  font-size: 30px;
  text-align: center;
}
.w3 {
  text-align: center;
  font-size: 16px;
}
.wd4 {
  font-size: 16px;
  text-align: center;
}
.wd5{
  font-size: 15px;
  line-height: 10px;
  text-decoration: none;
  color: #333
}
.shape1{
  text-align: center;
  font-size: 30px;
  padding-right: 5px;
  color: rgba(180, 182, 184, 0.425)
}
.shape2{
  text-align: center;
  font-size: 60px;
  padding-right: 5px;
  color: rgba(180, 182, 184, 0.425)
}
.picture {
  width: 100% !important;
  padding-top: 30px;
}
</style>
