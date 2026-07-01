// ============================================================
// CREATIVE STRATEGY LAB — DATA
// ============================================================

const CL_FLOW = ["Creative Brief","Problem","Observation","Insight","Truths","Tension","Big Idea","Techniques","Copywriting","Execution","Art Direction","Media Context","Evaluation"];

const CL_OVERVIEW = {
  intro: "التفكير الإبداعي في الإعلان ليس مجرد البحث عن شكل بصري جميل. هو عملية منظمة تبدأ من فهم الهدف والمشكلة، ثم قراءة سلوك الجمهور، ثم استخراج Insight، ثم تحويل هذا الفهم إلى Big Idea، وبعدها اختيار التكنيك الإبداعي المناسب، ثم تنفيذ الفكرة بصريًا ولفظيًا بشكل يخدم الرسالة.",
  note: "الفكرة القوية لا تأتي من التكنيك وحده. التكنيك مجرد أداة. أما الفكرة الحقيقية فهي نتيجة فهم واضح + Insight قوي + Big Idea بسيطة + تنفيذ مناسب."
};

const CL_BRIEF = {
  intro: "قبل ما نفكر في إعلان أو تصميم، لازم نعرف الهدف. الفكرة الإبداعية لا تتحرك في الفراغ. هي دائمًا مرتبطة بهدف واضح.",
  question: "ما المطلوب من الإعلان؟",
  goals: ["تعريف الناس بمنتج جديد؟","زيادة المبيعات؟","تغيير صورة ذهنية؟","بناء حب للبراند؟","دفع العميل لاتخاذ قرار؟","شرح ميزة؟","إعادة تقديم منتج قديم بشكل جديد؟","خلق تفاعل؟","تحويل سلوك؟","زيادة الثقة؟","جعل المنتج أسهل في الفهم؟","تمييز المنتج وسط منافسين شبه بعض؟"],
  mapping: [
    {goal:"Awareness", note:"الفكرة لازم تكون سهلة التذكر"},
    {goal:"Conversion", note:"الفكرة لازم تدفع العميل للفعل"},
    {goal:"Repositioning", note:"الفكرة لازم تكسر perception قديم"},
    {goal:"Launch", note:"الفكرة لازم تبني فضول واهتمام"},
    {goal:"Trust", note:"الفكرة لازم تطمّن الجمهور وتثبت الوعد"},
    {goal:"Engagement", note:"الفكرة لازم تفتح مساحة مشاركة أو تفاعل"}
  ],
  note: "الـ Creative Brief هو البوصلة. من غيره، ممكن تعمل تنفيذ جميل لكنه لا يخدم أي هدف.",
  coreQuestion: "ما الذي نريد من الجمهور أن يفهمه أو يشعر به أو يفعله بعد رؤية الإعلان؟",
  checklist: ["ما الهدف؟","من الجمهور؟","ما المشكلة؟","ما الرسالة الأساسية؟","ما التصرف المطلوب؟","ما القيد الأساسي؟","ما الشعور الذي نريد تركه؟"]
};

const CL_PROBLEM = {
  intro: "المشكلة هي نقطة البداية الحقيقية بعد تحديد الهدف. لازم تسأل: الإعلان ده بيحاول يحل إيه؟",
  list: ["الناس مش فاهمة المنتج","الناس مش حاسة بقيمته","الناس بتنسى تكمل الشراء","السوق مليان منافسين شبه بعض","المنتج عنده perception سلبي","المنتج مميزته مش باينة","الجمهور مش واخد قرار","الجمهور شايف إن كل المنتجات في الكاتيجوري شبه بعض","الجمهور لا يصدق الوعد","الجمهور متعود على حل قديم","المنتج جيد لكن غير مثير","الرسالة معقدة","المنتج محتاج يتشرح بطريقة أبسط"],
  note: "المشكلة مش لازم تكون مشكلة ضخمة. أحيانًا تكون مجرد عائق صغير في ذهن العميل.",
  examples: [
    "منتج تنظيف قوي، لكن الناس شايفة كل المنظفات زي بعض. المشكلة هنا مش المنتج، المشكلة إن الفرق مش محسوس.",
    "ناس بتحط منتجات في الكارت ومتكملش الشراء. المشكلة مش إن المنتج وحش، المشكلة إن قرار الشراء اتأجل.",
    "منتج صحي، لكن الناس شايفة الصحي معناه طعم أقل. المشكلة هنا perception عن الفئة."
  ],
  coreQuestion: "إيه اللي مانع الجمهور يتحرك؟",
  rule: "لو المشكلة مش واضحة، الفكرة هتبقى عشوائية."
};

const CL_OBSERVATION = {
  intro: "الـ Observation هي حاجة بتلاحظها في سلوك الناس أو السوق. هي مش Insight لسه. هي مجرد ملاحظة واضحة.",
  coreQuestion: "الناس بتعمل إيه؟",
  examples: ["الناس بتحط هدوم على الكرسي.","الناس بتشرب قهوة أول ما تصحى.","الناس بتسيب منتجات في الكارت.","الناس بتفتح التلاجة حتى وهي عارفة إن مفيش حاجة جديدة.","الناس بتحب تحتفظ بآخر نقطة كاتشب أو صوص.","الناس بتقارن بين المنتجات حتى لو الفرق بسيط.","الناس بتشتري أحيانًا لأن المنتج منتشر وليس لأنها درست كل البدائل."],
  notYet: "لكن لسه ما جاوبناش: ليه بيعملوا كده؟ وهنا نبدأ ندخل على الـ Insight.",
  qualities: ["حقيقية","سهلة الملاحظة","مرتبطة بالسلوك","يمكن البناء عليها","ليست رأيًا شخصيًا فقط"]
};

const CL_INSIGHT = {
  intro: "الـ Insight هو الفهم العميق اللي ورا السلوك. هو مش معلومة. هو مش feature. هو مش statistic. هو مش وصف مباشر.",
  definition: "الـ Insight هو حقيقة إنسانية الناس تحسها وتقول: آه والله صح.",
  comparisons: [
    {observation:"الناس بتحط هدوم على الكرسي.", insight:"الكرسي في البيت مش دايمًا بيتعامل ككرسي، ساعات بيتحول لمساحة مؤقتة للفوضى."},
    {observation:"الناس بتشرب قهوة الصبح.", insight:"القهوة مش بس مشروب، هي إحساس إن اليوم بدأ وإن الشخص رجع يشتغل."},
    {observation:"الناس بتسيب منتجات في الكارت.", insight:"المنتج مش مرفوض، هو بس لسه عالق بين الرغبة والقرار."},
    {observation:"الناس بتحب منتجات معينة لأنها منتشرة.", insight:"الناس أحيانًا لا تشتري المنتج لأنه الأفضل فقط، بل لأنه يقلل إحساس المخاطرة في القرار."},
    {observation:"الناس بتتضايق من البقع على الملابس.", insight:"المشكلة ليست في البقعة نفسها فقط، بل في الإحراج الذي تسببه أمام الآخرين."}
  ],
  qualities: ["بسيط","إنساني","حقيقي","مش مباشر زيادة","فيه فرصة إعلانية","يخلي الناس تقول \"فعلاً\"","يفتح باب لفكرة أو حملة","يكشف دافع وراء السلوك","قابل للتحويل إلى فكرة بصرية أو لفظية"],
  test: "اختبار سريع: لو الجملة مجرد وصف لسلوك، فهي Observation. لو الجملة بتفسّر الدافع وراء السلوك، فهي Insight.",
  rule: "Insight قوي بدون تنفيذ جيد يفضل فكرة على الورق. تنفيذ جميل بدون Insight يفضل مجرد شكل."
};

