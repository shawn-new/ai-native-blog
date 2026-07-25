---
id: "article3-ai-native-moats"
slug: "moats-in-the-ai-native-era"
titleEn: "Moats in the AI Native Era: The Trinity of Data, Insight, and Workflow"
titleZh: "AI Native 时代的护城河：数据、洞察与工作流的三位一体"
category: "Opinions"
date: "2026-03-29"
author: "Sean"
release: "published"
keywords:
  - "AI Moat"
  - "Unique Data"
  - "Unique Insight"
  - "Unique Workflows"
  - "Midjourney"
  - "Palantir"
history:
  - "Sat Mar 28 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Initial release"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Deepened moat argument and added single-factor failure cases"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Expanded workflow moat into systems of record, systems of action, and vertical platforms"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Second-pass argument polish around owned learning loops"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Brevity and before/after contrast revision"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Compress longest section, add hook"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Goal-mode 5-pass polish"
---

# Moats in the AI Native Era: The Trinity of Data, Insight, and Workflow
# AI Native 时代的护城河：数据、洞察与工作流的三位一体

## The 48-Hour Countdown
## 48 小时倒计时

**English:**

The easiest AI startup to build is also the easiest one to kill.

Take a legal summarization product. It calls a frontier model, asks for a summary, formats the answer, and wraps the workflow in a clean UI. Users like it because the old workflow was painful.

Then the base model provider ships long-context document analysis. Or the legal software suite adds the same feature. Or another small team rebuilds it over a weekend with a better prompt and a lower price.

The product was useful. It still lost. The intelligence was rented. The workflow was shallow. The data was not proprietary. The insight was generic.

Speed helps you start. It does not protect you.

The new moat test: if a better base model can absorb your product, you do not have a moat. You have a timer.

Durable AI-native advantage comes from a learning loop the model provider cannot easily own: unique data, unique insight, and unique workflow. Data gives the system private reality. Insight tells the system what that reality means. Workflow turns that knowledge into repeated action — and captures new feedback. The moat is the loop between them.

**中文：**

最容易做的 AI startup，也最容易被杀死。

想象一个法律摘要产品：调用前沿模型，让模型总结文件，格式化答案，套上干净的 UI。用户喜欢，因为旧流程确实痛苦。

然后基础模型厂商发布长上下文文档分析。或者法律软件套件加上同样功能。或者另一个小团队用更好的 prompt、更低的价格，一个周末复刻出来。

产品有用，它还是输了。智能是租来的，工作流很浅，数据不独特，洞察也通用。

速度能帮你开始，不能保护你。

新的护城河测试：如果一个更强的基础模型能吸收你的产品，你没有护城河，你只有倒计时。

AI-native 时代的持久优势，来自模型厂商不容易拥有的学习回路：独特数据、独特洞察、独特工作流。数据给系统私有现实。洞察告诉系统如何理解现实。工作流把这种理解变成反复发生的行动，并带回新的反馈。护城河是三者之间的循环。

---

## Old Moats Leak When Usage Does Not Create Learning
## 使用不产生学习时，旧护城河会漏

**English:**

In the old software era, a product defended itself with interface polish, feature depth, integrations, and switching cost. Those still matter. AI cuts their half-life.

A polished UI is easier to copy when frontend tooling improves. Feature depth is easier to imitate when models can draft code, tests, and documentation. Integrations still take work, but the first version gets cheaper every quarter. And customers now ask a sharper question: why buy this tool before my existing platform ships the same AI feature?

The dangerous product looks like software from the outside and behaves like a prompt from the inside. It has a screen, onboarding, pricing, a demo. But inside the machine, most of the value is a generic model call plus light formatting.

That may be a good wedge. It is rarely a durable company.

The deeper question: does usage create owned learning? Does each interaction generate data only you can see? Does your system learn which signals matter in your domain? Does your workflow become the place where decisions are made, corrected, approved, and remembered?

If usage does not make the product smarter, more trusted, or harder to leave, growth may only make the timer louder.

**中文：**

旧软件时代，一个产品可以靠界面、功能深度、集成和切换成本保护自己。这些仍然重要，但 AI 改变了它们的半衰期。

