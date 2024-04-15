# Custom Input Field Component for React

## Overview

The `CustomInput` component is a reusable and highly customizable input field component for React applications. It features built-in validation, customizable properties, and an intuitive API to fit into any form or data-collection requirement you may have.

## Features

- **Dynamic Input Types**: Supports various types of input such as text, number, email, etc.
- **Validation**: Allows for an array of custom validation functions to ensure the input meets your criteria.
- **Customizable**: Options for placeholder text, step value, and more.
- **Error Handling**: Displays error messages dynamically based on validation results.

## Installation

1. Download the component file and its associated CSS file.
2. Place them in your project's component directory.

## Usage

```jsx
import CustomInput from './path/to/CustomInput';

<CustomInput
  label="Your Label"
  id="your-id"
  value={yourState}
  onChange={yourChangeHandler}
  placeholder="Enter text..."
  type="text"
  step="1"
  validators={[yourValidationFunctions]}
/>
```

## Props

- `label` (String): The label for the input field.
- `id` (String): Unique ID for the input.
- `value` (String/Number): Controlled value of the input field.
- `onChange` (Function): Function to be called when the input value changes.
- `placeholder` (String): Placeholder text for the input field.
- `type` (String): The type of input. Default is "text".
- `step` (String/Number): Step value for numerical inputs.
- `validators` (Array): An array of validation functions.

## Validation

You can pass an array of validation functions through the `validators` prop. Each function should return an error message string if the validation fails, or `null` if the input is valid.

## Example

Example of a validation function:

```javascript
const isNumber = (value) => {
  if (isNaN(value)) {
    return "This field must be a number";
  }
  return null;
};
```

## License

MIT
