$(document).ready(function() {
let saveValue = ""; // 1つ目の数字を覚える
let operator = "";  // 記号（＋やー）を覚える
let isReset = false; // 演算子で画面をリセットフラグ
let hasDot = false; // ドットのロック用フラグ
let hasOperator = false; // 直前が演算子なら true
    // ここに処理を書いていく
    $(".num").click(function() {
        let nowValue = $("#result").text(); // 今の表示を取得
        let clickedValue = $(this).text();  // 押された数字を取得

    if (nowValue === "0" || isReset) {
        // 新しい数字で上書き
        $("#result").text(clickedValue);
        isReset = false; // リセットフラグを戻す
    } else {
        // 今の数字に新しい数字を追加
        $("#result").text(nowValue + clickedValue);
    }
    hasOperator = false;
    });

    $(".op").click(function() {
        let op = $(this).text();
        let nowValue = $("#result").text();

        // 演算子の連続入力を防ぐ（ただし最初の - はOK）
        if (hasOperator) return;

        // 負の数スタート
         if (nowValue === "0" && op === "-") {
        $("#result").text("-");
        hasOperator = true;
         return;
        }
        hasDot = false; // ドットのロックを解除
        saveValue = nowValue;
        operator = op;

        $("#result").text(saveValue + operator);

        isReset = false;
        hasOperator = true;


    });

        // ドット専用の処理
    $("#dot").click(function() {
    if (hasDot) return; // ロックされてたら何もしない

    $("#result").append("."); 
    hasDot = true; // ロック
    });
    
    
    // ＝を押した時
    $("#equals").click(function() {
        let num1 = Number(saveValue);
        let num2 = Number($("#result").text().replace(saveValue + operator, ""));
        let result = 0;

        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "×") {
            result = num1 * num2;
        } else if (operator === "÷") {
            result = num1 / num2;
        }
        // 計算結果を表示
        $("#result").text(result);
        isReset = true;
        hasOperator = false;
    });

    //ACを押した時
    $("#clear").click(function() {
        // 画面を0に戻す
        $("#result").text("0");
        // saveValue を "" 空に戻す
        saveValue = "";
        // operator を "" 空戻す
        operator = "";
        // isReset を false に戻す
        isReset = false;
        hasDot = false;
        hasOperator = false;
    });
});