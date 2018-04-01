# Antd `Form` Component Major Steps

`Form` must be created with the _**HOC**_

```jsx
Form.create(opt)(component)
```

which gives him a new props call `form`.

#### Usage:

```javascript
import React, { Component } from 'react'
import { Form } from 'antd'

//Note: the component must be a statefull component
class LoginForm extends Component {
    render() {
        return <Form>...</Form>
    }
}

export default Form.create()(LoginForm)
//This gives access to this.props.form which contain some functionalities(methods)
```

After the creation of the form we need to setup the form items

## `Form.Item`

Form item is the representation of each field of the form. It contain the form element such as `<input /> <textarea><textarea> <select></select>` etc..
It is represented as `.form-group` in Twitter Bootstrap.

### Usage:

```jsx
import React, { Component } from 'react'
import { Form } from 'antd'

const { Item } = Form
//or
const FormItem = Form.Item

class LoginForm extends Component {
    render() {
        return (
            <Form>
                <Item>...</Item>
                <FormItem>...</FormItem>
            </Form>
        )
    }
}

export default Form.create()(LoginForm)
```

By using `Form.Item`, form control elements(Eg: `<input />`) can safely be managed by `Form`. <br />

## `getFieldDecorator(id,options)(element)` or `getFieldDecorator(id, options)`

We can now move one step ahead to the control section, that is where `Form.props.form` come in place.<br/>
As said above `Form.props.form` has a lot of methods that can achieve different goals. the most essential of them is `Form.props.form.getFieldDecorator()`.

You can use the `getFieldDecorator()` methods to wrap a component and add the id to it or just provide the id of the component if set.

### Usage:

```jsx
import React, { Component } from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

class LoginForm extends Component {
    render() {
        const opts = {}
        const { getFieldDecorator } = this.props.form
        return (
            <Form>
                <FormItem>
                    {getFieldDecorator('myId', opts)(
                        <Input placeholder="My input" />
                    )}
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(LoginForm)
```

## `isFieldTouched(id)`

By wrapping the form control (`<Input />`) in our `getFieldDecorator()` we can now set some option in order to check if the data entered are correct. but before that its important to know about the state of the form control (Know if it has been touched or not for example). Fortunatly `form` props provide a method that works fine with `getFiledDecorator()`. This method does exactly what its name says, the method is `isFieldTouched()` and return a boolean. this is useful to display a message when the user enter a value into a form control.

### Usage:

```jsx
import React, { Component } from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

class LoginForm extends Component {
    render() {
        const opts = {}
        const { getFieldDecorator, isFieldTouched } = this.props.form
        return (
            <Form>
                <FormItem
                    help={
                        isFieldTouched('myId') && 'You have written something!'
                    }>
                    {getFieldDecorator('myId', opts)(
                        <Input placeholder="My input" />
                    )}
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(LoginForm)
```

in this example we have used the `help` props of `Form.Item` to display a message. this props is very useful when you want to display error or success message for a particular field.

## `getFieldError(id)`

Now that we know how to check if the form control (that we will mention now as **input**) has been touch why not analyse the data and generate a real error message. That why getFieldError has been created. It has the role of getting any message coming from a field and with the help of `help` props display it at the correct location.

### Usage:

```jsx
import React, { Component } from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

class LoginForm extends Component {
    render() {
        const opts = {
            rules: [{required: true, message: 'this field is required'}]
        }

        const { 
            getFieldDecorator, 
            isFieldTouched, 
            getFielError 
        } = this.props.form

        const myIdError = isFieldTouched('myId') && getFieldError('myId')

        return (
            <Form>
                <FormItem
                    help={myIdError || null}>
                    {getFieldDecorator('myId', opts)(
                        <Input placeholder="My input" />
                    )}
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(LoginForm)
```
Oookk?! Yes that is it. ok first of all let's check out our constant `opt`. `getFieldDecorator` needs `options` as the second argument and that option has a property calll `rules`. as is name suggest this let us define our rules for the selected field, in this example we used the rule `required` which is the equivalent of `required` attribute from some `HTML` tags, but this time it is managed by the `Form` component. we can also define multiple rules such as `min`, `max`, `len`, and more. 
```js
const myIdError = isFieldTouched('myId') && getFieldError('myId')
```
What happened here is simple we just check if the field has been touched and an error message exists and we assign the error to `myIdError` constant.

**_Note:_**
```js
var a = 'me'
var b = 'you'
console.log((a || b)) //me
console.log((a && b)) //you
console.log((false || b)) //you
console.log((false && b)) //false
console.log((b && false)) //false
//using && assign the second value to the constant if both are true
```
With that said you could ask where is the message coming from? In fact `getFieldError` get any message coming from the selected field's rules. so the message is the message of `{required: true, message: 'this field is required'}`