# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer: When you are using state. It is usually at the top of your code. In order to save time and also make everything trackable. You destructure the state object into easier and quick to use variables. That way it is both easier to easy and easy to keep track
  Example: state: {
    count: 0,
    array: [0,1,2]
  }
  Destructuring:
  { count, array} = this.state

  Now you don't need to put this.state.count or this.state.array. you can just use array and count

  Researched answer: Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.



2. What are React lifecycle methods? Provide three examples.

  Your answer: preventDefault, compoundtomount, constructor, render, setstate

Researched answer: constructor()
getDerivedStateFromProps()
render()
componentDidMount()
getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()



3. What is the difference between a class and an object?

  Your answer: A class is used to make objects. By using a class you can pass a variety of methods, data, values, and information so it can be used over and over again. And thru this you can make many objects out of a class. Different classes can also inherit various information from other classes by extending. And this will allow them to use the information from the extended class and also put their own spin to it in their own newly generated objects 

  Researched answer:
1)Object is an instance of a class.	Class is a blueprint or template from which objects are created.
2)	Object is a real world entity such as pen, laptop, mobile, bed, keyboard, mouse, chair etc.	Class is a group of similar objects.
3)	Object is a physical entity.	Class is a logical entity.
4)	Object is created through new keyword mainly e.g.
Student s1=new Student();	Class is declared using class keyword e.g. class Student{}
5)	Object is created many times as per requirement.	Class is declared once.
6)	Object allocates memory when it is created.	Class doesn't allocated memory when it is created.
7)	There are many ways to create object in java such as new keyword, newInstance() method, clone() method, factory method and deserialization.	There is only one way to define class in java using class keyword.



4. What is the difference between a HTML div and a span?

  Your answer: A div is used to bunch together many different elements into one container. Forgot what a span is

  Researched answer: A div is a block-level element and a span is an inline element. The div should be used to wrap sections of a document, while use spans to wrap small portions of text, images, etc. The <div> element is used while creating CSS based layouts in html, whereas <span> element is used to stylize texts.

  This means that to use them semantically, divs should be used to wrap sections of a document, while spans should be used to wrap small portions of text, images, etc.


5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer: Those two entities are used to next multiple elements when using React. React only accepts one element. However by using React.Fragment and <> you are able to next multiple elements inside of React. We can only use one pair of React.Fragment and <> in order to follow that convention of react only taking in one element

  Researched answer: React fragments let you group a list of children without adding extra nodes to the DOM because fragments are not rendered to the DOM. So basically we use React.Fragment where we would normally use a wrapper div.

We can make use of fragments with <React.Fragments> syntax. So we could write the Columns component as follows.


6. What does it mean to create a responsive web application? What are three options for creating responsive design?

  Your answer: A resposive web application means it has development in the front end and back end. Able to work on different platforms. Web Android IOS etc. It also follows a MVC convention. Web app will use HTML CSS and JavaScript

  Researched answer:  Responsive design teams create a single site to support many devices, but need to consider content, design and performance across devices to ensure usability. Creating usuable experience. Using Flexbox. Spacing is consistent. Flexible grid, flexible images, media queries.


7. What are props in React?

  Your answer: A prop in react is information passed down from the parent element (App.js). 

  Researched answer: Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.
  Props are arguments passed into React components.
  Props are passed to components via HTML attributes.

8. What is `this` in JavaScript?

  Your answer: The `this` allows you to reference an internal value within an object. It is refering to object it is in. They are frequently found inside of constructors when making a class. The `this` is used so objects being generated will be able to reference its own data. `this` also helps when making classes that extend another class. 

  Researched answer: The JavaScript this keyword refers to the object it belongs to. ... In a function, this refers to the global object. In a function, in strict mode, this is undefined . In an event, this refers to the element that received the event. Methods like call() , and apply() can refer this to any object.


9. STRETCH: What is a ternary operator in JavaScript?

  Your answer: A ternary operator is bascially a easier and cleaner way of using an if/ele statement
  Example: yes ? no : yes
  if(yes){
    return no
  }else{
    return yes
  }

  Researched answer: The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy



10. STRETCH: What is an anonymous function in JavaScript?

  Your answer: A function that isn't known

  Researched answer: The function above is actually an anonymous function (a function without a name). Functions stored in variables do not need function names. They are always invoked (called) using the variable name. 



## Looking Ahead: Terms for Next Week
- Ruby
A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.

- Object oriented programming
Object-oriented programming is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields, and code, in the form of procedures. A feature of objects is that an object's own procedures can access and often modify the data fields of itself.

- RSpec
RSpec is a computer domain-specific language testing tool written in programming language Ruby to test Ruby code. It is a behavior-driven development framework which is extensively used in production applications.

- Instance variable
In object-oriented programming with classes, an instance variable is a variable defined in a class, for which each instantiated object of the class has a separate copy, or instance. An instance variable has similarities with a class variable, but is non-static.

- Ruby blocks
A Ruby block is a way of grouping statements, and may appear only in the source adjacent to a method call; the block is written starting on the same line as the method call's last parameter (or the closing parenthesis of the parameter list). The code in the block is not executed at the time it is encountered.

- Ruby hashes
A Hash is a collection of key-value pairs like this: "employee" = > "salary". It is similar to an Array, except that indexing is done via arbitrary keys of any object type, not an integer index.

The order in which you traverse a hash by either key or value may seem arbitrary and will generally not be in the insertion order. If you attempt to access a hash with a key that does not exist, the method will return nil.

- `getter` and `setter` methods in Ruby
In a Ruby class we may want to expose the instance variables (the variables that are defined prefixed by @ symbol) to other classes for encapsulation. Then, in that case, we use the getter and setter methods. these methods allow us to access a class’s instance variable from outside the class. Getter methods are used to get the value of an instance variable while the setter methods are used to set the value of an instance variable of some class.

