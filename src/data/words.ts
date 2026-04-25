// 基础单词数据
const baseWords = [
  {
    word: 'abandon',
    phonetic: '/əˈbændən/',
    meaning: '放弃；抛弃',
    example: 'He decided to abandon the project.',
    exampleTranslation: '他决定放弃这个项目。',
    difficulty: 'easy',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'ability',
    phonetic: '/əˈbɪləti/',
    meaning: '能力；才能',
    example: 'She has the ability to solve complex problems.',
    exampleTranslation: '她有能力解决复杂的问题。',
    difficulty: 'easy',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'able',
    phonetic: '/ˈeɪbl/',
    meaning: '能够；有能力的',
    example: 'I am able to swim.',
    exampleTranslation: '我会游泳。',
    difficulty: 'easy',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'abroad',
    phonetic: '/əˈbrɔːd/',
    meaning: '在国外；到国外',
    example: 'She went abroad for further study.',
    exampleTranslation: '她出国深造了。',
    difficulty: 'easy',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'absent',
    phonetic: '/ˈæbsənt/',
    meaning: '缺席的；不在场的',
    example: 'He was absent from class yesterday.',
    exampleTranslation: '他昨天没上课。',
    difficulty: 'easy',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'abnormal',
    phonetic: '/æbˈnɔːməl/',
    meaning: '反常的；不正常的',
    example: 'His behavior is abnormal.',
    exampleTranslation: '他的行为不正常。',
    difficulty: 'medium',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'aboard',
    phonetic: '/əˈbɔːd/',
    meaning: '在船(车)上；上船',
    example: 'They went aboard the ship.',
    exampleTranslation: '他们上了船。',
    difficulty: 'medium',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'above',
    phonetic: '/əˈbʌv/',
    meaning: '在…上面；高于',
    example: 'The sun rose above the horizon.',
    exampleTranslation: '太阳升到了地平线以上。',
    difficulty: 'easy',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'absence',
    phonetic: '/ˈæbsəns/',
    meaning: '缺席；不在场；缺乏',
    example: 'His absence was noticed.',
    exampleTranslation: '他的缺席引起了注意。',
    difficulty: 'medium',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'absolute',
    phonetic: '/ˈæbsəluːt/',
    meaning: '绝对的；纯粹的',
    example: 'He has absolute power.',
    exampleTranslation: '他拥有绝对权力。',
    difficulty: 'medium',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'absolutely',
    phonetic: '/ˈæbsəluːtli/',
    meaning: '完全地；绝对地',
    example: 'I absolutely agree with you.',
    exampleTranslation: '我完全同意你的看法。',
    difficulty: 'medium',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'absorb',
    phonetic: '/əbˈzɔːb/',
    meaning: '吸收；使专心',
    example: 'The sponge absorbs water.',
    exampleTranslation: '海绵吸收水。',
    difficulty: 'medium',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'abstract',
    phonetic: '/ˈæbstrækt/',
    meaning: '抽象的；摘要',
    example: 'This is an abstract concept.',
    exampleTranslation: '这是一个抽象概念。',
    difficulty: 'hard',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'abundant',
    phonetic: '/əˈbʌndənt/',
    meaning: '丰富的；大量的',
    example: 'The area has abundant resources.',
    exampleTranslation: '这个地区资源丰富。',
    difficulty: 'medium',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'abuse',
    phonetic: '/əˈbjuːz/',
    meaning: '滥用；虐待',
    example: 'Drug abuse is a serious problem.',
    exampleTranslation: '药物滥用是一个严重的问题。',
    difficulty: 'medium',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'academic',
    phonetic: '/ˌækəˈdemɪk/',
    meaning: '学术的；教学的',
    example: 'He has an academic background.',
    exampleTranslation: '他有学术背景。',
    difficulty: 'medium',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'academy',
    phonetic: '/əˈkædəmi/',
    meaning: '学院；研究院',
    example: 'She studies at the academy of art.',
    exampleTranslation: '她在艺术学院学习。',
    difficulty: 'medium',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'accelerate',
    phonetic: '/əkˈseləreɪt/',
    meaning: '加速；促进',
    example: 'The car accelerated quickly.',
    exampleTranslation: '汽车加速很快。',
    difficulty: 'hard',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'accent',
    phonetic: '/ˈæksent/',
    meaning: '口音；重音',
    example: 'He has a British accent.',
    exampleTranslation: '他有英国口音。',
    difficulty: 'medium',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'accept',
    phonetic: '/əkˈsept/',
    meaning: '接受；同意',
    example: 'I accept your invitation.',
    exampleTranslation: '我接受你的邀请。',
    difficulty: 'easy',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  },
  {
    word: 'acceptable',
    phonetic: '/əkˈseptəbl/',
    meaning: '可接受的；合意的',
    example: 'The proposal is acceptable.',
    exampleTranslation: '这个提议是可接受的。',
    difficulty: 'medium',
    status: 'new',
    reviewCount: 0,
    nextReview: null
  }
];

