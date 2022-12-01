# Void Design

A hybrid package of UI elements for ReactJS, from [void](https://github.com/void-verse)

<br />

## What's new (v1.2.2)

- HTML Attributes for Input Components
- Password Input
- Card

<br />

## Installation

- :arrow_down: Install the package

```bash
yarn add void-design
```

<br />

- :spiral_notepad: Import the CSS file

```js
import "void-design/lib/void.css";
```

<br />

- :blue_heart: Start using the package

```js
import "void-design/lib/void.css";

import React from "react";
import { Input, Button, Snackbar } from "void-design";

const App = () => {
  return (
    <div>
      <Input.Text name="name" placeholder="Enter your name" />
      <Input.Password name="password" placeholder="Enter your name" />
      <Button onClick={() => Snackbar.success("Form submitted!")}>
        Submit
      </Button>
    </div>
  );
};

export default App;
```

<br />

## Components

- Button
- Card
- Input
- Form
- Slider
- Snackbar
- Spinner
- Drawer
- Divider