const CL_TRUTHS = {
  intro: "الـ Truths هي الحقائق التي تبني عليها الفكرة. مش كل فكرة تبدأ من نفس النوع من الحقيقة.",
  product: {
    def: "Product Truth هي الحقيقة الفعلية عن المنتج أو الخدمة.",
    list: ["ميزة","خامة","سعر","سرعة","قوة","راحة","حجم","نتيجة","طريقة استخدام","ضمان","توصيل","سهولة","شكل","تكنولوجيا","مكوّن","جودة"],
    examples: ["ماوس وزنه 60g.","منظف يزيل الدهون بسرعة.","كرسي فيه دعم للظهر."],
    note: "لكن Product Truth لوحدها مش كفاية. لو قلتها بشكل مباشر، هتبقى وصف منتج مش فكرة إعلان. لازم تربطها بحاجة إنسانية.",
    formula: "Product Truth = What the product does | Human Truth = Why people care | Creative Idea = The emotional bridge between them",
    example: {pt:"الشامبو يزيل القشرة.", ht:"الناس مش بتخاف من القشرة نفسها، بتخاف من الإحراج الاجتماعي.", direction:"مش بس شعر أنظف، ثقة أكتر قدام الناس."}
  },
  human: {
    def: "Human Truth هي الحقيقة اللي جوه الجمهور — السبب النفسي أو العاطفي أو الاجتماعي اللي يخلي ميزة المنتج مهمة.",
    examples: ["الناس بتحب تحس إن قرارها الشرائي ذكي.","الناس بتحب تحس إن بيتها مرتب حتى لو مش دايمًا مرتب.","الشخص مش بيشتري الراحة فقط، هو بيشتري إحساس إنه يستحق الراحة.","الناس لا تخاف من المشكلة نفسها فقط، بل من شكلها قدام الآخرين.","الناس تريد حلولًا تقلل المجهود وتزيد الإحساس بالسيطرة.","الناس تحب المنتج الذي يجعل حياتها أسهل بدون ما يطلب منها تفكير كتير.","الناس تحب أن تشعر أنها اختارت صح.","الناس تحب أن تسبق المشكلة قبل ما تحصل.","الناس أحيانًا تشتري الإحساس وليس المنتج فقط."],
    combos: [
      {pt:"الماوس خفيف.", ht:"اللاعب عايز يحس إن إيده أسرع وأسهل.", direction:"ماوس يخليك تتحرك أسرع بدون مقاومة."},
      {pt:"منظف يزيل البقع.", ht:"الناس لا تريد فقط ملابس نظيفة، بل تريد تجنب الإحراج والظهور بشكل مرتب.", direction:"تنظيف يحافظ على صورتك قبل ما يحافظ على القماش."}
    ]
  },
  category: {
    def: "Category Truth دي مش حقيقة عن منتج معين، دي حقيقة عن الكاتيجوري كلها — فهم عن طريقة الناس في التعامل مع نوع كامل من المنتجات.",
    examples: ["كل الكراسي في البيت ممكن تتحول لحامل هدوم.","كل منتجات التنظيف بتقول إنها قوية، فالمهم إنك تثبت النتيجة بصريًا.","كل شركات الشحن بتقول إنها سريعة، فلازم تلاقي طريقة تبين السرعة بدل ما تقولها.","كل أنواع الكاتشب بتتساب منها آخر نقطة، والناس بتحاول تطلعها.","كل منتجات الدايت بتوعد بالخفة، لكن الناس تبحث عن إحساس إنها مش محرومة.","كل براند يقول إنه الأفضل، لذلك الجمهور يحتاج دليل أو زاوية مختلفة.","كل المنتجات التقنية مليانة مواصفات، لكن العميل يريد معنى المواصفات في حياته."],
    question: "ما الحقيقة التي يعرفها الناس عن هذه الفئة، لكن نادرًا ما يقولها الإعلان؟"
  },
  cultural: {
    def: "Cultural Truth دي حقيقة مرتبطة بالمجتمع أو الزمن أو العادات أو الثقافة. تخلي الإعلان قريب من الناس، مش بس مفهوم لكنه حاسس بيهم.",
    examples: ["القهوة مرتبطة ببداية اليوم.","رمضان مرتبط باللمة.","الجمعة مرتبطة بالراحة.","الأم في الإعلانات العربية مرتبطة بالعطاء والبيت والاهتمام.","في بعض الثقافات، البيت المرتب يعكس صورة الشخص.","بعض المشتريات لا تكون فقط للاستخدام، بل لإظهار الذوق أو المكانة.","أحيانًا الناس لا تشتري المنتج لأنها تحتاجه فقط، بل لأنها تريد الانتماء لترند أو أسلوب حياة.","الناس في أوقات معينة تشتري بسبب موسم أو مناسبة أو عادة اجتماعية."],
    question: "ما الذي يؤمن به الجمهور أو يمارسه داخل ثقافته ويمكن للفكرة أن تبني عليه؟"
  }
};

const CL_TENSION = {
  intro: "أي فكرة قوية غالبًا فيها صراع. الصراع هو وجود رغبتين عكس بعض.",
  examples: ["عايز أكل حلو، بس مش عايز أتخن.","عايز منتج قوي، بس مش عايز أدفع كتير.","عايز أرتاح، بس لازم أخلص شغل.","عايز أكمل الطلب، بس لسه متردد.","عايز أبان طبيعي، بس عندي مشكلة محرجة.","عايز حاجة سهلة، بس مش عايز أحس إني اخترت حل رخيص.","عايز أتميز، بس مش عايز أبان مبالغ.","عايز أشتري بسرعة، بس خايف أندم.","عايز أفضل منتج، بس مش عايز أقعد أقارن كتير."],
  note: "الصراع بيخلق دراما. من غير صراع، الإعلان ممكن يبقى مجرد عرض. الصراع يدي الفكرة طاقة، لأنه يخلي المنتج أو الرسالة يدخلوا كحل لتوتر حقيقي.",
  question: "إيه التوتر اللي جوا العميل؟ لو لقيته، هتلاقي الفكرة.",
  extraction: ["ماذا يريد الجمهور؟","ما الذي يمنعه؟","ما الخوف الخفي؟","ما الرغبة المضادة؟","ما التردد؟","ما الشيء الذي لا يقوله بصراحة؟"]
};

const CL_BIGIDEA = {
  intro: "الـ Big Idea هي الجملة أو الفكرة المركزية اللي الإعلان كله قايم عليها. هي مش مجرد Hook. هي منصة ممكن تطلع منها كذا تنفيذ.",
  qualities: ["بسيطة","واضحة","قابلة للتمدد","فيها معنى","مبنية على Insight","قابلة للتنفيذ بصريًا","تتحمل أكتر من Execution","تتلخص في جملة واحدة","تفتح عالم بصري","تفضل مفهومة حتى لو اتشالت التفاصيل","تشتغل على أكتر من قناة","فيها وعد أو موقف أو زاوية","قابلة للتكرار بدون ما تمل"],
  examples: [
    {name:"You're Not You When You're Hungry", note:"دي Big Idea لأنها ممكن تتحول لمئات الإعلانات."},
    {name:"Just Do It", note:"دي مش جملة تحفيزية بس، دي موقف كامل من الحياة."},
    {name:"Think Small", note:"دي مش بس عنوان، دي طريقة تفكير ضد السائد في سوق السيارات وقتها."},
    {name:"Real Beauty", note:"دي ليست مجرد حملة عن الجمال، بل إعادة تعريف لفكرة الجمال."}
  ],
  test: "لو الفكرة ماتنفعش تتحول لـ 5 إعلانات مختلفة، فهي غالبًا مش Big Idea… دي Execution.",
  coreQuestion: "الـ Big Idea بتجاوب على: هنقول إيه؟",
  diffExamples: [
    {bigIdea:"الجوع يغيّر شخصيتك.", execution:"شخص مشهور يظهر بشخصية مختلفة لأنه جعان."},
    {bigIdea:"الجمال الحقيقي أوسع من معايير الإعلانات.", execution:"نساء عاديات بدل موديلز في الإعلان."},
    {bigIdea:"المنتج ينقل العميل من الرغبة إلى الفعل.", execution:"منتج يظهر كأنه قريب من الواقع لكنه ما زال في الكارت."}
  ]
};

const CL_FAMILIES = [
  {key:"reframing",     ar:"تغيير الزاوية",   en:"Reframing",           desc:"تقنيات بتغيّر طريقة فهم المشكلة أو السلوك."},
  {key:"association",   ar:"الربط والاستعارة", en:"Association",       desc:"تقنيات بتربط المنتج أو الرسالة بشيء آخر معروف."},
  {key:"amplification", ar:"التكبير والمبالغة", en:"Amplification",    desc:"تقنيات بتكبّر الميزة أو النتيجة أو الإحساس."},
  {key:"structural",    ar:"بناء الرسالة",    en:"Structural",         desc:"تقنيات بتنظم الفكرة في شكل واضح."},
  {key:"story",         ar:"القصة والتحول",   en:"Story",              desc:"تقنيات بتتعامل مع الإعلان كرحلة أو شخصية أو سلوك."},
  {key:"craft",         ar:"البساطة الذكية",  en:"Craft & Simplicity", desc:"تقنيات تركز على إثبات الفكرة أو اختصارها أو تقديمها بذكاء."}
];

