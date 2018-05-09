Estrutura para compartilhamento de codigo de aplicativos ionic

Para **estrutura-base-app** package:

```
cd estrutura-base-app
npm i
// compile typescript...
npm run build 
npm link
```

Para **app-consumidor** packages:

```
cd app-a
npm i
// npm 'link' is not strictly necessary here,
// as it's done by the 'ionic serve' command...
// it's only here for reference purposes.
npm link estrutura-base-app
```
