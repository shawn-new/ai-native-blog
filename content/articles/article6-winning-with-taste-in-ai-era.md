---
id: "article6-winning-with-taste-in-ai-era"
slug: "your-teams-taste-is-the-bottleneck"
titleEn: "Your Team's Taste Is the Bottleneck. Good News: It's Trainable."
titleZh: "团队的 taste 才是瓶颈。好消息是，它可以练"
category: "Opinions"
date: "2026-05-30"
author: "Sean"
release: "published"
keywords:
  - "AI Era"
  - "Taste"
  - "Judgment"
  - "Role Models"
  - "Frontier Work"
history:
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Initial draft"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Editorial polish"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Human voice pass"
  - "Sun May 31 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Technical voice and structure pass"
  - "Sun May 31 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Technical blog structure pass"
  - "Sun May 31 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Context and flow pass"
  - "Sun May 31 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Taste thesis structure pass"
  - "Mon Jun 01 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Concision pass"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Minor compression, add hook"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Goal-mode 5-pass polish"
  - "Fri Jul 24 2026 00:00:00 GMT-0700 (Pacific Daylight Time): First-person rewrite, tighten prose"
  - "Fri Jul 24 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Adversarial CTO-reader pass: promote thesis, answer the open questions, add counterarguments, replace checklist ending"
  - "Fri Jul 24 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Add the rollback story as the trigger; add section on taste tested by harsh customers"
  - "Fri Jul 24 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Second CTO pass: repair title/concession conflict, sharpen falsifier, cut weakest section, merge closing two sections, trim hedging"
  - "Fri Jul 24 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Correct the author's vantage point on the opening story"
  - "Fri Jul 24 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Close the story with what the eval changed after the pivot"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Third CTO pass: closing test now measures the actual claim and can fail"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Retitle: name the team as the unit and add the learnability claim"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Voice pass: strip em-dashes, plainer sentences, name the pattern in the loop section"
---

# Your Team's Taste Is the Bottleneck. Good News: It's Trainable.
# 团队的 taste 才是瓶颈。好消息是，它可以练

## Coherence Stopped Being a Signal
## 连贯不再是信号

**English:**

The demo works. The code compiles. The spec has all the right sections. Then someone asks: what happens when the agent fails halfway? How does the user verify the output? What if the integration takes six weeks instead of two?

I have sat through that pause more than once. Here is the one I keep coming back to.

A team spent two months building an agentic product with no eval and no rubric. They were not careless. The work was not sloppy. Everything they produced was coherent. The demos held up, the docs held up, every week looked like progress. Nobody could answer the only question that mattered: is this version better than last week's?

Without that answer, every change was a guess. Customer feedback went from encouraging to pointed to quiet. By the time the complaints were unambiguous, the real damage was done. Customers had stopped believing the product would get better. That is harder to lose than any single feature. It got rolled back.

I was not on that team. I am the one who pivoted the project afterward, so I could not leave the question open. Before pointing the project anywhere new, I had to decide what had actually gone wrong.

Working that out convinced me of something bigger, and it is the real subject of this post. Coherence has stopped meaning that anyone thought it through.

"We needed evals" is the most comfortable conclusion a post-mortem can reach. It blames nobody, it is purely technical, and it converts neatly into a project. So the harder reading deserves saying out loud: maybe the product was solving a problem nobody had, and the missing eval had nothing to do with the outcome.

I still land on eval, for one reason. Without a rubric, that team could not have told those two stories apart. A team that can measure whether this week beat last week finds out in three weeks that it is aimed at the wrong problem. A team that cannot finds out in two months, from a customer who has stopped replying.

When we pivoted, we built one. The product did not become good overnight. Other things had to change too. What changed immediately was smaller and more valuable than that: we could see which changes helped and which did not. The guessing stopped.

That is why I think the bottleneck moved. For most of my career, coherence was a decent proxy for quality. If a design doc held together, someone had probably thought it through, because writing it coherently cost about as much work as thinking it through. Reviewers leaned on that. I leaned on that.

That proxy is gone. Coherent docs, coherent code, coherent strategy now cost minutes. Coherence still tells me an artifact is readable. It tells me nothing about whether it is true.

So the first filter in most review processes is firing on a signal that carries no information. Something has to replace it. The replacement is judgment applied before the metrics arrive. That is what I mean by taste.

**中文：**

Demo 能跑。代码能 compile。Spec 结构完整。然后有人问：agent 中途失败怎么办？用户怎么验证输出？Integration 如果不是两周而是六周呢？

