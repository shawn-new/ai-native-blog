---
id: "article1-engineeringbinary"
slug: "the-engineering-binary"
titleEn: "Scope Has to Get Bigger. Here Is the Shape It Takes."
titleZh: "Scope 必须变大。它会长成什么形状"
category: "Opinions"
date: "2026-03-29"
author: "Sean"
release: "draft"
keywords:
  - "Scope"
  - "Ownership"
  - "Product vs Infrastructure"
  - "FDE"
  - "AI Engineering"
history:
  - "Sat Mar 28 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Initial release"
  - "Tue Mar 31 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Added temporal arc, citations, and North Star collaboration section"
  - "Wed Apr 01 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Prose rewrite: less formulaic, more human voice"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Brevity and before/after contrast revision"
  - "Fri Jun 06 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Goal-mode 5-pass polish"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Adversarial FDE-operator pass: unit economics, exit paths, intake failure, falsifiable test"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Restructure around scope for the people who size roles"
---

# Scope Has to Get Bigger. Here Is the Shape It Takes.
# Scope 必须变大。它会长成什么形状

## Why Scope Has to Grow
## 为什么 scope 必须变大

**English:**

For years we sized engineering roles by stack: React, Go, Kubernetes, Postgres. That made sense. Implementation was hard, and each layer was hard in its own way, so a layer was a reasonable amount of work to give one person.

Now AI drafts across all of them, and the usual summary of what happened is imprecise in a way that matters for anyone setting role boundaries. People say implementation got cheap. That is too broad. **Writing code got cheap.** Design did not. Architecture did not. Knowing which of three plausible schemas will still be right in two years did not, and neither did knowing why this industry books revenue the way it does.

Those things got more expensive, for the ordinary reason that their share of the remaining work went up. When one input to a process collapses in price and the others hold, the others are what you are now paying for. The review, the verification, the argument about whether the change should exist, and, in enterprise software, the six weeks it takes to find out who owns the data you need: none of that moved.

So sizing a role by layer now sizes it by the input that stopped being scarce. You end up paying for handoffs that no longer buy anything, because the reason those handoffs existed was that each layer needed a specialist.

Scope has to get bigger. The interesting question is along which axis, and the answer is the one that stayed expensive: **the span of decisions a person can own**, in a domain they understand well enough to be accountable for.

That claim is falsifiable. If writing in a language or framework were still the scarce thing, hiring would still be organized around it. If the scarce thing is understanding a problem well enough to own the decisions, hiring reorganizes around problems. Watch which way the job descriptions move.

**中文：**

过去很多年，我们按技术栈给工程岗位划边界：React、Go、Kubernetes、Postgres。那时这很合理：实现很难，而且每一层难得各有各的方式，所以一层就是分给一个人的合理工作量。

现在 AI 能跨所有层写第一版。而通常那句总结"实现变便宜了"，在一个对定边界的人尤其要紧的地方不够准确。**变便宜的是写代码。** Design 没有。Architecture 没有。判断三个看起来都合理的 schema 里哪一个两年后还站得住，没有变便宜；搞清楚这个行业为什么按这种方式确认收入，也没有。

这些东西反而变贵了，理由很朴素：它们在剩下的工作里的占比上升了。**当一项投入的价格塌掉、其余不动，你付的钱就都花在其余上面。** Review、验证、"这个变更到底该不该存在"的争论，以及在企业软件里那六周：你要花六周才搞清楚需要的那份数据归谁管。这些一样都没动。

所以现在按"层"来划一个岗位，等于按那个已经不稀缺的投入来划。你会继续为交接付钱，而交接原本存在的理由，正是每一层都需要专家。

**Scope 必须变大。** 有意思的问题是沿哪根轴变大，答案就是那个仍然贵的东西：**一个人能拥有的决策跨度**，在一个他理解到足以为之负责的领域里。

这个主张可以被证伪：如果"会用某个语言或框架"仍然是稀缺项，招聘就会继续围绕它组织；如果稀缺的是"把一个问题理解到足以承担它的决定"，招聘就会围绕问题重新组织。看招聘 JD 往哪边走就知道了。