const CL_TECHNIQUES = [
{id:"flip-narrative", family:"reframing", nameEn:"Flipping the Narrative", nameAr:"قلب السرد",
 explanation:"يعني تاخد شيء سلبي أو محرج أو عادي وتقلبه لزاوية جديدة. بدل ما تهرب من السلبية، تستخدمها لصالحك.",
 meaning:"إعادة تفسير نفس الحقيقة من زاوية مختلفة. الحاجة اللي كانت عيب أو مشكلة تتحول إلى مدخل إبداعي أو كوميدي أو إنساني.",
 when:["عندك perception سلبي","عندك عادة محرجة","عندك مشكلة ممكن تتعاد صياغتها","عايز كوميديا ذكية","عايز تحول نقطة ضعف لمدخل إبداعي","عايز تخلي الجمهور يعيد التفكير في حكمه الأول"],
 example:"لو الناس شايفة إن الجوع بيخلي الشخص عصبي، Snickers قلبتها إلى: أنت مش أنت وإنت جعان. السلبية هنا مش عيب، بقت مدخل كوميدي لفهم المنتج.",
 why:"لأنه يخلّي الجمهور يشوف نفس الحقيقة من زاوية جديدة، وده بيخلق مفاجأة ذكية. الجمهور لا يشعر أن الإعلان يدافع عن نفسه، بل يشعر أنه فاهم الحقيقة وبيستخدمها بذكاء.",
 searchExamples:["Snickers — You're Not You When You're Hungry","Diesel — Be Stupid","Burger King — Moldy Whopper","Dove — Real Beauty","Patagonia — Don't Buy This Jacket"],
 searchKeywords:["flipping the narrative advertising examples","reframing negative insight advertising","negative perception turned campaign","advertising reframing examples","brands turning weakness into strength campaign","counterintuitive advertising campaign"],
 notice:"لاحظ إن الحملة مبتخبيش الانطباع السلبي. بتستخدمه كنقطة بداية، وبعدين بتحوله لزاوية إبداعية لا تُنسى."},

{id:"negative-approach", family:"reframing", nameEn:"Negative Approach", nameAr:"عكس الفكرة",
 explanation:"يعني بدل ما تعرض فائدة المنتج، تعرض الحياة من غيره.",
 meaning:"بدل ما تقول \"المنتج مفيد\"، بتعرض نتيجة غيابه. الفائدة تظهر من خلال المشكلة التي تحدث عندما لا يكون الحل موجودًا.",
 when:["المنتج فائدته واضحة لكن محتاجة إحساس","عايز توري المشكلة بدل ما تشرح الحل","عايز تخلق خوف بسيط أو كوميديا من غياب المنتج","عايز تخلي الجمهور يشعر بقيمة الحل","لما تكون المشكلة أقوى بصريًا من الحل"],
 example:"لو مفيش لبن، إيه اللي يحصل؟ Got Milk? من أشهر الأمثلة. أو: لو التوصيل مش سريع، الحاجة توصل بعد ما الفرصة تخلص.",
 why:"لأن غياب الحل أحيانًا يشرح قيمته أقوى من وجوده. الجمهور يفهم أهمية المنتج من خلال تصور الحياة بدونه.",
 searchExamples:["Got Milk?","Dumb Ways to Die","WWF environmental ads","Anti smoking print ads","Don't Drink and Drive campaigns","Save Paper / Save Trees campaigns"],
 searchKeywords:["negative approach advertising examples","absence of product advertising examples","what if advertising campaign","problem without solution ad examples","negative consequence print ads","fear appeal advertising examples"],
 notice:"لاحظ إزاي قيمة المنتج أو الرسالة بتبقى أوضح لما الإعلان يوري اللي بيحصل من غيره."},

{id:"paradox", family:"reframing", nameEn:"Paradox", nameAr:"المفارقة",
 explanation:"يعني تعمل عكس المتوقع. موقف ضد المنطق، لكنه يخدم الفكرة.",
 meaning:"المفارقة تعتمد على كسر المنطق المعتاد. توري موقف يبدو غلط أو مستحيل أو معاكس للطبيعة، ثم تكشف أن وراءه معنى.",
 when:["المنتج يغير السلوك","المشكلة تقلب الشخصية","عايز صدمة ذكية","عايز كوميديا","عايز تكسر المنطق المعتاد","عايز تخلي المشاهد يسأل \"ليه؟\""],
 example:"الحمار الوحشي يجري ورا الأسد. أو شخص مش بيتصرف كطبيعته لأنه جعان. المفارقة تشد الانتباه لأن العقل يسأل: ليه ده بيحصل؟ وبعدين الإعلان يجاوب.",
 why:"لأن العقل يتوقف عند الشيء غير المنطقي، ثم يبحث عن تفسير. هذه اللحظة تجعل الإعلان قابلًا للتذكر.",
 searchExamples:["Snickers — You're Not You When You're Hungry","Diesel — Be Stupid","Volkswagen — Lemon","The Economist print ads","Skittles strange advertising","Old Spice absurd ads"],
 searchKeywords:["paradox advertising examples","contradiction in advertising examples","unexpected twist print ads","absurd advertising examples","strange but clever ads","paradox print campaign"],
 notice:"لاحظ إزاي الصورة أو الرسالة بتحس إنها غلط الأول، وبعدين تبقى منطقية أول ما تفهم الفكرة."},

{id:"visual-twist", family:"reframing", nameEn:"Visual Twist", nameAr:"التحول المفاجئ في المعنى",
 explanation:"الصورة تبدأ عادية، ثم تفصيلة تغير فهمك.",
 meaning:"التصميم يكون له قراءة أولى بسيطة، ثم يظهر عنصر أو ظل أو انعكاس أو تفصيلة تقلب المعنى.",
 when:["عايز إعلان ذكي يتفهم بعد ثانية","عايز تكشف معنى مخفي","عايز تخلي المشاهد يشارك في فهم الفكرة","عايز تعمل لحظة اكتشاف","عايز إعلان الناس ترجع تبص عليه مرة تانية"],
 example:"تشوف مشهد عادي، لكن الظل أو الانعكاس يكشف المعنى. أو: الصورة تبدو إيجابية، ثم تكتشف إنها تحذير.",
 why:"لأنه يخلق لحظة اكتشاف، والناس تفتكر لحظة الاكتشاف أكتر من الشرح المباشر.",
 searchExamples:["Jeep — See Whatever You Want To See","The Economist print ads","Harvey Nichols — Sorry I Spent It On Myself","Burger King — Moldy Whopper","WWF twist print ads","Amnesty International optical illusion ads"],
 searchKeywords:["visual twist advertising examples","unexpected reveal ads","clever twist print ads","hidden meaning advertising examples","optical illusion advertising campaign","ads with visual reveal"],
 notice:"لاحظ لحظة الاكتشاف. القراءة الأولى للصورة بسيطة، وبعدين تفصيلة واحدة بتقلب المعنى كله."},

{id:"metaphor", family:"association", nameEn:"Metaphor", nameAr:"الاستعارة / التشبيه",
 explanation:"يعني تعبّر عن المنتج من خلال شيء تاني معروف.",
 meaning:"الميتافور يستعير معنى من شيء معروف ويضعه على المنتج. بدل ما تشرح الميزة، تجعل المشاهد يفهمها من خلال علاقة بصرية أو لفظية.",
 when:["عايز تشرح ميزة بشكل بصري","عايز تختصر الكلام","فيه علاقة قوية بين المنتج ورمز معروف","عايز إعلان بسيط لكنه ذكي","عايز تخلي المشاهد يربط المعنى بنفسه"],
 example:"بدل ما تقول \"المنتج حار\"، توري زجاجة كاتشب شبه طفاية حريق. بدل ما تقول \"التكييف بارد\"، تربطه بدب قطبي أو ثلج. رموز شائعة: الصبّار = ذقن خشنة، طفاية الحريق = حرارة، الأسد = قوة، الجليد = برودة.",
 why:"لأنه ينقل معنى معقد عن طريق صورة مألوفة. العقل يفهم التشبيه أسرع من الشرح.",
 searchExamples:["Heinz Hot Ketchup Fire Extinguisher","Nivea Men Cactus Beard Ad","WWF Tree Lungs","McDonald's WiFi Fries","FedEx China Australia Ad","Lego Imagine ads"],
 searchKeywords:["visual metaphor advertising examples","metaphor print ads","creative visual metaphor campaign","product metaphor advertising","famous metaphor ads","Cannes Lions visual metaphor ads"],
 notice:"لاحظ إزاي الإعلان بيستعير معنى من شيء تاني عشان يشرح فايدة المنتج من غير شرح مباشر."},

{id:"visual-analogy", family:"association", nameEn:"Visual Analogy", nameAr:"التشبيه البصري المباشر",
 explanation:"قريب من الميتافور، لكنه أوضح وأسهل.",
 meaning:"الـ Analogy بيقول ببساطة: المنتج ده يشبه الشيء ده في الوظيفة أو الإحساس. الميتافور ممكن يكون أعمق، أما الـ Visual Analogy فهو أوضح وأكثر مباشرة.",
 when:["عايز رسالة سريعة جدًا","المنتج له وظيفة واضحة","الجمهور محتاج يفهم من أول نظرة","عايز تربط المنتج بحاجة مألوفة جدًا","عايز إعلان سهل القراءة"],
 example:"مكيف = دب قطبي. منظف = ممحاة. كريم للذقن الخشنة = صبّار. علكة منعشة = ثلج أو رياح باردة.",
 why:"لأنه يحوّل وظيفة المنتج لصورة مباشرة وسهلة. المشاهد لا يحتاج مجهود كبير لفهم العلاقة.",
 searchExamples:["Nivea Men Cactus Beard","Mentos freshness ads","Colgate dental floss food ads","Duracell power ads","Panasonic nose hair trimmer ads","Oral-B dental care ads"],
 searchKeywords:["visual analogy advertising examples","product analogy ads","analogy print advertising examples","object analogy in advertising","visual comparison analogy ads","advertising analogy examples"],
 notice:"لاحظ إزاي الصورة بتسهّل وظيفة المنتج بمقارنته بحاجة مألوفة جدًا."},

{id:"symbolism", family:"association", nameEn:"Symbolism", nameAr:"الرمزية",
 explanation:"يعني تستخدم رمز بدل شرح طويل.",
 meaning:"الرمز يحمل معنى أكبر من شكله. بدل ما تشرح القوة أو الأمان أو الخطر أو الحرية، تستخدم رمز مفهوم يوصل المعنى بسرعة. رموز شائعة: الأسد=قوة، القفل=أمان، الساعة=سرعة أو وقت، الظل=حقيقة مخفية، الجسر=اتصال، النار=حرارة أو خطر، الثلج=برودة، المرآة=لمعان، الطريق=رحلة.",
 when:["عايز تختصر معنى كبير","عايز إعلان بسيط لكنه عميق","الرسالة معنوية أو إنسانية","المنتج مرتبط بإحساس وليس وظيفة فقط","عايز تعمل إعلان قابل للتأويل لكن مفهوم"],
 example:"لو المنتج عن الأمان، استخدم رمز القفل. لو المنتج عن القوة، استخدم الأسد. لو الرسالة عن الوقت، استخدم الساعة.",
 why:"لأن الرموز مختصرة ومعروفة. هي تنقل معنى كبير بدون شرح طويل.",
 searchExamples:["WWF environmental symbol ads","Amnesty International symbolic print ads","Apple 1984","Dove Real Beauty Sketches","Nike equality campaigns","Greenpeace symbolic ads"],
 searchKeywords:["symbolism in advertising examples","symbolic print ads","visual symbols in advertising","advertising visual symbolism","symbolic campaign examples","social awareness symbolic ads"],
 notice:"لاحظ إزاي رمز بسيط بيحمل معنى كبير: خطر، قوة، أمان، حرية، جمال، وقت، أو مسؤولية."},

{id:"visual-similarity", family:"association", nameEn:"Visual Similarity / Visual Link", nameAr:"الربط أو التماثل البصري",
 explanation:"يعني تستخدم شبه بصري بين عنصرين.",
 meaning:"التكنيك يعتمد على وجود تشابه في الشكل بين شيئين مختلفين. هذا التشابه يخلق رابطًا ذكيًا بين المنتج والمعنى.",
 when:["فيه شبه واضح بين المنتج وشيء آخر","عايز إعلان بصري سريع","عايز فكرة تعتمد على الشكل","عايز تخلي المشاهد يربط بنفسه","المنتج له شكل مميز يمكن استغلاله"],
 example:"بطاطس ماكدونالدز شبه إشارة WiFi. شجرة على شكل رئة. مقعد KitKat شبه قطعة شوكولاتة. كوب قهوة يشبه منبه.",
 why:"لأن العقل يحب الربط بين الأشكال. عندما يلاحظ التشابه، يشعر بذكاء الفكرة.",
 searchExamples:["McDonald's WiFi Fries","WWF Tree Lungs","KitKat Bench Ads","Nescafe Alarm Clock Mug","FedEx arrow logo","McDonald's fries crosswalk"],
 searchKeywords:["visual similarity advertising examples","object similarity ads","visual association print ads","shape similarity advertising","clever visual link ads","visual connection advertising examples"],
 notice:"لاحظ إزاي الإعلان بيستخدم شبه في الشكل بين حاجتين عشان يعمل ربط ذهني سريع."},

{id:"shadow-metaphor", family:"association", nameEn:"Shadow Metaphor", nameAr:"استعارة الظل",
 explanation:"يعني الظل يكشف معنى مش ظاهر في الجسم نفسه.",
 meaning:"العنصر الظاهر يقول شيء، لكن ظله يقول الحقيقة الأعمق. الظل هنا يصبح وسيلة لكشف القوة أو الخطر أو المستقبل أو الشخصية الداخلية.",
 when:["عايز تكشف قوة داخلية","عايز توضح خطر مخفي","عايز تظهر تأثير مستقبلي","عايز تعرض معنى ورا الشكل","عايز تستخدم طريقة بصرية ذكية ومختصرة"],
 example:"شخص عادي، ظله أسد. سيجارة، ظلها مسدس. منتج صغير، ظله بطل خارق.",
 why:"لأن الظل بطبيعته مرتبط بالمعنى الخفي. المشاهد يفهم أن الحقيقة ليست في الشيء الظاهر فقط.",
 searchExamples:["Anti smoking shadow gun ad","WWF shadow ads","Jeep See Whatever You Want To See","Lego Imagine shadow ads","FedEx shadow ads","Save the Children shadow print ads"],
 searchKeywords:["shadow metaphor advertising examples","shadow print ads creative","advertising with shadows","hidden meaning shadow ads","shadow visual metaphor ads","creative shadow campaign"],
 notice:"لاحظ إزاي الظل بيكشف الحقيقة أو الخطر أو التأثير المخفي ورا الشيء الظاهر."},

{id:"visual-exaggeration", family:"amplification", nameEn:"Visual Exaggeration", nameAr:"المبالغة البصرية",
 explanation:"يعني تكبر الميزة بصريًا.",
 meaning:"تأخذ ميزة حقيقية وتعرضها بشكل أكبر من الواقع: أسرع، أقوى، أضخم، أنظف، أخف، ألمع.",
 when:["المنتج له ميزة قابلة للتكبير بصريًا","عايز توصل الإحساس بسرعة","الميزة عادية لو اتقالت بالكلام","عايز تعمل إعلان لافت للنظر","عايز تجعل الفرق واضح جدًا"],
 example:"شركة شحن تحط تيكيت شحن على أشياء ضخمة جدًا عشان تقول إنها تقدر تشحن أي حاجة. أو: مكنسة تسحب كل شيء بشكل مبالغ فيه. أنواعها: مبالغة في الحجم، السرعة، القوة، أو التأثير.",
 why:"لأن المبالغة تجعل الميزة محسوسة. بدل ما تقول \"قوي\"، تجعل القوة تُرى.",
 searchExamples:["DHL giant package ads","Miele vacuum cleaner ads","BIC razor billboard","FedEx fast delivery ads","Mini Cooper giant shopping bag ad","Volkswagen parking assist ads"],
 searchKeywords:["visual exaggeration advertising examples","exaggerated product benefit ads","hyperbole print ads","giant object advertising","extreme scale advertising examples","oversized product print ads"],
 notice:"لاحظ إزاي فايدة المنتج اتعملها تكبير بصري ليبقى أضخم أو أسرع أو أقوى من الواقع."},

{id:"outcome-exaggeration", family:"amplification", nameEn:"Visual Outcome Exaggeration", nameAr:"المبالغة في نتيجة الاستخدام",
 explanation:"هنا مش بتبالغ في المنتج نفسه. بتبالغ في اللي يحصل بعد استخدامه.",
 meaning:"تضخّم أثر المنتج بعد الاستخدام. النتيجة تصبح مبالغ فيها لتوضيح قوة المنتج.",
 when:["المنتج له نتيجة واضحة","النتيجة أهم من المنتج نفسه","عايز تثبت الفائدة بصريًا","المنتج مرتبط بتنظيف أو لمعان أو سرعة أو حماية","عايز تجعل النتيجة لا تُنسى"],
 example:"منظف زجاج ينضف لدرجة إن الطيور تخبط في الزجاج. الرسالة: الزجاج نضيف جدًا. دي أقوى من إنك تقول \"ينظف الزجاج بفعالية\".",
 why:"لأن الجمهور يرى النتيجة بدل ما يسمع الوعد. المبالغة تجعل الأثر واضحًا ومضحكًا أو صادمًا.",
 searchExamples:["Windex bird glass ad","Mr. Clean ads","Vanish stain removal ads","Tide cleaning ads","Colgate white teeth ads","Finish dishwasher clean glass ads"],
 searchKeywords:["outcome exaggeration advertising examples","exaggerated product result ads","clean glass bird ad","cleaning product print ads exaggeration","before after cleaning ads","product result visual exaggeration"],
 notice:"لاحظ إزاي الإعلان بيبالغ في النتيجة بعد استخدام المنتج، مش في المنتج نفسه."},

{id:"hyperbole", family:"amplification", nameEn:"Intangible Exaggeration / Hyperbole", nameAr:"المبالغة المجازية الخارقة",
 explanation:"دي مبالغة مستحيلة أو شبه خيالية، لكنها بتشرح الإحساس.",
 meaning:"تعرض إحساسًا غير ملموس من خلال سيناريو مستحيل أو سريالي. هي لا تقول إن هذا سيحدث حرفيًا، بل تقول إن هذا هو الإحساس.",
 when:["الفائدة شعورية أو غير ملموسة","المنتج يعطي إحساسًا يصعب تصويره مباشرة","عايز كوميديا أو عالم سريالي","عايز إعلان قابل للتذكر","عايز تبالغ في الإحساس وليس النتيجة الواقعية"],
 example:"ورنيش يلمّع الجزمة لدرجة تشوف نفسك فيها كأنها مراية. أو علكة تخلي النفس بارد كأنه عاصفة تلج. أو مشروب طاقة يديك أجنحة.",
 why:"لأن الإحساس المجرد يصبح مشهدًا. الجمهور يفهم المقصود حتى لو السيناريو مستحيل.",
 searchExamples:["Red Bull Gives You Wings","Old Spice — The Man Your Man Could Smell Like","Axe Effect ads","Orbit Gum fresh breath ads","Mentos freshness campaigns","Lynx / Axe angels campaign"],
 searchKeywords:["hyperbole advertising examples","intangible benefit advertising","exaggerated feeling ads","impossible scenario advertising","surreal advertising examples","emotional exaggeration ads"],
 notice:"لاحظ إزاي الإعلان بيستخدم سيناريو مستحيل أو مبالغ فيه عشان يعبّر عن إحساس، مش نتيجة واقعية."},

{id:"comparison", family:"structural", nameEn:"Comparison", nameAr:"المقارنة البصرية",
 explanation:"يعني توضح الفرق بين حالتين.",
 meaning:"تضع حالتين جنب بعض أو في علاقة واضحة: قبل وبعد، مع وبدون، قديم وجديد، منتج ومنتج، مشكلة وحل.",
 when:["عايز الفرق يتفهم فورًا","المنتج أفضل من بديل واضح","عندك نتيجة قبل وبعد","عايز تبسط قرار الاختيار","عايز تبرز التحول"],
 example:"باب كبير قبل التخسيس، وباب صغير بعده. أنواعها: Before/After, With/Without, Old/New, Product A/Product B, Problem/Solution.",
 why:"لأن المقارنة تقلل الجهد الذهني. المشاهد يرى الفرق بدل ما يقرأه.",
 searchExamples:["Weight Watchers Doors Ad","Mac vs PC Campaign","Pepsi vs Coca-Cola Halloween Ad","Dove Evolution","Whiskas Big Cat Small Cat","Burger King vs McDonald's comparison ads"],
 searchKeywords:["visual comparison advertising examples","before after print ads","product comparison ads","side by side advertising examples","with without advertising examples","comparison campaign examples"],
 notice:"لاحظ إزاي الفرق بين الحالتين بيبان فورًا. المقارنة الجيدة المفروض تتفهم في ثانية واحدة."},

{id:"pas", family:"structural", nameEn:"Problem / Agitate / Solution", nameAr:"المشكلة / تضخيم الإحساس / الحل",
 explanation:"ده Framework إعلاني مهم جدًا.",
 meaning:"تعرض المشكلة، ثم تكبّر الإحساس بها، ثم تقدم الحل. الترتيب: 1) اعرض المشكلة 2) كبّر الإحساس بيها 3) قدم الحل.",
 when:["الجمهور يشعر بمشكلة واضحة","المنتج يحل ألم أو إحراج","عايز إعلان مباشر ومقنع","عايز تحرك العميل من الوعي إلى الفعل","المشكلة تحتاج دراما أو كوميديا"],
 example:"المشكلة: بطارية الموبايل بتخلص. Agitate: بتخلص وأنت برا وفي وقت مهم. Solution: باور بانك سريع. الـ Agitation مش لازم يبقى تخويف، ممكن يبقى كوميدي أو درامي أو واقعي.",
 why:"لأنه يبني احتياجًا قبل تقديم الحل. المشاهد يشعر بالمشكلة، ثم يصبح الحل منطقيًا.",
 searchExamples:["Head & Shoulders dandruff ads","Ariel stain ads","Dettol germ ads","Sensodyne tooth sensitivity ads","Listerine bad breath ads","Raid insect killer ads"],
 searchKeywords:["problem agitation solution ads","PAS advertising examples","problem solution print ads","problem benefit solution ads","pain point advertising examples","agitate solution copywriting ads"],
 notice:"لاحظ إزاي الإعلان بيعرض المشكلة الأول، وبعدين بيكبّر الإحساس بيها، وبعد كده بس بيقدم الحل."},

{id:"cause-effect", family:"structural", nameEn:"Cause & Effect", nameAr:"السبب والنتيجة",
 explanation:"يعني توري علاقة مباشرة: استخدم المنتج ← حصلت النتيجة.",
 meaning:"يركز الإعلان على العلاقة بين الفعل والنتيجة. المنتج يكون السبب، والنتيجة تكون واضحة بصريًا أو لفظيًا.",
 when:["المنتج له نتيجة مباشرة","عايز توضح فائدة بسرعة","عايز تثبت أثر الاستخدام","الفكرة لا تحتاج دراما كبيرة","المنتج عملي ووظيفي"],
 example:"استخدم منظف ← البقعة اختفت. استخدم علكة ← النفس بقى منعش. استخدم منتج حماية ← الشيء بقي آمن. الفرق عن PAS: PAS فيه دراما مشكلة وحل، Cause & Effect أوضح وأكثر مباشرة.",
 why:"لأنه يقدم منطق بسيط وسريع: هذا ما يحدث عندما تستخدم المنتج.",
 searchExamples:["Ariel stain removal ads","Duracell long lasting battery ads","Red Bull Gives You Wings","Sensodyne sensitivity ads","Febreze odor removal ads","Tide before after stain ads"],
 searchKeywords:["cause and effect advertising examples","product benefit visual ads","result based advertising","before and result ads","product effect print ads","usage result advertising"],
 notice:"لاحظ العلاقة المباشرة بين استخدام المنتج والنتيجة الظاهرة."},

{id:"missing-piece", family:"structural", nameEn:"Missing Piece", nameAr:"القطعة الناقصة",
 explanation:"تظهر مشهد شبه مكتمل، لكن فيه فراغ واضح. المنتج هو اللي يكمل الصورة.",
 meaning:"التصميم يخلق إحساسًا بأن هناك شيئًا ناقصًا. المشاهد يشعر بالاحتياج قبل أن يقرأ الشرح.",
 when:["المنتج يكمل تجربة أو نظام","عايز تخلق احتياج بصري","عايز توضح أن الحياة أو المشهد ناقص بدون المنتج","المنتج جزء من مجموعة أو روتين","عايز إعلان بسيط ومباشر"],
 example:"مكتب كامل ناقصه كرسي. وجبة ناقصها صوص. غرفة ناقصها إضاءة. بازل ناقصه قطعة.",
 why:"لأنه يخلق توتر بصري بسيط. العقل يحب اكتمال الأشياء، فيشعر بقيمة القطعة الناقصة.",
 searchExamples:["Lego missing brick ads","IKEA missing piece campaign","McDonald's missing fries ads","Spotify missing music ads","puzzle piece advertising examples","missing ingredient food ads"],
 searchKeywords:["missing piece advertising examples","incomplete visual advertising","visual gap advertising","missing product ad examples","incomplete setup ads","puzzle metaphor advertising"],
 notice:"لاحظ إزاي الصورة بتخلق إحساس بالنقصان قبل ما الكوبي يشرح أي حاجة."},

{id:"visual-story", family:"story", nameEn:"Visual Story", nameAr:"القصة البصرية",
 explanation:"يعني الإعلان يحكي رحلة.",
 meaning:"الفكرة لا تظهر في لقطة واحدة فقط، بل في تسلسل: بداية، تطور، نتيجة.",
 when:["المنتج له رحلة استخدام","الخدمة تمر بخطوات","عايز كاروسيل أو فيديو","عايز توضح تجربة كاملة","عايز تبني قصة بدل ميزة واحدة"],
 example:"طلب المنتج ← تجهيز الطلب ← الشحن ← وصوله ← استخدامه. ممكن يكون لقطة واحدة فيها بداية ونتيجة، كاروسيل، فيديو، أو سلسلة صور.",
 why:"لأن الناس تتذكر القصص أكثر من المعلومات. كل مشهد ينقل المعنى خطوة للأمام.",
 searchExamples:["Amazon delivery story ads","DHL delivery journey ads","IKEA assembly story ads","Apple Shot on iPhone stories","FedEx delivery campaign","Google Year in Search"],
 searchKeywords:["visual storytelling advertising examples","product journey campaign","storytelling ads examples","sequential advertising campaign","carousel storytelling ads","brand story visual campaign"],
 notice:"لاحظ إزاي كل مشهد أو عنصر بيقدّم القصة خطوة. لو خطوة معندهاش معنى، مفروض متكونش موجودة."},

{id:"transformation", family:"story", nameEn:"Transformation", nameAr:"التحول",
 explanation:"يعني توري الحالة قبل وبعد التحول.",
 meaning:"المنتج أو البراند ينقل الحالة من A إلى B. قبل: فوضى، تعب، ضعف، بطء، ملل. بعد: ترتيب، راحة، قوة، سرعة، متعة.",
 when:["المنتج يغير حالة واضحة","عندك قبل وبعد","عايز تبرز نتيجة كبيرة","عايز إعلان ملهم أو درامي","عايز توري أثر المنتج على الحياة أو الشكل أو الإحساس"],
 example:"غرفة فوضوية تتحول إلى غرفة منظمة. شخص متوتر يتحول إلى شخص واثق. منتج قديم يتحول لتجربة حديثة.",
 why:"لأن التحول يعطي إحساسًا بالإنجاز. الناس تحب رؤية الانتقال من مشكلة إلى نتيجة.",
 searchExamples:["Dove Evolution","IKEA room makeover ads","Old Spice rebrand campaign","Nike transformation ads","Before after fitness ads","Home renovation before after campaigns"],
 searchKeywords:["transformation advertising examples","before after transformation ads","product transformation campaign","makeover advertising examples","transformation print ads","brand transformation campaign"],
 notice:"لاحظ الانتقال الواضح من حالة A لحالة B، والمنتج أو البراند لازم يكون سبب التغيير."},

{id:"ritual-behavior", family:"story", nameEn:"Ritual / Behavior", nameAr:"العادة والسلوك",
 explanation:"ده مصدر قوي جدًا للـ Insights. بدل ما تبدأ من المنتج، ابدأ من عادة الناس.",
 meaning:"تبني الفكرة على سلوك حقيقي ومتكرر في حياة الجمهور. الإعلان هنا لا يخترع موقفًا، بل يلتقط عادة موجودة.",
 when:["المنتج مرتبط بروتين يومي","عندك عادة اجتماعية أو شخصية واضحة","عايز إعلان قريب من الناس","عايز Insight حقيقي","عايز الجمهور يقول \"أنا بعمل كده فعلًا\""],
 example:"شرب القهوة صباحًا. فتح التلاجة بدون سبب. ترك الملابس على الكرسي. تجميع المنتجات في الكارت. سماع أغاني معينة في وقت معين.",
 why:"لأن السلوك الحقيقي بيدي إعلان حقيقي. الجمهور يشعر أن الإعلان يراه ويفهم حياته.",
 searchExamples:["Spotify Wrapped","KitKat Have a Break","Nescafe morning ritual ads","IKEA everyday life campaigns","Netflix binge watching campaigns","Starbucks morning coffee campaigns"],
 searchKeywords:["consumer behavior insight ads","ritual advertising examples","everyday behavior advertising","morning coffee ritual campaign","habit based advertising examples","human behavior advertising campaign"],
 notice:"لاحظ إزاي الفكرة بتبدأ من سلوك حقيقي متكرر، مش من ميزة في المنتج."},

{id:"product-hero", family:"story", nameEn:"Product as Hero / Character", nameAr:"المنتج كبطل أو شخصية",
 explanation:"يعني المنتج مش مجرد عنصر في الإعلان. المنتج هو الشخصية الرئيسية.",
 meaning:"تتعامل مع المنتج كأنه بطل المشهد، أو له دور درامي، أو شخصية قائدة للفكرة.",
 when:["المنتج شكله مميز","عايز تدي المنتج شخصية","عايز إعلان بصري قوي حول المنتج","المنتج هو محور التجربة","عايز تبني علاقة عاطفية مع المنتج"],
 example:"بطارية كأنها بطل طاقة. منتج تنظيف كأنه منقذ. مشروب طاقة كأنه بيحرر الشخص. ماكينة حلاقة كأنها أداة خارقة.",
 why:"لأنه يحول المنتج من شيء صامت إلى شخصية لها دور. ده يخلي المنتج أسهل في التذكر.",
 searchExamples:["M&M's characters","Michelin Man","Duracell Bunny","Mr. Clean","Red Bull animated ads","Cheetos Chester Cheetah"],
 searchKeywords:["product as hero advertising examples","brand character advertising","product character campaign","mascot advertising examples","anthropomorphic brand ads","product personality advertising"],
 notice:"لاحظ إزاي المنتج أو البراند بيبقى الشخصية الرئيسية بدل ما يتعرض كمجرد شيء."},

{id:"personification", family:"story", nameEn:"Personification", nameAr:"التجسيد",
 explanation:"يعني تعطي شيء غير عاقل صفات بشرية.",
 meaning:"تجعل المنتج أو المشكلة أو الفائدة تتصرف كإنسان: تتكلم، تزعل، تفرح، تهرب، تتخانق، تساعد.",
 when:["المنتج أو المشكلة صعبة الشرح","الموضوع محرج","عايز كوميديا","عايز تبسيط","عايز تجعل شيء غير مرئي قابل للفهم","عايز شخصية محبوبة للحملة"],
 example:"منتج يتكلم. شخصية من حلوى. معدة زعلانة. جراثيم بتهاجم. فقاعة بتجري. رائحة كريهة تهرب من المعطر.",
 why:"لأن الإنسان يتعاطف مع الشخصيات. التجسيد يحول الفكرة المجردة إلى مشهد مفهوم.",
 searchExamples:["M&M's characters","Michelin Man","Duracell Bunny","Mr. Clean","Cheetos Chester Cheetah","Geico Gecko"],
 searchKeywords:["personification advertising examples","anthropomorphism advertising","brands using personification","animated product character ads","brand mascot examples","non human character advertising"],
 notice:"لاحظ إزاي الصفات أو المشاعر البشرية بتخلي فكرة أو مشكلة مجردة أسهل في الفهم."},

{id:"demonstration", family:"craft", nameEn:"Demonstration", nameAr:"اعرض، لا تشرح",
 explanation:"من أقوى التكنيكات. بدل ما تقول الميزة، تورّيها.",
 meaning:"الإعلان يثبت الوعد بدل ما يكتفي بقوله. المشاهد يرى الدليل أو التجربة أو النتيجة.",
 when:["المنتج له ميزة قابلة للإثبات","الجمهور يحتاج دليل","عايز تقلل الشك","المنتج عملي أو وظيفي","عايز إعلان قوي بدون كلام كثير"],
 example:"بدل ما تقول \"الغراء قوي\"، توري كرسي متعلق بنقطة غراء. بدل ما تقول \"الزجاج قوي\"، تعمل تجربة حقيقية عليه.",
 why:"التجربة أو العرض بيقفل الشك. المشاهد شاف بنفسه.",
 searchExamples:["3M Security Glass Bus Stop","Volvo Trucks Live Test","Blendtec Will It Blend?","Fevicol ads","Tide stain demonstration","Gorilla Glue demonstration ads"],
 searchKeywords:["product demonstration advertising examples","show don't tell ads","advertising demonstration examples","live product test ads","product proof advertising","famous demo campaigns"],
 notice:"لاحظ إزاي الإعلان بيثبت الادعاء بدل ما يكتفي بقوله بس."},

{id:"replacement", family:"craft", nameEn:"Replacement", nameAr:"الاستبدال الذكي",
 explanation:"يعني تستبدل عنصر مألوف بعنصر تاني غير متوقع، لكن بينهم علاقة.",
 meaning:"تضع شيئًا مكان شيء آخر. هذا الاستبدال يكسر التوقع ويخلق معنى جديد.",
 when:["عايز إعلان ذكي جدًا","عايز تختصر رسالة","في شبه وظيفي أو معنوي بين حاجتين","عايز كسر توقع بصري","عايز المشاهد يربط بين عنصرين"],
 example:"فلفل حار عليه جزء من طفاية حريق. توست عليه ميزان عشان يرمز للدايت أو الخفة. طعام يستبدل جزءًا من أداة لها علاقة بالمعنى.",
 why:"العين تشوف حاجة غريبة، فتقف. العقل يربط، فيفهم.",
 searchExamples:["Heinz Hot Ketchup Fire Extinguisher","Colgate dental floss food ads","Weight Watchers door ad","McDonald's sundial billboard","Mini Cooper shopping bag ad","FedEx object replacement ads"],
 searchKeywords:["visual substitution ads","replacement technique advertising","smart replacement print ads","object replacement advertising examples","visual swap ads","clever substitution campaign"],
 notice:"لاحظ إيه اللي اتستبدل، وليه اتستبدل، وإيه العلاقة اللي بتربط بين العنصرين."},

{id:"visual-pun", family:"craft", nameEn:"Visual Pun", nameAr:"اللعب البصري على الكلمات",
 explanation:"يعني الصورة تلعب على معنى كلمة أو جملة.",
 meaning:"تأخذ كلمة أو عبارة أو اسم منتج وتحولها إلى فكرة بصرية. الفكرة هنا تعتمد على Wordplay بصري.",
 when:["عندك اسم أو عبارة قابلة للعب","عايز فكرة خفيفة وذكية","عايز إعلان سهل الانتشار","المنتج له اسم أو ميزة فيها معنى مزدوج","عايز تربط الكلام بالصورة بذكاء"],
 example:"Hot sauce يتحول لطفاية حريق. Have a break تتحول لكسر بصري. Fresh breath يتحول لرياح أو تلج.",
 why:"لأن الناس تحب اللعب الذكي على المعاني. عندما تتحول الكلمة إلى صورة، تصبح أسهل في التذكر.",
 searchExamples:["McDonald's WiFries","Heinz Hot Ketchup","KitKat Have a Break","Nescafe Alarm Mug","The Economist light bulb ads","FedEx arrow visual pun"],
 searchKeywords:["visual pun advertising examples","wordplay ads","pun based advertising","clever visual wordplay ads","advertising puns examples","visual wordplay print ads"],
 notice:"لاحظ إزاي الإعلان بيحوّل كلمة أو عبارة أو اسم منتج لفكرة بصرية."},

{id:"simplicity", family:"craft", nameEn:"Simplicity", nameAr:"السهل الممتنع",
 explanation:"يعني تختصر الفكرة لدرجة إنها تبان سهلة، لكنها عبقرية.",
 meaning:"إزالة كل الزوائد وترك المعنى في أنقى شكل. البساطة هنا ليست فراغًا، بل دقة.",
 when:["الفكرة قوية كفاية وحدها","عايز إعلان Premium أو ذكي","عايز توصل رسالة بسرعة","عايز تصميم لا يحتاج عناصر كثيرة","عايز الجمهور يشعر أن الفكرة واضحة ومركزة"],
 example:"FedEx arrow. McDonald's fries as WiFi. Think Small. السهل الممتنع بيحتاج: فكرة قوية، حذف كل الزوائد، تنفيذ نظيف، ثقة في الرسالة.",
 why:"لأنه يعطي أكبر معنى بأقل عناصر. الرسالة تكون سهلة القراءة وصعبة النسيان.",
 searchExamples:["FedEx Arrow Logo","McDonald's WiFi Fries","Volkswagen Think Small","Apple Think Different","The Economist red background ads","Nike Just Do It"],
 searchKeywords:["minimal clever ads","simple advertising ideas","smart minimal print advertising","minimalist advertising examples","simple powerful ad campaigns","iconic minimal ads"],
 notice:"لاحظ قد إيه من المعنى بيتوصل بأقل عدد ممكن من العناصر. البساطة هنا مش فراغ، هي دقة."}
];

