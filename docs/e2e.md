
# e2e with Cucumber & Gherkin

End to End Test Component

Component type: __Class__

## Usage 

Include this component in your app. 
It will render a button which the e2e will use. 

```javascript
<e2e mode/>
```

## Props

**mode** 

Use this property to control the component. 
Should be able to show/hide the button & whatnot.

```javascript
let mode ={
    show: true,
    otherStuff:[{},{}],
}
```

## Dev Dependencies

```javascript
"devDependencies": {
    "chromedriver": "2.43.1",
    "cucumber": "5.0.2",
    "cucumber-pretty": "^1.5.0",
    "nightwatch": "1.0.11",
    "nightwatch-api": "latest",
    "selenium-server": "^3.141.0",
    "start-server-and-test": "1.7.9"
},
```

[Back <= Getting Started](./getting_started.html) | [Forward => Render Prop Components](./render_props.html) 
[^ Home](../index.html)