---

## What Bigger Scope Actually Means
## 变大的 scope 到底长什么样

**English:**

Bigger scope is measured in decisions. Touching more layers is now cheap and worth roughly what it costs. What expands is how much of a decision one person carries end to end, and there are three shapes it takes.

**Owning an outcome.** The user finishes the task or does not, and one person answers for that.

**Owning a primitive.** Other teams stop solving the same problem, and one person answers for whether the abstraction was the right one.

**Owning the deployment gap.** The product works in a customer's reality, and one person answers for the distance between the demo and that.

Be precise about what kind of claim this is, because it is easy to over-read. These are not three job titles. They are three dimensions, and one person sits on more than one of them. An engineer who turns a client integration into a configuration option is doing deployment work and platform work in the same afternoon. At a fifty-person company one person holds all three, and the split describes nothing real until an organization is large enough that a single person can no longer carry them.

For anyone sizing roles, that is the useful part. The question is not which of three boxes someone belongs in. It is how many of these dimensions a given person can carry at once, and whether the org is arranged so that carrying them is possible.

**中文：**

Scope 变大，量的是决策。碰更多层现在很便宜，价值也就配得上这个价钱。变大的是**一个人端到端扛住多少决策**，而它有三种形状。

**拥有一个结果。** 用户完成了任务或者没完成，由一个人来答。

**拥有一个原语。** 其他团队不再反复解决同一个问题，由一个人来答这个抽象选得对不对。

**拥有部署鸿沟。** 产品在客户的现实里能跑，由一个人来答 demo 和那个现实之间的距离。

这个主张的性质要说准，因为它很容易被读大。**这不是三种岗位，是三个维度**，而一个人同时占着不止一个。一个工程师在客户现场把某个集成抽象成配置项，他在同一个下午里既在做部署工作也在做平台工作。在一家五十人的公司，这三件事由同一个人扛着，这个划分描述不了任何真实的东西。它要到组织大到一个人扛不动的时候才开始成立。

对给角色定边界的人来说，有用的正是这一层：问题不是把某个人归进三个盒子里的哪一个，而是**这个人一次能扛住其中几个维度，以及组织的安排让不让他扛得住。**

---

## The Scope of an Outcome
## 结果这一维的 scope

**English:**

Take a loan approval flow.

**Before:** Frontend builds the form. Backend writes the decision API. Database tunes the query. PM holds the story together. Every handoff loses context. The form feels wrong. Nobody owns it. The API is slow. Backend blames the query. Nobody has watched a borrower rage-refresh and submit twice.

**After:** One person owns the full loop. They understand that a three-second delay creates duplicate applications, that a confusing label breaks trust before the user even reads the terms. They use AI to move across layers. The skill shifts from typing code faster to knowing what should exist.

The harder half of that job is deciding what the feature is, and there are two ways to get it wrong.

The first is listening to the loudest customer. Volume is a weak signal. The one you want comes from whoever is in the most pain, because pain is what produces specificity. A person who can tell you exactly which step cost them an hour can do that because the hour was actually lost. The loudest account is often the least specific one, and a roadmap can lose two quarters to whoever complains most fluently.

The second is taking that person literally. A feature request is a proposed solution, already shaped by what the user believes is possible in your product. The work is to compile it down: what is the underlying constraint, what were they trying to finish, and what is the version a customer who never asked would also need? Requests are the raw input. Something shareable is the output.

That distillation decides which business you are in. A software company writes something once and sells it many times. A feature shaped to one customer's org chart can only be sold to that customer. Build enough of the second kind and you are running a consulting business with a product logo on the invoice. So the question before building is whether this can be sold to the next customer who did not ask for it.

**中文：**

以贷款审批流程为例。

**之前：** 前端写表单，后端写决策 API，数据库优化查询，产品经理串故事。每次交接丢上下文。表单体验不对，没人拥有。API 慢，后端怪查询。没人看过借款人反复刷新然后提交两次。