const CL_COPYWRITING = {
  intro: "الكوبي رايتينج مش زخرفة بتتحط على التصميم آخر لحظة. هو قرار استراتيجي بنفس وزن اختيار الـ Big Idea. كل كلمة في الإعلان لازم تكون واقفة هناك لسبب — إما بتضيف معنى، أو بتقرب الفكرة من الجمهور، أو بتدفعه لفعل. لو الكلمة مش بتعمل حاجة من دول، الأصح إنك تشيلها. الكوبي رايتر المحترف مش بيكتب جمل حلوة، هو بيصمّم أثر: إيه اللي المفروض الجمهور يحسه في اللحظة اللي يقرا فيها السطر ده بالظبط.",
  definitions: [
    {term:"Big Idea", def:"الفكرة أو المنصة التي تحمل الحملة كلها — تفضل تشتغل حتى لو اتغيرت كل الجمل من حواليها."},
    {term:"Headline", def:"الجملة الرئيسية داخل إعلان أو تنفيذ معين — أول حاجة بتقرر هل الجمهور هيكمل يبص ولا لأ."},
    {term:"Subline", def:"جملة توضيحية تدعم الـ Headline من غير ما تكررها أو تشرحها بشكل زايد."},
    {term:"CTA", def:"الفعل المطلوب من الجمهور — لازم يكون فعل واحد واضح، مش اقتراح عام."},
    {term:"Tagline", def:"جملة ثابتة أو طويلة المدى مرتبطة بالبراند، بتتكرر عبر حملات كتير مختلفة."},
    {term:"Voice", def:"طريقة الكلام أو شخصية البراند — هي اللي بتخلي البراند يتعرف حتى لو مسحت اللوجو."},
    {term:"Tone", def:"إزاي الـ Voice بتتلون حسب الموقف — نفس البراند ممكن يكون فرحان في حملة وجاد في تانية، لكن شخصيته الأساسية ثابتة."},
    {term:"Single-minded message", def:"الرسالة الواحدة التي يجب أن تصل — لو حاولت توصل رسالتين في نفس التنفيذ، غالبًا الاتنين هيضيعوا."}
  ],
  proRules: [
    "اكتب الهيدلاين الأول من غير ما تفكر في التصميم — لو الجملة مش قوية لوحدها على ورقة بيضا، مش هينقذها تصميم حلو.",
    "اقرأ الجملة بصوت عالي. لو حسيت إنها متلخبطة وإنت بتقولها، الجمهور هيتلخبط أكتر وهو بيقراها.",
    "امسح كل كلمة ممكن تتشال من غير ما المعنى يتغير. الكوبي القوي عادة أقصر مما تتخيل.",
    "خلي الـ CTA فعل حقيقي (جرب، احجز، اطلب) مش وصف عام (اكتشف عالمنا، عيش التجربة).",
    "لو الصورة بتشرح الفايدة بصريًا، الكوبي مالوش داعي يكررها بالكلام — خليه يضيف زاوية جديدة أو إحساس.",
    "اكتب 20 هيدلاين قبل ما تختار واحدة. أول 5 أفكار غالبًا هي الأفكار اللي كل حد هيفكر فيها.",
    "لو الجملة تنفع لأي براند تاني في نفس الكاتيجوري، يبقى لسه مش خاصة بالبراند ده كفاية."
  ],
  commonMistakes: [
    "الكوبي بيشرح الصورة بدل ما يضيف عليها معنى جديد.",
    "الهيدلاين طويل وبيحاول يقول كل حاجة عن المنتج في جملة واحدة.",
    "الـ CTA غامض ومحدش عارف يعمل إيه بالظبط بعد ما يقرا الإعلان.",
    "الـ Tone مش ثابت بين الهيدلاين والـ Subline وكأنهم كاتبين بواسطة شخصين مختلفين.",
    "الاعتماد على كلمات عامة زي \"الأفضل\" و\"الأقوى\" من غير دليل أو زاوية مميزة."
  ],
  example: {bigIdea:"You're Not You When You're Hungry", headline:"أنت مش أنت وإنت جعان.", cta:"Grab a Snickers."},
  moreExamples: [
    {brand:"Volkswagen", industry:"سيارات", technique:"reframing", bigIdeaEn:"Think Small", bigIdeaAr:"فكّر صغيّر",
     headlineEn:"The Volkswagen Beetle. Ugly is only skin-deep.", headlineAr:"الفكرة مش شكل العربية، الفكرة إنها بتفكر مختلف.",
     ctaEn:"Visit your Volkswagen dealer.", ctaAr:"زور أقرب معرض فولكس فاجن.",
     note:"كسرت قاعدة إعلانات السيارات في الستينات اللي كانت بتكبّر العربيات، وقلبت الصغر من عيب لميزة."},
    {brand:"Nike", industry:"رياضة", technique:"craft", bigIdeaEn:"Just Do It", bigIdeaAr:"بس اعمل",
     headlineEn:"There is no finish line.", headlineAr:"مفيش خط نهاية، بس فيه قرار إنك تبدأ.",
     ctaEn:"Shop the new collection.", ctaAr:"تسوق المجموعة الجديدة.",
     note:"اتحولت من جملة تحفيزية لموقف حياة كامل، بيتكرر بنفس الروح في كل حملاتهم لحد دلوقتي."},
    {brand:"Dove", industry:"عناية شخصية", technique:"reframing", bigIdeaEn:"Real Beauty", bigIdeaAr:"الجمال الحقيقي",
     headlineEn:"You are more beautiful than you think.", headlineAr:"الجمال الحقيقي مش مقاس واحد، وإنتِ أجمل مما تتخيلي.",
     ctaEn:"Join the movement.", ctaAr:"انضمي للحركة.",
     note:"استخدمت نساء عاديين بدل الموديلز، وده غيّر تعريف الجمال في الإعلان كله مش بس في الحملة دي."},
    {brand:"California Milk Processor Board", industry:"ألبان", technique:"reframing", bigIdeaEn:"Got Milk?", bigIdeaAr:"معاك لبن؟",
     headlineEn:"Got Milk?", headlineAr:"جربت تعمل كيك من غير لبن؟",
     ctaEn:"Grab a carton today.", ctaAr:"هات كرتونة لبن دلوقتي.",
     note:"استخدمت الـ Negative Approach — وريت الناس المشكلة (غياب اللبن) بدل ما تشرح فايدته."},
    {brand:"Adidas", industry:"رياضة", technique:"amplification", bigIdeaEn:"Impossible is Nothing", bigIdeaAr:"المستحيل مجرد كلمة",
     headlineEn:"Impossible is nothing.", headlineAr:"المستحيل مجرد كلمة، لحد ما حد يثبت عكسها.",
     ctaEn:"Push your limits.", ctaAr:"اكسر حدودك.",
     note:"مبنية على اقتباس لمحمد علي، وحوّلت جملة ملهمة لمنصة حملات رياضية كاملة عبر سنين."},
    {brand:"Apple", industry:"تكنولوجيا", technique:"story", bigIdeaEn:"Think Different", bigIdeaAr:"فكّر مختلف",
     headlineEn:"Here's to the crazy ones.", headlineAr:"للي شايفين العالم مختلف، وقادرين يغيروه.",
     ctaEn:"Explore the Mac.", ctaAr:"اكتشف الماك.",
     note:"معملتش عن مواصفات الجهاز خالص — اتكلمت عن نوعية الناس اللي بتستخدمه، مش عن المنتج."},
    {brand:"De Beers", industry:"مجوهرات", technique:"association", bigIdeaEn:"A Diamond is Forever", bigIdeaAr:"الألماظة بتفضل للأبد",
     headlineEn:"A diamond is forever.", headlineAr:"الألماظة بتفضل، والإحساس اللي وراها بيفضل معاها.",
     ctaEn:"Find your diamond.", ctaAr:"دوّر على الألماظة بتاعتك.",
     note:"من أقدم وأنجح الجمل الإعلانية في التاريخ، ربطت منتج بقيمة أبدية مش بوظيفة عملية."},
    {brand:"KitKat", industry:"حلويات", technique:"craft", bigIdeaEn:"Have a Break, Have a KitKat", bigIdeaAr:"خد بريك، خد كيت كات",
     headlineEn:"Whatever you're doing, it can wait four fingers.", headlineAr:"أي حاجة شغال عليها، تقدر تستناك أربع أصابع بس.",
     ctaEn:"Grab a bar and pause.", ctaAr:"هات ضلفة وخد لحظتك.",
     note:"لعب بصري على الكلمة نفسها — Break بقت هي شكل الشوكولاتة، فالاسم والمنتج بقوا حاجة واحدة."},
    {brand:"Red Bull", industry:"مشروبات طاقة", technique:"amplification", bigIdeaEn:"Red Bull Gives You Wings", bigIdeaAr:"ريد بُل بيدّيك أجنحة",
     headlineEn:"It doesn't literally give you wings. It just feels like it does.", headlineAr:"مش هيطيرك فعلاً، بس هيخليك تحس إنك طاير.",
     ctaEn:"Grab a can and go.", ctaAr:"هات علبة وابدأ يومك.",
     note:"مبالغة مجازية مستحيلة بتشرح إحساس الطاقة بدل ما تدّعي نتيجة حرفية — الجمهور فاهم إنها مجاز."},
    {brand:"Coca-Cola", industry:"مشروبات غازية", technique:"story", bigIdeaEn:"Share a Coke", bigIdeaAr:"شارك كوكاكولا",
     headlineEn:"Find your name. Share the moment.", headlineAr:"دوّر على اسمك، وشارك اللحظة.",
     ctaEn:"Find your bottle.", ctaAr:"دوّر على زجاجتك.",
     note:"حوّلت منتج عام لتجربة شخصية بحطّ أسماء الناس على الزجاجة — نفس المنتج، لكن كل عبوة بقت خاصة."},
    {brand:"Airbnb", industry:"سياحة وضيافة", technique:"story", bigIdeaEn:"Belong Anywhere", bigIdeaAr:"حس إنك في بيتك في أي مكان",
     headlineEn:"Live like a local, wherever you go.", headlineAr:"عيش زي ابن البلد، في أي بلد تروحها.",
     ctaEn:"Find your stay.", ctaAr:"دوّر على إقامتك.",
     note:"قلبت الفكرة من مجرد حجز سكن مؤقت لإحساس انتماء دائم — البيت إحساس مش مكان."},
    {brand:"Mastercard", industry:"مالية", technique:"structural", bigIdeaEn:"There Are Some Things Money Can't Buy", bigIdeaAr:"فيه حاجات الفلوس مش بتشتريها",
     headlineEn:"For everything else, there's Mastercard.", headlineAr:"وكل حاجة تانية، Mastercard كفيلة بيها.",
     ctaEn:"Apply for your card.", ctaAr:"اطلب كارتك دلوقتي.",
     note:"بنية Comparison ذكية — قسّمت العالم لحاجات مقدرش تتشترى وحاجات تتشترى، وحطّت الكارت كحل للنص التاني."}
  ],
  rule: "لو الصورة تشرح كل شيء، اجعل الكلام قصيرًا. لو الفكرة لفظية، اجعل الصورة تدعمها بدون تشويش.",
  qualities: ["واضح من أول قراءة","قصير عند الحاجة، مش قصير على حساب المعنى","يخدم الـ Big Idea مش بيشتتها","لا يشرح أكثر من اللازم","يترك مساحة للجمهور يكمل الفكرة بنفسه","يربط بين الـ Insight والـ Action بجملة واحدة","له إيقاع — يتقرا بسلاسة حتى لو اتقال بصوت عالي"],
  questions: ["هل الجملة تضيف معنى أم بتكرر اللي الصورة قالته؟","هل الـ CTA فعل واضح يعرف الجمهور يعمله فورًا؟","هل الـ Tone مناسب للجمهور والموقف؟","هل العنوان قابل للتذكر بعد ما يقفل الجمهور الإعلان؟","هل الجملة تقدر تتنسب لبراند تاني في نفس الكاتيجوري؟ لو أيوه، لسه مش خاصة كفاية.","هل الجملة تخدم الـ Big Idea ولا واقفة لوحدها؟"],
  proTip: "أقوى كوبي مش اللي بيقول أكتر كلام، هو اللي بيسيب أكبر أثر بأقل عدد كلمات ممكن. لو قدرت توصل الفكرة بنص عدد الكلمات، امسح النص التاني."
};

