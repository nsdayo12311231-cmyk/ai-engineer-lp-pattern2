# AIエンジニアLP開発記録

## プロジェクト概要
- AIエンジニアセミナーのランディングページ
- Next.js 14 + TypeScript + Tailwind CSS
- 最終デプロイURL: https://ai-engineer-j8bawav9a-nsdayo12311231-cmyks-projects.vercel.app

## 完了したタスク

### 1. Problems セクションの修正 ✅
- **修正内容**: 個別ボックスから統一ボックスへ変更
- **技術**: 背景画像と70%オーバーレイを適用
- **ファイル**: `src/components/sections/Problems.tsx`

### 2. OtherSeminars セクションの修正 ✅
- **修正内容**: 統一ボックスから個別ボックスへ変更
- **技術**: 各項目に背景画像と70%オーバーレイを適用
- **ファイル**: `src/components/sections/OtherSeminars.tsx`

### 3. CTAボタンの色変更 ✅
- **修正内容**: 黄色からオレンジグラデーションに変更（コンバージョン向上）
- **ファイル**: `src/components/ui/Button.tsx`
- **コード**:
```typescript
background: 'linear-gradient(135deg, #ff6b35, #f39c12)'
```

### 4. セクション間スペーシングの調整 ✅
- **修正内容**: より密なレイアウトに変更
- **変更**: `py-lg` → `py-md`
- **ファイル**: `src/app/globals.css`
- **追加修正**: 上下マージンの統一
  - `src/components/sections/Hero.tsx`: `pb-2xl` → `pb-0`
  - `src/components/sections/AiSkillDefinition.tsx`: `space-y-xl` → `space-y-lg`

### 5. Vercel CLIでの直接デプロイ ✅
- **方法**: GitHubを経由せずに直接ファイルアップロード
- **認証**: アクセストークン使用 (`uFkJgDbJwmXMkg5TFWJHU40d`)
- **コマンド**: `npx vercel --token=TOKEN --prod --yes`

## 重要なエラーと修正ポイント

### 🔴 最重要問題：モジュール解決エラー
**症状**: コード変更がブラウザに反映されない
**原因**: @/パスエイリアスと相対パスの混在によるNext.jsモジュール解決の競合
**解決方法**: 全ファイルを相対パスに統一

```typescript
// 修正前（問題のあるパス）
import Container from '@/components/ui/Container';

// 修正後（正しいパス）
import Container from '../ui/Container';
```

**教訓**: Next.js App Routerでは@/エイリアスと相対パスを混在させない

### 🟡 Vercel認証問題
**症状**: `vercel login` 後も認証が保持されない
**原因**: CLI認証プロセスの不完全な完了
**解決方法**: アクセストークンを直接生成・使用

```bash
# 認証URL: https://vercel.com/account/settings/tokens
npx vercel --token=uFkJgDbJwmXMkg5TFWJHU40d --prod --yes
```

### 🟠 ファイル参照エラー
**症状**: 最初にOtherSeminarsを修正すべき箇所でProblemsを修正
**原因**: セクション名の混同
**解決方法**: 各ファイルの内容を確認後に適切なファイルを修正

## 修正されたファイル一覧

| ファイル | 修正内容 | 重要度 |
|---------|---------|--------|
| `src/components/sections/Problems.tsx` | 統一ボックス化、背景画像追加 | 高 |
| `src/components/sections/OtherSeminars.tsx` | 個別ボックス化、背景画像追加 | 高 |
| `src/components/ui/Button.tsx` | オレンジグラデーション追加 | 中 |
| `src/app/globals.css` | セクションスペーシング調整 | 中 |
| `src/components/sections/Hero.tsx` | 底部パディング削除 | 低 |
| `src/components/sections/AiSkillDefinition.tsx` | 要素間スペーシング調整 | 低 |

## デプロイ情報
- **本番URL**: https://ai-engineer-j8bawav9a-nsdayo12311231-cmyks-projects.vercel.app
- **アクセス**: 公開（ログイン不要）
- **デプロイ方法**: Vercel CLI直接アップロード
- **プロジェクト名**: ai-engineer-lp

## 今後の改善点・注意事項

### 開発時の注意
1. **パス管理**: @/エイリアスパスは避け、相対パスを使用
2. **変更確認**: `.next`フォルダ削除後の再起動で確実な反映を確認
3. **ファイル確認**: 修正前に必ずファイル内容を確認

### デプロイ関連
1. **トークン管理**: Vercelトークンを環境変数として保存検討
2. **再デプロイ**: 同じコマンドで簡単に更新可能
3. **URL共有**: 公開URLなので誰でもアクセス可能

### 技術的学習ポイント
1. **Next.js App Router**: モジュール解決の仕組み理解
2. **Vercel CLI**: 直接デプロイ手法の習得
3. **CSS-in-JS**: インライン背景画像の適用方法
4. **Tailwind CSS**: カスタムクラスとインラインスタイルの使い分け

## 🚨 サーバー接続問題の完全解決手順（2025-09-17更新）

