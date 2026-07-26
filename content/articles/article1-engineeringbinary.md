---
id: "article1-engineeringbinary"
slug: "the-engineering-binary"
titleEn: "Writing Code Got Cheap. Domain Knowledge Got Expensive."
titleZh: "写代码变便宜了，领域知识变贵了"
category: "Opinions"
date: "2026-03-29"
author: "Sean"
release: "published"
keywords:
  - "Domain Knowledge"
  - "Product vs Infrastructure"
  - "FDE"
  - "AI Engineering"
history:
  - "Sat Mar 28 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Initial release"
  - "Tue Mar 31 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Added temporal arc, citations, and North Star collaboration section"
  - "Wed Apr 01 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Prose rewrite — less formulaic, more human voice"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Brevity and before/after contrast revision"
  - "Fri Jun 06 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Goal-mode 5-pass polish"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Adversarial FDE-operator pass — retitle away from the binary/three contradiction, treat the roles as axes rather than job categories, add the FDE unit economics and exit paths, locate where the loop actually breaks, replace the closing test with one that can fail"
---

# Writing Code Got Cheap. Domain Knowledge Got Expensive.
# 写代码变便宜了，领域知识变贵了

## The Axis Rotated
## 分类的轴转了方向

**English:**

For years we sorted engineers by stack: React, Go, Kubernetes, Postgres. That made sense — implementation was hard, and each layer needed a specialist.

Now AI drafts across all of them, and the usual summary of what happened is imprecise in a way that matters. People say implementation got cheap. That is too broad. **Writing code got cheap.** Design did not. Architecture did not. Knowing which of three plausible schemas will still be right in two years did not, and neither did knowing why this industry books revenue the way it does.

Those things got more expensive, for the ordinary reason that their share of the remaining work went up. When one input to a process collapses in price and the others hold, the others are what you are now paying for. The review, the verification, the argument about whether the change should exist, and — in enterprise software — the six weeks it takes to find out who owns the data you need: none of that moved.

So the interesting change is not that engineers got cheaper or more expensive. It is that **the axis we sort them on rotated.** Stack was the old axis because implementation was the hard part, and each layer of the stack was hard in its own way. Once the layers stop being individually hard, sorting by layer stops carrying information — and what is left to sort by is domain: what you understand well enough to decide.

That is the claim I want to defend, and it is falsifiable. If the ability to write in a language or framework were still the scarce thing, hiring would still be organized around it. If instead the scarce thing is understanding a problem well enough to own the decisions, hiring reorganizes around problems.

Three domains of ownership sit in that space: owning a user outcome, owning a reusable primitive, owning the distance between a working product and a working deployment.

I should be precise about what kind of claim that is, because I got it wrong in the first version of this post. These are not three job categories. They are three axes, and people hold positions on more than one. An engineer who turns a client integration into a configuration option is doing deployment work and platform work in the same afternoon. At a fifty-person company one person holds all three, and the split does not describe anything real until an organization is large enough that a single person can no longer carry all three.

**中文：**

过去很多年，我们按技术栈给工程师分类：React、Go、Kubernetes、Postgres。那时这很合理——实现本身很难，每一层都需要专家。

现在 AI 能跨所有层写第一版。而通常那句总结——"实现变便宜了"——在一个要紧的地方不够准确。**变便宜的是写代码。** Design 没有。Architecture 没有。判断三个看起来都合理的 schema 里哪一个两年后还站得住，没有变便宜；搞清楚这个行业为什么按这种方式确认收入，也没有。

这些东西反而变贵了，理由很朴素：它们在剩下的工作里的占比上升了。**当一项投入的价格塌掉、其余不动，你付的钱就都花在其余上面。** Review、验证、"这个变更到底该不该存在"的争论，以及在企业软件里那六周——你要花六周才搞清楚需要的那份数据归谁管——一样都没动。

所以真正有意思的变化，不是工程师变便宜了还是变贵了，而是**我们给他们分类的那根轴，转了方向**。技术栈曾经是那根轴，因为实现是难的部分，而每一层都难得各有各的方式。当每一层不再各自艰难，按层分类就不再携带信息——而剩下能用来分类的，是领域：你理解到什么程度，足以做决定。