// 新增的四级单词
const cet4Words = [
  { word: "abandon", phonetic: "/əˈbændən/", pos: "vt.", meaning: "放弃，抛弃；放任" },
  { word: "ability", phonetic: "/əˈbɪləti/", pos: "n.", meaning: "能力，才能" },
  { word: "able", phonetic: "/ˈeɪbl/", pos: "adj.", meaning: "能够的，有能力的" },
  { word: "abnormal", phonetic: "/æbˈnɔːrməl/", pos: "adj.", meaning: "反常的，不正常的" },
  { word: "aboard", phonetic: "/əˈbɔːrd/", pos: "adv.", meaning: "在船（飞机、车）上；上船" },
  { word: "abolish", phonetic: "/əˈbɑːlɪʃ/", pos: "vt.", meaning: "废除，取消" },
  { word: "abortion", phonetic: "/əˈbɔːrʃn/", pos: "n.", meaning: "流产；堕胎" },
  { word: "about", phonetic: "/əˈbaʊt/", pos: "prep./adv.", meaning: "关于；大约；到处" },
  { word: "above", phonetic: "/əˈbʌv/", pos: "prep./adv.", meaning: "在……上方； above all 首先" },
  { word: "abroad", phonetic: "/əˈbrɔːd/", pos: "adv.", meaning: "在国外；到海外" },
  { word: "absence", phonetic: "/ˈæbsəns/", pos: "n.", meaning: "缺席；缺乏" },
  { word: "absent", phonetic: "/ˈæbsənt/", pos: "adj.", meaning: "缺席的；心不在焉的" },
  { word: "absolute", phonetic: "/ˈæbsəluːt/", pos: "adj.", meaning: "绝对的；完全的" },
  { word: "absorb", phonetic: "/əbˈzɔːrb/", pos: "vt.", meaning: "吸收；吸引（注意力）" },
  { word: "abstract", phonetic: "/ˈæbstrækt/", pos: "adj./n.", meaning: "抽象的；摘要" },
  { word: "abundant", phonetic: "/əˈbʌndənt/", pos: "adj.", meaning: "丰富的，充裕的" },
  { word: "abuse", phonetic: "/əˈbjuːs/", pos: "vt./n.", meaning: "滥用；虐待；辱骂" },
  { word: "academic", phonetic: "/ˌækəˈdemɪk/", pos: "adj./n.", meaning: "学术的；大学生" },
  { word: "accept", phonetic: "/əkˈsept/", pos: "vt.", meaning: "接受；认可" },
  { word: "access", phonetic: "/ˈækses/", pos: "n./vt.", meaning: "进入；使用权；接近" },
  { word: "accident", phonetic: "/ˈæksɪdənt/", pos: "n.", meaning: "事故；意外" },
  { word: "accommodate", phonetic: "/əˈkɑːmədeɪt/", pos: "vt.", meaning: "容纳；提供住宿；适应" },
  { word: "accompany", phonetic: "/əˈkʌmpəni/", pos: "vt.", meaning: "陪伴；伴随；伴奏" },
  { word: "accomplish", phonetic: "/əˈkɑːmplɪʃ/", pos: "vt.", meaning: "完成；实现" },
  { word: "account", phonetic: "/əˈkaʊnt/", pos: "n./v.", meaning: "账户；解释；占（比例）" },
  { word: "accurate", phonetic: "/ˈækjərət/", pos: "adj.", meaning: "准确的，精确的" },
  { word: "accuse", phonetic: "/əˈkjuːz/", pos: "vt.", meaning: "指责，控告" },
  { word: "achieve", phonetic: "/əˈtʃiːv/", pos: "vt.", meaning: "实现；取得（成就）" },
  { word: "acid", phonetic: "/ˈæsɪd/", pos: "n./adj.", meaning: "酸；酸性的" },
  { word: "acknowledge", phonetic: "/əkˈnɑːlɪdʒ/", pos: "vt.", meaning: "承认；致谢" },
  { word: "acquire", phonetic: "/əˈkwaɪər/", pos: "vt.", meaning: "获得；学到（知识、技能）" },
  { word: "across", phonetic: "/əˈkrɔːs/", pos: "prep./adv.", meaning: "穿过；横过" },
  { word: "act", phonetic: "/ækt/", pos: "v./n.", meaning: "行动；扮演；法案" },
  { word: "action", phonetic: "/ˈækʃn/", pos: "n.", meaning: "行动；作用" },
  { word: "active", phonetic: "/ˈæktɪv/", pos: "adj.", meaning: "积极的；活跃的" },
  { word: "activity", phonetic: "/ækˈtɪvəti/", pos: "n.", meaning: "活动；活跃" },
  { word: "actor", phonetic: "/ˈæktər/", pos: "n.", meaning: "男演员；参与者" },
  { word: "actress", phonetic: "/ˈæktrəs/", pos: "n.", meaning: "女演员" },
  { word: "actual", phonetic: "/ˈæktʃuəl/", pos: "adj.", meaning: "实际的；真实的" },
  { word: "adapt", phonetic: "/əˈdæpt/", pos: "v.", meaning: "适应；改编" },
  { word: "add", phonetic: "/æd/", pos: "v.", meaning: "增加；补充说" },
  { word: "addict", phonetic: "/ˈædɪkt/", pos: "n./v.", meaning: "上瘾者；使上瘾" },
  { word: "addition", phonetic: "/əˈdɪʃn/", pos: "n.", meaning: "加法；增加物；in addition 另外" },
  { word: "address", phonetic: "/əˈdres/", pos: "n./v.", meaning: "地址；演讲；处理" },
  { word: "adequate", phonetic: "/ˈædɪkwət/", pos: "adj.", meaning: "足够的；适当的" },
  { word: "adjust", phonetic: "/əˈdʒʌst/", pos: "v.", meaning: "调整；适应" },
  { word: "administration", phonetic: "/ədˌmɪnɪˈstreɪʃn/", pos: "n.", meaning: "管理；行政部门" },
  { word: "admire", phonetic: "/ədˈmaɪər/", pos: "vt.", meaning: "钦佩；赞美" },
  { word: "admit", phonetic: "/ədˈmɪt/", pos: "vt.", meaning: "承认；准许进入" },
  { word: "adopt", phonetic: "/əˈdɑːpt/", pos: "vt.", meaning: "采用；收养" },
  { word: "adult", phonetic: "/ˈædʌlt/", pos: "n./adj.", meaning: "成年人；成年的" },
  { word: "advance", phonetic: "/ədˈvæns/", pos: "v./n./adj.", meaning: "前进；进步；预先的" },
  { word: "advantage", phonetic: "/ədˈvæntɪdʒ/", pos: "n.", meaning: "优势；好处" },
  { word: "adventure", phonetic: "/ədˈventʃər/", pos: "n.", meaning: "冒险；奇遇" },
  { word: "advertise", phonetic: "/ˈædvərtaɪz/", pos: "v.", meaning: "做广告；宣传" },
  { word: "advertisement", phonetic: "/ədˈvɜːrtɪsmənt/", pos: "n.", meaning: "广告" },
  { word: "advice", phonetic: "/ədˈvaɪs/", pos: "n.", meaning: "建议，忠告（不可数）" },
  { word: "advise", phonetic: "/ədˈvaɪz/", pos: "vt.", meaning: "建议；劝告" },
  { word: "affair", phonetic: "/əˈfer/", pos: "n.", meaning: "事务；事件；恋爱关系" },
  { word: "affect", phonetic: "/əˈfekt/", pos: "vt.", meaning: "影响；感动" },
  { word: "afford", phonetic: "/əˈfɔːrd/", pos: "vt.", meaning: "买得起；承担得起" },
  { word: "afraid", phonetic: "/əˈfreɪd/", pos: "adj.", meaning: "害怕的；担心的" },
  { word: "after", phonetic: "/ˈæftər/", pos: "prep./conj./adv.", meaning: "在……之后" },
  { word: "afternoon", phonetic: "/ˌæftərˈnuːn/", pos: "n.", meaning: "下午" },
  { word: "afterwards", phonetic: "/ˈæftərwərdz/", pos: "adv.", meaning: "后来，以后" },
  { word: "again", phonetic: "/əˈɡen/", pos: "adv.", meaning: "再次；又" },
  { word: "against", phonetic: "/əˈɡenst/", pos: "prep.", meaning: "反对；倚靠；以防" },
  { word: "age", phonetic: "/eɪdʒ/", pos: "n./v.", meaning: "年龄；时代；变老" },
  { word: "agency", phonetic: "/ˈeɪdʒənsi/", pos: "n.", meaning: "代理处；机构" },
  { word: "agenda", phonetic: "/əˈdʒendə/", pos: "n.", meaning: "议程；日程表" },
  { word: "agent", phonetic: "/ˈeɪdʒənt/", pos: "n.", meaning: "代理人；特工" },
  { word: "aggressive", phonetic: "/əˈɡresɪv/", pos: "adj.", meaning: "好斗的；有进取心的" },
  { word: "ago", phonetic: "/əˈɡoʊ/", pos: "adv.", meaning: "以前" },
  { word: "agree", phonetic: "/əˈɡriː/", pos: "v.", meaning: "同意；一致" },
  { word: "agreement", phonetic: "/əˈɡriːmənt/", pos: "n.", meaning: "协议；一致" },
  { word: "agricultural", phonetic: "/ˌæɡrɪˈkʌltʃərəl/", pos: "adj.", meaning: "农业的" },
  { word: "ahead", phonetic: "/əˈhed/", pos: "adv.", meaning: "在前面；提前" },
  { word: "aid", phonetic: "/eɪd/", pos: "n./v.", meaning: "帮助；援助" },
  { word: "aim", phonetic: "/eɪm/", pos: "n./v.", meaning: "目标；瞄准" },
  { word: "air", phonetic: "/er/", pos: "n.", meaning: "空气；空中；神态" },
  { word: "aircraft", phonetic: "/ˈerkræft/", pos: "n.", meaning: "飞机，航空器（单复同形）" },
  { word: "airline", phonetic: "/ˈerlaɪn/", pos: "n.", meaning: "航空公司" },
  { word: "airport", phonetic: "/ˈerpɔːrt/", pos: "n.", meaning: "机场" },
  { word: "alarm", phonetic: "/əˈlɑːrm/", pos: "n./v.", meaning: "警报；惊慌" },
  { word: "album", phonetic: "/ˈælbəm/", pos: "n.", meaning: "相册；专辑" },
  { word: "alcohol", phonetic: "/ˈælkəhɔːl/", pos: "n.", meaning: "酒精；含酒精的饮料" },
  { word: "alert", phonetic: "/əˈlɜːrt/", pos: "adj./n.", meaning: "警觉的；警报" },
  { word: "alien", phonetic: "/ˈeɪliən/", pos: "n./adj.", meaning: "外星人；外国的" },
  { word: "alike", phonetic: "/əˈlaɪk/", pos: "adj./adv.", meaning: "相似的（地）" },
  { word: "alive", phonetic: "/əˈlaɪv/", pos: "adj.", meaning: "活着的；有活力的" },
  { word: "all", phonetic: "/ɔːl/", pos: "det./pron./adv.", meaning: "全部；一切" },
  { word: "allocate", phonetic: "/ˈæləkeɪt/", pos: "vt.", meaning: "分配；拨出" },
  { word: "allow", phonetic: "/əˈlaʊ/", pos: "vt.", meaning: "允许；给予" },
  { word: "ally", phonetic: "/ˈælaɪ/", pos: "n./v.", meaning: "同盟国；联合" },
  { word: "almost", phonetic: "/ˈɔːlmoʊst/", pos: "adv.", meaning: "几乎，差不多" },
  { word: "alone", phonetic: "/əˈloʊn/", pos: "adj./adv.", meaning: "单独的（地）" },
  { word: "along", phonetic: "/əˈlɔːŋ/", pos: "prep./adv.", meaning: "沿着；向前" },
  { word: "already", phonetic: "/ɔːlˈredi/", pos: "adv.", meaning: "已经" },
  { word: "also", phonetic: "/ˈɔːlsoʊ/", pos: "adv.", meaning: "也，而且" },
  { word: "alter", phonetic: "/ˈɔːltər/", pos: "v.", meaning: "改变；修改" },
  { word: "alternative", phonetic: "/ɔːlˈtɜːrnətɪv/", pos: "n./adj.", meaning: "替代方案；可供选择的" },
  { word: "although", phonetic: "/ɔːlˈðoʊ/", pos: "conj.", meaning: "尽管，虽然" },
  { word: "altitude", phonetic: "/ˈæltɪtuːd/", pos: "n.", meaning: "海拔；高度" },
  { word: "altogether", phonetic: "/ˌɔːltəˈɡeðər/", pos: "adv.", meaning: "完全；总共" },
  { word: "always", phonetic: "/ˈɔːlweɪz/", pos: "adv.", meaning: "总是，永远" },
  { word: "amaze", phonetic: "/əˈmeɪz/", pos: "vt.", meaning: "使吃惊" },
  { word: "ambition", phonetic: "/æmˈbɪʃn/", pos: "n.", meaning: "雄心；抱负" },
  { word: "ambulance", phonetic: "/ˈæmbjələns/", pos: "n.", meaning: "救护车" },
  { word: "among", phonetic: "/əˈmʌŋ/", pos: "prep.", meaning: "在……之中（三者以上）" },
  { word: "amount", phonetic: "/əˈmaʊnt/", pos: "n./v.", meaning: "数量；总计" },
  { word: "amuse", phonetic: "/əˈmjuːz/", pos: "vt.", meaning: "逗乐；使发笑" },
  { word: "analyze", phonetic: "/ˈænəlaɪz/", pos: "vt.", meaning: "分析" },
  { word: "ancestor", phonetic: "/ˈænsestər/", pos: "n.", meaning: "祖先；祖宗" },
  { word: "anchor", phonetic: "/ˈæŋkər/", pos: "n./v.", meaning: "锚；支柱" },
  { word: "ancient", phonetic: "/ˈeɪnʃənt/", pos: "adj.", meaning: "古代的；古老的" },
  { word: "and", phonetic: "/ænd/", pos: "conj.", meaning: "和；而且" },
  { word: "anger", phonetic: "/ˈæŋɡər/", pos: "n./v.", meaning: "愤怒；激怒" },
  { word: "angle", phonetic: "/ˈæŋɡl/", pos: "n.", meaning: "角；角度；观点" },
  { word: "angry", phonetic: "/ˈæŋɡri/", pos: "adj.", meaning: "生气的，愤怒的" },
  { word: "animal", phonetic: "/ˈænɪml/", pos: "n.", meaning: "动物" },
  { word: "ankle", phonetic: "/ˈæŋkl/", pos: "n.", meaning: "踝关节" },
  { word: "anniversary", phonetic: "/ˌænɪˈvɜːrsəri/", pos: "n.", meaning: "周年纪念日" },
  { word: "announce", phonetic: "/əˈnaʊns/", pos: "vt.", meaning: "宣布；宣告" },
  { word: "annoy", phonetic: "/əˈnɔɪ/", pos: "vt.", meaning: "使恼怒；打扰" },
  { word: "annual", phonetic: "/ˈænjuəl/", pos: "adj./n.", meaning: "每年的；年刊" },
  { word: "another", phonetic: "/əˈnʌðər/", pos: "det./pron.", meaning: "另一个；再一" },
  { word: "answer", phonetic: "/ˈænsər/", pos: "n./v.", meaning: "回答；答案" },
  { word: "anticipate", phonetic: "/ænˈtɪsɪpeɪt/", pos: "vt.", meaning: "预期；期望" },
  { word: "anxiety", phonetic: "/æŋˈzaɪəti/", pos: "n.", meaning: "焦虑；渴望" },
  { word: "anxious", phonetic: "/ˈæŋkʃəs/", pos: "adj.", meaning: "焦虑的；渴望的" },
  { word: "any", phonetic: "/ˈeni/", pos: "det./pron.", meaning: "任何；一些" },
  { word: "anybody", phonetic: "/ˈenibɑːdi/", pos: "pron.", meaning: "任何人" },
  { word: "anyhow", phonetic: "/ˈenihaʊ/", pos: "adv.", meaning: "无论如何" },
  { word: "anyone", phonetic: "/ˈeniwʌn/", pos: "pron.", meaning: "任何人" },
  { word: "anything", phonetic: "/ˈeniθɪŋ/", pos: "pron.", meaning: "任何事" },
  { word: "anyway", phonetic: "/ˈeniweɪ/", pos: "adv.", meaning: "无论如何；至少" },
  { word: "anywhere", phonetic: "/ˈeniwer/", pos: "adv.", meaning: "任何地方" }
];

