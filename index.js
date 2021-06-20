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
    console.log(output);
}

// 出力