**之后：** 有一个人拥有完整回路。这个人理解三秒延迟会制造重复申请，一个含糊的标签会在用户读条款之前就摧毁信任。他用 AI 跨层推进。核心能力从更快打字，转向知道什么应该存在。

这份工作更难的那一半，是决定这个 feature 是什么。而这件事有两种做错的方式。

第一种是听声音最大的客户。**音量是个弱信号。** 你要的信号来自最疼的那个人，因为疼才会产生具体：一个人能说清是哪一步让他多花了一小时，是因为那一小时是真花掉的。喊得最响的客户往往是最不具体的那个，而一份路线图可以被最会抱怨的人拿走两个季度。

第二种是**照字面**执行那个人说的话。一条 feature request 是一个被提议的解法，而且它在提出来时就已经被这个用户"认为你的产品能做什么"塑造过一遍。真正的工作是把它编译下去：底下的约束是什么，他当时想完成什么事，以及一个从来没提过这个需求的客户同样会需要的版本长什么样？**需求是原料，可共享的东西才是产出。**

这个提炼决定你在做哪门生意。软件公司写一次、卖很多次；而一个照着某个客户的组织结构长出来的 feature，只能卖给那一个客户。这种东西做多了，你就是在开一门发票上印着产品 logo 的咨询公司。所以动手之前要问的是：**这个东西能不能卖给下一个没提过它的客户？**

---

## The Scope of a Primitive
## 原语这一维的 scope

**English:**

**Before:** Every product team builds their own pipeline. Auth is a custom project. Billing lives in a spreadsheet. Model serving requires a sprint. Weeks lost to plumbing every quarter.

**After:** Someone owns the platform, and their best work disappears. Storage scales without a meeting, auth works out of the box, and that invisibility is the point.

In an AI-native company the platform layer adds vector storage, model routing, inference reliability, token cost accounting, evaluation pipelines, and permissioned retrieval. AI can write pieces of this. What it cannot replace is the judgment that makes the whole thing boring at scale: knowing which abstraction the platform should own, and which is better left to each team.

One question drives the work. What primitive should exist so teams stop solving the same problem twice?

Signal: self-service rate. Tickets keep coming, the platform is leaking. Ticket volume falls while product velocity rises, it is compounding.

**中文：**

**之前：** 每个产品团队自己搭一套管线。Auth 是专项项目。计费靠表格。模型服务要花一个 sprint。每季度都有几周消耗在管道工程上。

**之后：** 有人拥有平台，而他最好的工作会消失。存储扩展不需要开会，认证接入开箱即用，这种隐形正是目的。

在 AI 原生公司里，平台层还要包括向量存储、模型路由、推理可靠性、token 成本核算、评测管线和带权限的检索。AI 可以帮忙写其中一部分。它无法替代的，是那种把整件事在规模上做到无聊的判断：知道哪个抽象该由平台拥有，哪个更该留给各团队自己。

一个问题驱动这份工作：应该出现什么原语，让产品团队停止反复解决同一个问题？

信号是自助化率。工单一直来，平台就在漏水；工单下降、同时产品速度上升，平台才在复利。

---

## The Business Model Decides Whether Deployment Scope Grows
## 商业模式决定部署 scope 能不能长大

**English:**

**Before:** Demo works. Architecture is clean. Model performs. Then the product lands inside a real enterprise and adoption stalls. Data in fourteen formats. Ancient SSO. A workflow teams call by a name no designer ever used. A field that looks simple with twenty years of organizational history baked in.

**After:** A forward deployed engineer closes that gap. They write the integration layer, watch where users hesitate, learn which model outputs need explanation and which are actually wrong.

One line sums up the failure mode. If a client cannot reach meaningful usage without a permanent FDE on-site, the product has not been deployed. It is being operated by hand.

