#!/bin/bash

# AIエンジニアLP開発用スクリプト
# 使用方法: ./dev-scripts.sh [start|stop|restart|status]

PROJECT_DIR="/Users/nakamursuguru/LP3/ai-engineer-lp"
DEFAULT_PORT=3000

# プロセスを安全に停止
stop_dev_server() {
    echo "🛑 開発サーバーを停止中..."

    # Next.js関連プロセスを特定して停止
    pkill -f "next dev" 2>/dev/null
    pkill -f "npm run dev" 2>/dev/null

    # ポート使用プロセスを停止
    lsof -ti:$DEFAULT_PORT | xargs kill -9 2>/dev/null
    lsof -ti:3001 | xargs kill -9 2>/dev/null
    lsof -ti:3002 | xargs kill -9 2>/dev/null

    echo "✅ プロセス停止完了"
}

# キャッシュをクリア
clear_cache() {
    echo "🧹 キャッシュをクリア中..."
    cd "$PROJECT_DIR"
    rm -rf .next
    rm -rf node_modules/.cache
    rm -rf .eslintcache
    echo "✅ キャッシュクリア完了"
}

# 開発サーバーを開始
start_dev_server() {
    echo "🚀 開発サーバーを起動中..."
    cd "$PROJECT_DIR"

    # ポートが使用中か確認
    if lsof -i:$DEFAULT_PORT >/dev/null 2>&1; then
        echo "⚠️  ポート$DEFAULT_PORT は使用中です。まず停止してください。"
        return 1
    fi

    npm run dev
}

# 完全リスタート
restart_dev_server() {
    echo "🔄 完全リスタート中..."
    stop_dev_server
    sleep 2
    clear_cache
    start_dev_server
}

# 現在の状態を確認
check_status() {
    echo "📊 現在の状態:"
    echo ""

    # プロセス確認
    echo "🔍 Next.js プロセス:"
    ps aux | grep -E "(npm run dev|next dev)" | grep -v grep || echo "  なし"
    echo ""

    # ポート使用状況
    echo "🌐 ポート使用状況:"
    for port in 3000 3001 3002; do
        if lsof -i:$port >/dev/null 2>&1; then
            echo "  ポート $port: 使用中"
            lsof -i:$port | head -2
        else
            echo "  ポート $port: 利用可能"
        fi
    done
    echo ""

    # キャッシュファイル確認
    echo "🗂️ キャッシュ状況:"
    cd "$PROJECT_DIR"
    if [ -d ".next" ]; then
        echo "  .next: 存在 ($(du -sh .next | cut -f1))"
    else
        echo "  .next: なし"
    fi

    if [ -d "node_modules/.cache" ]; then
        echo "  node_modules/.cache: 存在"
    else
        echo "  node_modules/.cache: なし"
    fi
}

# メイン処理
case "$1" in
    "start")
        start_dev_server
        ;;
    "stop")
        stop_dev_server
        ;;
    "restart")
        restart_dev_server
        ;;
    "status")
        check_status
        ;;
    "")
        echo "AIエンジニアLP開発用スクリプト"
        echo ""
        echo "使用方法:"
        echo "  ./dev-scripts.sh start    - 開発サーバー開始"
        echo "  ./dev-scripts.sh stop     - 開発サーバー停止"
        echo "  ./dev-scripts.sh restart  - 完全リスタート"
        echo "  ./dev-scripts.sh status   - 現在の状態確認"
        echo ""
        echo "推奨ワークフロー:"
        echo "  1. 初回: ./dev-scripts.sh start"
        echo "  2. 問題発生時: ./dev-scripts.sh restart"
        echo "  3. 終了時: ./dev-scripts.sh stop"
        ;;
    *)
        echo "❌ 不正なオプション: $1"
        echo "使用可能: start, stop, restart, status"
        exit 1
        ;;
esac