这是我要守的主张，而且它可以被证伪：如果"会用某个语言或框架"仍然是稀缺项，招聘就会继续围绕它组织；如果稀缺的是"把一个问题理解到足以承担它的决定"，招聘就会围绕问题重新组织。

有三个 ownership 的领域落在这个空间里：拥有一个用户结果，拥有一个可复用原语，拥有"能跑的产品"和"能用的部署"之间那段距离。

我要把这个主张的性质说准，因为这篇文章的第一版我说错了。**这不是三种岗位，是三条坐标轴**，而人同时站在不止一条轴上。一个工程师在客户现场把某个集成抽象成配置项，他在同一个下午里既在做部署工作也在做平台工作。在一家五十人的公司，这三件事由同一个人扛着，这个划分描述不了任何真实的东西——它要到组织大到一个人扛不动的时候才开始成立。

---

## Owning The Outcome
## 拥有结果

**English:**

Take a loan approval flow.

**Before:** Frontend builds the form. Backend writes the decision API. Database tunes the query. PM holds the story together. Every handoff loses context. The form feels wrong — nobody owns it. The API is slow — backend blames the query. Nobody has watched a borrower rage-refresh and submit twice.

**After:** One person owns the full loop. They understand that a three-second delay creates duplicate applications, that a confusing label breaks trust before the user even reads the terms. They use AI to move across layers. The skill shifts from typing code faster to knowing what should exist.

Their day starts with product signals: did users finish? Where did they drop? Did errors spike overnight? Then: understand, build, ship, watch, adjust.

Metric: adoption first, then task completion, then error rate. If users don't adopt, they own the question — UX wrong? Workflow wrong? Problem fake?

The harder half of the job is not building the feature. It is deciding what the feature is, and there are two ways to get that wrong.

The first is listening to the loudest customer. Volume is not information. The signal you want comes from whoever is in the most pain, because pain is what produces specificity — a person who can tell you exactly which step cost them an hour can do that because the hour was actually lost. The loudest account is often the least specific one, and a roadmap can lose two quarters to whoever complains most fluently.

The second is taking that person literally. A feature request is a proposed solution, and it arrives already shaped by what that user believes is possible in your product. The work is to compile it down: what is the underlying constraint, what were they actually trying to finish, and what is the version of this that a customer who never asked for it would also need? Requests are the raw input. Something shareable is the output.

That distillation is not a matter of taste. It is the difference between two businesses. A software company writes something once and sells it many times; a feature shaped to one customer's org chart can only ever be sold to that customer. Build enough of the second kind and you are running a consulting business with a product logo on the invoice — the same trap as the deployment work below, one level up. So the question to ask before building is not *did a customer ask for this*. It is **can this be sold to the next customer who did not ask for it**.

**中文：**

以贷款审批流程为例。

**之前：** 前端写表单，后端写决策 API，数据库优化查询，产品经理串故事。每次交接丢上下文。表单体验不对，没人拥有。API 慢，后端怪查询。没人看过借款人反复刷新然后提交两次。

**之后：** 有一个人拥有完整回路。这个人理解三秒延迟会制造重复申请，一个含糊的标签会在用户读条款之前就摧毁信任。他用 AI 跨层推进。核心能力从更快打字，转向知道什么应该存在。

他的一天从产品信号开始：用户完成任务了吗？在哪一步掉了？昨晚有没有错误尖峰？然后：理解、构建、发布、观察、调整。

指标先看 adoption，再看任务完成率，再看错误率。用户不用这个功能，他负责追问——UX 错了？工作流错了？还是问题本身不存在？

这份工作更难的那一半不是把 feature 做出来，是决定这个 feature 是什么。而这件事有两种做错的方式。

第一种是听声音最大的客户。**音量不是信息。** 你要的信号来自最疼的那个人，因为疼才会产生具体——一个人能说清是哪一步让他多花了一小时，是因为那一小时是真花掉的。喊得最响的客户往往是最不具体的那个，而一份路线图可以被最会抱怨的人拿走两个季度。

第二种是**照字面**执行那个人说的话。一条 feature request 是一个被提议的解法，而且它在提出来的时候，就已经被这个用户"认为你的产品能做什么"塑造过一遍了。真正的工作是把它编译下去：底下的约束是什么，他当时到底想完成什么事，以及——一个从来没提过这个需求的客户，同样会需要的版本长什么样？**需求是原料，可共享的东西才是产出。**

