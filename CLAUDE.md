# Angular Design System - Claude Instructions

## Build Commands
- `npm start` - Start dev server
- `npm run build` - Build project
- `npm run watch` - Build in watch mode
- `npm test` - Run all tests
- `npm test -- --include=**/component-name.spec.ts` - Run single test
- `ng test --include=**/component-name.component.spec.ts` - Alternative single test syntax

## Lint/Format (add to package.json)
- Add ESLint: `npm i -D @angular-eslint/schematics && ng add @angular-eslint/schematics`
- Add Prettier: `npm i -D prettier prettier-eslint`

## Code Style Guidelines
- **TypeScript**: Strict mode enabled (noImplicitOverride, noImplicitReturns)
- **Formatting**: 2-space indentation, UTF-8 encoding, trim trailing whitespace
- **Quotes**: Single quotes for TypeScript files
- **Component Structure**: Use SCSS for styles, prefix components with 'app-'
- **Imports**: Group imports by Angular core, then external libs, then app modules
- **Error Handling**: Prefer async/await with try/catch over promise chains
- **Types**: Avoid 'any', prefer explicit interface or type definitions
- **Naming**: PascalCase for classes/interfaces, camelCase for variables/methods

## Testing
- Jasmine/Karma for unit tests
- Name tests descriptively with BDD-style "should..." format