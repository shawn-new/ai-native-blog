---
id: "article6-winning-with-taste-in-ai-era"
slug: "your-teams-taste-is-the-bottleneck"
titleEn: "Taste Gets You to What Users Need Faster. Good News: It's Trainable."
titleZh: "Taste 让团队更快做出用户真正需要的东西。好消息是，它可以练。"
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
  - "Fri Jul 24 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Adversarial CTO-reader pass"
  - "Fri Jul 24 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Add the rollback story as the trigger"
  - "Fri Jul 24 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Second CTO pass"
  - "Fri Jul 24 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Correct the author's vantage point"
  - "Fri Jul 24 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Close the story with what the eval changed"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Third CTO pass"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Retitle"
  - "Sat Jul 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Voice pass"
  - "Sat Jul 26 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Structural rewrite — four training pillars, remove verdict sections, add recap"
---

# Taste Gets You to What Users Need Faster. Good News: It's Trainable.
# Taste 让团队更快做出用户真正需要的东西。好消息是，它可以练。

## Why Taste
## 为什么需要 Taste

**English:**

Every team makes decisions before the data is complete. Which problem to solve next, which path to take, what to build first, what to skip. The information to make those calls perfectly never arrives in time. Something has to fill the gap. That something is taste: the judgment a team uses to decide what to do and what to prioritize when there is not yet enough information to be certain.

Most lost time is not spent working slowly. It is spent working hard on the wrong thing. A team with taste spends its weeks on what users needed. A team without it can be enormously productive and still arrive nowhere. I watched a team spend two months building an agentic product where every artifact was coherent — demos held up, docs held up, every week looked like progress — but nobody could answer one question: is this version better than last week's? By the time they found out, it was from a customer who had stopped replying. It got rolled back.

For most of my career, coherence was a decent proxy for quality: writing a design doc that held together cost about as much work as thinking it through. That proxy got much weaker. Coherent docs, coherent code, coherent strategy now cost minutes. Coherence still tells me an artifact is readable. What it no longer tells me is whether anyone checked that the thing is true.

The first filter in most review processes is leaning on a signal that has lost most of its weight. Taste is what replaces it. The calls it is for — what to build, what to prioritize, what to kill — are the ones where being wrong costs not a sprint but a quarter.

**中文：**

每个团队都在信息不完整的时候做决定。下一个解决什么问题，走哪条路，先建什么，跳过什么。能让这些决定变完美的信息永远不会及时到达。总有什么东西要填上这个空缺。这个东西就是 taste：在还没有足够信息来确定答案的时候，团队用来决定做什么、优先做什么的判断力。

大部分被浪费的时间，不是因为干得慢，是因为在错的东西上干得很卖力。有 taste 的团队，把一周周花在用户真正需要的东西上；没有 taste 的团队可以极其高产，然后哪儿也没到。我见过一个团队花两个月做一个 agentic 产品，每件产出都连贯——demo 立得住，文档立得住，每周看起来都有进展——但没有人能回答一个问题：这一版比上一版好吗？等他们知道答案的时候，是从一个已经不回消息的客户那里知道的。最后 rollback 了。

过去很长一段时间里，连贯性是质量不错的替代指标：把一份设计文档写连贯，和把它想清楚，成本差不多。这个替代指标现在弱了很多。连贯的文档、连贯的代码、连贯的策略，几分钟就能产出。连贯性仍然说明这东西能读，它不再说明的是：有没有人核对过这东西是不是真的。

大多数 review 流程的第一道筛子，靠的是一个已经失去大部分分量的信号。Taste 是替换它的东西。它负责的那些决定——建什么、优先什么、砍什么——错一次的代价不是一个 sprint，是一个季度。

---

## What Taste Produces
## Taste 产出什么

**English:**

Working definition: taste is the ability to look at something plausible and say where it will break, before metrics, incidents, or confused users make the break obvious. It is not style and it is not a feeling about an artifact. It is a specific claim about a specific failure.

One test tells me whether I have that ability in a given moment. Can I write my objection as a failure path?