### 問題の根本原因
- **複数のバックグラウンドプロセス**: 20個以上のnpm run devが同時実行される
- **ポート競合**: 複数プロセスがlocalhost:3000を取り合う
- **プロセス残存**: killallが不完全で一部プロセスが残る

### ✅ **完全解決済み（推奨方法）**
**新しい管理スクリプトを使用**:
```bash
# 開発用スクリプトの使用方法
cd /Users/nakamursuguru/LP3/ai-engineer-lp

# 状態確認
./dev-scripts.sh status

# 安全な起動
./dev-scripts.sh start

# 問題発生時の完全リスタート
./dev-scripts.sh restart

# 終了時
./dev-scripts.sh stop
```

### 📋 緊急時の手動修復手順
```bash
# 1. 全プロセス強制停止
pkill -f "npm run dev" && pkill -f "next"

# 2. ポート解放確認
lsof -i :3000 :3001 :3002

# 3. プロジェクトディレクトリ移動
cd "/Users/nakamursuguru/LP3/ai-engineer-lp"

# 4. キャッシュ完全削除
rm -rf .next node_modules/.cache .eslintcache

# 5. クリーンスタート
npm run dev
```

### 🎯 予防策（実装済み）
- **管理スクリプト**: 自動化されたプロセス管理
- **ポート競合回避**: 自動ポート検出機能
- **キャッシュ管理**: 統合されたキャッシュクリア
- **状態監視**: リアルタイムステータス確認

## コマンド履歴

### 開発用
```bash
npm run dev
rm -rf .next && npm run dev  # キャッシュクリア付き再起動
```

### デプロイ用
```bash
npx vercel --token=uFkJgDbJwmXMkg5TFWJHU40d --prod --yes
```

## 【2025-09-17】レイアウト・フォントサイズ最適化 ✅

### 6. 全セクション90%幅統一 ✅
- **修正内容**: 全デバイスで画面幅の90%を使用するように統一
- **問題**: Container制限（400px）により大画面で33%しか使用していない
- **解決**: `container-custom`の`max-w-[400px]`を`max-w-none`に変更
- **効果**:
  - スマホ: 90% → 90%（変更なし）
  - タブレット: 52% → 90%（+38%改善）
  - デスクトップ: 33% → 90%（+57%改善）
- **ファイル**: `src/app/globals.css`

### 7. フォントサイズ最適化 ✅
- **調査結果**: プログラミングスクール系LPの推奨サイズに基づく調整
- **修正内容**:
  - Hero H1: 42px → 36px（デスクトップ）
  - セクション見出し: 20-24px → 26-28px
  - 本文: 16px（変更なし、適切）
- **技術**: Tailwindカスタムフォントサイズとインラインスタイルを併用
- **ファイル**:
  - `src/components/sections/Hero.tsx`
  - `src/components/sections/Solution.tsx`
  - `src/components/sections/WhyAiSkill.tsx`
  - `tailwind.config.js`

### 8. Problemsセクション箇条書きレイアウト ✅
- **要求**: PC版のみ箇条書きに変更、モバイル版は現状維持
- **修正内容**:
  - モバイル版: ❌アイコン + 3項目（変更なし）
  - PC版: •ブルレットポイント + 4項目
- **新しいコンテンツ**:
  - キャリアアップに限界を感じる
  - 転職したいがスキルがない
  - AIに仕事を奪われるのではないか
  - 学んでも実務で使えるのか不安
- **技術**: レスポンシブ表示切り替え（最終的に全デバイス統一）
- **ファイル**: `src/components/sections/Problems.tsx`

## 追加修正されたファイル一覧

| ファイル | 修正内容 | 重要度 |
|---------|---------|--------|
| `src/app/globals.css` | container-custom 90%幅統一 | 高 |
| `src/components/sections/Hero.tsx` | フォントサイズ最適化 | 中 |
| `src/components/sections/Problems.tsx` | 箇条書きレイアウト実装 | 高 |
| `src/components/sections/Solution.tsx` | 見出しサイズ拡大 | 中 |
| `src/components/sections/WhyAiSkill.tsx` | 見出しサイズ拡大 | 中 |
| `tailwind.config.js` | カスタムフォントサイズ調整 | 中 |

## 技術的改善点

### レスポンシブデザイン強化
- **90%幅統一**: 全デバイスで一貫した情報密度を実現
- **フォントサイズ階層**: 明確な情報階層を構築
- **箇条書きレイアウト**: 読みやすさとユーザビリティ向上

### パフォーマンス向上
- **Container制限解除**: 大画面での表示領域拡大
- **適切なフォントサイズ**: アクセシビリティ基準（16px以上）準拠
- **統一レイアウト**: メンテナンス性向上

### UX改善
- **視覚的統一感**: 全セクションで一貫した幅使用
- **読みやすさ**: プログラミングスクール業界標準に合わせたフォントサイズ
- **情報構造**: 箇条書きによる明確な情報提示

---
*最終更新: 2025-09-17*
*作成者: Claude Code*