这种沉默我经历过不止一次。其中有一次我一直回想。

一个团队花两个月做一个 agentic 产品，没有 eval，没有 rubric。他们不是不认真，活也不糙。他们产出的东西全都是连贯的。Demo 立得住，文档立得住，每一周看起来都像有进展。没有人能回答唯一要紧的那个问题：这一版比上一版好吗？

没有这个答案，每一次改动都是猜。客户的反馈从鼓励，到尖锐，到沉默。等到抱怨明确到无法回避的时候，真正的损失已经发生了：客户不再相信这个产品会变好。这比丢掉任何一个功能都难挽回。最后它被 rollback 了。

我不在那个团队里。我是后来 pivot 这个项目的人，所以我没法让这个问题悬着。在把这个项目指向新方向之前，我得先判断上一轮到底错在哪。

把这件事想清楚，也让我确认了一个更大的变化，那才是这篇文章真正要谈的：连贯，已经不再说明有人想清楚了。

"我们缺 eval"是复盘会最舒服的结论。它不指向任何人，纯技术，而且可以立项。所以更难听的那种读法必须说出来：也许这个产品解决的问题本身就不存在，缺 eval 和后来的结果无关。

我最后还是落在 eval 上，理由只有一个：没有 rubric，那个团队根本分不清这两种故事。一个能测出"这周比上周好没好"的团队，三周就会发现自己瞄错了问题。一个测不了的团队，要两个月才知道，而且是从一个已经不回消息的客户那里知道的。

Pivot 的时候我们把 eval 建起来了。产品没有因此一夜变好，别的东西也得改。立刻变了的是一件更小、也更值钱的事：我们能看见哪些改动有用、哪些没用。猜停下来了。

这就是我认为瓶颈已经移动的原因。过去很长一段时间里，连贯性是质量的一个不错的替代指标。一份设计文档如果自洽，通常说明有人真的想清楚了，因为把它写连贯，和把它想清楚，成本差不多。Reviewer 靠这个筛第一遍。我也靠这个。

这个替代指标现在失效了。连贯的文档、连贯的代码、连贯的策略，几分钟就能产出。连贯性现在只说明这东西能读，不说明这东西是不是真的。

也就是说，大多数 review 流程的第一道筛子，筛的是一个不带信息的信号。它必须被替换掉。替换它的东西，是在指标出现之前就要做出的判断。这就是我说的 taste。

---

## What Counts as an Objection
## 什么才算一条反对意见

**English:**

Taste is not style. It is not a feeling you get about an artifact. Working definition: the ability to look at something plausible and say where it will break, before metrics, incidents, or confused users make the break obvious.

One test tells me whether I have that ability in a given moment. Can I write my objection as a failure path?

"This feels wrong" fails the test. "The agent has no recovery path when it fails halfway" passes it. So does: there is no eval, so we cannot tell a regression from noise. There is no approval step before the write. This prompt contains a product decision nobody reviewed. The agent cannot say what it changed. The UI has no undo.

Every one of those can be argued with, priced, and scheduled. "Feels wrong" can only be deferred to whoever has more seniority in the room.

Not every objection can be found by reading the artifact. Some appear only when you watch someone use the thing.

Engineers already have a word for the readable half of this: code smell. Nothing is broken, the tests pass, but the shape of the code tells you something is wrong. Interfaces have the same property and it is easier to miss, because documents flatten it. "The user confirms the action" is one line in a spec. It is one line in the demo too. Watch enough real sessions and it stops being a line. It is a step, repeated every single time, by someone whose actual work is already stacking up behind them.

That extra step passes the failure-path test, which is what makes it an objection rather than a preference. People will start batching their work to avoid the confirmation, and then the confirmation stops protecting anything. But nobody finds it by reading. It is invisible in the artifact and obvious in the recording. That is why I do not trust judgment formed entirely from specs and demos, including my own.

The failure-path test is worth more to a team than to a person. Kept in my head, it leaves when I leave. Put in the pull request template as one required line, *what happens when this fails*, it becomes something a new engineer inherits in their first week. A vague answer becomes a reason to hold the merge instead of a reason to feel uneasy. I would rather hand someone that one line than an essay about judgment.

**中文：**

Taste 不是风格，也不是你对一个东西的感觉。可以这样定义：面对一个看似成立的方案，在指标、事故或困惑的用户把问题暴露出来之前，说出它会从哪里坏。

