export interface ArticleContent {
  title: string;
  scenario: {
    label: string;
    english: string;
    chinese: string;
  };
  points: {
    label: string;
    items: {
      titleEn: string;
      titleZh: string;
      english: string;
      chinese: string;
    }[];
  };
  conclusion: {
    label: string;
    english: string;
    chinese: string;
  };
}

export interface Article {
  id: string;
  titleEn: string;
  titleZh: string;
  content: ArticleContent;
}

export const articles: Article[] = [
  {
    id: "engineering-binary",
    titleEn: "The Engineering Binary: Product vs. Infrastructure",
    titleZh: "工程师的二元演变：产品与基座",
    content: {
      title: "Article 1: The Engineering Binary",
      scenario: {
        label: "Scenario: The $100 Million Integration Crisis / 场景：一亿美元的集成危机",
        english: "Let’s talk about a pattern I’ve seen repeatedly: a global giant hires 50 \"backend\" devs and 20 \"frontend\" devs to build an AI routing system. Two years and $100 million later, the project is a ghost town. Why? Because the technical layers were disconnected from the business reality. The \"Full-Stack\" label has become a distraction. In the AI-Native era, we are seeing a Great Simplification into two roles: Infrastructure Engineers who build the stage, and Product Engineers who perform on it.",
        chinese: "让我们聊聊一个我反复见到的模式：一家全球巨头聘请了 50 名“后端”开发和 20 名“前端”开发来构建 AI 路由系统。两年后耗资 1 亿美元，项目却成了一座鬼城。为什么？因为技术层级与业务现实完全脱节。“全栈”这个标签已经成了一种干扰。在 AI 原生时代，我们正在经历一场“大简化”，工程师正分化为两类角色：构建舞台的基座工程师，以及在舞台上表演的产品工程师。"
      },
      points: {
        label: "The Core Evolution / 核心演变",
        items: [
          {
            titleEn: "1. The Death of the Implementation Layer",
            titleZh: "1. 实现层的消亡与产品工程师的所有权",
            english: "Think about the old way: you spent 60% of your time writing boilerplate and managing states. Today, AI tools like Cursor or Vercel have turned implementation into a commodity. This allows the Product Engineer to move \"up-stack.\" Their scope is no longer defined by a language, but by a business outcome. Look at Instagram in 2012—they supported 30 million users with only 13 employees. That wasn't a fluke; it was a precursor. By letting Infrastructure (AWS) handle the \"how,\" those 13 people could focus entirely on the \"what.\" This is the new standard: the engineer as a mini-CEO who owns the user problem from UI to deployment.",
            chinese: "想想过去的方式：你 60% 的时间都在编写模板代码和管理状态。今天，Cursor 或 Vercel 等 AI 工具已将“实现”变成了一种大宗商品。这使得产品工程师能够向“栈顶”移动。他们的职责不再由某种语言定义，而是由业务结果定义。看看 2012 年的 Instagram——他们仅凭 13 名员工就支撑了 3000 万用户。那不是偶然，而是一个先兆。通过让基座（AWS）处理“如何实现”，这 13 个人可以完全专注于“实现什么”。这就是新标准：工程师变成了微型 CEO，拥有从 UI 到部署的整个用户问题。"
          },
          {
            titleEn: "2. Infrastructure: The Providers of Invariants",
            titleZh: "2. 基座：不变式的供给者",
            english: "If everyone is building products, who ensures the world keeps spinning? This is the domain of Infrastructure Engineers. They don't solve specific use cases; they build the \"Invariants\"—the high-performance, secure abstractions like Snowflake or Stripe. The barrier to entry here is rising exponentially. You’re either building the world’s most scalable platform or you’re a customer of one. This is about deep technical rigor. If you aren't providing the \"Solution\" that 10,000 other companies use as their foundation, you aren't doing Infra; you're just doing expensive plumbing.",
            chinese: "如果每个人都在构建产品，谁来确保世界继续运转？这就是基座工程师的领域。他们不解决具体的用例，他们构建“不变式”——即像 Snowflake 或 Stripe 这样高性能、安全的底层抽象。这里的准入门槛正在呈指数级提高。你要么在构建全球最具扩展性的平台，要么就是它的客户。这关乎深层的技术严谨性。如果你不是在提供那 10,000 家公司赖以生存的“方案”，那你不是在做基座，你只是在做昂贵的修修补补。"
          },
          {
            titleEn: "3. FDE: Ownership as the Ultimate Moat",
            titleZh: "3. FDE：作为终极护城河的所有权",
            english: "Then we have the Forward Deployed Engineer (FDE), a role pioneered by Palantir that perfectly bridges these two worlds. Here is the crucial distinction: A consultant at McKinsey delivers a PDF and a bill. An FDE delivers a working system and stays to ensure it creates ROI. Because they bring the \"Infra\" of a company like Palantir directly into the client's messy reality, they own the outcome. Palantir’s revenue per employee is massively higher than traditional firms because FDEs don't sell \"hours\"; they sell \"product-led solutions.\" In a world where AI can give advice, the human who can actually own the delivery becomes the most valuable asset.",
            chinese: "接着是前线部署工程师 (FDE)，这是由 Palantir 开创的、完美连接这两个世界的角色。这里有一个至关重要的区别：麦肯锡的顾问交付的是 PDF 和账单；而 FDE 交付的是一套运行的系统，并留下来确保它产生 ROI。因为他们将 Palantir 这样的公司的“基座”直接带入客户混乱的现实中，他们拥有最终结果。Palantir 的人均营收远高于传统公司，因为 FDE 不卖“工时”，他们卖的是“产品驱动的方案”。在一个 AI 遍地提供建议的世界里，那个能真正对交付“负责”的人才是最宝贵的资产。"
          }
        ]
      },
      conclusion: {
        label: "Conclusion: Choose Your Side / 总结：选择你的阵营",
        english: "The \"middle-ground\" dev is a dying breed. In the next five years, the reporting chains will shorten, and the scope for each individual will explode. You have two paths: either master the deep, architectural invariants of Infrastructure, or master the broad, business-driven ownership of Product. Both have a massive moat; the only danger is staying in the middle.",
        chinese: "“中间地带”的开发者正在消亡。在未来五年内，汇报链条将缩短，每个人的职能范围将爆炸式增长。你有两条路：要么精通基座深层的架构不变式，要么精通产品广泛的业务所有权。两者都有极深的护城河；唯一的危险是留在中间。"
      }
    }
  },
  {
    id: "saas-endgame",
    titleEn: "The SaaS Endgame: From Seat-Based to Usage-Based ROI",
    titleZh: "SaaS 的终局：从“按头收费”到“按量结算”",
    content: {
      title: "Article 2: The SaaS Endgame",
      scenario: {
        label: "Scenario: The \"Silent\" Seat / 场景：沉默的账号",
        english: "Here is a nightmare for any SaaS CEO: A Fortune 500 client deploys a custom AI assistant, and suddenly 40% of their Salesforce licenses are only logged into once a month. The work is being done by AI, yet the bill is still tied to human headcount. The client calls to cancel. This is the \"SaaS Doom\"—a world where your product's efficiency directly cannibalizes your revenue. If you charge per \"seat,\" you are effectively taxing your customer for being productive.",
        chinese: "对任何 SaaS CEO 来说，这都是一场噩梦：一位世界 500 强的客户部署了定制 AI 助手，突然间他们 40% 的 Salesforce 账号每月仅登录一次。工作已由 AI 完成，但账单仍挂钩在人头数上。客户打电话要求取消。这就是“SaaS 末日”——在这种现实下，你产品的效率会直接蚕食你的收入。如果你按“人头”收费，你实际上是在对客户的“高效率”征税。"
      },
      points: {
        label: "The Value Shift / 价值转移",
        items: [
          {
            titleEn: "1. The Death of the \"Per-Seat\" Tax",
            titleZh: "1. “按人头收费”税的消亡",
            english: "For decades, SaaS was a numbers game: hire more people, buy more seats. But AI has fundamentally decoupled headcount from value. If a single AI agent can process 1,000 support tickets, why pay for a 10-person support team? The seat-based model has turned into a direct conflict of interest. The customer wants automation; the vendor wants more \"logins\" to grow. This is why we are seeing a mass exodus toward Usage-Based Billing (UBB). It is the only way to capture the value of AI tokens and compute. When growth in legacy \"Sales Cloud\" segments stagnates, it’s not because the tool isn't used—it's because the \"seat\" is no longer the unit of value.",
            chinese: "几十年来，SaaS 一直是一场数字游戏：雇的人越多，买的账号就越多。但 AI 已经从根本上将人头数与价值脱钩了。如果一个 AI 智能体可以处理 1,000 个工单，为什么要为一个 10 人的客服团队买单？“按头收费”模式现在已变成一种直接的利益冲突：客户想要自动化，供应商想要更多的“登录数”来增长。这就是为什么我们看到大量公司转向按量付费 (UBB)。这是捕获 AI Token 和算力价值的唯一途径。当传统“销售云”业务增长陷入停滞，并不是因为工具没用了，而是因为“人头”不再是价值单位。"
          },
          {
            titleEn: "2. SAP’s Pivot: Trading Licenses for Transactions",
            titleZh: "2. SAP 的转型：以许可换交易",
            english: "Take SAP, the ultimate titan of legacy licenses. They are currently navigating a painful transition from \"On-Premise Licenses\" to \"Cloud Consumption.\" This isn't just a tech swap; it’s a philosophical shift. Their new \"Full Usage Equivalent\" (FUE) and consumption-based models for the Business Technology Platform (BTP) represent a move away from \"owning software\" to \"consuming business outcomes.\" SAP realized that if their software automates the logic, they must charge for the \"transaction\" rather than the \"access.\" This is the mandatory pivot for any firm with a high GPU-to-human ratio.",
            chinese: "看看 SAP，这个传统许可模式的终极巨人。他们正处于从“本地许可”转向“云消费”的痛苦转型中。这不仅仅是技术的更换，更是一种哲学的转变。他们新的“全使用当量 (FUE)”以及针对 BTP 平台的消耗计费模式，代表了从“拥有软件”到“消耗业务结果”的转变。SAP 意识到，如果他们的软件自动化了逻辑，他们就必须针对“交易”而非“权限”来计费。对于任何 GPU 占比远高于人力的公司来说，这是强制性的转身。"
          },
          {
            titleEn: "3. The Psychology of the \"Bill Shock\"",
            titleZh: "3. 缓解“账单刺客”的心理学",
            english: "The biggest obstacle to UBB is \"Bill Shock.\" If an employee thinks every click costs $5, they stop clicking. Successful firms like Snowflake have cracked this code by offering Prepaid Credits and Departmental Budgets. Snowflake's Net Revenue Retention (NRR) of over 130% is the smoking gun: it proves that when billing is transparent and tied to ROI, clients scale naturally. By allowing managers to set a hard cap per department, companies can treat AI consumption like a utility—reliable, measurable, and safe from unexpected spikes.",
            chinese: "按量付费 (UBB) 的最大障碍是“账单刺客”。如果一名员工觉得每次点击都要花 5 美元，他就会停止点击。像 Snowflake 这样成功的公司已经破解了这个难题，他们提供预付费积分和部门用量预算。Snowflake 超过 130% 的净收入留存率 (NRR) 就是最有力的证据：它证明了当计费透明且与 ROI 挂钩时，客户会自然地扩大规模。通过允许经理为每个部门设置硬上限，公司可以像管理公用事业（如水电费）一样管理 AI 消耗——可靠、可衡量，且无惧意外的激增。"
          }
        ]
      },
      conclusion: {
        label: "Conclusion: Value over Volume / 总结：价值胜过数量",
        english: "We are moving into an age where software becomes a \"Business Partner\" rather than just a tool. The next generation of SaaS will share the risks and rewards of the AI’s actual performance. For the user, the focus shifts from \"How many people have access?\" to \"How much business value was generated?\" If your billing model doesn't reflect that, you are already obsolete.",
        chinese: "我们正进入一个软件不再仅仅是工具，而是成为“业务伙伴”的时代。下一代 SaaS 将分享 AI 实际表现的风险和收益。对于用户来说，重点从“有多少人有权限？”转向“产生了多少业务价值？”。如果你的计费模式不能反映这一点，你已经过时了。"
      }
    }
  },
  {
    id: "ai-native-moats",
    titleEn: "Moats in the AI Native Era: The Trinity of Data, Insight, and Workflow",
    titleZh: "AI Native 时代的护城河：三位一体",
    content: {
      title: "Article 3: The AI Native Moat",
      scenario: {
        label: "Scenario: The 48-Hour \"Sherlock\" / 场景：48 小时“夏洛克”危机",
        english: "Here is a reality check: a startup launches a slick GPT-powered tool for legal summaries, and 48 hours later, OpenAI releases \"Custom GPTs\" for free. The startup’s value instantly evaporates. This is the \"Sherlock\" effect—if your product is just a wrapper around generic logic, you don't have a moat; you have a countdown timer. In the AI-Native era, to survive, you must own at least one of the three pillars that AI cannot recreate: Unique Data, Unique Insight, or Unique Workflows.",
        chinese: "认清现实吧：一家初创公司推出了基于 GPT 的精美法律摘要工具，48 小时后，OpenAI 免费发布了“Custom GPTs”。初创公司的价值瞬间蒸发。这就是“夏洛克效应”——如果你的产品只是包裹在通用逻辑上的一个“套壳”，你拥有的不是护城河，而是一个倒计时器。在 AI 原生时代，要生存下去，你必须至少拥有 AI 无法重造的三大支柱之一：独特的数据、独特的洞察或独特的工作流。"
      },
      points: {
        label: "The Three Pillars / 三大支柱",
        items: [
          {
            titleEn: "1. Unique Data: The Sovereignty of Ground Truth",
            titleZh: "1. 独特数据：事实主权的堡垒",
            english: "If AI is the engine, unique data is the fuel. Companies like American Express (AXP), J.P. Morgan (JPM), or Disney aren't worried about being \"Sherlocked.\" Why? Because they sit on mountains of historical, first-party data that isn't on the public internet. A general LLM can't \"hallucinate\" AXP’s trillions of transaction points or Disney’s decades of private creative logic. This \"Sovereignty\" over ground truth means their AI models are inherently more accurate and valuable than any general model. Without unique data, you are fighting a losing war against commodity software.",
            chinese: "如果 AI 是引擎，那么独特的数据就是燃料。像美国运通 (AXP)、摩根大通 (JPM) 或迪士尼这样的公司并不担心被“夏洛克”。为什么？因为他们坐拥海量的历史第一手数据，这些数据并不存在于公开网络中。通用大模型无法“幻觉”出美国运通数万亿次的交易数据点，也无法“幻觉”出迪士尼数十年的私有创意逻辑。这种对“事实”的主权意味着他们的 AI 模型天生就比任何通用模型更准确、更有价值所。没有独特的数据，你就是在打一场针对大宗商品化软件的“注定失败”的战争。"
          },
          {
            titleEn: "2. Unique Insight: Beyond Pattern Recognition",
            titleZh: "2. 独特洞察：超越模式识别",
            english: "But data alone is just noise. The real moat is Unique Insight—the proprietary understanding of what that data means. Think about a veteran hedge fund: they don't just have market data; they have a unique insight into how geopolitical events correlate with specific supply chain shifts. AI can imitate logic, but it cannot simulate decades of domain expertise and edge-case intuition. Take Palantir’s \"Ontology\" as a specimen—it's not just a database; it’s a living map of unique business insights that guides the AI to solve real-world problems. Insight is the compass that keeps your AI from getting lost in generalities.",
            chinese: "但数据本身只是噪音。真正的护城河是独特洞察——即对数据“意味着什么”的独家理解。想想一家资深的对冲基金：他们拥有的不仅是市场数据，还有关于地缘政治事件如何与特定供应链变化关联的独特洞察。AI 可以模仿逻辑，但它无法模拟数十年的领域经验和对边缘情况的直觉。看看 Palantir 的“本体 (Ontology)”——它不仅仅是一个数据库，它是指引 AI 解决现实问题的、关于业务洞察的活地图。洞察是让你的 AI 不在平庸的通用性中迷失方向的指南针。"
          },
          {
            titleEn: "3. Unique Workflows: The Architecture of Delivery",
            titleZh: "3. 独特工作流：价值交付的架构",
            english: "This is where the \"Platform\" comes to life. A Unique Workflow is the architecture that turns data and insight into delivered value. This is why companies like Databricks win. They provide the \"Invariants\"—the specific, complex sequences of actions that make data usable for a specific industry. Once a value-delivery workflow is established, the switching cost is existential. Look at Midjourney: a team of only 11 people generating $200 million in revenue. They achieved this because they optimized the creative workflow to an extreme degree. They didn't build a better \"engine\"; they built a better \"way to use the engine.\"",
            chinese: "这就是“平台”焕发生命力的地方。独特工作流是将数据和洞察转化为交付价值的架构。这就是为什么像 Databricks 这样的公司能赢。他们提供“不变式”——即让数据在特定行业中变得可用的、特定的、复杂的动作序列。一旦一个价值交付工作流被建立，切换成本就是毁灭性的。看看 Midjourney：一个仅有 11 人的团队创造了 2 亿美元的年收入。他们能做到这一点，是因为他们将创意工作流优化到了极致。他们并没有构建一个更好的“引擎”，而是构建了一个更好的“使用引擎的方式”。"
          }
        ]
      },
      conclusion: {
        label: "Conclusion: The Great Organizational Collapse / 总结：组织的伟大坍缩",
        english: "In the AI-Native era, we will see two poles: the \"Sovereigns\" who own the data and the \"Architects\" who own the platform. This echoes my earlier binary of Product vs. Infra. The middle layers—the middle managers and the \"data movers\"—will evaporate. This leads us to the rise of the 1-Person Unicorn. When a single individual leverages AI to manage these three pillars, they can achieve what a 100-person startup used to. The goal isn't to manage people; it's to manage a \"Trinity\" of AI agents that solve massive problems.",
        chinese: "在 AI 原生时代，我们将看到两极：拥有数据的“主权者”和拥有平台的“建筑师”。这呼应了我之前提到的“产品与基座”的二元论。中间层——那些中层管理者和“数据搬运工”——将会蒸发。这引领我们走向 1 人独角兽的崛起。当一个人利用 AI 来管理这三大支柱时，他们就能实现过去 100 人的初创公司才能做到的事情。目标不再是管理人，而是管理一个执行“三位一体”支柱、解决海量问题的 AI 智能体阵营。"
      }
    }
  }
];