"This feels wrong" fails the test. "The agent has no recovery path when it fails halfway" passes it. So does: there is no eval, so we cannot tell a regression from noise. There is no approval step before the write. This prompt contains a product decision nobody reviewed. The agent cannot say what it changed. The UI has no undo.

Every one of those can be argued with, priced, and scheduled. "Feels wrong" can only be deferred to whoever has more seniority in the room. The difference is who pays for the mistake and when. An objection written as a failure path gets fixed this week. One that stays a feeling gets fixed by a user, months later, in production.

Some objections only appear when you watch someone use the thing. Engineers have a word for the readable half: code smell. Nothing is broken, the tests pass, but the shape of the code tells you something is wrong. Interfaces have the same property and it is easier to miss, because documents flatten it. "The user confirms the action" is one line in a spec. Watch enough real sessions and it stops being a line. It is a step, repeated every single time, by someone whose actual work is stacking up behind them. People start batching their work to avoid the confirmation, and the confirmation stops protecting anything. Invisible in the artifact. Obvious in the recording.

The failure-path test is worth more to a team than to a person. Kept in my head, it leaves when I leave. Put in the pull request template as one required line, *what happens when this fails*, it becomes something a new engineer inherits in their first week. A vague answer becomes a reason to hold the merge instead of a reason to feel uneasy.

**中文：**

定义：taste 是面对一个看似成立的方案，在指标、事故或困惑的用户把问题暴露出来之前，说出它会从哪里坏的能力。它不是风格，也不是感觉。它是关于一个具体失败的具体断言。

有一个测试能告诉我，此刻我到底有没有这个能力：我的反对意见，能不能写成一条失败路径？

"这里感觉不对"通不过。"Agent 中途失败时没有恢复路径"能通过。同样能通过的还有：没有 eval，所以我们分不清是退步还是噪音；写入之前没有确认步骤；这个 prompt 里藏了一个没人 review 过的产品决策；agent 说不清自己改了什么；界面没有撤销。

这些都可以被反驳、被估价、被排期。"感觉不对"只能交给房间里资历最深的那个人裁决。**区别在于谁来为这个错误买单、什么时候买单。** 写成失败路径的反对意见，这周就被修掉；停留在感觉上的那个，几个月后由用户在生产环境里替你修。

有些反对意见只有在你看着别人用的时候才会冒出来。工程师对能读出来的那一半有一个词：code smell。什么都没坏，测试也过，但代码的形状告诉你有地方不对。界面也有同样的东西，而且更容易漏掉，因为文档会把它压平。"用户确认这个操作"在 spec 里是一行。看够多的真实使用，它就不再是一行了：它是一个每次都要重复一遍的步骤，而做这件事的人，手头的正事本来就已经堆着了。人们会开始攒一批一起做，好绕开那次确认，于是这个确认不再保护任何东西。在产出物里看不见，在录屏里一眼就能看见。

失败路径这条测试，对团队的价值大于对个人。留在我脑子里，我走了它就走了。写进 PR 模板，变成一行必填，*这东西失败时会发生什么*，它就成了新人第一周就继承到的东西。含糊的回答会变成推迟合并的理由，不再只是一种不安。

---

## How to Train Taste
## 怎么练

**English:**

Taste sounds like a trait. It acts like a muscle. The four things that train it all share one property: they create situations where reality tells you that you were wrong, soon enough for the correction to change what you do next.

**中文：**

Taste 听起来像一种天赋。它的运作方式更像一块肌肉。练它的四件事有一个共同特征：它们制造出现实告诉你"你错了"的场景，而且够快，快到修正能影响你下一步的动作。

---

### Hold Specific Opinions
### 持有具体的观点

**English:**

Neutrality does not build judgment. Claims that reality can break do. "AI coding is the future" is unbreakable and therefore useless. Here is the version I actually hold: AI coding pays off in proportion to how much of the correctness criteria already lives outside people's heads.

That ranks the work. Migrations do best, because the old behavior is the spec and you can diff against it. Scaffolding does well, because being conventional is the requirement. Test writing does well when the code under test is stable. Large refactors do worst. The invariants that make a refactor correct are usually undocumented, so neither the model nor the reviewer can check the thing that matters.