// 导入六级单词
import { cet6Words } from './cet6Words';

// 转换新增单词为应用格式
const convertedCet4Words = cet4Words.map(word => {
  // 确定难度级别
  let difficulty = 'medium';
  if (['a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'].includes(word.word.toLowerCase())) {
    difficulty = 'easy';
  } else if (word.word.length > 8) {
    difficulty = 'hard';
  }
  
  return {
    word: word.word,
    phonetic: word.phonetic,
    meaning: word.meaning,
    example: `${word.word} is a word.`,
    exampleTranslation: `${word.word}是一个单词。`,
    difficulty,
    status: 'new',
    reviewCount: 0,
    nextReview: null
  };
});

// 合并并去重
const existingWordsSet = new Set(baseWords.map(w => w.word.toLowerCase()));
const newCet4Words = convertedCet4Words.filter(w => !existingWordsSet.has(w.word.toLowerCase()));

// 转换六级单词为应用格式
const convertedCet6Words = cet6Words.map(word => ({
  word: word.word,
  phonetic: word.phonetic,
  meaning: `${word.pos} ${word.meaning}`,
  example: `${word.word} is a CET-6 vocabulary word.`,
  exampleTranslation: `${word.word}是一个六级词汇。`,
  difficulty: 'hard',
  status: 'new' as const,
  reviewCount: 0,
  nextReview: null as string | null
}));

// 合并所有单词并去重
const allWordsSet = new Set([...existingWordsSet, ...newCet4Words.map(w => w.word.toLowerCase())]);
const newCet6Words = convertedCet6Words.filter(w => !allWordsSet.has(w.word.toLowerCase()));
const allWords = [...baseWords, ...newCet4Words, ...newCet6Words];

export const initialWords = allWords;
