$(document).ready(function() {
let saveValue = ""; // 1つ目の数字を覚える
let operator = "";  // 記号（＋やー）を覚える
let isReset = false; // 演算子で画面をリセットフラグ
    // ここに処理を書いていく
    $(".num").click(function() {
        let nowValue = $("#result").text(); // 今の表示を取得
        let clickedValue = $(this).text();  // 押された数字を取得

    if (nowValue === "0") {
        // 新しい数字で上書き
        $("#result").text(clickedValue);
    } else {
        // 今の数字に新しい数字を追加
        $("#result").text(nowValue + clickedValue);
    }
    });
    $(".op").click(function() {
        // 画面に出ている数字を記憶
        saveValue = $("#result").text();

        // 演算子を記憶
        operator = $(this).text();

    });
        // 演算子を押した時に画面をリセットする処理
        // ＋を押した時
    $(".op").click(function() {
        // 省略：数字の保存など
        isReset = true; // リセットフラグ
    });

        // numを押した時
    $(".num").click(function() {
        if (isReset === true) {
        // 画面を上書き
    $("#result").text($(this).text());
        // リセットを下ろす
        isReset = false;
    } else {
        // 演算子がなければ何もしない
    }
    });
    // ＝を押した時
    $("#equals").click(function() {
        let num1 = Number(saveValue);
        let num2 = Number($("#result").text());
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
    });
});