<?php
declare(strict_types=1);
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP基礎編</title>
</head>

<body>
    <p>
        <?php
        class Event{
    // プロパティ定義
    public $name;     // イベント名
    public $date;     // 開催日
    public $location; // 開催場所

    // コンストラクタ
    public function __construct($name, $date, $location)
    {
        $this->name = $name;
        $this->date = $date;
        $this->location = $location;
    }

    // イベントの開催日までの日数を返すメソッド
    public function getDaysUntilEvent()
    {
        $now = new DateTime();               // 現在日時
        $targetDate = new DateTime($this->date); // 開催日

        // 日付の差分を計算
        $interval = $now->diff($targetDate);

        // 日数（総日数の絶対値）を返す
        return $interval->format('%a');
    }
    }

// --------------------------------------------------
// 実行部分
// --------------------------------------------------

// 1. インスタンスを作成
// 条件「現在よりも未来の日付」として、現在から30日後の日付を動的に生成します
$futureDate = date('Y-m-d', strtotime('+30 days'));

$event = new Event("プログラミング初心者向けセミナー", $futureDate, "東京国際フォーラム");


// 2. 各プロパティにアクセスし、値を出力する
echo "イベント名：" . $event->name . "\n";
echo "開催日：" . $event->date . "\n";
echo "開催場所：" . $event->location . "\n";


// 3. イベントの開催日までの日数を返すメソッドを実行し、その結果を出力する
$daysRemaining = $event->getDaysUntilEvent();
echo "開催日まであと " . $daysRemaining . " 日です。\n";
        ?>
    </p>


    <!-- プロパティの定義:外部からアクセスして値を出力するため、アクセス修飾子は public に設定しています。
メソッド (getDaysUntilEvent):PHP標準の DateTime クラスを使用しています。diff() メソッドで現在日時と開催日の差分を取得し、format('%a') を使って「総日数」を取得して返します。
実行部分:
date('Y-m-d', strtotime('+30 days')) を使うことで、実行したタイミングから見て常に「未来の日付」が設定されるようにしています。 -->

</body>
</html>
