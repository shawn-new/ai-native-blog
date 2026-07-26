---
id: "article3-ai-native-moats"
slug: "moats-in-the-ai-native-era"
titleEn: "You Don't Have a Moat. You Have a Timer."
titleZh: "你没有护城河，你有倒计时"
category: "Opinions"
date: "2026-03-29"
author: "Sean"
release: "published"
keywords:
  - "AI Native"
  - "Moats"
  - "Unique Data"
  - "Workflow"
  - "Evaluation"
  - "Control Loop"
history:
  - "Sat Mar 28 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Initial release"
  - "Tue Mar 31 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Added single-factor failure cases"
  - "Wed Apr 01 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Prose rewrite: less formulaic, more human voice"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Brevity and before/after contrast revision"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Goal-mode 5-pass polish"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Adversarial investor pass: promote the one falsifiable test, add the convergence-gap measurement, narrow the data claim to the two cases that survive, drop case studies that undercut the thesis, concede that distribution usually outranks the framework"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Add the control-loop argument for why a better model does not absorb the harness, and recast the three assets as what the loop requires rather than a taxonomy"
---

# You Don't Have a Moat. You Have a Timer.
# 你没有护城河，你有倒计时

## The Death Is Chronic, Not Sudden
## 死法是慢性病，不是猝死

**English:**

The easiest AI product to build is also the easiest to kill.

Take a legal summarization tool. It calls a frontier model, asks for a summary, formats the answer, wraps it in a clean UI. Users like it, because the old workflow was painful. Then the model provider ships long-context document analysis, or the legal suite adds the same feature, or another team rebuilds it over a weekend at a lower price.

The tempting image is a countdown. It is wrong in a way that matters. Code being copyable in a weekend is not the same as a business being takeable in a weekend. In between sit security review, procurement, integration, support, and reference customers, and I have watched easily-copied products live on those for years.

The real death is slower and much easier to measure. It shows up first in the **price**: the customer stays, and at renewal the price comes down, because a procurement team that can now name three adequate alternatives negotiates differently. Gross margin drifts down as inference gets bundled into cheaper tiers. Net revenue retention slides from comfortably above a hundred to below it over eighteen to twenty-four months, while the logo-retention chart still looks healthy.

This is a chronic disease. That is the better news, because a chronic condition can be measured while it is still early.

One test matters more than any framework: **if a better base model can absorb your product, you do not have a moat. You have a timer.** Everything below is about how to tell which one you have, before the renewal tells you.

**中文：**

最容易做的 AI 产品，也最容易被杀死。

想象一个法律摘要工具：调用前沿模型，让它总结文件，格式化答案，套上干净的 UI。用户喜欢，因为旧流程确实痛苦。然后模型厂商发布长上下文文档分析，或者法律软件套件加上同样的功能，或者另一个团队用更低的价格在一个周末复刻出来。

最顺手的比喻是倒计时。这个比喻错在一个要紧的地方：**代码能在一个周末被复制，不等于生意能在一个周末被夺走。** 中间隔着安全审查、采购流程、集成、支持和参考客户，而我见过大量极易复刻的产品靠这些活了很多年。

真正的死法慢得多，也好量得多。它最先表现在**价格**上：客户没走，但续约时价格下来了，因为一个现在能说出三个够用替代品的采购团队，谈判姿态是不一样的。毛利率随着推理被打包进更便宜的档位而缓慢下移。净收入留存率在十八到二十四个月里，从一百出头滑到一百以下，而 logo 留存率的图表看起来依然健康。

这是一种慢性病。这反而是好消息，因为慢性病在早期就能被量出来。

有一个测试比任何框架都重要：**如果一个更强的基础模型能吸收你的产品，你没有护城河，你只有倒计时。** 下面全部内容，都是关于怎么在续约通知你之前，先判断出你手上是哪一个。

---

## The Measurement That Can Say No
## 一个能回答"否"的测量

**English:**

Most moat frameworks share the same defect: applied to a winner they explain the win, applied to a loser they explain the loss. A description that fits every outcome predicts none of them.

So before any taxonomy, one measurement. Every quarter, on your own evaluation set, score two things: your complete system, and a frontier model with a seriously written prompt. Record the gap.