const CL_EXECUTION = {
  intro: "بعد اختيار التكنيك، تبدأ تسأل: هتنفذه إزاي؟ التنفيذ هو الشكل النهائي الذي تظهر فيه الفكرة.",
  forms: ["صورة واحدة","فيديو","كاروسيل","بوستر","Outdoor","UI","Packaging","Activation","Social Post","Reel","Landing Page","Print ad","Product demo","Interactive experience"],
  example: {bigIdea:"المنتج قريب من العميل.", executions:["منتج ظاهر كـ preview على المكتب.","كارت شراء بيتحول لمكتب حقيقي.","زر Checkout يتحول لزر Start.","ظل المنتج يظهر على المكتب قبل ما المنتج يوصل."]},
  requirements: ["يوصل الفكرة بسرعة","ما يشرحش زيادة","يخدم الـ Big Idea","يخلي المنتج واضح","يخلي الجمهور يعرف يعمل إيه بعد كده","يناسب القناة المستخدمة","يحترم وقت المشاهد","يخلق لحظة فهم أو إحساس"],
  diff: "Big Idea = الفكرة الأساسية. Execution = الطريقة التي ظهرت بها الفكرة."
};

const CL_ARTDIRECTION = {
  intro: "الـ Art Direction هو شكل العالم اللي الفكرة هتظهر فيه. هو ليس مجرد تجميل. هو طريقة تخلي الفكرة تتحس.",
  categories: [
    {name:"Mood", items:["كوميدي","فخم","درامي","مستقبلي","واقعي","بسيط","ساخر","إنساني","حالم","جريء","هادئ"]},
    {name:"Color Palette", items:["دافئة","باردة","High contrast","Minimal","Brand colors","Neon","Pastel","Monochrome","Earth tones"]},
    {name:"Lighting", items:["Soft","Dramatic","Rim light","Studio","Natural","Cinematic","Low key","High key","Backlight","Spotlight"]},
    {name:"Camera Angle", items:["Front view","Top view","Low angle","Isometric","Macro","Wide shot","Close-up","Over the shoulder","Dutch angle"]},
    {name:"Typography", items:["Bold","Minimal","Futuristic","Editorial","Handwritten","Geometric","Condensed","Playful"]},
    {name:"Texture / Material", items:["Glass","Metal","Paper","Plastic","Smoke","Fabric","Clay","Realistic","Holographic","Wood","Liquid","Dust","Ice","Fire"]},
    {name:"Composition", items:["Centered","Asymmetrical","Diagonal","Grid","Negative space","Layered","Split","Pyramid","Circular","Hero product","Close-up","Environmental"]}
  ],
  examples: [
    {theme:"السرعة", items:["زاوية مائلة","خطوط حركة","إضاءة قوية","ألوان حادة","تايب Bold"]},
    {theme:"الراحة", items:["إضاءة ناعمة","ألوان هادية","مساحات تنفس","زوايا ثابتة","خامات مريحة"]},
    {theme:"الخطر", items:["Contrast عالي","ظلال قوية","ألوان تحذيرية","تكوين ضاغط"]},
    {theme:"الفخامة", items:["بساطة","مساحات","خامات Premium","إضاءة محسوبة","تفاصيل قليلة"]}
  ],
  rule: "الـ Art Direction الجيد لا يسرق الفكرة. هو يخدمها."
};

