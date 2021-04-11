<!DOCTYPE html>
<html lang="en">
<head>
    <title>Контакты</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"> 
        <link rel="shortcut icon" href="img/favicon.png" type="image/png">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/adaptive.css">
        <meta http-equiv="Content-type"content="text/html;  charset=UTF-8"/>
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
</head>
<body>
    <?php include_once 'header2.php' ?>
    <?php include_once 'popapex.php' ?>
    <div class="p4c1">
        <div class="p4c1_cont">
            <p class="menu2"><a href="index.php">Главная</a> / Консультация</p>
            <div class="blolock">
                <div class="bup">
                    <p class="bp1">Бесплатная консультация</p>
                    <p class="bp2">Укажите свои данные для получения бесплатной консультации от специалиста</p>
                </div>
                <div class="inn">
                    <form id="formq" action="send.php" method="POST">
                        <input class="fname" placeholder="ФИО" required pattern="[A-z,А-я]*" minlength="2" maxlength="30" type="text" name="name" id="name">
                        <input placeholder="Телефон" required
                        class="mphone" type="text" name="phone" id="phone">
                        <input class="email" placeholder="Почта" required type="email" name="mail" id="mail">
                        <button class="btnf" type="submit">Записаться</button>
                    </form>
                </div>
            </div>
            <div class="tnx">
                <p class="pp1">Спасибо!</p>
                <p class="pp2">Наши специалисты наберут Вас, чтобы уточнить детали с телефона:</p>
                <p class="pp3">+ 7 800 000 00 00</p>
            </div>
        </div>
    </div>
    <div class="container-8">
        <div class="container-8_contant">
            <img src="img/telegOrange.svg">
            <div class="text">
                <p>Узнавайте первыми обо всех новинках автоматизации юридического бизнеса — в телеграме Femida</p>
                <a href="#" class="btn-5">Подписаться</a>
            </div>
        </div>
    </div>
    <div class="btnUp"></div>
    <?php include_once 'footer.php' ?>
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="js/jquery.maskedinput.js"></script>
    <script src="js/script.js"></script>
</body>
</html>