有一个测试能告诉我，此刻我到底有没有这个能力：我的反对意见，能不能写成一条失败路径？

"这里感觉不对"通不过。"Agent 中途失败时没有恢复路径"能通过。同样能通过的还有：没有 eval，所以我们分不清是退步还是噪音；写入之前没有确认步骤；这个 prompt 里藏了一个没人 review 过的产品决策；agent 说不清自己改了什么；界面没有撤销。

这些都可以被反驳、被估价、被排期。"感觉不对"只能交给房间里资历最深的那个人裁决。

但不是所有反对意见都能靠读文档发现。有些只有在你看着别人用的时候才会冒出来。

工程师对能读出来的那一半已经有一个词：code smell。什么都没坏，测试也过，但代码的形状告诉你有地方不对。界面也有同样的东西，而且更容易漏掉，因为文档会把它压平。"用户确认这个操作"在 spec 里是一行。在 demo 里也是一行。看够多的真实使用，它就不再是一行了：它是一个每次都要重复一遍的步骤，而做这件事的人，手头的正事本来就已经堆着了。

这个多余步骤通得过失败路径测试，所以它是反对意见，不是偏好。人们会开始攒一批一起做，好绕开那次确认，于是这个确认不再保护任何东西。但没有人能读出它来。它在产出物里看不见，在录屏里一眼就能看见。这也是我不相信完全从 spec 和 demo 里长出来的判断的原因，包括我自己的。

失败路径这条测试，对团队的价值大于对个人。留在我脑子里，我走了它就走了。写进 PR 模板，变成一行必填，*这东西失败时会发生什么*，它就成了新人第一周就继承到的东西。含糊的回答会变成推迟合并的理由，不再只是一种不安。比起一篇讲判断力的文章，我更愿意给人这一行。

---

## Make the Claim Small Enough to Break
## 把观点缩小到能被打碎

**English:**

Neutrality does not build judgment. Claims that reality can break do. So I owe you mine, in a form you can attack.

"AI coding is the future" is unbreakable and therefore useless. Here is the version I actually hold: AI coding pays off in proportion to how much of the correctness criteria already lives outside people's heads.

That ranks the work. Migrations do best, because the old behavior is the spec and you can diff against it. Scaffolding does well, because being conventional is the requirement. Test writing does well when the code under test is stable. Large refactors do worst, and not because they are hard. The invariants that make a refactor correct are usually undocumented, so neither the model nor the reviewer can check the thing that matters.

I have had to narrow that claim once already. I used to say the variable was test coverage. It is not. It is whether failure is *loud*. A repo at eighty percent coverage whose tests never assert on the behavior you changed is worse than a thin smoke test that dies in ten seconds. Coverage measures how much code runs. I care about how fast a wrong change announces itself.

A falsifier is only useful if I cannot wriggle out of it afterward, so here is one with the numbers filled in. Take a codebase over 100k lines with no assertion-level tests on the paths being touched. A team lands an agent-driven cross-module refactor there, big enough that no single reviewer read the whole diff, and ninety days later there has been no rollback and no P1 traced to it. Same team does it twice. That kills my model, and I would want to hear about it.

**中文：**

中立练不出判断力。能被现实打碎的观点才可以。那我就得把我自己的观点摆出来，摆成你能攻击的样子。

"AI coding 是未来"打不碎，所以没用。我真正持有的版本是：AI coding 的收益，正比于有多少正确性标准已经写在了人脑之外。

这句话能给工作排序。迁移最合适，因为旧行为本身就是规格，你可以直接对比。搭脚手架也合适，因为"照常规来"就是需求。写测试在被测代码稳定时合适。大型重构最不合适，不是因为它难，而是因为决定重构对不对的那些不变量通常没写下来，于是模型和 reviewer 都没法检查真正要紧的东西。

这个观点我已经被迫改窄过一次。我以前说关键变量是测试覆盖率。不是。关键是失败够不够*响*。一个覆盖率八十、但测试从不断言你改动那部分行为的 repo，比一个十秒就挂掉的粗糙冒烟测试更糟。覆盖率衡量的是多少代码被跑过，我在意的是一个错误改动多快会自己叫出来。

一个证伪条件如果事后能被我自己解释掉，就不算数，所以我把数字填进去：一个十万行以上的代码库，被改动的路径上没有断言级测试。某个团队在这里用 agent 完成了一次跨模块重构，改动大到没有任何一个 reviewer 完整读过整个 diff，上线九十天内没有回滚，也没有能追溯到它的 P1。同一个团队做到两次。那我的模型就是错的，我想知道。

