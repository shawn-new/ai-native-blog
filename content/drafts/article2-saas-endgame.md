---
id: "article2-saas-endgame"
slug: "the-saas-endgame"
titleEn: "When Nobody Opens the App, What Do You Charge For?"
titleZh: "没人打开 app 之后，你靠什么收费？"
category: "Opinions"
date: "2026-03-29"
author: "Sean"
release: "draft"
keywords:
  - "SaaS Endgame"
  - "AI Agents"
  - "System of Record"
  - "Pricing"
  - "Context"
history:
  - "Sat Mar 28 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Initial release"
  - "Wed Apr 01 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Prose rewrite: less formulaic, more human voice"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Brevity and before/after contrast revision"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Goal-mode 5-pass polish"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Adversarial SaaS-operator pass: add the pricing mechanics with real per-outcome and per-action numbers, narrow the false 'screen was the moat' premise, answer why this round differs from chatbots and voice, merge four layers into one, replace the strawman objection"
---

# When Nobody Opens the App, What Do You Charge For?
# 没人打开 app 之后，你靠什么收费？

## The Screen Was Never The Whole Moat
## 屏幕从来不是全部的护城河

**English:**

An agent can draft the update, summarize the account, fill the ticket, query the database, trigger the workflow, and write the result back. The user may never open the full app. They ask from Slack, email, a browser sidebar, or another AI workspace.

The usual way to describe this is that SaaS won by owning the screen, and AI is taking the screen away. It does not survive contact with the list of companies that actually won.

CRM, ERP, HRIS, ITSM, billing, observability: those categories have been mocked for their interfaces for twenty years while renewing above ninety-five percent. They did not win on the screen. They won on implementation cost, integration depth, compliance posture, and a procurement department that does not want to run another vendor evaluation. UI rarely makes the top three on an enterprise buying scorecard, and when it does appear it usually arrives disguised as training cost.

So the honest version is narrower. **The screen was a real moat on one side of the market and a much weaker one on the other.** In product-led and SMB software, the interface was the whole funnel: self-serve signup, no implementation, and activation determined by how good the first screen was. In enterprise it was decoration on top of switching costs.

What AI changes is that it flattens the side where the screen actually mattered. Which means both halves of the market now compete on the same thing, and it is the thing enterprise software has always competed on: who owns the context the work runs through.

**中文：**

Agent 可以写更新、总结 account、填 ticket、查数据库、触发 workflow，再把结果写回系统。用户可能根本不打开完整的 app，他在 Slack、邮件、浏览器侧边栏，或者另一个 AI workspace 里就把事办了。

通常的讲法是：SaaS 靠占住屏幕赢，而 AI 正在把屏幕拿走。但这个说法经不起和真正赢家的名单对照。

CRM、ERP、HRIS、ITSM、billing、observability：这些品类的界面被吐槽了二十年，续约率一直在九成五以上。它们不是靠屏幕赢的，是靠实施成本、集成深度、合规资质，以及一个不想再走一遍供应商评估流程的采购部门。UI 很少能进企业采购评分表的前三名；它真出现的时候，通常是伪装成培训成本进来的。

所以诚实的版本要窄得多：**屏幕在市场的一侧曾经是真护城河，在另一侧则弱得多。** 在 PLG 和中小客户那一侧，界面就是整条漏斗，自助注册、无需实施，激活率直接由第一屏决定。在企业侧，它只是盖在切换成本之上的装饰。

AI 改变的是：它把屏幕真正起作用的那一侧抹平了。于是市场的两半现在竞争的是同一件事，而这件事正是企业软件一直以来竞争的东西：**谁拥有工作赖以流经的 context。**

---

## Why This Round Is Not The Last Three
## 这一轮和前三轮的区别

**English:**

"The interface is going away" is not a new prediction. Chatbots were going to replace apps in 2016. Voice was going to do it in 2018. No-code was going to make the vendor unnecessary. None of those moved renewal rates, and a reader who has been through them is entitled to assume this is the fourth.

Here is what I think is actually different, stated narrowly enough to be wrong.

Those rounds changed the **input method**. You typed to a bot instead of clicking a form, or spoke instead of typing. What they did not change was where truth lived, who was allowed to write to it, or how a change got audited. So the work always came back into the app, because that was the only place a change could be made real.

