<h1 align="center">Привет я <a href="https://github.com/C0vpy4" target="_blank">C0vpy4</a> 
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">Я из России 🇷🇺</h3>

![Логотип](https://s9.travelask.ru/uploads/post/000/025/923/main_image/full-2af6fc8c8210d9ac04b6f99f426b45bd.jpg "Логотип Github")
<img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/simpleicons.svg" />

Краткое описание:
Проек создан для дальнейшего использования в виде шаблона

Нобходимые условия:
 Нет
 
 Как установить:
  git clone https://github.com/C0vpy4/sites.git
 
 Как использовать:
  1. Откройте проект
  2. Отредактируйте файл lilpap`s.html под себя
  <<!DOCTYPE html>
<html lang="ru">
    <head>
        <link rel="stylesheet" type="text/css" href="styles.css">
    </head>

    <body>
        <div class="container-head">
            <div class="container">
                <div class="shadow">
                    <div class="blur">
                        <div class="main">
                            <div class="logo">
                                <img src="иконка.jpg" alt="">
                            </div>
                            <div class="name">Lilpap`s</div>
                            <div class="search">
                                <div class="back">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    <footer>

    </footer>


</html>
>
  3. Если не нравится оформление отредактируйте файл styles.css                                                                                              
 
 <body{
    min-height: 100vh;
    background-color: #696969;
}

.container-head{
    width: 100%;
    height: 110px;
}

.container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 110px;
    background-color: #696969;
}

@keyframes rgb{
    0%{
        background-color: #800080;
    }
    20%{
        background-color: #0000FF;
    }
    40%{
        background-color: #00FF00;
    }
    60%{
        background-color: #FFFF00;
    }
    80%{
        background-color: #FF0000;
    }
}

.shadow{
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 1rem crimson);
    animation: blBg 5s infinite alternate;
}

@keyframes blBg{
    0%{
        filter: drop-shadow(0 0 1rem #C71585);
    }
    35%{
        filter: drop-shadow(0 0 1.2rem #00FFFF);
    }
    60%{
        filter: drop-shadow(0 0 1.3rem #FF4500);
    }
    100%{
        filter: drop-shadow(0 0 1.5rem #008000);
    }
}

.blur{
    width:  100%;
    height: 100%;
    background: #FFFFFF;
    opacity: 0.33;
    filter: blur(9px);
    filter: contrast(1.75);
}

.main{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 130px repeat(2, 1fr);
    transition-delay:5s;
}

.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid;
}

img{
    height:90px;
    width: 120px;
}

.name{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border: 0px solid;
}

.search{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid;
}

.logo:hover, .name:hover, .search:hover{
    border: 1px solid;
}

.back{
    width: 150px;
    height: 40px;
    background-color: red;
    z-index: 2;
}

.back:hover{
    border-radius: 5px;
}>

