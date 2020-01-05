# terrible-word-search
> Generate terrible word searches.

## Install
```
npm install terrible-word-search
```

## Usage
### generateWordSearch
```js
import { generateTerribleWordSearch } from 'terrible-word-search';

generateTerribleWordSearch({
  word: 'kayak',
  size: {
    width: 10,
    height: 10
  }
}, 7500);
```

**Parameters**:
- `options: WordSearchGenerationOptions`:
  - `word: string`: The word to generate the word search around.
  - `size: WordSearchSize`:
    - `width: number`: The width of the word search.
    - `height: number`: The hight of the word search.
- `maxAttempts: number`: The maximum number of attemps to generate a valid word search.
