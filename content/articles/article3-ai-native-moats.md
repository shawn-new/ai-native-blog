---
id: "article3-ai-native-moats"
slug: "harness-matters-in-the-ai-era"
titleEn: "The Harness Is the Product. The Model Is a Component."
titleZh: "Harness 才是产品，模型只是一个部件。"
category: "Opinions"
date: "2026-03-29"
author: "Sean"
release: "published"
keywords:
  - "AI Native"
  - "Harness"
  - "Control Loop"
  - "Evaluation"
  - "SaaS"
  - "Workflow"
history:
  - "Sat Mar 28 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Initial release (as moats article)"
  - "Tue Mar 31 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Added single-factor failure cases"
  - "Wed Apr 01 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Prose rewrite"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Brevity and before/after contrast revision"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Add control-loop argument, recast three assets"
  - "Sat Jul 26 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Pivot to harness-first framing — why harness matters, minimal good harness, SaaS survival, why it persists, what it takes to build"
---

# The Harness Is the Product. The Model Is a Component.
# Harness 才是产品，模型只是一个部件。

## Why Harness
## 为什么 Harness 重要

**English:**

The easiest AI product to build is a model call wrapped in a UI. It is also the easiest to kill. The model provider ships the same capability natively, or a competitor rebuilds it over a weekend, or the customer's existing suite adds it as a checkbox feature. What all three have in common: nothing outside the model was doing any work.

The part outside the model is the harness. It is everything that turns a single model call into a system that keeps working: the evaluation that tells you whether this week is better than last week, the correction loop that feeds user fixes back into the next version, the workflow that lets the output become an action instead of a suggestion, and the domain logic that knows which outputs to trust and which to hold for review.

A product without a harness is a demo with a login page. It works when the input is clean, the path is happy, and the user already knows what to ask. It stops working the moment any of those assumptions break, and in production, all of them break.

The claim of this post: for a SaaS company in the AI era, the harness is the product. The model is a component you plug into it. Building the harness is the work that determines whether the product survives.

**中文：**

最容易做的 AI 产品，是一个套了 UI 的模型调用。也是最容易被杀死的。模型厂商原生发布了同样的能力，或者竞争对手用一个周末复刻出来，或者客户已有的软件套件把它加成一个勾选功能。三者的共同点：模型之外没有任何东西在干活。

模型之外的那部分就是 harness。它是把一次模型调用变成一个持续运转的系统所需的一切：告诉你这周是否比上周好的 eval，把用户修正喂回下一版的 correction loop，让输出变成动作而不只是建议的 workflow，以及知道哪些输出可信、哪些要留给人复核的领域逻辑。

一个没有 harness 的产品就是一个带登录页的 demo。输入是干净的、路径是 happy 的、用户知道该问什么的时候它能跑。这些假设中任何一个破裂它就不行了，而在生产环境里，它们全部会破裂。

这篇文章的主张：对于 AI 时代的 SaaS 公司，harness 才是产品，模型是插进去的一个部件。建 harness 才是决定产品能不能活下来的工作。

---

## What Is a Minimal Good Harness
## 最小的 "好" Harness 长什么样

**English:**

Borrow the frame from control theory. A system that improves toward a goal needs four things: a **reference** (what the desired state is), **sensing** (what the actual state is), a **comparator** (the gap between them), and **actuation** (the ability to change something in the world). The loop runs, the gap shrinks, the actual converges on the intended.

A model is not that system. It is the decision function inside it: one component. It proposes what to do given a description of the situation. By itself it does not know what the desired state is in your business, cannot observe what happened after it acted, and cannot act at all without something to act through.

The minimum a system needs to exist: **at least one feedback loop and at least one way to take action.**

Remove actuation and the model produces text about a gap it cannot close. Remove sensing and it closes gaps blindly and never learns whether it did. Remove the comparator and you get two months of coherent work with no way to tell if this version is better than the last.

In practice, a minimal good harness has four parts:

**Eval.** A way to score your system against a frontier model with a good prompt, on your own evaluation set. Run it every quarter. If the gap is widening, your harness is learning something general capability cannot. If the gap is narrowing, you are being absorbed.

**Correction loop.** The place where users fix the output. This is the highest-quality labeled data the product will ever generate: a domain expert telling you exactly what was wrong, for free, at the moment of the error. If corrections flow back into the system, it gets better from use. If they do not, usage only produces volume.