前端工具变强后，漂亮 UI 更容易复制。模型可以起草代码、测试和文档后，功能深度更容易追。集成仍然要做，但每个季度第一版的成本都在下降。客户现在会问一个更尖锐的问题：为什么在现有平台加上 AI 功能之前，我要先买这个工具？

危险的产品，是外面看起来像软件，里面运行起来像 prompt。它有界面、onboarding、价格、demo。但打开机器后，大部分价值是一次通用模型调用，加一点格式化。

这可以是一个好的切入点。它很少是一家持久公司。

更深的问题：使用是否创造 owned learning？每次客户交互，是否生成只有你能看见的数据？系统是否学会某个领域里哪些信号真的重要？你的工作流是否变成决策发生、修正、批准和被记住的地方？

如果使用不会让产品更聪明、更可信、更难离开，增长可能只是让倒计时更响。

---

## 1. Unique Data: Reality Others Cannot See
## 1. 独特数据：别人看不见的现实

**English:**

Data becomes a moat only when it captures reality others cannot access and turns that reality into better decisions.

Size alone is weak. A large scraped dataset may help with the first demo. But if others can buy it, scrape it, or approximate it with synthetic data, the advantage decays fast.

Defensible data has three properties.

First, it is generated by the business itself. A payments network sees transactions as they happen: merchant, amount, time, geography, account history, device fingerprint, dispute pattern, anomaly sequence. That is operational truth, not internet residue.

Second, it is attached to outcomes. The system knows whether the transaction became fraud, whether the borrower repaid, whether the patient improved, whether the lead converted, whether the shipment failed.

Third, it compounds through use. More usage produces more edge cases. More edge cases improve the model, the rules, the review process, and the product.

That is why first-party transaction data, credit histories, logistics exceptions, medical workflows, and customer support resolutions matter. They describe reality at the moment decisions are made.

The sharper test: does our data encode a part of reality only we can see, and does that reality improve the next decision? If not, the data is supply chain — useful, but not a long-term defense.

Data alone is inert. A warehouse of facts does not know what matters. It needs a theory.

**中文：**

数据只有在捕捉别人看不见的现实、并把这种现实变成更好的决策时，才会成为护城河。

规模本身很弱。一个很大的 scraped dataset 可能帮你做出第一版 demo，但如果别人可以买到、抓到，或者用 synthetic data 逼近，优势会快速衰减。

可防守的数据有三个特征。

第一，它由业务本身生成。支付网络能看到交易发生的瞬间：商户、金额、时间、地理位置、账户历史、设备指纹、争议模式、异常序列。这是运营真相，不是互联网残留物。

第二，它连接结果。系统知道这笔交易后来是否欺诈，借款人是否还款，病人是否改善，销售线索是否转化，货运是否失败。

第三，它会随着使用复利。更多使用产生更多边缘情况，更多边缘情况改进模型、规则、审核流程和产品本身。

这就是为什么第一方交易数据、信贷历史、物流异常、医疗流程和客服解决记录会很重要。它们描述的是决策发生时的现实。

更尖锐的测试：我们的数据是否编码了只有我们能看见的现实？这种现实是否改善了下一次决策？如果答案是否，那只是数据供应链——有用，但不能长期保护你。

数据本身不会行动。一座事实仓库不知道什么重要。它需要一套理论。

---

## 2. Unique Insight: The Theory Behind The Data
## 2. 独特洞察：数据背后的理论

**English:**

Insight is the part of the business that knows how reality behaves.

It tells the system which signals are causal, which are noise, which exceptions break the rule, and what action should follow a given signal.

A commodities trader sees a port disruption and knows which grain prices will move, where, and with what delay. A fraud team knows that a pattern is harmless for one merchant category and dangerous for another. A sales leader knows that one objection is real buying friction while another is polite rejection.

This is domain knowledge — and it is rarely written down. It lives in expert heads, Slack threads, and postmortems. That is the problem.

AI can find patterns. It is weaker when the system does not know which pattern deserves power. Encoding insight into the product — rather than leaving it to walk out the door each night — is one of the hardest and highest-leverage things an AI-native company can do.

