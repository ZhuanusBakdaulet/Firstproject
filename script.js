/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
var numberOfFilms;
function start(){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели ?', '');
    while(numberOfFilms ==''|| numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели ?', '');
    }
}
start();
var personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
function rememberMyFilms(){
    var i = 0;
    while(i < 2){
        var c = prompt('Один из последних просмотренных фильмов?','');
        var d= prompt('На сколько оцените его?','');
        i++;
        if(c != null && d !=null && c != ''&& d != ''&& c.length < 50 && d.length < 50){
            personalMovieDB.movies[c]=d;
            console.log('da');
        }else{
            i--;
        }  
    };
}
rememberMyFilms();
function detectPersonalLevel(){
if(personalMovieDB.count < 10){
    alert('Просмотрено мало фильмов');
}else if(personalMovieDB.count >10 || personalMovieDB.count < 30){
    alert('Вы классический зритель');
}else if (personalMovieDB.count > 30){
    alert('Вы киноман');
}else{
    alert('Произошла ошибка');
}
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
function writeYourGenres(){
    var genre ;
    for(let i = 1; i < 4; i++){
        genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(genre);
    }
}
writeYourGenres();