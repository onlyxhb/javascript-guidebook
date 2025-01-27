---
nav:
  title: 设计模式
  order: 10
group:
  title: 设计思想与原则
  order: 2
title: 设计思想与原则
order: 1
---

# 设计思想与原则

## SOLID 原则

SOLID 原则并非单纯的 1 个原则，而是由 5 个设计原则组成的，它们分别是：单一职责原则、开闭原则、里式替换原则、接口隔离原则和依赖反转原则，依次对应 SOLID 中的 S、O、L、I、D 这 5 个英文字母。

### SRP 单一职责原则

单一职责原则（Single Responsibility Principle）指一个类或者模块只负责完成一个职责（或者功能）。

每一个类，应该要有明确的定义，不要设计大而全的类，要设计粒度小、功能单一的类。

作用：避免将不相关的代码耦合在一起，提高了类或者模块的内聚性。

### OCP 开闭原则

开闭原则（Open Closed Principle）指软件实体（模块、类、方法等）应该 **对扩展开放、对修改关闭**。

添加一个新的功能应该是，在已有代码基础上扩展代码（新增模块、类、方法等），而非修改已有代码（修改模块、类、方法等）。

作用：增加了类的可扩展性。

### LSP 里式替换原则

里式替换原则（Liskov Substitution Principle）指子类对象能够替换程序中父类对象出现的任何地方，并且保证原来程序的逻辑行为不变及正确性不被破坏。

### ISP 接口隔离原则

接口隔离原则（Interface Segregation Principle）指接口的调用者不应该被强迫依赖它不需要的接口。

这一原则和单一职责原则有点类似，只不过它更侧重于接口。

- 如果把 **接口** 理解为一组接口集合，可以是某个类库的接口等。如果部分接口只被部分调用者使用，我们就需要将这部分接口隔离出来，单独给这部分调用者使用，而不强迫其他调用者也依赖这部分不会被用到的接口。
- 如果把 **接口** 理解为单个 API 接口或函数，部分调用者只需要函数中的部分功能，那我们就需要把函数拆分成粒度更细的多个函数，让调用者只依赖它需要的那个细粒度函数。
- 如果把 **接口** 理解为 OOP 中的接口，也可以理解为面向对象编程语言中的接口语法。那接口的设计要尽量单一，不要让接口的实现类和调用者，依赖不需要的接口函数。

### DIP 依赖反转原则

依赖反转原则（Dependency Inversion Principle）指高层模块不要依赖低层模块。高层模块和低层模块应该通过抽象来互相依赖。除此之外，抽象不要依赖具体实现细节，具体实现细节依赖抽象。大白话就是面向接口编程，依赖于抽象而不依赖于具体。