**The gap widening means you are learning something general capability is not.** The gap narrowing means you are being absorbed, however complete your moat story sounds.

That single number does more work than any framework, for four reasons. It can come back negative. It is reproducible each quarter by the same person. It covers data, judgment, and workflow at once, since each of those can only show up as a difference in output. And it directly answers the question the timer test poses but cannot resolve on its own.

Three more observables, all computable from data you already have:

**Correction rate over cohort age.** For the same class of task, what share of outputs does a user edit in month one versus month nine of the same cohort? Falling means the system is learning from use. Flat means usage is only producing volume, and that distinction is the whole argument of this post.

**Share of decisions closed inside your product.** How many actions are executed in your system versus exported and executed elsewhere? This is the only honest measure of whether you are a system of action or a very good report.

**Gross margin against inference cost.** If inference costs fall and your price holds, you are selling something other than model calls. If your price falls with inference cost, you were reselling the model.

**中文：**

大多数护城河框架都有同一个缺陷：拿它去解释赢家，它解释得通；拿它去解释输家，它也解释得通。**一个能吻合任何结果的描述，预测不了任何结果。**

所以在任何分类学之前，先给一个测量。每个季度，在你自己的评测集上，测两条线：你的完整系统，以及一个前沿模型加一个认真写的 prompt。记录这个差距。

**差距在扩大，说明你在学习通用能力学不到的东西。差距在缩小，说明你正在被吸收**，不管你的护城河故事讲得多完整。

这一个数字比任何框架都管用，理由有四个：它可能给出负面答案；它每个季度由同一个人可复现；它同时覆盖数据、判断和工作流，因为这三样只能以输出的差异表现出来；而且它直接回答了那个"倒计时测试"提出、却无法自行解决的问题。

再给三个可观测量，都能用你手上已有的数据算出来：

**修正率随 cohort 年龄的变化。** 同一类任务，同一批用户，在第一个月和第九个月，输出被人工编辑的比例各是多少？下降说明系统在从使用中学习。持平说明使用只产生了量。**这个区分就是这篇文章的全部论点。**

**决策在你产品内闭环的比例。** 有多少动作是在你的系统里执行的，多少是导出到别处执行的？这是判断你到底是 system of action、还是一份很好的报告，唯一诚实的度量。

**毛利率相对推理成本的走势。** 推理成本下降而你的价格守住了，说明你卖的不是模型调用。价格跟着推理成本一起下降，说明你当初就是在转售模型。

---

## Why A Better Model Does Not Absorb The Loop
## 为什么更强的模型不会吸收掉这个回路

**English:**

The common counterargument is that the harness around a model (the tools, the retrieval, the evaluation, the correction queue) is scaffolding. Models get better, the scaffolding falls away, and whatever you built on it was a bridge to somewhere you have now arrived.

I disagree, and the reason is structural. It holds whatever the models do next.

Borrow the frame from control theory. A system that improves toward a goal needs four things: a **reference** (what the desired state is), **sensing** (what the actual state is), a **comparator** (the gap between them), and **actuation** (the ability to change something in the world). The loop runs, the gap shrinks, and the actual converges on the intended.

A model is not that system. It is the decision function inside it: one component, an input. It proposes what to do given a description of the situation. By itself it does not know what the desired state is in your business, cannot observe what happened after it acted, and cannot act at all without something to act through.

That is why the minimal useful harness is not a design preference. It is the minimum a system needs to exist at all: **at least one feedback loop and at least one way to take action.** Remove actuation and the model produces text about a gap it cannot close. Remove sensing and it closes gaps blindly and never learns whether it did. A better model makes a better proposal at one step of the loop. It does not supply the loop.

Now the part that connects this to everything else in this post. Computing a gap is not a capability question. It requires knowing what the desired state is, what to measure, and what counts as closed. Those are domain facts.

That is what the three assets actually are. They are not three things to accumulate; they are what the loop requires in order to run. **Unique data** is the ability to sense an actual state others cannot see. **Insight** is knowing why a gap is a gap, which gaps matter, and which ones are noise. **Workflow** is the actuation path, plus the place where corrections re-enter and become the next reference. Data answers *what and where*, insight answers *why*, workflow answers *how*. The gap's five Ws are held by whoever runs the loop. Supplying the decision function does not come with them.