This round changes write access. An agent that can only read is a search box with better manners. An agent that can write to the system of record, under a permission model, leaving an audit trail, is doing the thing the app existed to do.

That gives a clean falsifier, and I would rather state it than leave the claim floating: **if three years from now enterprise agents still predominantly read and recommend rather than write and commit, this post is wrong** and the interface stays where it is, for the same reason it survived the last three rounds.

**中文：**

"界面要消失了"不是一个新预言。2016 年聊天机器人要取代 app，2018 年轮到语音，再后来是 no-code 要让供应商变得多余。这些都没有让续约率动过一分，而一个经历过这几轮的读者，完全有理由默认这是第四轮。

下面是我认为真正不同的地方，说得足够窄，窄到可以是错的。

前几轮改变的是**输入方式**。你对着 bot 打字而不是填表单，或者用说的代替打字。它们没有改变的是：事实存在哪里、谁被允许写入、以及一次变更怎么留痕。所以工作最后总要回到 app 里完成，因为那是唯一能让一次变更真正生效的地方。

这一轮改变的是**写权限**。一个只能读的 agent，是一个礼貌一点的搜索框。一个能在权限模型之下写入 system of record、并留下审计痕迹的 agent，正在做 app 当初存在的理由。

这给出了一个干净的证伪条件，我宁愿把它写出来也不想让主张飘着：**如果三年之后，企业 agent 仍然以"读取和建议"为主、而不是"写入和提交"，那这篇文章就是错的**。界面会留在原地，理由和它熬过前三轮的理由完全一样。

---

## What Gets Weaker
## 会变弱的东西

**English:**

**Before:** The weakest SaaS was still defensible if it had a better interface. Users had to go somewhere to do the work, and whoever built the best screen won adoption.

**After:** The weakest SaaS is a thin interface over a generic task. Note-taking, email rewriting, simple dashboards, basic approvals, a nicer page wrapped around a public API. Still useful. Useful is not defensible.

If a task has no proprietary data, no deep workflow, no unique distribution, and no hard domain logic, the base model adds the feature, the platform bundles it, and the system of record exposes it as one more command.

When a product does not own the context, it becomes an execution surface for someone else's context. That sentence is worth keeping as a self-check, because you can run it on your own roadmap this afternoon.

**中文：**

**之前：** 最弱的 SaaS，只要界面做得比别人好，仍然可以防守。用户必须去某个地方完成工作，谁做了最好的屏幕，谁就赢得 adoption。

**之后：** 最弱的 SaaS 是包在通用任务外面的一层薄界面，记笔记、改邮件、简单 dashboard、基础审批、把一个公开 API 包成更好看的页面。仍然可能有用，但有用不等于可防守。

如果一个任务没有私有数据、没有深工作流、没有独特分发，也没有困难的行业逻辑，那么基础模型会把它加成一个功能，平台会把它打包，system of record 会把它变成又一条命令。

**一个产品不拥有 context，它就会变成别人 context 上的一层执行界面。** 这句话值得留着当自查工具，因为你今天下午就能拿它去照自己的路线图。

---

## What Holds: Four Faces Of One Thing
## 守得住的东西：同一件事的四个面

**English:**

It is tempting to treat these as four separate layers. They are not. They are four faces of owning context, and pretending otherwise made the list look more systematic than the idea actually is.

**The facts.** The canonical version of work: customers, contracts, employees, tickets, invoices, inventory, incidents, audit logs. An agent can answer only if it knows which data is true, act only if it has permission, and automate only if it can write the result somewhere trusted.

**The relationships.** A customer problem is an incident in one system, a case in another, an escalation inside the support team. To a person these obviously mean the same thing; to an agent they are unrelated strings until someone maps them. Without that map the agent summarizes the wrong record, updates the stale system, or creates a duplicate instead of linking it. Entity resolution used to be back-office plumbing. It is now the precondition for an agent understanding the business before it touches anything.

**The history.** Not just what is true, but how it became true: who approved it, what was corrected, which exception was granted and by whom. This is the part a competitor cannot buy, because it was produced by your users making decisions over years.

**The industry shape.** The same object model means different things in insurance than in logistics, and generic AI has no map of either.

Now the objection that should worry anyone making this argument, including me. **The lock-in on a system of record came mostly from the cost of moving, far more than from the data itself.** Twelve to eighteen months of implementation, a team spent on field mapping and cleanup, and a procurement process nobody wants to repeat. Data has been exportable for years. So if AI can automate cross-system entity mapping, then the very capability I spent this section describing is the one that dissolves the switching cost.