**Actuation.** The output has to do something in the world, not just display. A decision executed and corrected inside the product makes replacing it surgery instead of procurement.

**Domain logic.** The rules that say which outputs go straight through, which get held for review, and which get blocked. These are not model capabilities. They are business facts: approval thresholds, regulatory constraints, risk tolerances. They change with the customer and the quarter, and they live in the harness.

**中文：**

借控制论的框架。一个朝目标改进的系统需要四样东西：**参考值**（理想状态是什么）、**传感**（实际状态是什么）、**比较器**（两者之间的 gap），以及**执行**（改变世界的能力）。回路运转，gap 缩小，实际收敛到理想。

模型不是这个系统。它是系统里的决策函数：一个部件。它在给定情境描述时提出该做什么，但并不知道你的业务里理想状态是什么，看不到自己行动之后发生了什么，也没有可以借以行动的东西。

**一个系统得以存在的最低配置：至少一个反馈回路，加至少一种执行动作的方式。**

去掉执行，模型只能产出关于一个它关不上的 gap 的文字。去掉传感，它盲目地去关 gap，永远不知道自己关上没有。去掉比较器，你得到的是两个月的连贯工作，没有任何办法知道这一版比上一版好没好。

在实践中，一个最小的好 harness 有四个部分：

**Eval。** 一种方法，在你自己的评测集上，把你的完整系统和一个前沿模型加好 prompt 对比打分。每个季度跑一次。差距在扩大，说明你的 harness 在学通用能力学不到的东西。差距在缩小，说明你正在被吸收。

**Correction loop。** 用户修改输出的那个地方。这是产品能拿到的质量最高的标注数据：一个领域专家在错误发生的当下，免费告诉你到底哪里错了。修正流回系统，它就从使用中变好。流不回去，使用只产生量。

**执行。** 输出要在世界里做点什么，不只是显示。一个在产品里被执行、被修正的决策，让替换它从一次采购变成一场手术。

**领域逻辑。** 哪些输出直接放行，哪些留给人复核，哪些直接拦下——这些规则不是模型能力，是业务事实：审批阈值、监管约束、风险容忍度。它们随客户和季度变化，住在 harness 里。

---

## Why Every SaaS Company Needs Its Own Harness
## 为什么每家 SaaS 公司都应该有自己的 Harness

**English:**

The death of a SaaS product without a harness is not sudden. It is chronic, and it starts in the price.

I have watched this pattern more than once. The customer stays, and at renewal the price comes down, because a procurement team that can now name three adequate alternatives negotiates differently. Gross margin drifts as inference gets bundled into cheaper tiers. Net revenue retention slides from above a hundred to below it over eighteen to twenty-four months, while the logo-retention chart still looks healthy.

One test cuts through all of it: **if a better base model can absorb your product, you do not have a moat. You have a timer.**

Three years ago, extracting contract clauses, classifying ticket intent, coding medical records, parsing invoices — all of these needed proprietary labeled data. Today a general model with a good prompt does most of them well enough for most buyers. The last several points of accuracy that proprietary data buys? The customer will not pay for them unless being wrong has a defined cost.

The harness is what creates distance that a better model cannot close. The corrections your users made last quarter live in your system, not in the model. The approval rules that match this customer's risk tolerance are configured in your product, not in a prompt. The evaluation set that defines "good enough" for this domain was built from months of observed outcomes, not from training data.

None of that arrives with a better model. All of it lives in the harness.

**中文：**

没有 harness 的 SaaS 产品的死法不是突然的。它是慢性的，最先表现在价格上。

这种模式我见过不止一次。客户没走，但续约时价格下来了：一个现在能说出三个够用替代品的采购团队，谈判姿态是不一样的。毛利率随着推理被打包进更便宜的档位而缓慢下移。净收入留存率在十八到二十四个月里从一百出头滑到一百以下，而 logo 留存率的图表看起来依然健康。

一个测试穿透这一切：**如果一个更强的基础模型能吸收你的产品，你没有护城河，你只有倒计时。**

三年前，抽取合同条款、分类工单意图、病历编码、解析发票——都需要私有标注数据。今天一个通用模型加好 prompt，大多数场景对大多数买家已经够用。私有数据买到的最后几个百分点？除非错了有明确代价，客户不会为它付钱。