That is only half the story, and the missing half matters more. Being operated by hand is a stable equilibrium. The revenue is booked. The renewal depends on the person who is there. Pulling them out costs this quarter's number, and the accounts that need them most carry the largest contracts. On the P&L, a deployment held together by hand looks identical to a deployment that worked.

Whether that equilibrium is a problem depends on the product rather than the role, which is the distinction most discussion of FDEs skips.

**If the company sells a platform, deployment scope compounds.** What the engineer learns at the first customer becomes a connector, a schema mapping, a configuration surface. The next deployment inherits it and goes faster. Deployment is how the product finds out what it is missing, and margins drift toward software margins on their own, because the same work is not redone.

**Without a platform underneath, none of it has anywhere to land.** What the engineer learns stays inside that one deployment. The second customer costs about what the first did, and the business is priced in person-days whether or not it bills that way.

So the diagnostic is not the job posting. It is whether deployment six is meaningfully faster than deployment two in the same segment, and whether you can point to what each earlier one left behind. If nothing was left behind, the knowledge left with the engineer.

That also explains why *we'll abstract it next time* fails so reliably without a platform: the abstraction has nowhere to go. Even with one it stays fragile, because the cost falls on the deployment team while the benefit lands on the product team, and only the deployment team carries a customer date. Nobody is being lazy.

Palantir is the public case worth reading directly, because it has had to explain this model to analysts every quarter, and both sides of that argument are really arguing about which of the two businesses it is. The company reports software-grade adjusted gross margins; skeptics note that some forward-deployed cost sits in R&D and sales and marketing rather than cost of revenue, and that reclassifying it would move the number materially. Professional services run at roughly a fifth of revenue. The bear case compresses to *a software multiple on a services gross margin*, and it is unsettled. The transferable lesson: copy the embedded engineer without the platform spine and you get bespoke deployments nobody can upgrade.

Two numbers make this legible in your own company. First, FDE hours per new dollar of ARR: falling means knowledge is compounding into the platform, flat or rising means the deployment organization is covering for an unfinished product and you are booking it as revenue. Second, the share of FDE-written code merged into the main product. If you have never measured it, measure it before assuming it is high.

**中文：**

**之前：** Demo 很好。架构干净。模型指标漂亮。然后产品进入真实企业，使用率卡住。数据有十四种格式。SSO 系统很老。团队对某个流程的叫法，产品设计师从没听过。一个看似简单的字段，背后压着二十年的组织历史。

**之后：** FDE（forward deployed engineer，前线部署工程师）跨过这道鸿沟。他写集成层，观察用户在哪一步犹豫，判断哪些模型输出需要解释、哪些是真的错了。

有一句话能概括这个失败模式：客户没有常驻 FDE 就无法稳定使用，说明产品还没完成部署，它只是被人工托管着。

但这只说了一半，而漏掉的那一半更重要。**"被人工托管"是一个稳定均衡。** 收入已经确认了。续约挂在那个人身上。把他撤走，代价是这个季度的数字，而最需要他的客户恰好是合同额最大的客户。在损益表上，一个靠人力撑着的部署，和一个真的跑通了的部署，长得一模一样。

这个均衡是不是问题，取决于产品，而不取决于这个角色。大多数关于 FDE 的讨论都跳过了这个区分。

**如果公司卖的是平台，部署 scope 会复利。** 工程师在第一个客户那里学到的东西，会变成一个连接器、一份 schema 映射、一个配置面。下一次部署继承它，因此更快。部署是产品发现自己缺什么的方式，毛利率会自己往软件的水平漂，因为同样的活没被重做第二遍。

**底下没有平台，这些东西就无处可落。** 工程师学到的留在那一次部署里，第二个客户的成本和第一个差不多；不管账面上怎么开票，这门生意都是按 person-day 计价的。

所以判别式不是招聘启事，而是：**同一个客户区间里，第六次部署有没有明显快过第二次？前面每一次部署留下了什么工件？** 什么都没留下，说明知识跟着工程师走了。

