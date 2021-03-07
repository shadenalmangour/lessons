| Title | Type | Duration | Creator |
| --- | -- | -- | --- |
| Intro to Object-Oriented Programming | Lesson | 0:30 | Victor Grazi, NYC |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intro to Object-Oriented Programming

### Learning Objectives

At the end of this lesson, students will be able to:
- Define the four principles of object-oriented programming.
- Explain how classes and objects factor into object-oriented programming.

### Lesson Guide

| Timing  | Type  | Topic  |
|:-:|---|---|
| 5 min  | Opening  | Learning Objectives |
| 10 min  | Introduction  | The Four Principles of OOP |
| 10 min  | Demo  | Classes and Modifiers |
| 5 min  | Conclusion  | Review/Recap |

## Opening (5 min)

**Object-oriented programming** (OOP) is a concept that was first introduced in the 1960s with the advent of the Simula programming language and became popular some 25 years later with C++.

Whereas earlier languages were **procedural** in nature, object-oriented programming introduced the concept of **objects** — compartments of data and functionality that could easily retain and modify their own instance data.

-----

## The Four Principles of OOP (10 min)

The four pillars of object-oriented programming are:

* Abstraction
* Polymorphism
* Inheritance
* Encapsulation

> Why are they ordered like that? Because it spells "A PIE." If you like pie and acronyms, this might help you remember these four concepts!

### Abstraction

The idea behind abstraction is that the average person doesn't need to know the inner workings of something in order to use it successfully. For example, you don't have to be a mechanic to drive a car.

### Encapsulation

Encapsulation is related to abstraction but goes a step further. Not only does the average user not need to have access to the inner workings of something in order to use it, if they do have access, it may actually be harmful.

You could technically start your car with a screwdriver or directly with electricity, but you really shouldn't — you might hurt yourself or damage your car. Likewise, your users don't always need direct access to sensitive parts of your code.

![](https://res.cloudinary.com/briezh/image/upload/v1560812857/bike-brakes_pvfblg.jpg)

> Image credit goes to [this article](https://dev.to/charanrajgolla/beginners-guide---object-oriented-programming), which we highly recommend reading if this course feels a bit too fast paced.

### Inheritance

Inheritance allows classes to "inherit" code from one another. The base class is called the **parent** and the inheritor or beneficiary class is called the **child**. It's just one more way of keeping our code shorter and simpler.

The most frequent use of inheritance is for deriving classes using existing classes, which provides reusability. The existing classes remain unchanged. By promoting reusability in our code, the development time of software is reduced.

### Polymorphism

Polymorphism simply means "many forms." It refers to the fact that a method could have multiple implementations, either differing between a parent and a child class (method overriding) or depending on the type and number of arguments (method overloading).

----

## Classes and Modifiers (10 min)

Before object-oriented programming came along, programming languages like C sported a feature called `struct` — a way of defining a common format to allocate blocks of consistent data types.
 
For example:

```java
struct Person { 
    double birthdate;
    int id; 
    char name[50];
} 
```

That would basically allow you to carve out memory for all of the structure's variables (e.g., `birthdate`, `id`, `name`) simply by assigning a new `struct`.

Now that we have data as a `struct`, why not add **functionality** to that structure (e.g., derive a person's age given today's date) and include that functionality inside the `struct` itself? That's exactly what a **class** is — a data structure with functions or methods.

> In our example of deriving a person's age given today's date, we might create a method called `getCurrentAge()` or something similar.

### Defining a Class

We've already seen several examples of classes. They all conform to this common pattern:

```java
public class MyClass {
    // guts of the class
}
```

In this example, `public` refers to the class visibility. Top-level classes can only be `public` or default (unspecified). "Top level" means they're not inner classes, which we'll define later in this lesson.

`public` classes can be referenced by any other class, and this is the most common class visibility. A file may contain **no more than one** `public` class. The rule is that every top-level `public` Java class must reside in a file that exactly matches the file name (minus the `.java` file type). 

#### Default Classes

Default classes don't specify an access modifier. For example:

```java
class MyDefaultClass {}
```

They can be accessed in the current file, as well as by other classes in the same package. For this reason, the default visibility level is called "package" or "package-private."

Package and public are the only access levels available for top-level classes. But as we'll see, inner classes can also be `protected` or `private`.

#### Access Levels

The access levels — going from most to least restrictive — are:

```
private --> package --> protected --> public
```

`private`, `protected`, and `public` are all **access modifiers**, which means you specifically add them in so you can change the access (or protection) level away from the default we described above.

This nifty table from [Oracle's docs on access control](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html) shows what's unique about each level:

![](https://res.cloudinary.com/briezh/image/upload/v1560810976/Screen_Shot_2019-06-17_at_3.35.38_PM_fq9ffm.png)

----

## Conclusion (5 min)

Object-oriented programming is the practice of using classes and objects to make code modular (encapsulated) and often reusable. A class can be thought of as a blueprint for a building or a pattern for a dress. There's one blueprint, but you can build many buildings with it. There's one dress pattern, but you can manufacture many dresses with it.

> **Knowledge Check**: Can you define each of the four OOP pillars?
> - Abstraction
> - Polymorphism
> - Inheritance
> - Encapsulation

## Additional Resources

* [Oracle Docs: Access Control](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)
* [OOP for Beginners](https://dev.to/charanrajgolla/beginners-guide---object-oriented-programming)
* [Four Principles of OOP](https://medium.com/@cancerian0684/what-are-four-basic-principles-of-object-oriented-programming-645af8b43727)