---

## The Loop, and the Three Steps That Always Get Cut
## 这个回路，以及总是被砍掉的最后三步

**English:**

Demos hide the part that matters. In a demo, someone chose the input, the path, and the ending. Real workflows bring permission errors, retries, dirty data, partial failure, latency, audit requirements, and users who do not care how clever the system is.

**Before:** an agent completes one impressive task, on a clean input, in the right environment.

**After:** the system around the agent knows what to do when the agent is uncertain, slow, wrong, or half done, and the user can tell which of those just happened.

Getting from Before to After means building a loop. The loop has eight steps:

user pain → input → model action → human inspection → correction → eval → write-back → owner

Under schedule pressure, three of them get cut, in a predictable order. Notice which three: eval, write-back, owner. They are the last three. Everything before them produces the demo. Everything after them produces a system that keeps working. The cut always lands after the moment the thing starts looking finished, which is exactly when the pressure to move on is highest.

**Eval goes first**, because it is the only step with no visible output. That is the cut behind the two months I described at the top, and the cost is always deferred. Someone changes a prompt, quality "feels" different, and there is no way to separate a regression from noise. Teams in that state stop touching the prompt. Quality freezes at whatever it was on the day the last person who understood it left.

**Write-back goes second.** Users correct the model, the correction fixes that one session, and nothing flows back. This one hurts most. Corrections are the highest-quality labeled data the product will ever generate: a domain expert telling you exactly what was wrong, for free, at the moment of the error. Throw that away and the product cannot get better at the thing its own users care most about.

**Owner goes third, and this is the one I would fix first.** Agent-generated code has no author. When it breaks at 2 a.m., nobody has the context, because nobody built any. The reviewer read a diff for eight minutes and approved it. Human code carries an invisible index: who wrote it, what they were worried about, what they tried first. Agent code arrives with none of that, and I have not seen a team replace it with anything.

**中文：**

Demo 会把最要紧的部分藏起来。在 demo 里，有人替你选好了输入、路径和结尾。真实 workflow 里有权限错误、重试、脏数据、部分失败、延迟、审计要求，以及根本不关心系统有多聪明的用户。

**Before：** Agent 在正确的环境、干净的输入上，完成了一个漂亮的任务。

**After：** Agent 不确定、变慢、出错或做到一半时，它周围的系统知道该怎么办，而且用户分得清刚才发生的是哪一种。

从 Before 走到 After，要建一个回路。这个回路有八步：

用户的痛 → 输入 → 模型动作 → 人工检查 → 修正 → eval → 写回 → 归属

在进度压力下，其中三步会被砍掉，而且顺序可预测。注意是哪三步：eval、写回、归属。**它们是最后三步。** 排在它们前面的所有环节负责产出 demo，排在它们后面的负责产出一个能持续工作的系统。这一刀总是落在"这东西看起来做完了"之后，而那一刻恰好是"赶紧去做下一件事"的压力最大的时候。

**eval 最先被砍**，因为它是唯一没有可见产出的一步。开头那两个月砍掉的就是它，而代价总是延后出现：有人改了 prompt，质量"感觉"变了，但没有办法把退步和噪音分开。走到这一步的团队，会变得不敢碰 prompt。质量就冻结在最后一个懂它的人离职那天。

**写回第二个被砍。** 用户纠正了模型，这次纠正修好了这一次会话，然后什么都没有流回去。这一刀最疼。纠正是这个产品能拿到的质量最高的标注数据：一个领域专家在错误发生的当下，免费告诉你到底哪里错了。扔掉它，这个产品在用户最在意的事情上就不会变好。

**归属第三个被砍，而这是我会最先补回来的一个。** Agent 生成的代码没有作者。它凌晨两点坏掉的时候，没有人有上下文，因为根本没有人建立过上下文：reviewer 花了八分钟看完 diff，点了同意。人写的代码带着一层看不见的索引：谁写的，他当时担心什么，他先试过什么。Agent 的代码不带这些，而我还没见过哪个团队拿别的东西补上。

---

## Borrow the Question, Not the Conclusion
## 借问题，不借结论

**English:**

Judgment does not get stronger inside your own head. Taste still acts before the data arrives, which is what it is for. Its accuracy comes from how many times it has been checked afterward by someone who is not you.