This argument has a clear failure condition, and I would rather name it than let it float. If model providers begin shipping the loop itself (native sensing into your domain's systems, actuation with permissions and audit, memory of what happened last time), they are supplying the system rather than the decision function, and the harness really was temporary. That is already happening at the edges. The honest form of my claim is that shipping a better decision function is far easier than shipping someone else's feedback loop, because the loop is made of that customer's reality.

**中文：**

常见的反驳是：模型外面那层 harness（工具、检索、评测、修正队列）只是脚手架。模型会变强，脚手架会脱落，你在上面建的东西不过是一座通往你现在已经抵达之处的桥。

我不同意，而理由是结构性的。无论模型接下来变得多强，它都成立。

借控制论的框架来看。一个朝目标改进的系统需要四样东西：**参考值**（理想状态是什么）、**传感**（实际状态是什么）、**比较器**（两者之间的 gap），以及**执行**（改变世界的能力）。回路运转，gap 缩小，实际状态收敛到理想状态。

**模型不是这个系统，它是系统里的决策函数**：一个部件，一个 input。它在给定情境描述时提出该做什么，但并不知道你的业务里理想状态是什么，看不到自己行动之后发生了什么，也没有可以借以行动的东西。

所以"最小可用的 harness"不是一种设计偏好，它是**一个系统得以存在的最低配置：至少一个反馈回路，加至少一种执行动作的方式。** 去掉执行，模型只能产出关于一个它关不上的 gap 的文字；去掉传感，它会盲目地去关 gap，并且永远不知道自己关上没有。**更强的模型让回路里某一步的提议更好，但它不提供这个回路。**

现在是把这件事和这篇文章其余部分连起来的那一步。**算出一个 gap 不是能力问题。** 它要求你知道理想状态是什么、该测什么、以及什么算关上了。这些都是领域事实。

这才是那三样资产真正的身份。**它们不是三样要去积累的东西，而是这个回路得以运转所必需的东西。** 独特数据是**感知别人看不见的实际状态**的能力。洞察是知道**为什么一个 gap 是 gap、哪些 gap 要紧、哪些只是噪音**。工作流是**执行路径**，以及修正重新进入回路、变成下一个参考值的那个位置。数据回答 what 和 where，洞察回答 why，工作流回答 how。**一个 gap 的五个 W，握在运转回路的人手里。提供决策函数的人拿不到它们。**

这个论证有明确的失败条件，我宁愿写出来也不想让它飘着：**如果模型厂商开始交付回路本身**（原生接入你所在领域系统的传感、带权限和审计的执行、对上次发生了什么的记忆），它们提供的就是整个系统而非决策函数，那时 harness 确实只是暂时的。这件事已经在边缘上发生了。我这个主张诚实的形态是：**交付一个更好的决策函数，比交付别人的反馈回路容易得多，因为那个回路是由客户的现实构成的。**

---

## When Data Is Actually A Moat
## 数据什么时候才真的是护城河

**English:**

"We have a data moat" is the most common claim in this category and the one that survives diligence least often. The version I can defend is much narrower than the usual claim.

Start with the strongest counterargument, because it usually gets disposed of in half a clause. Three years ago, extracting contract clauses, classifying ticket intent, coding medical records, parsing invoices. All of these needed labeled proprietary data. Today a general model with a good prompt does most of them at a level that is adequate for most buyers. Proprietary data buys the last several points of accuracy. **The question is whether the customer will pay for those points**, and usually the answer is no unless those points cross a line where being wrong has a defined cost.

That gives the two cases where data genuinely holds:

**The data carries outcome labels that take time to observe.** Did the loan get repaid, did the patient relapse, did the customer renew, did the part fail. A competitor with a better model still cannot compress the eighteen months it takes to find out. Time is the only input that cannot be bought at any funding level, which is why outcome-linked data is the one form that reliably survives.

**Getting the data requires crossing a threshold** that is regulatory, contractual, or physical. Access granted by a licence, a signed data agreement, or a sensor that exists in a place competitors are not.

Everything else is supply chain.

And a discipline usually applied to other people's moats but not to one's own: **data has a half-life.** Fraud patterns rotate. A regulatory change can invalidate historical labels. Customer behavior drifts with the macro cycle. "It compounds through use" is only true while accumulation outruns decay, and that is a condition to check every time.

**中文：**

"我们有数据护城河"是这个品类里最常见的说法，也是最经不起尽调的那个。我守得住的版本，比通常那个说法窄得多。

先从最强的反驳开始，因为它通常只被半个从句打发掉。三年前，抽取合同条款、分类工单意图、病历编码、解析发票，这些都需要标注过的私有数据。今天，一个通用模型加一个好 prompt，在大多数场景做到的水平对大多数买家已经够用。私有数据买到的是最后那几个百分点的准确率。**问题是客户会不会为这几个点付钱**，而答案通常是不会，除非这几个点跨过了一条"错了要付明确代价"的线。

由此得出数据真正成立的两种情况：

**这些数据带着需要时间才能观测到的结果标签。** 贷款有没有还上，病人有没有复发，客户有没有续约，零件有没有失效。一个拥有更强模型的竞争者，仍然压缩不了那十八个月。**时间是唯一一样多少融资都买不到的投入**，这也是为什么"带结果标签的数据"是唯一一种可靠存活的形态。

**拿到这些数据需要跨过一道门槛**，监管的、合同的，或者物理的。一张牌照给的准入，一份签署的数据协议，或者一个装在竞争对手到不了的地方的传感器。

除此之外的，都属于供应链。

还有一条纪律，人们常拿它衡量别人的护城河，却很少用在自己偏爱的那个上面：**数据是有半衰期的。** 欺诈模式会轮换。一次监管变化可以让历史标签作废。客户行为随宏观周期漂移。"使用会让它复利"只在积累速度快过衰减速度时成立。**这是一个每次都要去检查的条件。**

---

## Insight And Workflow, Measured By What They Leave Behind
## 洞察和工作流，用它们留下的东西来衡量

**English:**

Data alone is inert. A warehouse of facts does not know what matters. Insight is the part that turns reality into a decision, and it is only real when it exists outside someone's head. As artifacts you can count.

Open your repository and count them: schemas, label definitions, evaluation sets, approval rules, ranking functions, review queues. That list is the honest inventory of accumulated judgment. A company whose insight lives entirely in two domain experts is selling consulting, and the failure mode is not dramatic. Those two people simply become unreplaceable and then leave.

Workflow is where judgment becomes repeatable. The property that matters is narrower than "users spend time here": **if the product owns the correction loop, it owns learning.** Where the user fixes the output is where the label is generated, and that stream is the least copyable asset in an AI product, because it carries the answer, the preference, and the process at once.

That is also the transition from a system of record to a system of action. Once decisions are executed and corrected inside the product, replacing it stops being procurement and becomes surgery.

**中文：**

数据本身是惰性的，它不会自己产生意义。一仓库事实并不知道什么重要。洞察是把现实变成决策的那一部分，而它只有存在于某个人的脑子之外时才算真的存在，以你能数出来的工件形式。

打开你的代码库数一数：schema、标签定义、评测集、审批规则、排序函数、审核队列。这份清单，才是"积累下来的判断力"的诚实盘点。一家公司的洞察如果全部活在两个领域专家的脑子里，那它卖的就是咨询；而且失败方式一点都不戏剧化，那两个人只是变得不可替代，然后离职。

工作流是判断变得可重复的地方。真正要紧的属性比"用户在这里花了很多时间"窄得多：**如果产品拥有修正回路，它就拥有学习。** 用户修改输出的那个地方，正是标签被生成的地方；而这条数据流是 AI 产品里最难被复制的资产，因为它同时携带了答案、偏好和流程。

这也是从 system of record 走向 system of action 的那一步。**当决策在你的产品里被执行、被修正，替换你就不再是一次采购，而是一场手术。**

---

## Distribution Beats All Of This More Often Than I Admitted
## 分发赢过上面这一切的频率，比我承认的高

**English:**

The easy dismissal of distribution is that it "buys attention" but cannot substitute for owned learning. That is a strawman, and it deserves to be dropped properly.

In enterprise software, distribution is not attention. It is a signed master agreement, a completed security review, an existing budget line, a vendor number already in the procurement system, and a salesperson who has had dinner with the CIO. Those structurally lower customer acquisition cost and shorten the sales cycle, and they compound. Frequently faster than a learning loop does.

The examples run against me. Teams took the collaboration market from Slack largely by being bundled into an enterprise agreement, with none of the trinity this post is built on. And Salesforce, the standard example of deep workflow ownership, had the strongest enterprise sales machine of its era *first*, and grew the account and pipeline vocabulary afterward. The causality usually runs the other way. Distribution is won first, and deep workflow grows on top of it.

So the honest boundary condition: this framework applies where distribution is roughly matched, or where the category is new enough that no incumbent holds the channel. Inside a category where someone can bundle, they usually win, and the moat you build has to be good enough to survive being un-bundled rather than good enough to win on its own.

**中文：**

对分发最省事的打发是说它"能买到注意力"，但无法替代自有学习。那是一个稻草人，应该被正式放弃。

在企业软件里，分发不是注意力。它是一份已签的主协议、一次已经通过的安全审查、一条已经存在的预算线、一个已经在采购系统里的供应商编号，以及一个和 CIO 一起吃过饭的销售。这些东西**结构性地压低获客成本、缩短销售周期，而且它们会复利，往往比学习回路复利得更快。**

例子是反对我的。Teams 从 Slack 手里拿走协作市场，主要靠的是被打包进企业协议，而这篇文章赖以成立的三样它一样都没有。而 Salesforce（讲深工作流时最常被举的例子）是**先**有了那个时代最强的企业销售机器，**然后**才长出 account 和 pipeline 那套工作流语言的。因果通常是反过来的：**先赢下分发，深工作流才在它上面长出来。**

所以诚实的适用边界是：这个框架适用于分发大致打平的地方，或者品类新到没有在位者握住渠道的时候。在一个有人可以打包的品类里，通常是打包的人赢；而你建的护城河，标准不是"好到能靠自己赢"，是"好到能在被打包之后活下来"。

---

## What Would Prove This Wrong
## 什么能证明这套是错的

**English:**

A framework that takes no risk is worth nothing, so here is the risk.

If a company holding all three. Outcome-linked proprietary data, judgment encoded as artifacts, and a workflow owning the correction loop. Nonetheless loses more than a fifth of its pricing power to general capability improvement within twenty-four months, then the trinity is not what determines outcomes, and I would want to know it.

The honest use of this is diagnostic. A founder who tells me their insight layer is currently two domain experts and that this is their largest risk is using it as a knife. A founder who tells me they have all three is using it as a mirror, and a mirror is what this kind of framework turns into by default.

The version worth defending is much smaller than the one this genre usually offers: one measurement that can fail, two conditions under which data survives, one property that makes workflow defensible, and an admission that distribution outranks all of it more often than the genre likes to say. If your convergence gap is widening this quarter, the rest is commentary. If it is narrowing, no amount of framework will save the renewal.

**中文：**

一个不承担任何风险的框架一文不值，所以下面是风险。

如果一家公司三样俱全（带结果标签的私有数据、以工件形式沉淀下来的判断、一个拥有修正回路的工作流），却仍然在二十四个月内，因为通用能力的提升而丢掉超过五分之一的定价能力，那么这个三位一体就不是决定结果的东西，而我想知道这件事。

它诚实的用法是诊断。一个创始人告诉我"我们的洞察层目前就是两个领域专家的脑子，这是我们最大的风险"，他是在**把它当刀用**。一个创始人告诉我"我们三样都有"，他是在**把它当镜子用**，而这类框架如果不设防，默认就会变成那面镜子。

我愿意守的版本，比这个文体通常给的小得多：**一个可能失败的测量，两种数据得以存活的条件，一条让工作流可防守的属性，以及一句承认：分发赢过上面这一切的频率，比这个文体愿意承认的高。** 如果你这个季度的收敛差距在扩大，剩下的都是注解；如果它在缩小，再完整的框架也救不了那次续约。