const CL_MEDIACONTEXT = {
  intro: "الإعلان لا يتنفذ في الفراغ. نفس الفكرة تختلف حسب المكان الذي ستظهر فيه.",
  channels: [
    {name:"Outdoor", points:["لازم الفكرة تتفهم بسرعة جدًا","عناصر قليلة","جملة قصيرة","صورة قوية","لا تعتمد على شرح طويل"]},
    {name:"Social Post", points:["Hook واضح","Visual سريع","Caption داعم","CTA مباشر"]},
    {name:"Reel / Short Video", points:["بداية قوية في أول ثواني","تطور بصري واضح","نهاية أو payoff","لا تبدأ ببطء"]},
    {name:"Carousel", points:["فكرة على خطوات","كل Slide يضيف معنى","مناسب للشرح أو المقارنة أو القصة"]},
    {name:"Landing Page", points:["يحتاج شرح أكثر","يربط الفكرة بالمزايا","يقود نحو Conversion"]},
    {name:"Packaging", points:["الفكرة لازم تكون مختصرة","التجربة تكون في اليد","التصميم يخدم الاستخدام والهوية"]},
    {name:"Activation", points:["الفكرة تتحول لتجربة حقيقية","الجمهور يشارك أو يتفاعل","القيمة تأتي من التجربة وليس المشاهدة فقط"]},
    {name:"UI / Digital Experience", points:["الفكرة تظهر من خلال التفاعل","الأزرار والحركة والانتقال جزء من الرسالة","التجربة نفسها تصبح إعلانًا"]}
  ],
  rule: "اختار Execution يناسب المكان. فكرة رائعة على قناة غلط ممكن تفشل."
};