The obvious variable is test coverage. It is not the right one. What matters is whether failure is *loud*. A repo at eighty percent coverage whose tests never assert on the behavior you changed is worse than a thin smoke test that dies in ten seconds. Coverage measures how much code runs. I care about how fast a wrong change announces itself.

The payoff of a claim this specific is measured in weeks. A team holding it stops betting quarters on agent-driven refactors of undocumented code, and spends them where the criteria already exist. Vague positions cannot steer decisions. Specific ones can be wrong, and that is their value.

**中文：**

中立练不出判断力。能被现实打碎的观点才可以。"AI coding 是未来"打不碎，所以没用。我真正持有的版本是：AI coding 的收益，正比于有多少正确性标准已经写在了人脑之外。

这句话能给工作排序。迁移最合适，因为旧行为本身就是规格，你可以直接对比。搭脚手架也合适，因为"照常规来"就是需求。写测试在被测代码稳定时合适。大型重构最不合适。决定重构对不对的那些不变量通常没写下来，于是模型和 reviewer 都没法检查真正要紧的东西。

最容易想到的变量是测试覆盖率。不是它。关键是失败够不够*响*。一个覆盖率八十、但测试从不断言你改动那部分行为的 repo，比一个十秒就挂掉的粗糙冒烟测试更糟。覆盖率衡量的是多少代码被跑过，我在意的是一个错误改动多快会自己叫出来。

把观点缩到这么具体，回报是用周来计的。持有这个观点的团队，不会再把一个季度押在对没有文档的代码做 agent 重构上，而是把这些周花在正确性标准已经写下来的地方。模糊的立场无法指导决策。具体的立场可以被证明是错的，而这正是它的价值。

---

### Borrow How Others Think
### 借别人的思考方式

**English:**

Judgment can be borrowed from people, and most of us borrow the wrong layer. The wrong layer is vocabulary. Read enough of this genre and you can say *plausible artifact* or *contact with failure* without having earned either. Then it shows up in a design review as a more sophisticated way to say "feels wrong," which makes weak objections harder to challenge. That is the opposite of useful.

The layer worth borrowing is the question. Conclusions do not transfer. They grew out of constraints you do not have. "Who operates this at 3 a.m.?" travels anywhere. "This should be a narrow workflow, not a platform" does not, because it was an answer to someone else's situation. And the borrow only counts once you take the question back to your own constraints and let it be wrong there.

Good questions are specific and portable. "What happens to the user mid-task when this fails?" works on any product. "How does anyone tell whether this week was better than last week?" works on any team. "What is the most expensive assumption in this plan?" works on any proposal. Collect questions, not opinions. Opinions expire. Questions keep producing.

**中文：**

判断可以从人身上借，而大多数人借错了层。错的那一层是词汇。这类文章读多了，你不需要付出任何代价，就能熟练说出"看似成立的方案""接触失败"。然后它出现在设计评审上，变成一种更高级的方式来说"感觉不对"，弱的反对意见反而更难被反驳。这和有用正好相反。

值得借的那一层是问题。结论迁移不了，它长在你没有的约束上。"凌晨三点谁来运维这个"走到哪都成立。"这里应该做窄 workflow 而不是平台"走不了，因为那是对别人的处境给出的答案。而且这个"借"只有在你把问题拿回自己的约束里、并允许它在那里出错之后，才算数。

好问题是具体且可搬运的。"这东西失败时，用户正在做的事怎么办？"对任何产品成立。"谁能看出这周比上周好了？"对任何团队成立。"这个计划里最贵的假设是哪个？"对任何方案成立。收集问题，别收集观点。观点会过期。问题持续产出。

---

### Try Fast, Fail Fast
### 快试，快错

**English:**

Taste does not improve by thinking harder. It improves by trying more things and finding out which ones break. The cycle is: build a prototype, dogfood it, hack on it, watch what happens. If it fails, write down why it failed and move to the next attempt. If it works, write down what worked and keep going.