I think the moat survives, but it has to be relocated to survive honestly. What does not automate is **accountability**: the audit chain, the permission model, the signature on the record when a regulator asks. Mapping is a data problem, and it is getting cheaper. Who is liable when the mapping is wrong belongs to a different category, and no model accepts that liability. The defensible layer is the one that answers for being wrong.

**中文：**

很容易把这部分拆成四个独立的层。它们并不独立。它们是"拥有 context"这一件事的四个面，把它们拆开写，只是让这个清单显得比这个想法本身更成体系。

**事实。** 工作的标准版本：客户、合同、员工、ticket、发票、库存、incident、审计日志。Agent 要回答问题，必须知道哪份数据是真的；要执行动作，必须有权限；要自动化，必须能把结果写回一个可信的地方。

**关系。** 同一个客户问题，在一个系统里叫 incident，在另一个叫 case，在支持团队内部叫 escalation。人一眼看出这是同一件事；对 agent 来说，在有人做映射之前，它们只是几组互不相干的字符串。没有这张映射，agent 会总结错 record、更新已经过时的系统，或者重复创建而不是把两者关联起来。实体解析过去只是后台管道，现在是 agent 在碰任何东西之前理解这门业务的前提。

**历史。** 不只是什么是真的，还有它**怎么变成真的**：谁批准的、什么被修正过、哪个例外是谁给的。这一部分竞争对手买不到，因为它是你的用户在很多年里做决策产生出来的。

**行业形状。** 同一套对象模型，在保险业和在物流业里含义不同，而通用 AI 对两者都没有地图。

现在说那个应该让任何持这个论点的人（包括我）不安的反驳。**System of record 的锁定主要来自迁移成本，而非数据本身**：十二到十八个月的实施周期、一个团队一整年的字段映射和数据清洗，以及一套没人想再走一遍的采购流程。数据本身早就能导出了。所以，如果 AI 能自动化跨系统的实体映射，那么我这一节花了大量篇幅描述的那个能力，恰恰就是溶解切换成本的那把钥匙。

我认为护城河仍然成立，但它必须被搬到另一个位置才诚实。**不会被自动化的是问责**：审计链、权限模型，以及监管来问的时候那份记录上的签字。映射是一个数据问题，而且正在变便宜。映射错了谁负责，则是另一类问题，而且没有任何模型会接下这个责任。**可防守的那一层，是为"错了"负责的那一层。**

---

## The Record Itself Is Not Safe
## 记录本身也不安全

**English:**

There is a bigger hole in the argument above, and it comes from the same direction as everything else in this post. If AI makes software cheap to build, it does not only thin the interface. It lowers the cost of a large customer building the thing itself.

That is not hypothetical at the top of the market. United Airlines has been replacing decades-old IBM mainframes, some of the underlying code dating to the 1960s, with cloud systems it built, at a cost its chief executive has put in the hundreds of millions. When the buyer is large enough, "buy the system of record" and "build the system of record" are both live options, and the second one gets cheaper every year that implementation gets cheaper.

So the layer I just called defensible gets attacked from above, by its own best customers, using the same force that thinned the UI. Anyone whose strategy is "own the record" should hold that with less confidence than the genre usually does. Including me, two sections ago.

Which suggests a sharper test than "do you own the record." **Could one customer build this for itself?** If yes, then at your largest accounts you are renting time, and what survives is whatever a single company cannot produce alone:

**Scale and network effects**. Value that exists only because many parties are on the same system, which no in-house build reproduces because a company cannot be its own network.

**A data flywheel across customers**. Learning from patterns visible only when you see many organizations at once. United can see United's data perfectly. It cannot see everyone else's.

**Security and liability posture**. The certifications, the incident response, and the willingness to be the party that answers when something goes wrong. Expensive to maintain, and rarely worth reproducing for one company.

**Vertical domain knowledge encoded as product**. The workflows, edge cases, and regulatory shape of an industry, accumulated across everyone in it.

Those four have a common property: they are all things that get *more* valuable as more customers use them, which is precisely what an in-house build cannot bootstrap. That is a narrower and more durable claim than "the record is the moat," and it is the one I would now defend.

**中文：**