这也解释了"下次再抽象"为什么在没有平台时失败得如此可靠：**抽象无处可去。** 就算有平台它也脆弱，因为成本落在部署团队、收益落在产品团队，而只有部署团队背着客户的交付日期。没有人在偷懒。

Palantir 是值得直接去读的公开样本，因为它必须每个季度向分析师解释这套模式，而争论的两方争的正是它属于上面两种生意里的哪一种。公司报出的是软件级别的调整后毛利率；质疑者指出，部分前线部署成本被计在研发和销售费用里而非营业成本，重新归类会让这个数字明显下移；专业服务收入长期占营收约五分之一。空方压缩成一句就是：**用软件的估值倍数，买一门服务的毛利率**，至今未有定论。可迁移的结论是：只抄嵌入式工程师、不要底下那根产品脊椎，你得到的是一大堆没人能升级的定制部署。

有两个数字能让这件事在你公司里变得可见。第一，**每新增一美元 ARR 所需的 FDE 工时**：下降说明知识在往平台里复利，持平或上升说明部署组织在替一个没做完的产品兜底，而你把它记成了收入。第二，**FDE 写的代码最终被合并进主产品的比例**。从来没量过，就先量了再假设它很高。

---

## Where a Person's Scope Ends Up
## 一个人的 scope 最后长成什么样

**English:**

The section above is for whoever owns the P&L. This one is for the person taking the role, and for the manager deciding whether to put someone there.

Three years of deployment work ends in one of three places, and which one is settled in the first year.

**An unusually strong product engineer.** They are the only person in the company who has watched software die inside a real organization, and that is not available any other way. This is the outcome most articles describe as though it were the default.

**A hostage of two accounts.** Their value is bound to undocumented knowledge about a few customers. It does not transfer, internally or externally, and it evaporates when the contract does. This is the most common outcome, and the cruel part is that it comes from doing the job well: the better they keep that account alive, the less anyone wants to move them.

**A move to solutions architecture or sales engineering.** Often better paid. It is also a one-way switch out of the engineering track, and it deserves to be chosen rather than discovered.

Which path arrives is mostly decided by which of the two businesses above they joined. Effort barely moves it. In a platform company knowledge has somewhere to settle, so it accumulates outside their own head: in a connector, a mapping, a config surface. That residue is what makes the first kind of engineer. Without a platform underneath, it accumulates in the person instead, which is the same sentence as "hostage" stated as a property of the employer.

So the two questions at the end of year one are really questions about the company. Is any of the work in the main repository, or does all of it live in customer forks? Can they name a decision that changed the product itself? If both answers are no, the cause is structural and the fix is a transfer.

Those questions also work before an offer, asked of someone already in the seat: what did your last deployment leave behind? If the answer describes a customer instead of an artifact, you have your answer.

**中文：**

上一节是写给背 P&L 的人的。这一节写给要去坐这个位子的人，也写给决定要不要把某个人放进去的经理。

三年的部署工作，会通向三个终点之一。而走向哪一个，在第一年就决定了。

**一个异常强的产品工程师。** 他是全公司唯一亲眼见过软件在真实组织里怎么死的人，这种经验没有第二条路可以获得。大多数文章描述的就是这个结果，而且把它写得像是默认结局。

**两三个客户的人质。** 他的价值绑在关于少数几个客户的、没有文档的知识上。它对内对外都不可迁移，合同一没它就归零。这是最常见的结果，而残酷的地方在于它恰恰来自把工作做好：他越是把那个客户救活，就越没有人愿意把他调走。

**转去做解决方案架构或售前工程。** 往往薪水更高。它也是一次离开工程序列的单向换轨，值得被主动选择，而不是某天发现自己已经在轨道那一边了。

走到哪一条，主要由他进的是上面两种生意里的哪一种决定。努力几乎推不动它。在平台公司里，知识有地方沉淀，于是它积累在这个人的脑子之外：一个连接器、一份映射、一个配置面。正是这些残留物造就第一种工程师。底下没有平台，它就只能积累在人身上。这和"人质"是同一句话，只不过换成了雇主的属性来表述。