这个提炼不是品味问题，它是两门生意的分界。软件公司写一次、卖很多次；而一个照着某个客户的组织结构长出来的 feature，永远只能卖给那一个客户。这种东西做多了，你就是在开一门发票上印着产品 logo 的咨询公司——**和下面部署那一节是同一个陷阱，只是高了一层。** 所以动手之前要问的不是"有没有客户要这个"，而是：**这个东西能不能卖给下一个没提过它的客户？**

---

## Owning The Primitive
## 拥有原语

**English:**

**Before:** Every product team builds their own pipeline. Auth is a custom project. Billing lives in a spreadsheet. Model serving requires a sprint. Weeks lost to plumbing every quarter.

**After:** Someone owns the platform, and their best work disappears — storage scales without a meeting, auth works out of the box, and that invisibility is the point.

In an AI-native company the platform layer adds vector storage, model routing, inference reliability, token cost accounting, evaluation pipelines, and permissioned retrieval. AI can write pieces of this. What it cannot replace is the judgment that makes the whole thing boring at scale — knowing which abstraction the platform should own, and which is better left to each team.

One question drives the work: what primitive should exist so teams stop solving the same problem twice?

Signal: self-service rate. Tickets keep coming — the platform is leaking. Ticket volume falls while product velocity rises — it's compounding.

**中文：**

**之前：** 每个产品团队自己搭一套管线。Auth 是专项项目。计费靠表格。模型服务要花一个 sprint。每季度都有几周时间消耗在管道工程上。

**之后：** 有人拥有平台，而他最好的工作会消失——存储扩展不需要开会，认证接入开箱即用，这种隐形正是目的。

在 AI 原生公司里，平台层还要包括向量存储、模型路由、推理可靠性、token 成本核算、评测管线和带权限的检索。AI 可以帮忙写其中一部分。它无法替代的，是那种把整件事在规模上做到无聊的判断——知道哪个抽象该由平台拥有，哪个更该留给各团队自己。

一个问题驱动这份工作：应该出现什么原语，让产品团队停止反复解决同一个问题？

信号是自助化率：产品团队一直开工单，平台就在漏水；工单下降、同时产品速度上升，平台才在复利。

---

## Owning The Deployment Gap — And What It Costs
## 拥有部署鸿沟——以及它的代价

**English:**

**Before:** Demo works. Architecture is clean. Model performs. Then the product lands inside a real enterprise and adoption stalls. Data in fourteen formats. Ancient SSO. A workflow teams call by a name no designer ever used. A field that looks simple with twenty years of organizational history baked in.

**After:** A forward deployed engineer closes that gap. They write the integration layer, watch where users hesitate, learn which model outputs need explanation and which are actually wrong.

Here is the sentence I used to end this section on: if a client cannot reach meaningful usage without a permanent FDE on-site, the product has not been deployed — it is being operated by hand.

I now think that sentence is only half the story, and the missing half is the important one. Being operated by hand is not a failure state that gets noticed and fixed. **It is a stable equilibrium.** The revenue is booked. The renewal depends on the person who is there. Pulling them out costs this quarter's number, and the accounts that need them most are the accounts with the largest contracts. On the P&L, a deployment held together by hand looks identical to a deployment that worked.

Whether that equilibrium is a problem depends on something about the product, not about the role — and this is the distinction I think most discussion of FDEs is missing.

If the company sells a platform, deployment work compounds. What the engineer learns at the first customer does not stay at the first customer: it becomes a connector, a schema mapping, a configuration surface, an extension to the object model. The next deployment inherits it and goes faster, and the platform is better afterward than it was before. Deployment is how the product finds out what it is missing. That is a software company, and its margins will migrate toward software margins on their own, because the same work is not being redone.

If the company sells software that is not a platform, none of that has anywhere to land. What the engineer learns stays inside that customer's deployment, because there is no shared surface for it to settle into. The second customer costs about what the first one did. At that point the business is priced in person-days whether or not it bills that way, and it is a consulting business wearing a software company's vocabulary.

So the diagnostic is not how the role is described in a job posting. It is whether deployment number six is meaningfully faster than deployment number two in the same segment, and whether you can point to the artifact each earlier deployment left behind. If nothing was left behind, the knowledge left with the engineer.

