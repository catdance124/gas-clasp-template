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

デプロイ

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
Created version 600.
- ************ @600.
```
