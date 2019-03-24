# Iterators

## Installation

```bash
$ yarn add @lazarljubenovic/iterators
```

## Usage

```typescript
import * as its from '@lazarljubenovic/iterators'

const array = [1, 2, 3, 4]
const paris = [...its.pairwise(array)] // => [[1, 2], [2, 3], [3, 4]]
```

## List of iterators

- `pairwise`
- `pairwiseCircular`
