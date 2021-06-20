// ボタンのクリックを検知
document.getElementById("btn").onclick = function() {
    // 月収or年収を判別
    let month_or_year = document.getElementById("month_or_year").value;
    // inputの値をそれぞれ数値変換し取得
    let input = {};
    input["salary"] = Number(document.getElementById("salary").value);
    input["bonus"] = Number(document.getElementById("bonus").value);
    input["regular"] = Number(document.getElementById("regular").value);
    input["overtime"] = Number(document.getElementById("overtime").value);
    input["days_worked"] = Number(document.getElementById("days_worked").value);

    // 計算
    if (month_or_year === "month") {
        // ボーナス加算した月給
        total_salary = input["salary"] + Math.round(input["bonus"] / 12)
    } else if(month_or_year === "year") {
        // ボーナス加算した月給
        total_salary = Math.round(input["salary"] / 12) + Math.round(input["bonus"] / 12)
    } else {
        return false;
    }

    // 残業加算した月労働時間
    let total_time = input["regular"] * input["days_worked"] + input["overtime"];
    output = Math.round(total_salary / total_time);

    // 出力
    // output(output);
    div = document.getElementById("output");
    div.innerHTML = "";
    div.innerHTML = "あなたの時給は...<br><strong>" + output + "円</strong>　です！";
    div.style.display = "block";    

    // ツイートボタン表示
    document.getElementById("tweet").style.display = "block";
}

// ツイートボタン押下時にテキストを動的に変更してツイート
document.getElementById("twitter-share-button").onclick = function() {
    // 出力結果を取得
    let text = document.getElementById("output").innerHTML;

    // HTMLタグを、改行は変換、その他は削除
    text = text.replace(/<br>/, "%0D%0A", /<strong>/, "");
    text = text.replace(/<strong>/, "");
    text = text.replace(/<\/strong>/, "");

    // オプションパラメータを設定
    let hashtags = "あなたの時給";
    let url = encodeURIComponent(location.href)  // location.hrefは今いるURL

    // 遷移
    window.open("https://twitter.com/share?text=" + text + "&hashtags=" + hashtags + "&url=" + url);
}