This also explains why *we'll abstract it next time* fails so reliably in the second case: there is no platform for the abstraction to go into. In the first case, abstracting is just the roadmap.

Which is why this role needs unit economics attached to it, and almost no writing about it supplies them. Palantir is the useful public case, because it is the only company at scale that has had to explain the model to analysts every quarter, and both sides of that argument are really arguing about which of the two businesses above it is. The recurring argument is worth reading directly: the company reports software-grade adjusted gross margins, while skeptics point out that a share of forward-deployed engineering cost sits in R&D and sales and marketing rather than in cost of revenue, and that reclassifying it would move gross margin materially. Professional services have been running at roughly a fifth of revenue. The compressed version of the bear case is *a software multiple on a services gross margin*, and it has not been settled in either direction.

The lesson generalizes past Palantir, and it is the one to take: the model works when there is a real platform underneath the bespoke work. Copy the embedded-engineer part without the platform spine and you do not get Palantir. You get a large number of bespoke deployments that nobody can upgrade.

Two numbers make this legible inside your own company, and both are computable from data you already have. First, the trend in FDE hours required per new dollar of ARR. Falling means knowledge is compounding into the platform; flat or rising means the deployment organization is covering for an unfinished product, and you are booking that as revenue. Second, the share of FDE-written code that ends up merged into the main product — the direct measure of whether anything is being left behind. If you have never measured it, measure it before assuming it is high.

And one phrase to watch for, because it is where the debt hides: *we'll abstract it next time*. The cost of abstracting falls on the deployment team; the benefit lands on the product team; and only the deployment team is carrying a customer date. That asymmetry, not laziness, is why next time keeps not arriving.

**中文：**

**之前：** Demo 很好。架构干净。模型指标漂亮。然后产品进入真实企业，使用率卡住。数据有十四种格式。SSO 系统很老。团队对某个流程的叫法，产品设计师从没听过。一个看似简单的字段，背后压着二十年的组织历史。

**之后：** FDE（forward deployed engineer，前线部署工程师）跨过这道鸿沟。他写集成层，观察用户在哪一步犹豫，判断哪些模型输出需要解释、哪些是真的错了。

这一节我以前是用下面这句话收尾的：客户没有常驻 FDE 就无法稳定使用，说明产品还没完成部署——它只是被人工托管着。

现在我认为这句话只说了一半，而漏掉的那一半更重要。**"被人工托管"不是一个会被发现并修正的失败状态，它是一个稳定均衡。** 收入已经确认了。续约挂在那个人身上。把他撤走，代价是这个季度的数字，而最需要他的客户恰好是合同额最大的客户。在损益表上，一个靠人力撑着的部署，和一个真的跑通了的部署，长得一模一样。

但这个均衡是不是问题，取决于产品本身，而不取决于这个角色——我认为大多数关于 FDE 的讨论恰恰漏掉了这个区分。

**如果公司卖的是平台，部署工作是会复利的。** 工程师在第一个客户那里学到的东西不会停在第一个客户身上：它会变成一个连接器、一份 schema 映射、一个配置面、一次对象模型的扩展。下一次部署继承它，因此更快；而平台在这之后比之前更好。部署是产品发现自己缺什么的方式。这是一家软件公司，它的毛利率会自己往软件的毛利率迁移，因为同样的活没有被重做第二遍。

**如果公司卖的不是平台，而是别的软件，上面这些东西没有地方可以落。** 工程师学到的东西留在那一次部署里，因为没有一个共享的面让它沉淀下去。第二个客户的成本和第一个差不多。到这一步，这门生意就是按 person-day 计价的——不管它账面上怎么开票——它是一门穿着软件公司词汇的咨询生意。

所以判别式不是招聘启事上怎么描述这个角色，而是：**同一个客户区间里，第六次部署有没有明显快过第二次？以及，你能不能指出前面每一次部署留下了什么工件？** 如果什么都没留下，那知识是跟着工程师走的。

这也解释了为什么"下次再抽象"在第二种公司里失败得如此可靠：**没有平台可以让这个抽象落进去。** 而在第一种公司里，抽象本身就是路线图。

