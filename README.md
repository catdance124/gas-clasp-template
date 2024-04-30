# gas-clasp-template

インストール&テスト

```sh
# 依存パッケージをインストール
$ npm install

# テストを実行
$ npm run test

# ビルド(sources/src/main.ts -> public/main.js)
$ npm run build
```

プッシュ&デプロイ

変数は[こちら](https://qiita.com/shunexe/items/fdf0def390a160d044c3)を参照

```sh
# デプロイするアカウントでログイン（~/.clasprc.json を作成）
$ clasp login

# デプロイ用の環境変数を準備
$ vi .env
$ cat .env
DEPLOYMENT_ID=******************
SCRIPT_ID=******************
ENV_NAME=Develop

# ビルド&プッシュ
$ npm run push
└─ public/appsscript.json
└─ public/main.js
Pushed 2 files.

# ビルド&プッシュ&デプロイ
$ npm run deploy
Created version 600.
- ************ @600.
```
