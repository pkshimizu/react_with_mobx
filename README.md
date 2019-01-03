Create React AppでMobXを使用するサンプル

# 手順
1. `create-react-app project_name`を実行
2. `npm run eject`を実行
3. `npm install --save-dev @babel/plugin-proposal-decorators`を実行
4. `package.json`を開いて以下を追記する
```json
"babel": {
   "plugins": [
     ["@babel/plugin-proposal-decorators", { "legacy": true }]
   ],
   "presets": [
     "react-app"
   ]
 },
```
5. `npm install -d mobx mobx-react`を実行