上面的论证还有一个更大的洞，而且它来自和这篇文章其余部分同一个方向：**如果 AI 让软件变便宜，它稀释的不只是界面，它同时降低了大客户自己把这东西建出来的成本。**

在市场顶端，这已经不是假设。United Airlines 一直在用自建的云系统替换那些运行了几十年的 IBM 大型机（底层有些代码可以追溯到 1960 年代），其 CEO 公开说这件事花掉了数亿美元。**当买方大到一定程度，"买下 system of record"和"自己建 system of record"是两个都成立的选项**，而且随着实施成本逐年下降，第二个每年都更便宜一点。

于是我刚刚称为"可防守"的那一层，正在被它最好的客户从上面攻击，用的还是那股把 UI 变薄的同一股力量。任何以"拥有记录"为战略的人，都该比这个文体通常的口气持有得更松一点，包括两节之前的我自己。

由此可以得到一个比"你拥有记录吗"更锋利的测试：**这东西，一个客户能不能自己建出来？** 如果能，那么在你最大的那几个账户上，你租的是时间。而能活下来的，是那些单独一家公司做不出来的东西：

**规模效应和网络效应**：价值只在很多方都在同一个系统上时才存在。自建复制不了它，因为一家公司没法成为自己的网络。

**跨客户的数据飞轮**：只有同时看到很多组织时才会浮现的模式。United 可以把 United 的数据看得一清二楚，它看不见其他所有人的。

**安全与责任姿态**：那些认证、那套事故响应，以及"出事时愿意由我来答"的意愿。维持成本很高，而为一家公司单独复制一遍很少划算。

**沉淀成产品的垂直领域 know-how**：一个行业的工作流、边缘情况和监管形状，从这个行业所有人身上累积而来。

这四样有一个共同属性：**它们都是用的人越多就越值钱的东西**，而这恰恰是自建无法冷启动的。这是一个比"记录就是护城河"更窄、也更耐久的主张，而它是我现在愿意守的那个。

---

## The Pricing Problem
## 定价问题

**English:**

Everything above is a claim that value moves. In a software business, value moving has exactly three visible forms: the price changes, retention changes, or the cost of acquiring a customer changes. A version of this argument that never touches any of them is a mood. So here is the money.

**The unit of value is migrating from the seat.** Seat pricing assumed a human opening the app; when one agent does the work of five people, the meter is measuring the wrong thing. Two real answers are visible in the market right now, and they are not the same answer. Intercom's Fin charges roughly **$0.99 per outcome** (a resolution, a procedure handoff, or a disqualification), regardless of how many steps it took to get there. Salesforce's Agentforce charges per *action* through Flex Credits, with a documented entry point around **$500 for 100,000 credits** and a standard action at 20 credits, or about **$0.10 per action**.

That contrast is the whole strategic question in miniature. Per-outcome prices what the buyer wanted. Per-action prices what the vendor spent. Outcome pricing is far more attractive to a buyer and transfers all the model-cost risk to the vendor, which only works if you are confident your unit costs keep falling.

**Who cuts price first.** Not the weakest product. The one that is easiest for a base model to replicate *and* has the shortest contract. Monthly billing, no integration, no compliance review. Those two conditions together are the predictor. Product quality is not one of them.

**Whose retention falls, and how.** Seat-based products whose seat count tracks headcount: meeting notes, writing assistants, generic dashboards. And the failure mode is not churn, which is what makes it easy to miss. It is **downsell**. The logo renews, the seat count gets cut, and net revenue retention slides from comfortably above a hundred to below it while the logo-retention chart still looks fine. If you only watch churn you will find out a year late.

One event is worth more than the argument: in June 2026 Salesforce agreed to acquire Fin for roughly $3.6 billion, signed and not yet closed as of this writing. The outcome-priced agent was bought by the company that owns the record. That is this post's thesis happening in public, and a warning to anyone whose plan is to be the agent layer on top of someone else's system of truth.

**中文：**

上面写的全都是"价值在转移"这个主张。而在一门软件生意里，价值转移只有三种可见形式：**价格变了、留存变了、获客成本变了**。一个从不碰这三样的版本，只是一种情绪。所以下面说钱。