**Before:** The expert makes the call. Reasoning lives in their head. The next person asks again.

**After:** The judgment is captured — in schemas, labels, evals, approval rules, ranking functions, review queues. The product reasons with it every time.

Palantir's Ontology is a useful reference — not because of Palantir specifically, but because every durable AI product needs its own domain ontology. Without it, the model has data and fluency, but no judgment.

Give two companies the same base model and similar data. If one consistently makes better decisions, the difference is insight. If both perform the same, neither owns much beyond access to compute.

**中文：**

洞察是业务里知道"现实如何运转"的那部分能力。

它告诉系统：哪个信号是因果，哪个是噪音，哪个例外会击穿规则，看到某个信号后该采取什么动作。

大宗商品交易员看到港口中断，知道哪些粮食价格会变、在哪里变、延迟多久。风控团队知道，同一种模式在某个商户类别里无害，在另一个类别里危险。销售负责人知道，某个异议是真正的购买阻力，另一个只是礼貌拒绝。

这些知识是领域经验——而且很少被写下来。它住在专家脑子里、Slack thread 里和 postmortem 里。这才是问题所在。

AI 可以找模式，但如果系统不知道哪个模式应该被赋予权力，它就会变弱。把洞察编码进产品——而不是让它每天晚上随专家走出房间——是 AI-native 公司能做的最难也最高杠杆的事情之一。

**Before：** 专家做判断，推理在脑子里，下一个人再问一遍。

**After：** 判断被捕捉下来——变成 schema、label、eval、审批规则、ranking function、review queue。产品每次都用这套判断来推理。

Palantir 的 Ontology 是一个有用的参考——不是因为 Palantir 特别，而是因为每个持久 AI 产品都需要自己的领域 ontology。没有它，模型有数据，有流畅表达，但没有判断。

给两家公司同一个基础模型和相似数据。如果其中一家持续做出更好的决策，差距就是洞察。如果两家表现一样，它们拥有的多半只是算力入口。

---

## 3. Unique Workflow: Where Work Becomes Habit
## 3. 独特工作流：工作变成习惯的地方

**English:**

Workflow is the most underrated moat because it looks mundane from the outside.

It is where the product stops being a tool and becomes a way of operating. A model can be copied. A feature can be copied. A workflow that has trained a user's habits, team language, approval rhythm, review process, and memory is harder to copy.

Midjourney is a useful consumer example. Its advantage did not come only from image quality. Prompt culture, community feedback, aesthetic conventions, and repeated creative practice became part of the product. Users learned how to think with it — and that learned fluency is sticky in a way a better image renderer alone is not.

Databricks shows the enterprise version. Once a data team builds ingestion, transformation, governance, notebooks, permissions, and ML workflows around a platform, migration is not switching — it is rebuilding. The workflow has entered the organization.

AI makes this more important, not less, because AI systems need correction. The first answer is often not enough. Users inspect, edit, approve, reject, annotate, escalate, compare. Those actions are training signals, trust signals, and process signals. If the product owns the correction loop, it owns learning. If the product only returns an answer and disappears, it gives away the most valuable part of the interaction.

**Before:** AI tool returns an answer. User accepts or ignores it. Interaction ends.

**After:** User reviews, edits, approves, rejects. Each correction feeds back. The system learns what this team, this domain, this context actually needs.

The moat lives after the draft — in who reviews it, what gets corrected, which version gets approved, which risk gets escalated. That is where workflow becomes a system of record and a system of action.

A system of record stores trusted reality: customers, contracts, patient notes, orders, decisions. A system of action moves work forward: assign, approve, reject, deploy, sign, close. AI-native products become defensible by owning both. Trusted record → reason → action → correction → updated record. Each pass leaves a trace the product owns.

That is why vertical platforms grow so durable. A vertical product starts narrow, then absorbs the objects, rules, approvals, and language of an industry. Salesforce is not just a CRM when the company thinks in accounts and pipeline stages. Figma is not just a design tool when designers, PMs, and engineers align product intent there. Toast is not just restaurant software when orders, payments, and kitchen operations all flow through it.

Replacing the product is no longer procurement. It is surgery.