所以第一年末那两个问题，问的其实是公司：他的工作有没有任何一部分进了主仓库，还是全都活在客户分支里？他能不能说出一个改变了产品本身的决定？如果两个答案都是否定的，成因是结构性的，解法是换岗。

这两个问题在接 offer 之前也能用，问一个已经在这个位子上的人：**你上一次部署留下了什么？** 如果他描述的是一个客户，而不是一件工件，你就已经拿到答案了。

---

## Where Scope Stops: The Loop Breaks at Intake
## Scope 的边界：回路断在入口

**English:**

None of the three dimensions is sufficient alone. Platform work produces primitives, product work turns them into outcomes, deployment work gets those outcomes running in a customer's reality and returns what it learned.

Drawn as arrows, that is a loop. Loops on org charts do not turn on their own, and this one has a specific failure point worth naming precisely, because most writing puts it in the wrong place.

It does not break at the deployment end. It breaks at intake.

Field signal arrives in the weakest possible form: n equals one, attributable to a single named customer, and usually phrased as *account X needs Y before Q3*. A product team's prioritization machinery is built to discount exactly that shape of input, because it is indistinguishable from a sales escalation, and frequently is one. So the loop is **disconnected by default**, and connecting it takes a deliberate mechanism.

The mechanism that works is a threshold rule: when the same customization appears at a third customer, it becomes a platform item automatically, and the platform team owns building it. The deployment team that found it hands it off. That last clause is the whole mechanism, because it removes the asymmetry that keeps *next time* from arriving.

And the honest part: that rule gets suspended in any quarter where the revenue number is at risk, which is most of the quarters where it matters. A rule that only survives calm quarters is a preference. If you want it to hold, someone senior has to spend credibility defending it in a bad quarter, and that is the real cost of running this loop.

**中文：**

这三个维度都不能单独成立。平台工作产出原语，产品工作把原语变成用户结果，部署工作让这些结果在客户的现实里跑起来，并把学到的东西带回来。

画成箭头，这是一个回路。组织架构图上的回路不会自己转，而这一个有一个具体的断点，值得精确指出来，因为大多数文章把它标错了地方。

**它不断在部署那一端，它断在入口。**

现场信号抵达时永远是最弱的形态：样本量为一，可归因到某个具名客户，而且通常被表述成"X 客户要在 Q3 之前拿到 Y"。产品团队的排期机制天生就要给这种形状的输入打折，因为它和一条销售特殊要求长得一模一样，而且经常就是。所以这个回路**默认就是断的**，接上它需要一个专门的机制。

有效的机制是一条阈值规则：当同一个定制需求出现在第三个客户身上时，它自动进入平台待办，并且**由平台团队来建**，发现它的部署团队就此交出去。最后这半句才是机制本身，因为它拆掉了那个让"下次再抽象"永远不到来的不对称。

还有诚实的那一半：这条规则会在任何一个收入数字有风险的季度被暂停，而那恰好就是它最要紧的那些季度。一条只能在太平季度存活的规则是一种偏好。要让它真的成立，得有一个够资深的人在一个糟糕的季度里押上自己的信誉去守它，这才是运行这个回路的真实成本。

---

## The Objection, and What Would Prove Me Wrong
## 反对意见，以及什么能证明我错了

**English:**

The obvious objection: if AI lets anyone cross the stack, why wouldn't it compress scope too?

The easy answer is that it only compresses *shallow* scope. That answer is circular: "shallow" was defined as the compressible kind, so the claim could never lose. Here is the version that can.

What AI compresses is **how many owners you need**. One person can now hold more surface, which means the three dimensions collapse back into one person at small scale and separate only when the surface exceeds what one person can carry. So this argument is about organizations above a certain size. Below that, it does not apply.

Here is what would falsify the rest. If two years from now the job descriptions for these three kinds of work are still largely interchangeable and the hiring funnels stay shared, the specialization described here did not happen. If deployment engineers mostly exit the company rather than moving into product or platform roles, the loop is not a loop and that seat is an absorption pit. And if FDE hours per new dollar of ARR do not fall at companies running this model, the loop is a drawing on a slide.