The fastest checker available is a customer with something at stake, provided you go to them. The ones who come to you arrive on the schedule from the top of this post. Long before you have an eval harness, you can sit with the people who use the thing and ask what broke. What makes their feedback useful is specificity, and specificity comes from stakes. Someone tells you exactly which step cost them an hour because the hour was actually lost. That is a different filter from loudness. The loudest customer is often the least specific one, and a roadmap can lose a quarter to whoever complains most fluently. So I look for the users who hurt most, not the ones who yell most. Then I still need measurement to tell me how many of them there are.

Judgment can also be borrowed from people, and most of us borrow the wrong layer. The wrong layer is vocabulary. Read enough of this genre and you can say *plausible artifact* or *contact with failure* without having earned either. Then it shows up in a design review as a more sophisticated way to say "feels wrong," which makes weak objections harder to challenge. That is the opposite of the point.

The layer worth borrowing is the question. Conclusions do not transfer. They grew out of constraints you do not have. "Who operates this at 3 a.m.?" travels anywhere. "This should be a narrow workflow, not a platform" does not, because it was an answer to their situation. And the borrow only counts once you take the question back to your own constraints and let it be wrong there.

**中文：**

判断在自己脑子里不会变强。Taste 依然在数据之前行动，它的用处就在这里。但它的准确率，来自它事后被一个不是你的人核对过多少次。

最快的核对者，是一个有切身利害的客户，前提是你主动去找他。等他自己找上门的时候，就是开头那个故事的时间表了。在你有 eval 之前很久，你就可以坐到真正在用的人旁边，问他们哪里坏了。他们的反馈之所以有用，是因为具体，而具体来自利害：一个人能说清是哪一步让他多花了一小时，是因为那一小时是真花掉的。这和"声音大"是两个筛子。喊得最响的客户往往是最不具体的那个，而一个 roadmap 可以被最会抱怨的人拿走一个季度。所以我找的是疼得最厉害的用户，不是嗓门最大的用户。找到之后，我仍然需要测量来告诉我这样的人有多少。

判断也可以从人身上借，而大多数人借错了层。错的那一层是词汇。这类文章读多了，你不需要付出任何代价，就能熟练说出"看似成立的方案""接触失败"。然后它出现在设计评审上，变成一种更高级的方式来说"感觉不对"，弱的反对意见反而更难被反驳。这和本意正好相反。

值得借的那一层是问题。结论迁移不了，它长在你没有的约束上。"凌晨三点谁来运维这个"走到哪都成立。"这里应该做窄 workflow 而不是平台"走不了，因为那是对他的处境给出的答案。而且这个"借"只有在你把问题拿回自己的约束里、并允许它在那里出错之后，才算数。

---

## Where I Could Be Wrong
## 我可能错在哪里

**English:**

The title of this post is a strong claim. Two arguments against it are worth taking seriously. I want the stronger one first.

**The bottleneck may be eval infrastructure, not judgment.** Judgment has always been scarce, and scarce is not the same as bottleneck. The bottleneck is the thing that changed. What changed is the volume of plausible artifacts arriving per week. You do not fix a volume problem with a human filter. You fix it with measurement that scales.

That is the best case against my title, and it is where I still disagree. Writing an eval harness is maybe two weeks of engineering. Deciding what it measures is not engineering at all: what counts as a regression, what threshold blocks a release, who may override it and on what grounds. Every eval effort I have watched stall, stalled there. Not in the code, in the definition, because signing the definition means owning the release you will one day block. If that is right, eval infrastructure is the form the answer takes and taste is the thing actually missing. I will mark that as my read rather than a measured fact. I have not counted stalled eval projects, and someone with better data may tell me they die in engineering after all.

The practical order still holds. If you have no eval at all, go build it before you read another essay about judgment, including this one. Just do not expect the engineering to be the hard part.

**The second argument: every cycle says this.** Code is cheap, vision is valuable. I heard it through offshoring, through the no-code wave, through the app-store gold rush. Each time, execution turned out to be the hard part anyway. That history should make you suspicious of this post.

My answer is that the general version was probably wrong those times, and that I am making a narrower one. I am not saying ideas now matter more than execution. I am saying one specific heuristic broke: the reviewer's habit of treating a coherent artifact as evidence that someone thought it through. That habit is old, deeply wired, and now actively wrong.

**中文：**

这篇文章的标题是一个强断言。有两个反驳值得认真对待，我先说更强的那个。