Harness 创造的是更强模型关不掉的距离。用户上个季度做的修正住在你的系统里，不在模型里。匹配这个客户风险容忍度的审批规则配置在你的产品里，不在 prompt 里。定义这个领域"够好"的评测集，是从几个月的观测结果中建出来的，不是从训练数据来的。

这些都不随更强的模型一起到来。它们全部住在 harness 里。

---

## Why Harness Will Not Disappear
## 为什么 Harness 不会消失

**English:**

The common view: the harness is scaffolding. Models get better, the scaffolding falls away, and whatever you built on it was temporary.

A stronger model does not automatically figure out two things that the harness exists to answer: **what counts as good**, and **how to get from here to good**.

"What counts as good" is not a capability question. It is an opinion. A human has to decide that this approval threshold is right for this customer, that this error rate is acceptable in this domain, that this output needs a second review and that one does not. Those definitions change per customer, per quarter, per regulatory cycle. No amount of model capability produces them, because they are not facts to be learned. They are choices to be made, and someone has to bear the cost of making them wrong.

"How to get from here to good" requires acting in the world and observing what happened. The model can propose an action. It cannot execute it through the customer's systems, cannot observe the downstream outcome, and cannot take responsibility when the action causes damage. Execution requires permissions, audit trails, and integration with systems the model has no access to. Responsibility requires a person or an organization that will be accountable when things go wrong.

These two gaps do not close with scale. A model that is ten times more capable still does not know what this customer considers acceptable, still cannot act through their systems, and still cannot bear the liability of a wrong decision. The harness is where those answers live and where those actions happen.

I would rather name the failure condition than let it float. If model providers begin shipping the loop itself — defining "good" for your domain, acting with permissions and audit, bearing the cost of being wrong — then the harness really was temporary. The honest form of my claim: that is a professional services business, not a model release, and it has to be built one customer at a time.

**中文：**

常见的观点：harness 是脚手架。模型变强，脚手架脱落，你在上面建的东西只是暂时的。

更强的模型不会自动搞清楚 harness 存在就是为了回答的两个问题：**什么算好**，以及**怎么从现状走到好**。

"什么算好"不是能力问题，是观点问题。需要人来决定：这个审批阈值对这个客户合适，这个错误率在这个领域可以接受，这个输出需要二次复核而那个不需要。这些定义随客户、随季度、随监管周期变化。再强的模型能力也产出不了它们，因为它们不是可以学到的事实，而是需要做出的选择——而且有人要为选错承担代价。

"怎么从现状走到好"要求在世界里行动并观测结果。模型可以提议一个动作，但它执行不了——执行需要在客户系统里操作的权限、审计轨迹和集成。模型也观测不了下游结果。更根本的是，它无法为行动造成的损害承担责任。责任需要一个会在出错时被追责的人或组织。

这两个缺口不随规模缩小。一个强十倍的模型，仍然不知道这个客户认为什么可接受，仍然无法通过他们的系统执行动作，仍然无法承担一个错误决策的后果。Harness 是这些答案住的地方，也是这些动作发生的地方。

失败条件我宁愿写出来。如果模型厂商开始交付回路本身——替你的领域定义"好"、带权限和审计的执行、为做错买单——那时 harness 确实只是暂时的。我这个主张诚实的形态：**那是一门专业服务生意，不是一次模型发布，而且它必须一次一个客户地建。**

---

## What It Takes to Build a Good Harness
## 建一个好 Harness 需要什么

**English:**

The four parts above tell you what a harness is. Building one that lasts is a different question. The hard parts are not engineering — they are the things that take time to accumulate and cannot be bought on any schedule.

The first is data that a competitor cannot get by being smarter. The strongest form is outcome labels that take time to observe: did the loan get repaid, did the patient relapse, did the customer renew. A competitor with a better model still cannot compress the eighteen months it takes to find out. The second form is access locked behind a regulatory, contractual, or physical threshold. Everything else is supply chain. I would add one discipline that gets applied to other people's data stories but rarely to one's own: data has a half-life. Fraud patterns rotate. Regulatory changes invalidate labels. Accumulation only counts while it outruns decay.