The speed of this cycle is what matters. A team that spends a quarter refining one approach before testing it learns one lesson in three months. A team that tries five rough prototypes in three weeks learns five lessons in the same time, and three of those lessons would have been impossible to predict from a design doc.

Most of the prototypes will not work. That is the point. Each failure carries a specific reason: the latency was too high for real-time use, the output format confused the user, the integration broke under dirty data, the agent could not recover from a partial failure. Those reasons are the raw material taste is built from. A team that has seen fifteen ways an agent product can fail makes better calls on the sixteenth than a team that has shipped one polished version.

The discipline is in what happens after each attempt. Failing fast is easy. Learning from the failure is the part that gets skipped. Every prototype that gets thrown away without a sentence about why it failed is a wasted lap. Every prototype that works without a sentence about what made it work is a lesson the team cannot repeat.

**中文：**

Taste 不会因为想得更用力而变好。它因为尝试更多东西、发现哪些会坏而变好。循环是：搭一个原型，自己用它，hack 它，看会发生什么。如果失败了，记下为什么失败，换下一个。如果成功了，记下什么起了作用，继续。

这个循环的速度才是关键。一个团队花一个季度打磨一种方案再去测试，三个月学到一课。一个团队在三周里试五个粗糙的原型，同样的时间学到五课，其中三课靠设计文档根本预测不出来。

大部分原型不会成功。这就是意义所在。每次失败都带着一个具体原因：延迟太高，不够实时；输出格式把用户搞晕了；脏数据一来 integration 就坏了；agent 从部分失败中恢复不过来。这些原因是 taste 的原材料。一个团队见过十五种 agent 产品的坏法，在第十六次做的判断，比一个只 ship 过一个精装版本的团队好。

纪律在于每次尝试之后的动作。快速失败很容易。从失败中学到东西才是被跳过的那部分。每一个被扔掉的原型，如果没有留下一句为什么失败，就是白跑的一圈。每一个成功的原型，如果没有留下一句什么起了作用，就是团队没法复制的一课。

---

### Shorten the Feedback Loop
### 缩短反馈回路

**English:**

The number worth watching is the gap between having an idea and hearing someone credible say it is wrong. Compressing that gap is what makes taste compound, because it turns one large bet into many small tests, and each test returns a correction you can act on. Let the gap stretch and you get the two months at the top of this post: a confident team, a coherent product, and the first real verification arriving as a rollback.

The fastest checker available is a customer with something at stake, provided you go to them. The ones who come to you arrive on the schedule from the top of this post. Long before you have an eval harness, you can sit with the people who use the thing and ask what broke.

What makes their feedback useful is specificity, and specificity comes from stakes. Someone tells you exactly which step cost them an hour because the hour was actually lost. That is a different filter from loudness. The loudest customer is often the least specific, and a roadmap can lose a quarter to whoever complains most fluently. I look for the users who hurt most. Volume is a separate signal, and a weaker one.

The practical order: find the users with stakes, watch them use the thing, write down what broke, fix it this week, watch again. Each lap through that cycle sharpens the judgment you bring to the next decision. The laps are the training. There is no shortcut that skips them.

**中文：**

**真正该盯的那个数，是从"有一个想法"到"听见一个可信的人说它不对"之间隔了多久。** 把这个间隔压短，taste 才会复利，因为它把一次大赌拆成很多次小测试，而每次测试都带回一条可以照着改的修正。让这个间隔拉长，你得到的就是开头那两个月：一个自信的团队，一个连贯的产品，第一次真正的验证以 rollback 的形式到达。

最快的核对者，是一个有切身利害的客户，前提是你主动去找他。等他自己找上门的时候，就是开头那个故事的时间表了。在你有 eval 之前很久，你就可以坐到真正在用的人旁边，问他们哪里坏了。

他们的反馈之所以有用，是因为具体，而具体来自利害：一个人能说清是哪一步让他多花了一小时，是因为那一小时是真花掉的。这和"声音大"是两个筛子。喊得最响的客户往往是最不具体的那个，而一个 roadmap 可以被最会抱怨的人拿走一个季度。我找的是疼得最厉害的用户。嗓门是另一个信号，而且弱得多。