所以这个角色必须配上单位经济账，而几乎所有写它的文章都不给。Palantir 是有用的公开样本，因为它是唯一一家做到规模、又必须每个季度向分析师解释这套模式的公司——而那场争论的两方，其实争的正是它属于上面两种生意里的哪一种。那场反复出现的争论值得直接去读：公司报出的是软件级别的调整后毛利率，而质疑者指出，有一部分前线部署工程的成本被计在研发和销售费用里、而不是营业成本里，重新归类会让毛利率明显下移；专业服务收入长期占营收约五分之一。空方的说法压缩成一句就是——**用软件的估值倍数，买一门服务的毛利率**。这场争论到今天没有向任何一方了结。

真正该带走的结论比 Palantir 本身更通用：这套模式成立的前提，是定制工作底下真的有一个平台。只抄嵌入式工程师那一半、不要底下那根产品脊椎，你得到的不是 Palantir，是一大堆没人能升级的定制部署。

有两个数字能让这件事在你自己公司里变得可见，而且都能用你手上已有的数据算出来。第一，**每新增一美元 ARR 所需的 FDE 工时**的趋势。下降说明知识正在往平台里复利；持平或上升，说明部署组织在替一个没做完的产品兜底，而你把这件事记成了收入。第二，**FDE 写的代码最终被合并进主产品的比例**——这是"有没有东西被留下来"最直接的度量。如果你从来没量过，先量了再假设它很高。

还有一句话值得警惕，因为债就藏在那里：*下次再抽象*。抽象的成本落在部署团队，收益落在产品团队，而只有部署团队背着一个客户的交付日期。让"下次"永远不到来的是这个不对称，不是懒。

---

## Before You Take That Job
## 在你接这个岗位之前

**English:**

The section above is written for whoever owns the P&L. This one is for the person actually taking the role, because the honest version of that conversation is rarely written down.

Three years of deployment work ends in one of three places, and which one is not decided at the end. It is decided in the first year.

**You become an unusually strong product engineer.** You are the only person in the company who has watched software die inside a real organization, and that is not a story you can acquire any other way. This is the outcome most articles describe as though it were the default.

**You become a hostage of two accounts.** Your value is bound to undocumented knowledge about a small number of customers. It does not transfer, internally or externally, and it evaporates when the contract does. This is the most common outcome, and the cruel part is that it is caused by doing the job well: the better you keep that account alive, the less anyone wants to move you.

**You move to solutions architecture or sales engineering.** Not a failure, and often a better-paid one. But it is a one-way switch out of the engineering track, and it deserves to be chosen rather than discovered.

Here is the part that took me too long to see: which path you land on is mostly decided by which of the two businesses above you joined, not by how hard you work. In a platform company your knowledge has somewhere to settle, so it accumulates outside your own head — in a connector, a mapping, a config surface — and that residue is what makes you the first kind of engineer. In a company without a platform underneath, there is nowhere for it to go, so it accumulates in you. That is the same sentence as "you become a hostage," only stated as a property of the employer rather than a failure of the person.

Which means the two questions worth asking at the end of year one are really questions about the company. Is any of your work in the main repository, or does all of it live in customer forks? Can you name a decision you made that changed the product, not just a deployment? If both answers are no, you are on the second path — and since the cause is structural, the fix is a transfer, not more effort.

It also means you can run those questions before you accept the offer, on someone already doing the job. Ask them what their last deployment left behind. If the answer is a description of a customer rather than an artifact, you have your answer.

**中文：**

上一节是写给背 P&L 的人的。这一节写给真正要去坐这个位子的人，因为这场对话诚实的版本很少有人写下来。

三年的部署工作，会通向三个终点之一。而走向哪一个，不是在第三年决定的，是在第一年决定的。

**你会变成一个异常强的产品工程师。** 你是全公司唯一亲眼见过软件在真实组织里怎么死的人，这种经验没有第二条路可以获得。大多数文章描述的就是这个结果，而且把它写得像是默认结局。

**你会变成两三个客户的人质。** 你的价值绑在关于少数几个客户的、没有文档的知识上。它对内对外都不可迁移，合同一没它就归零。这是最常见的结果，而残酷的地方在于：它恰恰是把工作做好带来的——你越是把那个客户救活，就越没有人愿意把你调走。

**你会转去做解决方案架构或售前工程。** 这不是失败，而且往往薪水更高。但它是一次离开工程序列的单向换轨，它值得被主动选择，而不是某天发现自己已经在轨道那一边了。