const CL_EVALUATION = ["هل فيه Insight حقيقي؟","هل المشكلة واضحة؟","هل Big Idea تتقال في جملة؟","هل الفكرة مفهومة من غير شرح؟","هل التكنيك مناسب؟","هل المنتج أو الرسالة واضحة؟","هل الـ Art Direction يخدم المعنى؟","هل الإعلان memorable؟","هل فيه CTA واضح؟","هل الفكرة قابلة للتنفيذ على أكثر من فورمات؟","هل الفكرة مبنية على Truth حقيقي؟","هل التنفيذ مناسب للقناة؟","هل الكلام والصورة بيكملوا بعض؟","هل الإعلان فيه شيء يوقف المشاهد؟","هل يمكن تذكره بعد يوم؟","هل يمكن شرحه لشخص آخر بسهولة؟","هل هو مختلف عن المنافسين؟","هل الفكرة أقوى من الشكل فقط؟"];

const CL_FRAMEWORK = [
  {en:"What is the brief?", ar:"ما هدف الإعلان؟"},
  {en:"What is the problem?", ar:"ما المشكلة؟"},
  {en:"What is the observation?", ar:"ما الملاحظة؟"},
  {en:"What is the insight?", ar:"ما الـ Insight؟"},
  {en:"What is the product truth?", ar:"ما حقيقة المنتج؟"},
  {en:"What is the human truth?", ar:"ما الحقيقة الإنسانية؟"},
  {en:"What is the category truth?", ar:"ما حقيقة الكاتيجوري؟"},
  {en:"What is the cultural truth?", ar:"ما الحقيقة الثقافية؟"},
  {en:"What is the tension?", ar:"ما الصراع أو التوتر؟"},
  {en:"What is the big idea?", ar:"ما الـ Big Idea؟"},
  {en:"What creative technique is used?", ar:"ما التكنيك المستخدم؟"},
  {en:"What is the execution?", ar:"ما شكل التنفيذ؟"},
  {en:"What is the art direction?", ar:"ما التوجيه الفني؟"},
  {en:"What is the media context?", ar:"أين ستظهر الفكرة؟"},
  {en:"Why does it work?", ar:"لماذا تعمل؟"},
  {en:"What should the audience do next?", ar:"ماذا نريد من الجمهور أن يفعل؟"}
];

const CL_FINAL_SUMMARY = "الفكرة القوية مش معناها صورة حلوة فقط. الفكرة القوية هي: Insight واضح + Big Idea بسيطة + Creative Technique مناسب + Execution مفهوم + Art Direction يخدم المعنى + Media Context صحيح + CTA واضح. لو واحدة من دول ضعيفة، الإعلان كله يضعف. أقوى إعلان هو اللي الناس تفهمه بسرعة، تحس بيه، وتفتكره بعد ما يمشي من قدامها.";
