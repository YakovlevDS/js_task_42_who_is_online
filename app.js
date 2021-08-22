 // ? Task:Тебе нужно показать юзерам кто из их друзей онлайн и готов к общению! Создай функцию whoIsOnline, которая принимает массив объектов friends и определяет кто из них online, offline или away. Если у юзера стоит статус online, но его не было в сети более 10 минут (lastActivity > 10), то можно считать, что его статус отныне away.

// Пример входящих данных:

// [{
//   username: 'Alice',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }]
// Результат функции whoIsOnline:

// {
//   online: ['Alice'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// Если на сайте нет активных юзеров, то результат должен выглядить так:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// Если ваших друзей совсем нет в чате, то в функцию прийдет пустой массив []. В таком случае нужно вернуть пустой обьект {}.


// Solution 1
function whoIsOnline(friends) {
    let obj = {};
      let away = [];
      let online = [];
     let offline = [];
    
    friends.map(item => {
       
        if (item.status === "online" && item.lastActivity > 10) {
            away.push(item.username);
        }
        if (item.status === "online" && item.lastActivity <= 10) {
            online.push(item.username);
        }
        if (item.status === "offline") {
            offline.push(item.username);
        }
        
        return ''
    })
    obj.away = away
    obj.online = online
    obj.offline = offline
    return obj;
 }



console.log(whoIsOnline([
  {
    username: "Alice",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  }
]));


// ! Explanation: 