**中文：**

工作流是最容易被低估的护城河，因为它从外面看很普通。

它是产品从"工具"变成"操作方式"的地方。模型可以复制，功能可以复制。一个训练过用户习惯、团队语言、审批节奏、审核流程和组织记忆的工作流，更难复制。

Midjourney 是一个有用的消费级例子。它的优势不只来自图片质量。提示词文化、社区反馈、美学惯例和反复创作练习，都变成了产品的一部分。用户学会了如何和它一起思考——这种习得的流畅感，不是一个更好的图像渲染器单独能替代的。

Databricks 展示了企业版本。一旦数据团队把摄取、转换、治理、notebook、权限和 ML 工作流建在一个平台上，迁移就不是"换工具"，而是"重建"。工作流已经进入组织。

AI 让这件事更重要，因为 AI 系统需要修正。第一版答案经常不够——用户会检查、编辑、批准、拒绝、标注、升级、比较。这些动作是训练信号、信任信号和流程信号。如果产品拥有 correction loop，它就拥有学习。如果产品只返回一个答案然后消失，它就把交互里最有价值的部分交出去了。

**Before：** AI 工具返回答案，用户接受或无视，交互结束。

**After：** 用户审核、编辑、批准、拒绝。每次修正都写回系统。系统学会这个团队、这个领域、这个场景里真正需要什么。

护城河藏在草稿之后：谁审核，哪里被修正，哪个版本被批准，哪个风险被升级。工作流在这里变成 system of record 和 system of action。

System of record 保存可信现实：客户、合同、病历、订单、决策。System of action 推动工作前进：分配、批准、deploy、签署、关闭。AI-native 产品只有连接两端才可防守：可信记录 → 理解 → 行动 → 修正 → 写回。每一次循环都留下产品拥有的痕迹。

这就是 vertical platform 的持久力。产品从一个窄工作流出发，逐渐吸收行业的对象、规则、审批和语言。公司用 account 和 pipeline stage 来思考时，Salesforce 就不只是 CRM。designer、PM 和 engineer 都在 Figma 里对齐产品意图时，Figma 就不只是设计工具。订单、支付和厨房运营都流过 Toast 时，Toast 就不只是餐厅软件。

更换产品不再是采购。它是手术。

---

## The Single-Factor Trap
## 单点护城河陷阱

**English:**

The mistake is treating data, insight, and workflow as three separate checkboxes. Each one fails alone.

**Data without insight** becomes a lake nobody knows how to use. Many companies have private data and still make mediocre decisions — the data is messy, mislabeled, or disconnected from outcomes.

**Insight without workflow** becomes consulting. The expert knows what matters, but the product does not capture the judgment or repeat it. The knowledge walks out of the room every night.

**Workflow without data and insight** becomes habit without learning. Users may like the interface, but the product does not get meaningfully smarter. A competitor with better model quality or stronger distribution can attack it.

The strong form is the triangle. Workflow produces proprietary data. Data exposes exceptions. Exceptions sharpen insight. Insight changes the workflow. The improved workflow produces better data.

That loop compounds.

The best AI-native companies will not look like feature factories. They will look like learning machines — not asking only what the model can do, but what their system can learn that the model provider cannot see.

**中文：**

错误在于把数据、洞察和工作流当成三个独立 checkbox。每一个单独存在时都会失效。

**只有数据，没有洞察：** 变成没人会用的数据湖。很多公司有私有数据，但决策仍然平庸——数据混乱、标签错误，或者没有连接结果。

**只有洞察，没有工作流：** 变成咨询。专家知道什么重要，但产品没有捕捉这种判断，不能重复它。知识每天晚上都会走出房间。

**只有工作流，没有数据和洞察：** 变成没有学习的习惯。用户可能喜欢界面，但产品不会显著变聪明。模型质量更好或 distribution 更强的竞争对手随时可以攻击。

强形态是三角形。工作流产生专有数据，数据暴露例外，例外打磨洞察，洞察改变工作流，改进后的工作流产生更好的数据。

这个循环会复利。

