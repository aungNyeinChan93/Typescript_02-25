# Ninja Typescript Project

This project demonstrates various TypeScript features and concepts through practical examples. It includes topics such as arrays, objects, tuples, interfaces, functions, and generics, showcasing how TypeScript can be used to write robust and type-safe code.

## Features

- **Arrays**: Demonstrates the use of arrays and immutability with `as const`.
- **Objects**: Examples of object manipulation and type inference.
- **Tuples**: Usage of tuples, including readonly tuples and named tuples.
- **Interfaces**: Shows how to define and extend interfaces.
- **Functions**: Examples of typed functions, including generics and destructuring.
- **Generics**: Demonstrates the use of generics for reusable and type-safe code.

## File Structure

- `src/lesson2.ts`: Covers arrays and objects in TypeScript.
- `src/lesson3.ts`: Focuses on functions, including generics and type definitions.
- `src/lesson4.ts`: Explores tuples and their usage in functions and destructuring.
- `src/lesson5.ts`: Demonstrates interfaces, extending interfaces, and login examples.

## Examples

### Arrays and Objects

```typescript
let movies = ["Dark", "Jigar", "newtopia"] as const;
let car = { name: "BMW", model: 2022, make: "Germany" };
```

### Functions with Generics

```typescript
function logger<T>(message: T): void {
  console.log(`Log: ${message}`);
}
logger<string>("Hello, TypeScript!");
```

### Tuples

```typescript
const myTuple: [string, number] = ["score", 100];
const [label, value] = myTuple;
console.log(`${label}: ${value}`);
```

### Interfaces

```typescript
interface Dog {
  name: string;
  age: number;
  color?: string;
}
const mike: Dog = { name: "Mike", age: 3 };
```

## How to Run

1. Clone the repository to your local machine.
2. Ensure you have [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/) installed.
3. Navigate to the project directory and run the following commands:
   ```bash
   npm install
   tsc src/<filename>.ts
   node src/<filename>.js
   ```

Replace `<filename>` with the desired file to compile and run.

## License

This project is licensed under the MIT License.
