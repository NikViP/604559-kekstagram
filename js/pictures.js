'use strict';

var likes = [index];
var index = 15;
while (index <= 200) {
  index++;
} // объявление массива лайков от 15 до 200

var likesRand = Math.floor(Math.random() * likes.length); // вызов случайного числа лайков

var comments = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!']; // объявление массива комментариев

var commentsRand = Math.floor(Math.random() * comments.length); // вызов случайного комментария. как сделать случайный выбор ОДИН или ДВА комментария???

var description = ['Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами...',
  'Вот это тачка!']; // объявление массива описаний

var descriptionRand = Math.floor(Math.random() * description.length); // вызов случайного описания

var descriptionPhoto = []; // объявление "основного" массива фотографий

descriptionPhoto[0] = {
  'url': 'photos/1.jpg',
  'likes': likes[likesRand],
  'comments': comments[commentsRand],
  'description': description[descriptionRand]
};
descriptionPhoto[1] = {
  'url': 'photos/2.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[2] = {
  'url': 'photos/3.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[3] = {
  'url': 'photos/4.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[4] = {
  'url': 'photos/5.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[5] = {
  'url': 'photos/6.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[6] = {
  'url': 'photos/7.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[7] = {
  'url': 'photos/8.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[8] = {
  'url': 'photos/9.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[9] = {
  'url': 'photos/10.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[10] = {
  'url': 'photos/11.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[11] = {
  'url': 'photos/12.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[12] = {
  'url': 'photos/13.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[13] = {
  'url': 'photos/14.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[14] = {
  'url': 'photos/15.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[15] = {
  'url': 'photos/16.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[16] = {
  'url': 'photos/17.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[17] = {
  'url': 'photos/18.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[18] = {
  'url': 'photos/19.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[19] = {
  'url': 'photos/20.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[20] = {
  'url': 'photos/21.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[21] = {
  'url': 'photos/22.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[22] = {
  'url': 'photos/23.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[23] = {
  'url': 'photos/24.jpg',
  'likes': [],
  'comments': [],
  'description': []
};
descriptionPhoto[24] = {
  'url': 'photos/25.jpg',
  'likes': [],
  'comments': [],
  'description': []
};