下面这一层我看清楚得太晚：**你最后走到哪一条，主要不由你多努力决定，而由你进的是上面两种生意里的哪一种决定。** 在平台公司里，你的知识有地方沉淀，于是它积累在你的脑子之外——积累成一个连接器、一份映射、一个配置面；正是这些残留物把你变成第一种工程师。在底下没有平台的公司里，它无处可去，于是只能积累在你身上。这和"你会变成人质"是同一句话，只不过换成了雇主的属性来表述，而不是个人的失败。

所以第一年末那两个问题，问的其实是公司：你的工作有没有任何一部分进了主仓库，还是全都活在客户分支里？你能不能说出一个由你做出、并且改变了产品本身（而不只是改变了某次部署）的决定？如果两个答案都是否定的，你在第二条路上——而既然成因是结构性的，解法就是换岗，不是更努力。

这也意味着这两个问题可以在你接 offer 之前就问，问一个已经在做这份工作的人：**你上一次部署留下了什么？** 如果他描述的是一个客户，而不是一件工件，你就已经拿到答案了。

---

## The Loop Breaks At Intake
## 回路断在入口

**English:**

None of these three kinds of ownership is sufficient alone. Platform work produces primitives, product work turns them into outcomes, deployment work gets those outcomes running in a customer's reality and returns what it learned.

Drawn as arrows, that is a loop. Loops on org charts do not turn on their own, and this one has a specific failure point that is worth naming precisely, because most writing puts it in the wrong place.

It does not break at the deployment end. It breaks at intake.

Field signal arrives in the weakest possible form: n equals one, attributable to a single named customer, and usually phrased as *account X needs Y before Q3*. A product team's prioritization machinery is built to discount exactly that shape of input, because it is indistinguishable from a sales escalation — and frequently is one. So the loop is not occasionally broken. **It is disconnected by default**, and connecting it takes a deliberate mechanism.

The mechanism that works is a threshold rule: when the same customization appears at a third customer, it becomes a platform item automatically, and the platform team owns building it — not the deployment team that found it. That last clause is the whole mechanism, because it removes the asymmetry that keeps *next time* from arriving.

And the honest part: that rule gets suspended in any quarter where the revenue number is at risk, which is most of the quarters where it matters. A rule that only survives calm quarters is a preference. If you want it to hold, someone senior has to spend credibility defending it in a bad quarter, and that is the real cost of running this loop.

**中文：**

这三种 ownership 都不能单独成立。平台工作产出原语，产品工作把原语变成用户结果，部署工作让这些结果在客户的现实里跑起来，并把学到的东西带回来。

画成箭头，这是一个回路。组织架构图上的回路不会自己转，而这一个有一个具体的断点，值得精确指出来，因为大多数文章把它标错了地方。

**它不断在部署那一端，它断在入口。**

现场信号抵达时永远是最弱的形态：样本量为一，可归因到某个具名客户，而且通常被表述成"X 客户要在 Q3 之前拿到 Y"。产品团队的排期机制天生就要给这种形状的输入打折，因为它和一条销售特殊要求长得一模一样——而且经常就是。所以这个回路不是"有时候会断"，**它默认就是断的**，接上它需要一个专门的机制。

有效的机制是一条阈值规则：当同一个定制需求出现在第三个客户身上时，它自动进入平台待办，并且**由平台团队而不是发现它的部署团队来建**。最后这半句才是机制本身，因为它拆掉了那个让"下次再抽象"永远不到来的不对称。

还有诚实的那一半：这条规则会在任何一个收入数字有风险的季度被暂停，而那恰好就是它最要紧的那些季度。一条只能在太平季度存活的规则是一种偏好。要让它真的成立，得有一个够资深的人在一个糟糕的季度里押上自己的信誉去守它——这才是运行这个回路的真实成本。

---

## The Objection, And What Would Prove Me Wrong
## 反对意见，以及什么能证明我错了

**English:**

The obvious objection: if AI lets anyone cross the stack, why wouldn't it compress ownership too?

I used to answer that it only compresses *shallow* ownership. That answer is circular — "shallow" was defined as the compressible kind, so the claim could never lose. Here is the version that can.

