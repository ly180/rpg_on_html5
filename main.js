var storage = sessionStorage;

storage.setItem('name', 'aaaa');

var name = storage.getItem('name');
window.addEventListener('storage', (e) => {
    
    console.log(e.key); // key
    console.log(e.oldValue); //古い値
    console.log(e.newValue); //変更後の値
    console.log(e.storageArea); //変化があった時の、storageのデータ全体をオブジェクトで取得
    console.log(e.url); //オリジン
});