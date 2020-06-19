(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{406:function(_,v,t){"use strict";t.r(v);var n=t(43),o=Object(n.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"类属性和类方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类属性和类方法"}},[_._v("#")]),_._v(" 类属性和类方法")]),_._v(" "),t("h2",[_._v("目标")]),_._v(" "),t("ul",[t("li",[_._v("类的结构")]),_._v(" "),t("li",[_._v("类属性和实例属性")]),_._v(" "),t("li",[_._v("类方法和静态方法")])]),_._v(" "),t("h2",{attrs:{id:"toc_2"}},[_._v("01. 类的结构")]),_._v(" "),t("h3",{attrs:{id:"toc_3"}},[_._v("1.1 术语 —— 实例")]),_._v(" "),t("ol",[t("li",[_._v("使用面相对象开发，"),t("strong",[_._v("第 1 步")]),_._v(" 是设计 "),t("strong",[_._v("类")])]),_._v(" "),t("li",[_._v("使用 "),t("strong",[_._v("类名()")]),_._v(" 创建对象，"),t("strong",[_._v("创建对象")]),_._v(" 的动作有两步：\n"),t("ul",[t("li",[_._v("1) 在内存中为对象 "),t("strong",[_._v("分配空间")])]),_._v(" "),t("li",[_._v("2) 调用初始化方法 "),t("code",[_._v("__init__")]),_._v(" 为 "),t("strong",[_._v("对象初始化")])])])]),_._v(" "),t("li",[_._v("对象创建后，"),t("strong",[_._v("内存")]),_._v(" 中就有了一个对象的 "),t("strong",[_._v("实实在在")]),_._v(" 的存在 —— "),t("strong",[_._v("实例")])])]),_._v(" "),t("p",[t("img",{staticStyle:{width:"473px"},attrs:{src:"media/15016413127744/017_%E7%B1%BB%E7%9A%84%E7%BB%93%E6%9E%84%E7%A4%BA%E6%84%8F%E5%9B%BEI.png",alt:"017_类的结构示意图I"}}),_._v("￼")]),_._v(" "),t("p",[_._v("因此，通常也会把：")]),_._v(" "),t("ol",[t("li",[_._v("创建出来的 "),t("strong",[_._v("对象")]),_._v(" 叫做 "),t("strong",[_._v("类")]),_._v(" 的 "),t("strong",[_._v("实例")])]),_._v(" "),t("li",[_._v("创建对象的 "),t("strong",[_._v("动作")]),_._v(" 叫做 "),t("strong",[_._v("实例化")])]),_._v(" "),t("li",[t("strong",[_._v("对象的属性")]),_._v(" 叫做 "),t("strong",[_._v("实例属性")])]),_._v(" "),t("li",[t("strong",[_._v("对象调用的方法")]),_._v(" 叫做 "),t("strong",[_._v("实例方法")])])]),_._v(" "),t("p",[_._v("在程序执行时：")]),_._v(" "),t("ol",[t("li",[_._v("对象各自拥有自己的 "),t("strong",[_._v("实例属性")])]),_._v(" "),t("li",[_._v("调用对象方法，可以通过 "),t("code",[_._v("self.")]),_._v(" "),t("ul",[t("li",[_._v("访问自己的属性")]),_._v(" "),t("li",[_._v("调用自己的方法")])])])]),_._v(" "),t("p",[t("strong",[_._v("结论")])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("每一个对象")]),_._v(" 都有自己 "),t("strong",[_._v("独立的内存空间")]),_._v("，"),t("strong",[_._v("保存各自不同的属性")])]),_._v(" "),t("li",[t("strong",[_._v("多个对象的方法")]),_._v("，"),t("strong",[_._v("在内存中只有一份")]),_._v("，在调用方法时，"),t("strong",[_._v("需要把对象的引用")]),_._v(" 传递到方法内部")])]),_._v(" "),t("h3",{attrs:{id:"toc_4"}},[_._v("1.2 类是一个特殊的对象")]),_._v(" "),t("blockquote",[t("p",[t("code",[_._v("Python")]),_._v(" 中 "),t("strong",[_._v("一切皆对象")]),_._v("：")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("class AAA:")]),_._v(" 定义的类属于 "),t("strong",[_._v("类对象")])]),_._v(" "),t("li",[t("code",[_._v("obj1 = AAA()")]),_._v(" 属于 "),t("strong",[_._v("实例对象")])])])]),_._v(" "),t("ul",[t("li",[_._v("在程序运行时，"),t("strong",[_._v("类")]),_._v(" 同样 "),t("strong",[_._v("会被加载到内存")])]),_._v(" "),t("li",[_._v("在 "),t("code",[_._v("Python")]),_._v(" 中，"),t("strong",[_._v("类")]),_._v(" 是一个特殊的对象 —— "),t("strong",[_._v("类对象")])]),_._v(" "),t("li",[_._v("在程序运行时，"),t("strong",[_._v("类对象")]),_._v(" 在内存中 "),t("strong",[_._v("只有一份")]),_._v("，使用 "),t("strong",[_._v("一个类")]),_._v(" 可以创建出 "),t("strong",[_._v("很多个对象实例")])]),_._v(" "),t("li",[_._v("除了封装 "),t("strong",[_._v("实例")]),_._v(" 的 "),t("strong",[_._v("属性")]),_._v(" 和 "),t("strong",[_._v("方法")]),_._v("外，"),t("strong",[_._v("类对象")]),_._v(" 还可以拥有自己的 "),t("strong",[_._v("属性")]),_._v(" 和 "),t("strong",[_._v("方法")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("类属性")])]),_._v(" "),t("li",[t("strong",[_._v("类方法")])])])]),_._v(" "),t("li",[_._v("通过 "),t("strong",[_._v("类名.")]),_._v(" 的方式可以 "),t("strong",[_._v("访问类的属性")]),_._v(" 或者 "),t("strong",[_._v("调用类的方法")])])]),_._v(" "),t("p",[t("img",{staticStyle:{width:"545px"},attrs:{src:"media/15016413127744/017_%E7%B1%BB%E7%9A%84%E7%BB%93%E6%9E%84%E7%A4%BA%E6%84%8F%E5%9B%BEII.png",alt:"017_类的结构示意图II"}}),_._v("￼")]),_._v(" "),t("h2",{attrs:{id:"toc_5"}},[_._v("02. 类属性和实例属性")]),_._v(" "),t("h3",{attrs:{id:"toc_6"}},[_._v("2.1 概念和使用")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("类属性")]),_._v(" 就是给 "),t("strong",[_._v("类对象")]),_._v(" 中定义的 "),t("strong",[_._v("属性")])]),_._v(" "),t("li",[_._v("通常用来记录 "),t("strong",[_._v("与这个类相关")]),_._v(" 的特征")]),_._v(" "),t("li",[t("strong",[_._v("类属性")]),_._v(" "),t("strong",[_._v("不会用于")]),_._v("记录 "),t("strong",[_._v("具体对象的特征")])])]),_._v(" "),t("p",[t("strong",[_._v("示例需求")])]),_._v(" "),t("ul",[t("li",[_._v("定义一个 "),t("strong",[_._v("工具类")])]),_._v(" "),t("li",[_._v("每件工具都有自己的 "),t("code",[_._v("name")])]),_._v(" "),t("li",[t("strong",[_._v("需求")]),_._v(" —— 知道使用这个类，创建了多少个工具对象？")])]),_._v(" "),t("p",[t("img",{staticStyle:{width:"263px"},attrs:{src:"media/15016413127744/018_%E7%B1%BB%E5%B1%9E%E6%80%A7%E6%A1%88%E4%BE%8BI.png",alt:"018_类属性案例I"}}),_._v("￼")]),_._v(" "),t("pre",[t("code",{staticClass:"language-python"},[_._v('class Tool(object):\n\n    # 使用赋值语句，定义类属性，记录创建工具对象的总数\n    count = 0\n\n    def __init__(self, name):\n        self.name = name\n\n        # 针对类属性做一个计数+1\n        Tool.count += 1\n\n\n# 创建工具对象\ntool1 = Tool("斧头")\ntool2 = Tool("榔头")\ntool3 = Tool("铁锹")\n\n# 知道使用 Tool 类到底创建了多少个对象?\nprint("现在创建了 %d 个工具" % Tool.count)\n\n')])]),_._v(" "),t("h3",{attrs:{id:"toc_7"}},[_._v("2.2 属性的获取机制（科普）")]),_._v(" "),t("ul",[t("li",[_._v("在 "),t("code",[_._v("Python")]),_._v(" 中 "),t("strong",[_._v("属性的获取")]),_._v(" 存在一个 "),t("strong",[_._v("向上查找机制")])])]),_._v(" "),t("p",[t("img",{staticStyle:{width:"779px"},attrs:{src:"media/15016413127744/019_%E9%80%9A%E8%BF%87%E5%AF%B9%E8%B1%A1%E8%AE%BF%E9%97%AE%E7%B1%BB%E5%B1%9E%E6%80%A7.png",alt:"019_通过对象访问类属性"}}),_._v("￼")]),_._v(" "),t("ul",[t("li",[_._v("因此，要访问类属性有两种方式：\n"),t("ol",[t("li",[t("strong",[_._v("类名.类属性")])]),_._v(" "),t("li",[t("strong",[_._v("对象.类属性")]),_._v(" （不推荐）")])])])]),_._v(" "),t("p",[t("strong",[_._v("注意")])]),_._v(" "),t("ul",[t("li",[_._v("如果使用 "),t("code",[_._v("对象.类属性 = 值")]),_._v(" 赋值语句，只会 "),t("strong",[_._v("给对象添加一个属性")]),_._v("，而不会影响到 "),t("strong",[_._v("类属性的值")])])]),_._v(" "),t("h2",{attrs:{id:"toc_8"}},[_._v("03. 类方法和静态方法")]),_._v(" "),t("h3",{attrs:{id:"toc_9"}},[_._v("3.1 类方法")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("类属性")]),_._v(" 就是针对 "),t("strong",[_._v("类对象")]),_._v(" 定义的属性\n"),t("ul",[t("li",[_._v("使用 "),t("strong",[_._v("赋值语句")]),_._v(" 在 "),t("code",[_._v("class")]),_._v(" 关键字下方可以定义 "),t("strong",[_._v("类属性")])]),_._v(" "),t("li",[t("strong",[_._v("类属性")]),_._v(" 用于记录 "),t("strong",[_._v("与这个类相关")]),_._v(" 的特征")])])]),_._v(" "),t("li",[t("strong",[_._v("类方法")]),_._v(" 就是针对 "),t("strong",[_._v("类对象")]),_._v(" 定义的方法\n"),t("ul",[t("li",[_._v("在 "),t("strong",[_._v("类方法")]),_._v(" 内部可以直接访问 "),t("strong",[_._v("类属性")]),_._v(" 或者调用其他的 "),t("strong",[_._v("类方法")])])])])]),_._v(" "),t("p",[t("strong",[_._v("语法如下")])]),_._v(" "),t("pre",[t("code",{staticClass:"language-python"},[_._v("@classmethod\ndef 类方法名(cls):\n    pass\n")])]),_._v(" "),t("ul",[t("li",[_._v("类方法需要用 "),t("strong",[_._v("修饰器")]),_._v(" "),t("code",[_._v("@classmethod")]),_._v(" 来标识，"),t("strong",[_._v("告诉解释器这是一个类方法")])]),_._v(" "),t("li",[_._v("类方法的 "),t("strong",[_._v("第一个参数")]),_._v(" 应该是 "),t("code",[_._v("cls")]),_._v(" "),t("ul",[t("li",[_._v("由 "),t("strong",[_._v("哪一个类")]),_._v(" 调用的方法，方法内的 "),t("code",[_._v("cls")]),_._v(" 就是 "),t("strong",[_._v("哪一个类的引用")])]),_._v(" "),t("li",[_._v("这个参数和 "),t("strong",[_._v("实例方法")]),_._v(" 的第一个参数是 "),t("code",[_._v("self")]),_._v(" 类似")]),_._v(" "),t("li",[t("strong",[_._v("提示")]),_._v(" 使用其他名称也可以，不过习惯使用 "),t("code",[_._v("cls")])])])]),_._v(" "),t("li",[_._v("通过 "),t("strong",[_._v("类名.")]),_._v(" 调用 "),t("strong",[_._v("类方法")]),_._v("，"),t("strong",[_._v("调用方法时")]),_._v("，不需要传递 "),t("code",[_._v("cls")]),_._v(" 参数")]),_._v(" "),t("li",[t("strong",[_._v("在方法内部")]),_._v(" "),t("ul",[t("li",[_._v("可以通过 "),t("code",[_._v("cls.")]),_._v(" "),t("strong",[_._v("访问类的属性")])]),_._v(" "),t("li",[_._v("也可以通过 "),t("code",[_._v("cls.")]),_._v(" "),t("strong",[_._v("调用其他的类方法")])])])])]),_._v(" "),t("p",[t("strong",[_._v("示例需求")])]),_._v(" "),t("ul",[t("li",[_._v("定义一个 "),t("strong",[_._v("工具类")])]),_._v(" "),t("li",[_._v("每件工具都有自己的 "),t("code",[_._v("name")])]),_._v(" "),t("li",[t("strong",[_._v("需求")]),_._v(" —— 在 "),t("strong",[_._v("类")]),_._v(" 封装一个 "),t("code",[_._v("show_tool_count")]),_._v(" 的类方法，输出使用当前这个类，创建的对象个数")])]),_._v(" "),t("p",[t("img",{staticStyle:{width:"263px"},attrs:{src:"media/15016413127744/020_%E7%B1%BB%E6%96%B9%E6%B3%95%E6%A1%88%E4%BE%8B.png",alt:"020_类方法案例"}}),_._v("￼")]),_._v(" "),t("pre",[t("code",{staticClass:"language-python"},[_._v('@classmethod\ndef show_tool_count(cls):\n    """显示工具对象的总数"""\n    print("工具对象的总数 %d" % cls.count)\n')])]),_._v(" "),t("blockquote",[t("p",[_._v("在类方法内部，可以直接使用 "),t("code",[_._v("cls")]),_._v(" 访问 "),t("strong",[_._v("类属性")]),_._v(" 或者 "),t("strong",[_._v("调用类方法")])])]),_._v(" "),t("h3",{attrs:{id:"toc_10"}},[_._v("3.2 静态方法")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("在开发时，如果需要在 "),t("strong",[_._v("类")]),_._v(" 中封装一个方法，这个方法：")]),_._v(" "),t("ul",[t("li",[_._v("既 "),t("strong",[_._v("不需要")]),_._v(" 访问 "),t("strong",[_._v("实例属性")]),_._v(" 或者调用 "),t("strong",[_._v("实例方法")])]),_._v(" "),t("li",[_._v("也 "),t("strong",[_._v("不需要")]),_._v(" 访问 "),t("strong",[_._v("类属性")]),_._v(" 或者调用 "),t("strong",[_._v("类方法")])])])]),_._v(" "),t("li",[t("p",[_._v("这个时候，可以把这个方法封装成一个 "),t("strong",[_._v("静态方法")])])])]),_._v(" "),t("p",[t("strong",[_._v("语法如下")])]),_._v(" "),t("pre",[t("code",{staticClass:"language-python"},[_._v("@staticmethod\ndef 静态方法名():\n    pass\n")])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("静态方法")]),_._v(" 需要用 "),t("strong",[_._v("修饰器")]),_._v(" "),t("code",[_._v("@staticmethod")]),_._v(" 来标识，"),t("strong",[_._v("告诉解释器这是一个静态方法")])]),_._v(" "),t("li",[_._v("通过 "),t("strong",[_._v("类名.")]),_._v(" 调用 "),t("strong",[_._v("静态方法")])])]),_._v(" "),t("pre",[t("code",{staticClass:"language-python"},[_._v('class Dog(object):\n    \n    # 狗对象计数\n    dog_count = 0\n    \n    @staticmethod\n    def run():\n        \n        # 不需要访问实例属性也不需要访问类属性的方法\n        print("狗在跑...")\n\n    def __init__(self, name):\n        self.name = name\n        \n')])]),_._v(" "),t("h3",{attrs:{id:"toc_11"}},[_._v("3.3 方法综合案例")]),_._v(" "),t("p",[t("strong",[_._v("需求")])]),_._v(" "),t("ol",[t("li",[_._v("设计一个 "),t("code",[_._v("Game")]),_._v(" 类")]),_._v(" "),t("li",[_._v("属性：\n"),t("ul",[t("li",[_._v("定义一个 "),t("strong",[_._v("类属性")]),_._v(" "),t("code",[_._v("top_score")]),_._v(" 记录游戏的 "),t("strong",[_._v("历史最高分")])]),_._v(" "),t("li",[_._v("定义一个 "),t("strong",[_._v("实例属性")]),_._v(" "),t("code",[_._v("player_name")]),_._v(" 记录 "),t("strong",[_._v("当前游戏的玩家姓名")])])])]),_._v(" "),t("li",[_._v("方法：\n"),t("ul",[t("li",[t("strong",[_._v("静态方法")]),_._v(" "),t("code",[_._v("show_help")]),_._v(" 显示游戏帮助信息")]),_._v(" "),t("li",[t("strong",[_._v("类方法")]),_._v(" "),t("code",[_._v("show_top_score")]),_._v(" 显示历史最高分")]),_._v(" "),t("li",[t("strong",[_._v("实例方法")]),_._v(" "),t("code",[_._v("start_game")]),_._v(" 开始当前玩家的游戏")])])]),_._v(" "),t("li",[_._v("主程序步骤\n"),t("ul",[t("li",[_._v("1) 查看帮助信息")]),_._v(" "),t("li",[_._v("2) 查看历史最高分")]),_._v(" "),t("li",[_._v("3) 创建游戏对象，开始游戏")])])])]),_._v(" "),t("p",[t("img",{staticStyle:{width:"351px"},attrs:{src:"media/15016413127744/021_%E6%96%B9%E6%B3%95%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B.png",alt:"021_方法综合案例"}}),_._v("￼")]),_._v(" "),t("h4",{attrs:{id:"toc_12"}},[_._v("案例小结")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("实例方法")]),_._v(" —— 方法内部需要访问 "),t("strong",[_._v("实例属性")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("实例方法")]),_._v(" 内部可以使用 "),t("strong",[_._v("类名.")]),_._v(" 访问类属性")])])]),_._v(" "),t("li",[t("strong",[_._v("类方法")]),_._v(" —— 方法内部 "),t("strong",[_._v("只")]),_._v(" 需要访问 "),t("strong",[_._v("类属性")])]),_._v(" "),t("li",[t("strong",[_._v("静态方法")]),_._v(" —— 方法内部，不需要访问 "),t("strong",[_._v("实例属性")]),_._v(" 和 "),t("strong",[_._v("类属性")])])]),_._v(" "),t("p",[t("strong",[_._v("提问")])]),_._v(" "),t("p",[_._v("如果方法内部 即需要访问 "),t("strong",[_._v("实例属性")]),_._v("，又需要访问 "),t("strong",[_._v("类属性")]),_._v("，应该定义成什么方法？")]),_._v(" "),t("p",[t("strong",[_._v("答案")])]),_._v(" "),t("ul",[t("li",[_._v("应该定义 "),t("strong",[_._v("实例方法")])]),_._v(" "),t("li",[_._v("因为，"),t("strong",[_._v("类只有一个")]),_._v("，在 "),t("strong",[_._v("实例方法")]),_._v(" 内部可以使用 "),t("strong",[_._v("类名.")]),_._v(" 访问类属性")])]),_._v(" "),t("pre",[t("code",{staticClass:"language-python"},[_._v('class Game(object):\n\n    # 游戏最高分，类属性\n    top_score = 0\n\n    @staticmethod\n    def show_help():\n        print("帮助信息：让僵尸走进房间")\n        \n    @classmethod\n    def show_top_score(cls):\n        print("游戏最高分是 %d" % cls.top_score)\n\n    def __init__(self, player_name):\n        self.player_name = player_name\n\n    def start_game(self):\n        print("[%s] 开始游戏..." % self.player_name)\n        \n        # 使用类名.修改历史最高分\n        Game.top_score = 999\n\n# 1. 查看游戏帮助\nGame.show_help()\n\n# 2. 查看游戏最高分\nGame.show_top_score()\n\n# 3. 创建游戏对象，开始游戏\ngame = Game("小明")\n\ngame.start_game()\n\n# 4. 游戏结束，查看游戏最高分\nGame.show_top_score()\n\n')])])])}),[],!1,null,null,null);v.default=o.exports}}]);