**瓶颈可能是 eval 基础设施，不是判断力。** 判断力一直都稀缺，而稀缺和瓶颈不是一回事。瓶颈是那个*变了*的东西。变了的是每周涌进来的、看似成立的产出物的数量。数量问题不靠人肉筛子解决，靠能规模化的测量解决。

这是反对我这个标题的最强版本，也是我仍然不同意的地方。写一套 eval harness 大概是两周工程。决定它测什么，则完全不是工程问题：什么算退步，什么阈值卡住发布，谁可以 override、凭什么。我见过的 eval 项目卡住，基本都卡在这里。不是卡在代码上，是卡在定义上，因为在定义上签字，等于认领了将来某一次被你卡住的发布。如果这是对的，那 eval 基础设施只是答案的形状，真正缺的还是 taste。这一条我标成我的判断，不是测量结果。我没统计过有多少 eval 项目死在哪一步，有数据的人可能会告诉我它们最终还是死在工程上。

但实践顺序不变：如果你现在连 eval 都没有，先去建它，别再读讲判断力的文章了，包括这一篇。只是别指望工程是难的那部分。

**第二个反驳：每一轮周期都这么说。** 代码不值钱，眼光值钱。外包那轮我听过，no-code 那轮我听过，"人人都能做 App"那轮我也听过。每一次，最后难的还是执行。这段历史应该让你对这篇文章保持怀疑。

我的回答是：那几次的通用版说法大概是错的，而我提的是一个更窄的版本。我没有说现在想法比执行更重要。我说的是一个具体的启发式坏掉了：reviewer 习惯把"这东西写得连贯"当成"有人想清楚了"的证据。这个习惯很老，长在肌肉里，而它现在是错的。

---

## Predictions You Can Fail
## 能判错的预测

**English:**

Taste acts before the data arrives, which is also what makes the word so easy to abuse. "This lacks taste" can mean "I outrank you." I have heard it used that way, and I have used it that way.

One habit keeps me honest, and it costs about thirty seconds. Before shipping a call I care about, I write the prediction down in one sentence, with a number and a date. Then I set a reminder for that date and go look.

The thirty seconds are not the hard part. Looking is. What I found when I started looking is that most of my calls had never been predictions. They were preferences with a rationale attached. They could not have been wrong, so they taught me nothing. A prediction that cannot fail is not judgment. It is decoration on a decision I had already made.

You can run the same check backwards, on work you have already done. Pull up the last three calls you made: something you shipped, something you killed, something you sent back. For each one, what did you predict at the time, specifically enough to check now? Go check. Most people cannot start, because the prediction was never written down. That result is the useful one.

I am running the same test on this post. The claim on the table is that coherence stopped carrying information, and that review habits built on it are failing quietly. Here is the check, and it runs on evidence your team already has. Pull up three artifacts that went through review last quarter without an argument. How many turned out to be wrong in a way the review should have caught? If that rate is no different from two years ago, coherence still carries information where you work, and I am wrong.

I would rather hear that than not. It is the only version of this post that could teach me anything.

**中文：**

Taste 在数据到来之前行动，这也是这个词特别容易被滥用的原因。"这个没有 taste"可以是"我职级比你高"的另一种说法。我听过有人这么用，我自己也这么用过。

有一个习惯让我保持诚实，成本大概三十秒：在做一个我在意的决定之前，我把预测写成一句话，带一个数字和一个日期。然后在那个日期设一个提醒，到点去看。

三十秒不是难的部分，去看才是。我开始去看之后发现，我的大部分决定从来就不是预测。它们是配了理由的偏好，不可能被判错，所以什么也没教给我。一个不可能失败的预测不叫判断，它是贴在一个我早就做完的决定上的装饰。

同样的核对可以往回做，用在已经做完的事情上。翻出你最近的三个决定：一个 ship 的，一个 kill 的，一个打回去的。每一个，你当时的预测是什么，具体到现在可以核对？去核对。大多数人卡在第一步，因为预测从来没被写下来。这个结果才是有用的。

我对这篇文章做同样的测试。摆在桌上的观点是：连贯性不再携带信息，建立在它之上的 review 习惯正在悄悄失效。检验它用的是你团队已经有的材料。翻出上个季度三个没有争论就通过 review 的产出物，其中有几个后来被证明是错的，而且是 review 本该拦下的那种错？如果这个比例和两年前没有差别，那连贯性在你那里仍然携带信息，我就是错的。

我宁可听到这个结果。只有这一种版本的反馈，能让我学到东西。
