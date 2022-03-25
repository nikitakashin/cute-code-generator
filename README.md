# Cute code generator
## Tiny lib for generating cute 4-digit codes


### Installation
```sh
npm i cute-code-generator
```
### Usage

```sh
const { generateCuteCode } = require('cute-code-generator');

const code = generateCuteCode();

for (let i = 0; i < 100; i++) {
  console.log(generateCuteCode());
}
```

Console output:

```sh
4644
8818
2727
8818
5454
0303
4040
1888
0303
1818
1181
8987
0909
1818
4040
8181
0909
4043
etc...
```
Looks realy cute, isn`t it?