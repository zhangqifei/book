(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{355:function(e,r,t){"use strict";t.r(r);var a=t(43),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"程序员基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序员基础知识"}},[e._v("#")]),e._v(" 程序员基础知识")]),e._v(" "),t("p",[e._v("想要成为一个合格的程序员，扎实的基础是必不可少的。")]),e._v(" "),t("p",[e._v("想要成为一个优秀的程序员，对计算机的发展需要有深入浅出的了解。")]),e._v(" "),t("p",[e._v("那么不如我们说说其中某些方面的前世今生。")]),e._v(" "),t("h2",{attrs:{id:"字符编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符编码"}},[e._v("#")]),e._v(" 字符编码")]),e._v(" "),t("p",[e._v("为什么要先说说字符，因为计算机只认识0和1。所以字符的重要性不言而喻。")]),e._v(" "),t("h4",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://blog.jobbole.com/76376/",target:"_blank",rel:"noopener noreferrer"}},[e._v("字符编码常识及问题解析"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://xuelangzf.github.io/08-28-2014/character_encoding.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("人机交互之字符编码"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://blog.jobbole.com/86813/",target:"_blank",rel:"noopener noreferrer"}},[e._v("字符集和字符编码（Charset&Encoding）"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"技术名词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术名词"}},[e._v("#")]),e._v(" 技术名词")]),e._v(" "),t("p",[e._v("技术上有很多的名词，有的是缩写，有的是创新的东西。了解他们，正确的说出来，会让别人觉得你很专业。")]),e._v(" "),t("h4",{attrs:{id:"参考资料-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-2"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.zhihu.com/question/19739907",target:"_blank",rel:"noopener noreferrer"}},[e._v("IT 圈里有哪些经常被读错的词?"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.v2ex.com/t/131094#reply72",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于那些开发语言中的常用名词，大家读的都正确吗？"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"语义化版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语义化版本"}},[e._v("#")]),e._v(" 语义化版本")]),e._v(" "),t("h4",{attrs:{id:"摘要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[e._v("#")]),e._v(" 摘要")]),e._v(" "),t("p",[e._v("版本格式：主版本号.次版本号.修订号，版本号递增规则如下：")]),e._v(" "),t("ul",[t("li",[e._v("主版本号：当你做了不兼容的API 修改。")]),e._v(" "),t("li",[e._v("次版本号：当你做了向下兼容的功能性新增。")]),e._v(" "),t("li",[e._v("修订号：当你做了向下兼容的问题修正。")])]),e._v(" "),t("p",[e._v("先行版本号及版本编译信息可以加到“主版本号.次版本号.修订号”的后面，作为延伸。")]),e._v(" "),t("h4",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),t("p",[e._v("在软件管理的领域里存在着被称作“依赖地狱”的死亡之谷，系统规模越大，加入的套件越多，你就越有可能在未来的某一天发现自己已深陷绝望之中。")]),e._v(" "),t("p",[e._v("在依赖高的系统中发布新版本套件可能很快会成为恶梦。如果依赖关系过高，可能面临版本控制被锁死的风险（必须对每一个相依套件改版才能完成某次升级）。而如果依赖关系过于松散，又将无法避免版本的混乱（假设兼容于未来的多个版本已超出了合理数量）。当你专案的进展因为版本相依被锁死或版本混乱变得不够简便和可靠，就意味着你正处于依赖地狱之中。")]),e._v(" "),t("p",[e._v("作为这个问题的解决方案之一，我提议用一组简单的规则及条件来约束版本号的配置和增长。这些规则是根据（但不局限于）已经被各种封闭、开放源码软件所广泛使用的惯例所设计。为了让这套理论运作，你必须先有定义好的公共API。这可以透过文件定义或代码强制要求来实现。无论如何，这套API 的清楚明了是十分重要的。一旦你定义了公共API，你就可以透过修改相应的版本号来向大家说明你的修改。考虑使用这样的版本号格式：XYZ （主版本号.次版本号.修订号）修复问题但不影响API 时，递增修订号；API 保持向下兼容的新增及修改时，递增次版本号；进行不向下兼容的修改时，递增主版本号。")]),e._v(" "),t("p",[e._v("我称这套系统为“语义化的版本控制”，在这套约定下，版本号及其更新方式包含了相邻版本间的底层代码和修改内容的信息。")]),e._v(" "),t("h4",{attrs:{id:"语义化版本控制规范（semver）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语义化版本控制规范（semver）"}},[e._v("#")]),e._v(" 语义化版本控制规范（SemVer）")]),e._v(" "),t("p",[e._v("以下关键词MUST、MUST NOT、REQUIRED、SHALL、SHALL NOT、SHOULD、SHOULD NOT、 RECOMMENDED、MAY、OPTIONAL 依照RFC 2119 的叙述解读。（译注：为了保持语句顺畅， 以下文件遇到的关键词将依照整句语义进行翻译，在此先不进行个别翻译。）")]),e._v(" "),t("ol",[t("li",[e._v("使用语义化版本控制的软件“必须MUST”定义公共API。该API可以在代码中被定义或出现于严谨的文件内。无论何种形式都应该力求精确且完整。")]),e._v(" "),t("li",[e._v("标准的版本号“必须MUST”采用XYZ的格式，​​ 其中X、Y和Z为非负的整数，且“禁止MUST NOT”在数字前方补零。X是主版本号、Y是次版本号、而Z为修订号。每个元素“必须MUST”以数值来递增。例如：1.9.1 -> 1.10.0 -> 1.11.0。")]),e._v(" "),t("li",[e._v("标记版本号的软件发行后，“禁止MUST NOT”改变该版本软件的内容。任何修改都“必须MUST”以新版本发行。")]),e._v(" "),t("li",[e._v("主版本号为零（0.yz）的软件处于开发初始阶段，一切都可能随时被改变。这样的公共API 不应该被视为稳定版。")]),e._v(" "),t("li",[e._v("1.0.0 的版本号用于界定公共API 的形成。这一版本之后所有的版本号更新都基于公共API 及其修改内容。")]),e._v(" "),t("li",[e._v("修订号Z（xyZ | x > 0）“必须MUST”在只做了向下兼容的修正时才递增。这里的修正指的是针对不正确结果而进行的内部修改。")]),e._v(" "),t("li",[e._v("次版本号Y（xYz | x > 0）“必须MUST”在有向下兼容的新功能出现时递增。在任何公共API的功能被标记为弃用时也“必须MUST”递增。也“可以MAY”在内部程序有大量新功能或改进被加入时递增，其中“可以MAY”包括修订级别的改变。每当次版本号递增时，修订号“必须MUST”归零。")]),e._v(" "),t("li",[e._v("主版本号X（Xyz | X > 0）“必须MUST”在有任何不兼容的修改被加入公共API时递增。其中“可以MAY”包括次版本号及修订级别的改变。每当主版本号递增时，次版本号和修订号“必须MUST”归零。")]),e._v(" "),t("li",[e._v("先行版本号“可以MAY”被标注在修订版之后，先加上一个连接号再加上一连串以句点分隔的标识符号来修饰。标识符号“必须MUST”由ASCII码的英数字和连接号[0-9A-Za-z-]组成，且“禁止MUST NOT”留白。数字型的标识符号“禁止MUST NOT”在前方补零。先行版的优先级低于相关联的标准版本。被标上先行版本号则表示这个版本并非稳定而且可能无法达到兼容的需求。范例：1.0​​.0-alpha、1.0.0-alpha.1、 1.0.0-0.3.7、1.0.0-x.7.z.92。")]),e._v(" "),t("li",[e._v("版本编译信息“可以MAY”被标注在修订版或先行版本号之后，先加上一个加号再加上一连串以句点分隔的标识符号来修饰。标识符号“必须MUST”由ASCII的英数字和连接号[0-9A-Za-z-]组成，且“禁止MUST NOT”留白。当判断版本的优先层级时，版本编译信息“可SHOULD”被忽略。因此当两个版本只有在版本编译信息有差别时，属于相同的优先层级。范例：1.0.0-alpha+001、1.0.0+20130313144700、 1.0.0-beta+exp.sha.5114f85。")]),e._v(" "),t("li",[e._v("版本的优先层级指的是不同版本在排序时如何比较。判断优先层级时，“必须MUST”把版本依序拆分为主版本号、次版本号、修订号及先行版本号后进行比较（版本编译信息不在这份比较的列表中）。由左到右依序比较每个标识符号，第一个差异值用来决定优先层级：主版本号、次版本号及修订号以数值比较，例如1.0.0 < 2.0.0 < 2.1.0 < 2.1.1。当主版本号、次版本号及修订号都相同时，改以优先层级比较低的先行版本号决定。例如：1.0.0-alpha < 1.0.0。有相同主版本号、次版本号及修订号的两个先行版本号，其优先层级“必须MUST”透过由左到右的每个被句点分隔的标识符号来比较，直到找到一个差异值后决定：只有数字的标识符号以数值高低比较，有字母或连接号时则逐字以ASCII的排序来比较。数字的标识符号比非数字的标识符号优先层级低。若开头的标识符号都相同时，栏 ​​位比较多的先行版本号优先层级比较高。范例：1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0- rc.1 < 1.0.0。")])]),e._v(" "),t("h4",{attrs:{id:"为什么要使用语义化的版本控制？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用语义化的版本控制？"}},[e._v("#")]),e._v(" 为什么要使用语义化的版本控制？")]),e._v(" "),t("p",[e._v("这并不是一个新的或者革命性的想法。实际上，你可能已经在做一些近似的事情了。问题在于只是“近似”还不够。如果没有某个正式的规范可循，版本号对于依赖的管理并无实质意义。将上述的想法命名并给予清楚的定义，让你对软件使用者传达意向变得容易。一旦这些意向变得清楚，弹性（但又不会太弹性）的依赖规范就能达成。")]),e._v(" "),t("p",[e._v("举个简单的例子就可以展示语义化的版本控制如何让依赖地狱成为过去。假设有个名为“救火车”的函式库，它需要另一个名为“梯子”并已经有使用语义化版本控制的套件。当救火车创建时，梯子的版本号为3.1.0。因为救火车使用了一些版本3.1.0 所新增的功能， 你可以放心地指定相依于梯子的版本号大等于3.1.0 但小于4.0.0。这样，当梯子版本3.1.1 和3.2.0 发布时，你可以将直接它们纳入你的套件管理系统，因为它们能与原有相依的软件兼容。")]),e._v(" "),t("p",[e._v("作为一位负责任的开发者，你理当确保每次套件升级的运作与版本号的表述一致。现实世界是复杂的，我们除了提高警觉外能做的不多。你所能做的就是让语义化的版本控制为你提供一个健全的方式来发行以及升级套件，而无需推出新的相依套件，节省你的时间及烦恼。")]),e._v(" "),t("p",[e._v("如果你对此认同，希望立即开始使用语义化版本控制，你只需声明你的函式库正在使用它并遵循这些规则就可以了。请在你的README 文件中保留此页连结，让别人也知道这些规则并从中受益。")]),e._v(" "),t("h4",{attrs:{id:"参考资料-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-3"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Versioning 2.0.0"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[e._v("#")]),e._v(" 命名规范")]),e._v(" "),t("p",[e._v("说到命名规范，个人认为包含了目录，文件以及变量的命名。提前先说一句，命名规则没有谁对谁错，在项目中保持一致才是关键。")]),e._v(" "),t("p",[e._v("混乱或错误的命名不仅让我们对代码难以理解，更糟糕的是，会误导我们的思维，导致对代码的理解完全错误。相反，良好的命名，则可以让我们的代码非常容易读懂，也能向读者正确表达事物以及逻辑的本质，从而使得代码的可维护性就大大增强，读命名好的文章是非常流畅的，会有一种享受的感觉。")]),e._v(" "),t("h4",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[e._v("#")]),e._v(" 目录")]),e._v(" "),t("p",[e._v("由于Windows, OSX下文件名不区分大小写(linux是区分的)，所以命名我们建议还是以全部小写为主，个人习惯连字符使用"),t("code",[e._v("-")]),e._v("中划线。比如: "),t("code",[e._v("my-project-name")])]),e._v(" "),t("p",[e._v("项目中的子目录一般按照作用，使用常用单词表示，有复数的情况，使用复数命名法，比如: "),t("code",[e._v("scripts")]),e._v(", "),t("code",[e._v("styles")]),e._v(", "),t("code",[e._v("images")]),e._v("和"),t("code",[e._v("data-modules")])]),e._v(" "),t("h4",{attrs:{id:"文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[e._v("#")]),e._v(" 文件")]),e._v(" "),t("p",[e._v("文件的命名我个人也是推荐使用"),t("code",[e._v("-")]),e._v("中划线进行连接。和目录的连接字符保持一致。但是linux系统文件推荐的文件命名一般是下划线。")]),e._v(" "),t("h4",{attrs:{id:"变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[e._v("#")]),e._v(" 变量")]),e._v(" "),t("p",[e._v("变量命名有两种方式:")]),e._v(" "),t("ul",[t("li",[e._v("下划线命名法: "),t("code",[e._v("my_variable")])]),e._v(" "),t("li",[e._v("驼峰式命名法: "),t("code",[e._v("myVariale")])])]),e._v(" "),t("p",[e._v("当然不同语言也是有不同的规范，网上也有很多大公司的命名规范可以参考。")]),e._v(" "),t("h4",{attrs:{id:"javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[e._v("#")]),e._v(" JavaScript")]),e._v(" "),t("p",[e._v("变量推荐驼峰式命名法")]),e._v(" "),t("h4",{attrs:{id:"css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[e._v("#")]),e._v(" CSS")]),e._v(" "),t("p",[e._v("推荐使用中划线进行连接，CSS 语法本身就使用连字号作为连接（比如 "),t("code",[e._v("font-family")]),e._v("，"),t("code",[e._v("text-align")]),e._v("等）。")]),e._v(" "),t("h4",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("良好的命名，以及良好的命名习惯，由于我们总是对每个概念的名称要求非常苛刻，我们会思考这个名称所表达的概念是否正确，该名称是否正确表达了事物的本质或正确反映了某个行为的逻辑。所以，这种对命名的良好思考习惯，可以反过来帮助我们纠正之前的一些错误设计和代码实现；比如，你之前有一个地方可能命名不太准确，然后你发现后面有另一个地方需要用这个名字，且更合理。所以你会发现这个名字对前面的地方就不适合了，从而你会去思考前面的地方可能需要用其他的名字，或者你会发现前面的地方的设计根本就是有问题的。这种就是名字可以促使你思考你的设计是否正确的例子。")]),e._v(" "),t("h4",{attrs:{id:"参考资料-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-4"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://blog.jobbole.com/77051/",target:"_blank",rel:"noopener noreferrer"}},[e._v("对代码命名的一点思考和理解"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://xu020408.blog.163.com/blog/static/26548920097209315756/",target:"_blank",rel:"noopener noreferrer"}},[e._v("linux 文件名命名规则"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"书写文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#书写文档"}},[e._v("#")]),e._v(" 书写文档")]),e._v(" "),t("p",[e._v("一个程序员，最基本的是需要写代码，代码之中其实就包含了注释。如果是一个系统或者库文件，其实还需要书写文档以配合。本文就交大家如何书写文档。")]),e._v(" "),t("h4",{attrs:{id:"github如何管理文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github如何管理文档"}},[e._v("#")]),e._v(" github如何管理文档")]),e._v(" "),t("p",[e._v("讨论一下我们如何使用 "),t("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Page"),t("OutboundLink")],1),e._v(" 服务运行 "),t("a",{attrs:{href:"https://help.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github 帮助文档"),t("OutboundLink")],1),e._v(" （目前每月有上百万的访问量）的。")]),e._v(" "),t("h4",{attrs:{id:"以前的流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以前的流程"}},[e._v("#")]),e._v(" 以前的流程")]),e._v(" "),t("ul",[t("li",[e._v("用于托管维护网站、管理网站所用资源和文档搜索增强的 Rails 应用程序")]),e._v(" "),t("li",[e._v("用户托管由一大堆 Markdown 文件组成的网站具体内容")])]),e._v(" "),t("p",[e._v("我们正常的撰写流程可能是这个样子的:")]),e._v(" "),t("ul",[t("li",[e._v("当有新特征开发出来的时候文档团队首先编写好文档内容")]),e._v(" "),t("li",[e._v("创建一个新的 issue 去追踪这个特征")]),e._v(" "),t("li",[e._v("当文档更新完毕一切就绪之后，我们会发起一个 pull request 去迭代更新文档内容。")]),e._v(" "),t("li",[e._v("PR 发起成功后，我们会使用 @ 方式提醒团队（比如 @github/docs ）并会让队友们审查一下我们的内容。")]),e._v(" "),t("li",[e._v("当这个特征开发完毕已经上线的时候，我们会合并之前创建的 PR。 使用 webhook 能够帮助我们在 内容仓库 快速激活我们部署的 Rails应用程序。webhook 承担了负责更新数据库的任务。")])]),e._v(" "),t("h4",{attrs:{id:"新的流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新的流程"}},[e._v("#")]),e._v(" 新的流程")]),e._v(" "),t("p",[e._v("当 Jekyll 2.0 发布的时候，我们看到了曙光，是时候该把我们这套该死的流程换成纯静态站了！特别是新增加的 Collections 文档类型能让你定义你需要的文件结构。另外，Jekyll 2.0 还增加了 Sass 和 CoffeeScript 的支持，这将使得编写前端代码变的更为简单便捷。")]),e._v(" "),t("h4",{attrs:{id:"参考资料-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-5"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://segmentfault.com/blog/openwrt/1190000002473246",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github 是如何用 Github 撰写 Github 文档的"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://examplecode.github.io/tools/2014/09/26/install-gollum-in-mac-109/",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown + git 最适合程序员的wiki系统"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/gollum/gollum",target:"_blank",rel:"noopener noreferrer"}},[e._v("gollum"),t("OutboundLink")],1),e._v(": github的文档系统。")])]),e._v(" "),t("h2",{attrs:{id:"开源协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开源协议"}},[e._v("#")]),e._v(" 开源协议")]),e._v(" "),t("h4",{attrs:{id:"参考资料-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-6"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://choosealicense.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("choosealicense"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[e._v("#")]),e._v(" 目录结构")]),e._v(" "),t("p",[e._v("不管大型还是小型项目，清晰的目录结构是开发过程的好的开始。以我常用的web项目为例，搭建一下目录结构.")]),e._v(" "),t("h4",{attrs:{id:"总览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总览"}},[e._v("#")]),e._v(" 总览")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("├── src\n│   ├── js\n│   │   ├── main.js\n│   │   ├── plugins.js\n│   │   └── vendor\n│   │       └── modernizr-2.8.3.min.js\n│   ├── css\n│   │   └── main.css\n│   ├── img\n│   ├── favicon.ico\n│   ├── humans.txt\n│   ├── index.html\n│   ├── "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("404")]),e._v(".html\n│   ├── apple-touch-icon.png\n│   ├── browserconfig.xml\n│   ├── crossdomain.xml\n│   ├── robots.txt\n│   ├── tile-wide.png\n│   └── tile.png\n├── "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n│   ├── file_content.js\n│   └── file_existence.js\n├── dist\n│   ├── "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("404")]),e._v(".html\n│   ├── LICENSE.txt\n│   ├── apple-touch-icon.png\n│   ├── browserconfig.xml\n│   ├── crossdomain.xml\n│   ├── css\n│   │   ├── main.css\n│   │   └── normalize.css\n│   ├── favicon.ico\n│   ├── humans.txt\n│   ├── img\n│   ├── index.html\n│   ├── js\n│   │   ├── main.js\n│   │   ├── plugins.js\n│   │   └── vendor\n│   │       ├── jquery-1.11.2.min.js\n│   │       └── modernizr-2.8.3.min.js\n│   ├── robots.txt\n│   ├── tile-wide.png\n│   └── tile.png\n├── CHANGELOG.md\n├── CONTRIBUTING.md\n├── LICENSE.txt\n├── README.md\n├── gulpfile.js\n├── package.json\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br"),t("span",{staticClass:"line-number"},[e._v("45")]),t("br"),t("span",{staticClass:"line-number"},[e._v("46")]),t("br"),t("span",{staticClass:"line-number"},[e._v("47")]),t("br"),t("span",{staticClass:"line-number"},[e._v("48")]),t("br"),t("span",{staticClass:"line-number"},[e._v("49")]),t("br"),t("span",{staticClass:"line-number"},[e._v("50")]),t("br")])]),t("p",[e._v("目录结构清晰是首要目标，至于命名只要能达到表意的目的即可。")]),e._v(" "),t("h4",{attrs:{id:"src"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#src"}},[e._v("#")]),e._v(" src")]),e._v(" "),t("p",[e._v("此目录专注于开发，存放的都是源文件，不需要压缩合并。目录下主要分为：")]),e._v(" "),t("ul",[t("li",[e._v("css(styles): 样式文件")]),e._v(" "),t("li",[e._v("js(scripts): 脚本文件")]),e._v(" "),t("li",[e._v("img(images): 图片素材")]),e._v(" "),t("li",[e._v("font(fonts): 存放字体")]),e._v(" "),t("li",[e._v("其他: 按照分类不同划分目录")])]),e._v(" "),t("p",[e._v("文件名上面，简写的话都使用单数形式，全称的话使用复数形式。")]),e._v(" "),t("h4",{attrs:{id:"dist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dist"}},[e._v("#")]),e._v(" dist")]),e._v(" "),t("p",[e._v("此目录为编译生成目录，用于部署环境，目录结构和src保持一致。")]),e._v(" "),t("h4",{attrs:{id:"test"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[e._v("#")]),e._v(" test")]),e._v(" "),t("p",[e._v("此目录为测试目录，存放和项目测试相关的文件。")]),e._v(" "),t("h4",{attrs:{id:"doc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doc"}},[e._v("#")]),e._v(" doc")]),e._v(" "),t("p",[e._v("如果存在文档说明，放置在此目录下。")]),e._v(" "),t("h4",{attrs:{id:"其他根目录文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他根目录文件"}},[e._v("#")]),e._v(" 其他根目录文件")]),e._v(" "),t("p",[e._v("根目录下的其他文件，一般还有:")]),e._v(" "),t("ul",[t("li",[e._v(".editorconfig: 代码样式统一格式文件")]),e._v(" "),t("li",[e._v(".jscsrc:")]),e._v(" "),t("li",[e._v(".travis.yml:")]),e._v(" "),t("li",[e._v(".jshintrc: jshint配置文件")]),e._v(" "),t("li",[e._v("csscomb.json: csscomb配置文件")]),e._v(" "),t("li",[e._v(".gitignore: git忽略文件")]),e._v(" "),t("li",[e._v(".gitattributes: git属性文件")]),e._v(" "),t("li",[e._v(".bowerrc")]),e._v(" "),t("li",[e._v("bower.json")]),e._v(" "),t("li",[e._v("package.json")]),e._v(" "),t("li",[e._v("gruntfile.js/gulpfile.js")])]),e._v(" "),t("h4",{attrs:{id:"参考资料-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-7"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ecomfe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Baidu EFE team"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ecomfe/spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("Baidu EFE team: spec"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/h5bp/html5-boilerplate",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML5-boilerplate"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"正则表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[e._v("#")]),e._v(" 正则表达式")]),e._v(" "),t("p",[e._v("正则表达式，乍一看以为是很高升的东西，但是对于程序员而言，它真的应该算是一个基础知识。我们在很多场合下都需要使用到它，这个技术又是一个比较通用的东西，所以对于程序员而言，是大有益处的。")]),e._v(" "),t("h4",{attrs:{id:"参考资料-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-8"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://zh.wikipedia.org/wiki/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("维基百科：正则表达式"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FRegular_Expressions",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN: Regular Expressions"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://stackoverflow.com/tags/regex/info",target:"_blank",rel:"noopener noreferrer"}},[e._v("stackoverflow: regular expression info"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://news.ycombinator.com/item?id=7370622",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hacker News: Learn regular expressions in about 55 minutes"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://deerchao.net/tutorials/regex/regex.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("正则表达式30分钟入门"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://qntm.org/files/re/re.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn regular expressions in about 55 minutes"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://regexone.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("regex one"),t("OutboundLink")],1),e._v(": 学习资料")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://mengzhuo.org/regex/",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线验证工具，中文版"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://regex101.com/#javascript",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regex 101: 在线验证学习"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://regexper.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regexper"),t("OutboundLink")],1),e._v(": 可视化正则表达式")]),e._v(" "),t("li",[t("a",{attrs:{href:"http://callumacrae.github.io/regex-tuesday/",target:"_blank",rel:"noopener noreferrer"}},[e._v("regex-tuesday"),t("OutboundLink")],1),e._v(": some challenges")]),e._v(" "),t("li",[t("a",{attrs:{href:"http://regexcrossword.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regex Cross­word"),t("OutboundLink")],1),e._v(": play to learn Regex")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.debuggex.com/cheatsheet/regex/javascript",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript Regular Expression Cheatsheet"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"平凡之路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#平凡之路"}},[e._v("#")]),e._v(" 平凡之路")]),e._v(" "),t("p",[e._v("名字起得文艺了一点，主要是想表达程序员的职业提升之路。")]),e._v(" "),t("h4",{attrs:{id:"参考资料-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-9"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://blog.jobbole.com/85407/",target:"_blank",rel:"noopener noreferrer"}},[e._v("学编程为什么这么难？每个新手绝对要知道的那些事"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://coolshell.cn/articles/4990.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("程序员技术练级攻略"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MjM5MzA0OTkwMA==&mid=205931990&idx=1&sn=3ead81a009b76e377accc596cbac6422#rd",target:"_blank",rel:"noopener noreferrer"}},[e._v("非编程天才参与开源项目的14种方式"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://mooc.guokr.com/post/610231/",target:"_blank",rel:"noopener noreferrer"}},[e._v("【搬运】谷歌公司推荐的程序员必修课"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://study.163.com/curricula/cs.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("网易云课堂:最全面、权威的计算机专业体系"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzA5NzkxMzkwNQ==&mid=207560003&idx=1&sn=fc5de35e7b8b79225dc3c7579706ee67#rd",target:"_blank",rel:"noopener noreferrer"}},[e._v("专访Livid：不仅仅是V站站长"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MjM5OTA1MDUyMA==&mid=205814832&idx=1&sn=8165f79eeab634b88baa8d717b79f1bc#rd",target:"_blank",rel:"noopener noreferrer"}},[e._v("程序员高手和菜鸟的区别是什么？"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MjM5MzA0OTkwMA==&mid=208006388&idx=2&sn=eb5ad9b8afd4c6bfadea76889c131304#rd",target:"_blank",rel:"noopener noreferrer"}},[e._v("林建：计算机专业学习浅谈"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=s.exports}}]);