**计价单位正在离开席位。** 按席位收费的前提是有个人会打开 app；当一个 agent 干五个人的活，这个计价器量的就是错的东西。市场上现在能看到两个真实答案，而且它们不是同一个答案。Intercom 的 Fin 按**约 0.99 美元一个 outcome** 收费（一次解决、一次流程移交、或一次排除），不管中间走了多少步。Salesforce 的 Agentforce 按**动作**收费，走 Flex Credits，公开的入门档大约是 **500 美元买 10 万 credits**，标准动作 20 credits，也就是**每个动作约 0.1 美元**。

这个对比本身就是整个战略问题的缩影：**按结果计价，卖的是买家想要的东西；按动作计价，卖的是供应商花掉的东西。** 结果计价对买家吸引力大得多，同时把模型成本的风险全部转移到供应商身上，这只有在你确信自己的单位成本会持续下降时才成立。

**谁先降价。** 不是产品最弱的那个，而是**最容易被基础模型复刻、并且合同期最短**的那个：月付、无集成、无合规审查。决定谁先降的是这两个条件叠加。产品质量不在其中。

**谁的留存先掉，以及怎么掉。** 席位数和人头强绑定的产品：会议记录、写作助手、通用 dashboard。而且失败模式不是流失，这正是它容易被漏掉的原因。它是 **downsell**：logo 照常续约，席位数被砍，净收入留存率从一百出头滑到一百以下，而 logo 留存率的图表看起来毫无问题。**只盯流失率的人，会晚一年才知道。**

有一件事比上面所有论证都更有说服力：2026 年 6 月，Salesforce 宣布以约 36 亿美元收购 Fin，截至本文写作时已签约、尚未交割。**那个按结果计价的 agent，被拥有记录的那家公司买走了。** 这是这篇文章的论点在公开市场上演了一遍，同时也是对所有"我要做别人事实系统之上的 agent 层"这个计划的一次警告。

---

## Distribution Is The One That Is Genuinely Different
## 分发是真正独立的那一个

**English:**

Everything in the previous two sections is about owning an asset. This one is not. Distribution and deployment are about having a path into the customer at all, and this is the only item on the list that is not a restatement of the others.

Reaching production inside a real enterprise means passing security review, integrating with identity, satisfying procurement, and surviving a pilot. Companies that can do that repeatedly have something a better model does not confer.

The counterintuitive part, and the piece of this I believe most: **a services motion is an entry point.** Deployment work buys a position inside the customer that a purely self-serve product cannot buy at any price. But it has to be priced honestly, because services margins run far below software margins, and a company that funds growth this way is trading gross margin for position. That trade is worth making when the position compounds into product, and is worth nothing when it does not. It is the same test as the one for deployment work generally: does the next customer get cheaper, or does the second cost what the first did?

**中文：**

前面两节讲的都是"拥有一项资产"。这一节不是。分发和部署讲的是**你有没有一条进入客户的通道**，它是这份清单上唯一一项不是在换个说法重复其他项的东西。

在一家真实企业里走到生产环境，意味着通过安全审查、对接身份系统、满足采购要求、熬过 POC。能反复做到这件事的公司，握着的是一个更好的模型给不了的东西。

反直觉的那一半，也是我最相信的一半：**服务动作是入口。** 部署工作买到的是一个客户内部的位置，而纯自助产品出多少钱都买不到这个位置。但它必须被诚实地计价，因为服务毛利远低于软件毛利，用这种方式驱动增长的公司，是在**拿毛利率换位置**。这笔交易在位置能沉淀成产品时值得做，在不能时一文不值，这和判断部署工作的标准是同一个：下一个客户有没有变便宜，还是第二个的成本和第一个一样？

---

## The Objections That Actually Bite
## 真正有杀伤力的反对意见

**English:**

I previously ended this post with an objection I had already answered, that bad UI still kills adoption, which is not an objection, since I said it myself in the opening. Three real ones:

**Human-in-the-loop means more interface.** The more autonomous the agent, the more the review, correction, and approval surfaces matter. That is not a thinning of UI; it is a relocation of it from execution to supervision, and supervision interfaces are harder to build than forms. If that is what happens, "UI gets thin" is exactly the wrong description.

**Renewals often have nothing to do with whether the product is good.** Process lock-in, compliance certification, sunk integration cost, and a procurement team that does not want another evaluation. A product that agents route around entirely can still renew for three years. Any version of this argument that treats B2B software as a market decided by product quality is missing how the money actually behaves. That is the deepest flaw this kind of argument has.