The second is judgment that exists outside people's heads. Open your repository and count: schemas, label definitions, evaluation sets, approval rules, ranking functions, review queues. That is the honest inventory of what your team has learned. A company whose judgment lives entirely in two domain experts is selling consulting. Those two people become irreplaceable and then leave. Judgment that exists as code survives them.

The third is a workflow that owns the correction loop. Where users fix the output is where the label is generated. That stream is the least copyable asset in an AI product, because it carries the answer, the preference, and the process at once. A product that owns this loop gets better from use. A product that does not is static regardless of how good the model is.

Three numbers tell me whether a harness is actually working:

Correction rate over cohort age. Same task, same users: what share of outputs gets edited in month one versus month nine? Falling means the system learns. Flat means usage only produces volume.

Share of decisions closed inside the product. How many actions are executed in your system versus exported elsewhere? If users do the work somewhere else, you are a report, not a system of action.

Gross margin against inference cost. If inference costs fall and your price holds, you are selling something other than model calls. If your price falls with inference cost, you were reselling the model.

**中文：**

上面四个部分告诉你 harness 是什么。建一个能持续存在的 harness 是另一个问题。难的部分不是工程——是那些需要时间积累、按什么时间表都买不到的东西。

第一个是竞争对手靠更聪明拿不到的数据。最强的形态是需要时间才能观测到的结果标签：贷款有没有还上，病人有没有复发，客户有没有续约。一个拥有更强模型的竞争者，仍然压缩不了那十八个月。第二种是被监管、合同或物理门槛锁住的准入。除此之外的都属于供应链。我加一条纪律——人们常拿它衡量别人的数据故事，很少用在自己的上面：数据有半衰期。欺诈模式会轮换，监管变化让标签作废。积累只在跑赢衰减的时候才算数。

第二个是存在于人脑之外的判断。打开你的代码库数一数：schema、标签定义、评测集、审批规则、排序函数、审核队列。这是你的团队学到了什么的诚实盘点。一家公司的判断如果全部活在两个领域专家的脑子里，它卖的就是咨询。那两个人变得不可替代，然后离职。以代码形式存在的判断能活过他们。

第三个是拥有修正回路的工作流。用户修改输出的那个地方，正是标签被生成的地方。这条数据流是 AI 产品里最难被复制的资产，因为它同时携带了答案、偏好和流程。拥有这个回路的产品从使用中变好。不拥有的产品是静态的，不管模型有多强。

三个数字告诉我一个 harness 是不是真的在起作用：

修正率随 cohort 年龄的变化。同一类任务，同一批用户，第一个月和第九个月，输出被编辑的比例各是多少？下降说明系统在学习。持平说明使用只产生了量。

决策在产品内闭环的比例。有多少动作在你的系统里执行，多少导出到别处？如果用户在别处完成工作，你是一份报告，不是一个行动系统。

毛利率相对推理成本的走势。推理成本下降而你的价格守住了，说明你卖的不是模型调用。价格跟着推理成本一起降，说明你当初就是在转售模型。

---

## Recap
## 收束

**English:**

A model call wrapped in a UI is the easiest product to build and the easiest to kill. The harness — eval, correction loop, actuation, domain logic — is what turns it into a system that survives.

A stronger model does not replace the harness because it cannot answer the two questions the harness exists for: what counts as good (a human opinion, not a learned fact) and how to get there (action through real systems, with real liability). Those do not arrive with a model release. They are built one customer at a time.

The test is simple. Score your system against a frontier model with a good prompt, every quarter. If your system pulls ahead, the harness is learning. If the model is catching up, you are being absorbed, and no amount of product narrative will change the renewal.

**中文：**

一个套了 UI 的模型调用是最容易做的产品，也是最容易被杀死的。Harness——eval、correction loop、执行、领域逻辑——是把它变成一个能活下来的系统的东西。

更强的模型不会替代 harness，因为它回答不了 harness 存在就是为了回答的两个问题：什么算好（人的观点，不是可学到的事实），以及怎么到达好（通过真实系统的行动，承担真实的责任）。这些不随模型发布一起到来。它们一次一个客户地建。

测试很简单。每个季度把你的系统和一个前沿模型加好 prompt 对比打分。你的系统在拉开距离，说明 harness 在学习。模型在追上来，说明你正在被吸收，再好的产品叙事也改变不了那次续约。