最好的 AI-native 公司看起来不像 feature factory，而像 learning machine。它们不只问模型能做什么，而是问：我们的系统能学到什么，是模型厂商看不见的？

---

## The Objection: Distribution Still Matters
## 反对意见：Distribution 仍然重要

**English:**

Data, insight, and workflow do not explain the whole game.

Distribution still matters. Brand still matters. Capital still matters. A company with a mediocre product and great distribution can beat a sharper product that nobody sees. In AI this problem is worse — every team has a demo, every deck says "agent," every pitch promises productivity. Customers are overwhelmed, and trust has become genuinely scarce.

But distribution is strongest when it compounds something real. Distribution without unique data, encoded insight, or workflow depth can acquire users — it just cannot hold advantage. The base model improves. The platform bundles the feature. The customer switches when the same job becomes easier inside a tool they already trust.

Distribution can buy attention. It cannot permanently substitute for owned learning.

The durable version is distribution attached to a compounding core: data that improves with usage, insight that sharpens decisions, workflow that becomes part of how people operate. Go-to-market creates the opening — but not the moat, unless it gives you access to a learning loop others cannot enter.

**中文：**

数据、洞察和工作流无法解释全部竞争。

Distribution 仍然重要。品牌仍然重要。资本仍然重要。产品一般但分发很强的公司，可能打败一个更锋利但没人看见的产品。在 AI 时代这个问题更严重——每个团队都有 demo，每份 deck 都说 agent，每个 pitch 都承诺 productivity。客户被淹没，信任已经真正变得稀缺。

但 distribution 最强的时候，是它能放大真实复利。没有独特数据、编码后的洞察和深工作流的 distribution，可以获得用户，却无法长期保住优势。基础模型会进步，平台会打包功能，客户会在自己已经信任的工具里完成同一件事。

Distribution 可以买到注意力，不能永久替代 owned learning。

真正持久的形态，是 distribution 连接到一个会复利的核心：越用越好的数据，让决策更准的洞察，以及进入人们操作方式里的 workflow。Go-to-market 可以创造入口——但除非它让你进入别人进不来的学习回路，否则它本身不是护城河。

---

## The Moat Test Is What You Own
## 护城河测试：你到底拥有什么

**English:**

AI compresses organizations. Work that once required teams can now be done by one person with the right tools. That makes the 1-person unicorn imaginable. It also makes weak companies more fragile.

If your output comes from public data, generic prompts, and a workflow any competitor can copy in a weekend, AI will compress your value too.

The 1-person unicorn is possible only when the person owns real leverage: unique data, unique insight, unique workflow — ideally all three in a loop.

Ask yourself three things:

What reality can you see that others cannot? What judgment turns that reality into better decisions? What workflow makes that judgment repeatable, trusted, and hard to leave?

A better API key will keep arriving. Your defense is not access to intelligence. It is owning a learning loop the API key cannot reproduce.

Pick a product you use daily. Does using it make it smarter about your work, or does it treat every session as the first one? That gap — between a tool that forgets and a system that learns — is where the next round of durable companies will separate from the rest. Most teams already know which side they're on. The harder question is what they're building toward.

**中文：**

AI 会压缩组织。过去需要团队完成的工作，现在一个人配合工具就能做。这让 1 人独角兽变得可想象，也让弱公司更脆弱。

如果你的产出来自公共数据、通用提示词和竞争对手一个周末就能复制的工作流，AI 也会压缩你的价值。

1 人独角兽只有在拥有真实杠杆时才成立：独特数据、独特洞察、独特工作流——最好三者连成回路。

问自己三件事：你能看见什么别人看不见的现实？你有什么判断，能把这种现实变成更好的决策？你有什么工作流，让这种判断被重复、被信任、并且难以离开？

更好的 API key 会不断到来。你的防守点不是拥有智能入口，而是拥有一条 API key 复制不了的学习回路。

你每天用的一个产品——用它会让它更了解你的工作，还是它把每次会话都当成第一次？这个差距，就是"会遗忘的工具"和"会学习的系统"之间的距离，也是下一批持久公司与其他人分道扬镳的地方。大多数团队已经知道自己在哪一边。更难回答的问题是：他们在朝哪个方向走。