**Open context protocols cut against my conclusion.** The more context exchange gets standardized, the more portable it becomes, and "owning context" starts to resemble owning a table that can be exported. My answer is the accountability argument above, and I hold it loosely: if standardized context turns out to be genuinely portable including its audit and permission semantics, the moat I am describing gets much thinner than I think.

**中文：**

这篇文章原来的结尾放了一个我自己已经回答过的反对意见，差 UI 仍然会杀死 adoption，那不是反对意见，因为开头就是我自己说的。下面是三个真的：

**人在环内意味着界面更多。** Agent 越自主，审核、纠错、批准这些界面就越关键。这不是 UI 变薄，是 UI 从"执行"搬到了"监督"，而监督界面比表单更难做。如果事情朝这个方向走，"UI 变薄"恰恰是错误的描述。

**续约经常和产品好不好完全无关。** 流程绑定、合规认证、已经沉没的集成成本，以及一个不想再做一次评估的采购团队。一个被 agent 完全绕过去的产品，照样可以续三年。任何把 B2B 软件当成一个由产品优劣决定胜负的市场的论证，都没搞懂钱实际上是怎么走的。**这是这类论证里最深的一处外行味。**

**开放的 context 协议正在削弱我的结论。** Context 交换越标准化，它就越可迁移，而"拥有 context"就越接近"拥有一张可以导出的表"。我的回答是上面那个问责论证，但我持有得并不牢固：如果标准化的 context 最终连同它的审计和权限语义一起变得真正可迁移，那我描述的这条护城河会比我以为的薄得多。

---

## Where To Enter
## 从哪一层进入

**English:**

Naming the sequencing question and then deferring it to a future post would be serving the appetizer and describing the meal. So here is the answer I actually hold.

Enter where you can own an outcome end to end in one narrow domain, then earn the record. Not the reverse. Trying to become the system of record first means competing on implementation and procurement against incumbents who have spent a decade there, with no wedge. Owning a narrow outcome gets you write access for one workflow; write access produces correction history; correction history is the part nobody can buy; and a product that holds the corrections eventually holds the truth.

That path has a specific failure mode worth naming: you own the outcome, the incumbent exposes the same outcome as one more command on top of the record they already hold, and your wedge closes before your history compounds. Which is roughly the shape of the Fin acquisition, read one way. Reach the outcome layer fast, and the record layer buys you rather than beats you. Whether that is a failure depends on what you were building toward.

So the test I would apply to my own roadmap: **which layer do I enter first, and does anything I accumulate there make the next layer cheaper?** If the answer is nothing compounds, you have a product. A position is something else.

**中文：**

把"先进入哪一层"点出来、然后留给下一篇，等于上了前菜就开始描述主菜。所以这里给出我真正持有的答案。

**从"能在一个窄领域里端到端拥有一个结果"进入，然后再去挣那份记录。反过来不行。** 上来就想成为 system of record，意味着在实施和采购这两件事上和已经深耕十年的在位者硬碰硬，而你没有楔子。拥有一个窄结果能换来一条工作流的写权限；写权限产生修正历史；修正历史是没人能买到的那部分；而一个握住修正的产品，最终会握住事实。

这条路有一个具体的失败模式，值得写出来：你拥有了那个结果，在位者把同一个结果做成它已经握有的那份记录之上的又一条命令，于是你的楔子在你的历史积累起来之前就闭合了。**换一个角度读，Fin 被收购大致就是这个形状**：快速抵达结果层，然后记录层不是打败你，而是买下你。这算不算失败，取决于你当初要去哪里。

所以我会拿来照自己路线图的那个测试是：**我先进入哪一层，以及我在那一层积累的东西，有没有让下一层变便宜？** 如果答案是"什么都不复利"，那你有的只是一个产品。位置是另一回事。

---

## References
## 参考资料

- Fin AI, ["AI Agent Pricing Comparison."](https://fin.ai/learn/ai-customer-service-agent-pricing-comparison)
- Intercom, ["AI Agent Pricing Compared: Fin vs Zendesk vs Agentforce."](https://www.intercom.com/learning-center/ai-customer-service-agent-pricing-comparison)
- Fin AI, ["Fin vs Agentforce: Detailed Comparison."](https://fin.ai/learn/fin-vs-agentforce)
- CIO Dive, ["United Airlines Nears Final Mile of Cloud Migration."](https://www.ciodive.com/news/united-airlines-cloud-migration-mainframe-boeing/713642/)
