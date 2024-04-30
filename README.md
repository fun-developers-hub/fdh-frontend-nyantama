# fdh-frontend

FUN Developers Hubのフロントエンド。

## 必要な開発環境

- Node.js@18.16.0
- お好みのエディタ

## 使用方法

1. 下のコマンドを実行。

```bash
npm install
npm run dev
```

2. [http://localhost:3000](http://localhost:3000)を開く。

### Storybookの起動
`$ npm run storybook`

## コミットメッセージのルール

基本的には[Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)に従う。

フォーマットは`<種類>: <内容>`

種類と意味は下の通り。

- `feat`: ユーザから見える機能の追加や変更。ユーザから見えない変更(例: ビルドスクリプトの変更)はこれに該当しない
- `fix`: ユーザから見える機能のバグ修正。`feat`同様、ユーザから見えない変更は該当しない
- `docs`: ドキュメントに関する変更(例: `README.md`の変更)
- `style`: フォーマットしたときや、セミコロンの追加など、コードスタイルに関する変更
- `refactor`: 動作の変更を伴わない変更(例: 変数名の変更)
- `test`: テストコードに関する追加・変更
- `chore`: ユーザに見えない変更(例: 設定ファイルの変更)

コミットメッセージの例:

- `feat: サークルのページにアイコンを追加した`
- `fix: 画像サイズによってスタイルがズレるため要素のサイズを固定した`
- `chore: リンターとしてESLintを追加した`

なお、コミットメッセージに`close #<issue id>`とつけることで該当番号のissueを閉じることができる。

## ブランチ名のルール

`<issue番号>/<変更内容(スペースをアンダーバーに)>`

例:

- `10/add_EventCardList_compnent`
- `28/fix_join_form_bug`
