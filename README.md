
### ts with express
https://blog.logrocket.com/how-to-set-up-node-typescript-express/




### tsnode vs tsc+node
tsc compile ts to js, then node execute js file
ts-node compile & execute ts file
nodemon require ts-node installed

https://www.reddit.com/r/typescript/comments/8vkvzy/typescript_with_node_should_i_use_tsnode_or_tsc/





```bash

npm init -y
npm i express dotenv

# 1): install typescript ts-node nodemon globally
npm install -g typescript ts-node nodemon 

# 2): or install typescript ts-node nodemon locally as dev dependencies
npm i -D typescript ts-node nodemon

npm i -D @types/express @types/node
npx tsc --init

```


tsconfig.json

```jason
{
    "outDir": "./dist",
}
```

### development
```bash
npm run dev
```


### production
```bash
npm run build
npm run start
```

create .env file, and set `PORT=3000`

http://localhost:3000/ 

http://localhost:3000/test