I would rather name those than keep an argument that survives every observation.

**中文：**

最明显的反驳：如果 AI 让任何人都能跨栈，它为什么不会也压缩 scope？

容易给的回答是：它只压缩*浅层* scope。但这个回答是循环的："浅层"的定义就是"可被压缩的那种"，所以这个主张永远不会输。下面是一个会输的版本。

AI 压缩的是**你需要几个 owner**。一个人现在能持有更大的面，这意味着在小规模下这三个维度会塌回同一个人身上，只有当这个面超出一个人能扛的范围时它们才分开。所以这个论证只关于**超过某个规模的组织**。在那个规模以下，它不适用。

那么，什么能证伪剩下的部分？如果两年后这三类工作的招聘 JD 仍然高度可互换、招聘漏斗仍然共用，那这里说的分化没有发生。如果部署工程师的去向主要是离开公司、而不是转入产品或平台岗位，那这个回路就不是回路，那个位子是个吸收槽。如果在跑这套模式的公司里，每新增一美元 ARR 所需的 FDE 工时不下降，那这个回路只是一张画在幻灯片上的图。

我宁愿把这些写出来，也不想留着一个能在任何观察下都活下来的论证。

---

## How to Tell Whether Someone Actually Has the Scope
## 怎么判断一个人是不是真的拥有那个 scope

**English:**

When writing code was hard, narrow specialization was a good bargain. That bargain is ending, and the replacement is a larger span of decisions in a domain someone understands well enough to answer for.

The obvious test is: what do you own that AI cannot own for you? Nobody fails that test, because the acceptable answers are printed next to the question. Two better ones, and they work as well on a report as on yourself:

**What is the last decision that turned out wrong, and what did it cost in money or in weeks?** If nobody can name one, there is no owner there. There is an implementer with a wide surface area. Scope is measured by the downside someone carries. Layer count says nothing about it.

**If they left tomorrow, which decision could nobody reconstruct?** If the answer is none, that is workload.

Both questions can be answered badly, which is what makes them worth asking. Next, I'll get into the first of the three dimensions, owning a user outcome: what the loop looks like when AI is doing the implementation, where judgment breaks down, and what separates engineers who own outcomes from engineers who ship features.

**中文：**

写代码很难的时候，窄专业化是一笔划算的交易。这笔交易正在结束，取代它的是**更大的决策跨度**，在一个人理解到足以为之负责的领域里。

最容易想到的测试是：你拥有什么，是 AI 无法替你拥有的？没有人会不及格，因为可接受的答案就印在问题旁边。换两个更好的，而且它们既能用来问自己，也能用来问下属：

**最近一次做错的决定是什么？代价是多少钱、多少周？** 如果没有人说得出来，那里就没有 owner，只有一个覆盖面很宽的执行者。**Scope 是用一个人承担的下行来量的。碰多少层说明不了什么。**

**如果他明天离职，哪一个决定是没有人能重建的？** 如果答案是"没有"，那只是工作量。

这两个问题都可能被答砸，这正是它们值得问的原因。下一篇我会具体讲三个维度里的第一个，拥有用户结果：当 AI 在做实现，真正的工作循环是什么样，判断力在哪里失效，以及拥有结果的工程师和只是发布功能的工程师，差距到底在哪里。

---

## References
## 参考资料

- Forbes, ["Palantir And Forward Deployed Engineering: What Should We Believe?"](https://www.forbes.com/sites/stevebanker/2026/07/10/palantir-and-forward-deployed-engineering-what-should-we-believe/)
- Andreessen Horowitz, ["The Palantirization of Everything."](https://a16z.com/the-palantirization-of-everything/)
- Everest Group, ["Palantir: Inside the Category of One — Forward Deployed Software Engineers."](https://www.everestgrp.com/palantir-inside-the-category-of-one-forward-deployed-software-engineers-blog/)