What AI compresses is not ownership but **how many owners you need**. One person can now hold more surface than before, which means the three axes collapse back into one person at small scale and only separate when the surface exceeds what one person can carry. My claim is therefore about organizations above a certain size, not about engineering in general. Below that size it is simply wrong, and I should have said so.

So here is what would falsify the rest of it. If two years from now the job descriptions for these three kinds of work are still largely interchangeable and the hiring funnels stay shared, the specialization I am describing did not happen. If deployment engineers mostly exit the company rather than moving into product or platform roles, then the loop is not a loop and that role is an absorption pit. And if FDE hours per new dollar of ARR do not fall at companies running this model, then the loop is a drawing rather than a machine.

I would rather name those than keep an argument that survives every observation.

**中文：**

最明显的反驳：如果 AI 让任何人都能跨栈，它为什么不会也压缩 ownership？

我以前的回答是：它只压缩*浅层* ownership。这个回答是循环的——"浅层"的定义就是"可被压缩的那种"，所以这个主张永远不会输。下面是一个会输的版本。

AI 压缩的不是 ownership，是**你需要几个 owner**。一个人现在能持有比以前更大的面，这意味着在小规模下三条轴会塌回同一个人身上，只有当这个面超出一个人能扛的范围时它们才分开。所以我这个主张是关于**超过某个规模的组织**的，不是关于工程这件事本身。在那个规模以下它就是错的，我本该早点说清楚。

那么，什么能证伪剩下的部分。如果两年后这三类工作的招聘 JD 仍然高度可互换、招聘漏斗仍然共用，那我说的分化没有发生。如果部署工程师的去向主要是离开公司、而不是转入产品或平台岗位，那这个回路就不是回路，那个位置是个吸收槽。如果在跑这套模式的公司里，每新增一美元 ARR 所需的 FDE 工时不下降，那这个回路是一张图，不是一台机器。

我宁愿把这些写出来，也不想留着一个能在任何观察下都活下来的论证。

---

## A Test You Can Fail
## 一个你可能不及格的测试

**English:**

When implementation was hard, narrow specialization was a good bargain. That bargain is ending.

The test I used to offer here was: what do you own that AI cannot own for you? Nobody fails that test, because the acceptable answers are printed next to the question. Two better ones:

**What is the last decision you made that turned out wrong, and what did it cost — in money, or in weeks?** If you cannot name one, you are not an owner. You are an implementer with a wide surface area. Ownership is defined by carrying the downside, not by how many layers you touch.

**If you left tomorrow, which decision could nobody reconstruct?** If the answer is none, you do not have ownership. You have workload.

Both questions can be answered badly, which is what makes them worth asking. Next, I'll get into the outcome-owning role specifically — what the loop looks like when AI is doing the implementation, where judgment breaks down, and what separates engineers who own outcomes from engineers who ship features.

**中文：**

实现很难的时候，窄专业化是一笔划算的交易。这笔交易正在结束。

我以前在这里给的测试是：你拥有什么，是 AI 无法替你拥有的？没有人会不及格，因为可接受的答案就印在问题旁边。换两个更好的：

**你最近一次做错的决定是什么，代价是多少——多少钱，或者多少周？** 说不出来的人不是 owner，是一个覆盖面很宽的执行者。Ownership 的定义是承担下行，不是能碰多少层。

**如果你明天离职，哪一个决定是没有人能重建的？** 如果答案是"没有"，你没有 ownership，你有工作量。

这两个问题都可能被答砸，这正是它们值得问的原因。下一篇我会具体讲拥有结果的那个角色——当 AI 在做实现，真正的工作循环是什么样，判断力在哪里失效，以及拥有结果的工程师和只是发布功能的工程师，差距到底在哪里。

---

## References
## 参考资料

- Forbes, ["Palantir And Forward Deployed Engineering: What Should We Believe?"](https://www.forbes.com/sites/stevebanker/2026/07/10/palantir-and-forward-deployed-engineering-what-should-we-believe/)
- Andreessen Horowitz, ["The Palantirization of Everything."](https://a16z.com/the-palantirization-of-everything/)
- Everest Group, ["Palantir: Inside the Category of One — Forward Deployed Software Engineers."](https://www.everestgrp.com/palantir-inside-the-category-of-one-forward-deployed-software-engineers-blog/)