实践顺序：找到有利害关系的用户，看他们用，记下什么坏了，这周修掉，再看一遍。每跑一圈这个循环，你带进下一个决定的判断力就更强一分。这些圈就是训练。没有跳过它们的捷径。

---

## Risks and Tradeoffs
## 风险和代价

**English:**

Taste acts before the data arrives. That is its purpose and its danger. "This lacks taste" can mean "I outrank you." I have heard it used that way in real reviews. Any framework that gives someone permission to block work on the basis of judgment also gives them permission to block it on the basis of preference, and the two feel identical from inside. The failure-path test exists partly to guard against this: if you cannot write the objection as a path to failure, you do not have an objection, you have a preference.

Specific opinions can calcify. Holding a position long enough to test it is the point. Holding it after it has been tested and failed is bias. The difference is whether you wrote down what would change your mind before you had to face it. Without that, every confirming result strengthens the opinion and every disconfirming result gets explained away. The risk is real because the discipline of holding specific opinions rewards confidence, and confidence is hard to surrender.

Taste without measurement is expensive gatekeeping. This entire post argues that judgment matters more than it used to. It does not argue that judgment replaces eval. If you have no eval at all, go build it before you adopt anything from this post. The practical order matters: eval gives taste something to be wrong about. Without it, strong opinions just slow down the team and produce arguments instead of evidence. Taste and measurement are complementary. Taste without measurement is a person; measurement without taste is a dashboard nobody reads.

**中文：**

Taste 在数据到来之前行动。这是它的用处，也是它的危险。"这个没有 taste"可以是"我职级比你高"的另一种说法。我在真实的评审里听过有人这么用。任何允许一个人凭判断拦住工作的框架，也同时允许他凭偏好拦住工作，而这两者从内部体感上一模一样。失败路径测试的存在部分就是为了防这个：如果你写不出通向失败的路径，你手里不是反对意见，是偏好。

具体的观点可以僵化。持有一个立场足够久以便测试它，这是要点。但在它被测试并且失败之后仍然持有，那就是偏见。区别在于你有没有在面对结果之前就写下"什么会让我改变想法"。没有这一步，每一个正面结果都在加固信念，每一个反面结果都被解释掉。这个风险是真的，因为持有具体观点这件事本身奖励的是信心，而信心很难交出去。

没有测量的 taste 是昂贵的把关。这整篇文章在论证判断力比过去更重要。它没有论证判断力可以替代 eval。如果你现在连 eval 都没有，先去建它，别从这篇文章里拿任何东西来用。顺序很重要：eval 给 taste 提供一个可以犯错的对象。没有它，强观点只会拖慢团队，产出的是争论而不是证据。Taste 和测量是互补的。没有测量的 taste 是一个人的主张；没有 taste 的测量是一块没人看的 dashboard。

---

## Recap
## 收束

**English:**

Coherence used to mean someone thought it through. It no longer does. The bottleneck moved from execution to judgment, and judgment is what I call taste: the ability to say where something will break, in time to fix it cheaply.

Taste produces specific failure paths, not feelings. It is trained by holding opinions specific enough to be broken, borrowing questions instead of conclusions, building the full loop before calling the thing done, and compressing the gap between a decision and its first real check.

Most lost time is not spent working slowly. It is spent working hard on the wrong thing. Taste is what shortens that list. And the good news is that none of this requires talent. It requires reps.

**中文：**

连贯曾经意味着有人想清楚了。现在不再是。瓶颈从执行移到了判断，而判断就是我说的 taste：在还来得及低成本修复的时候，说出一个东西会从哪里坏。

Taste 产出的是具体的失败路径，不是感觉。练它的方式是：持有具体到可以被打碎的观点，借问题而不是借结论，在宣布做完之前把完整回路建起来，把一个决定和它的第一次真实核对之间的距离压到最短。

大部分被浪费的时间，不是因为干得慢，是因为在错的东西上干得很卖力。Taste 的作用，是让这份清单变短。而好消息是，这一切不需要天赋。需要的是重复。
