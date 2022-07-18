# bai_tap_game_caro
Report daily
1.	Event loop, call back
-	Event loop: là cơ chế giúp Javascript có thể thực hiện nhiều thao tác cùng một lúc (concurrent model). 
o	Event Loop có tên như vậy bởi vì có một vòng lặp vô tận trong Javascript Runtime dùng để lắng nghe các Event.
o	Sign thread, tại một thời điểm chỉ chạy một hành động.
o	Call stack: Nhiệm vụ của Event Loop rất đơn giản đó là đọc Stack và Event Queue. Nếu nhận thấy Stack rỗng nó sẽ nhặt Event đầu tiên trong Event Queue và handler (callback hoặc listener) gắn với Event đó và đẩy vào Stack.
-	Call back 
o	Callback function có thể được hiểu nôm na như sau: callback tức là ta truyền một đoạn code (Hàm A) này vào một đoạn code khác (Hàm B). Tới một thời điểm nào đó, Hàm A sẽ được hàm B gọi lại (callback).
2.	This trong JavaScrip
-	 Từ khóa this dùng để tham chiếu đến đối tượng hiện hành.
Vd: let person1 = {
   name: 'Chris',
   greeting: function() {
     alert('Hi! I\'m ' + this.name + '.');
   }
 }
 
 let person2 = {
   name: 'Brian',
   greeting: function() {
     alert('Hi! I\'m ' + this.name + '.');
   }
 }
Trong ví dụ trên, lệnh person1.greeting() sẽ cho kết quả "Hi! I'm Chris."; 
person2.greeting() thì cho kết quả là "Hi! I'm Brian.", thậm chí mã trong phương thức của chúng là giống nhau.
3.	Object trong javascript
-	Một đối tượng là một tập hợp có liên quan với nhau giữa dữ liệu hoặc các chức năng (việc này thường được thể hiện với các biến và hàm - chúng được gọi là các thuộc tính và phương thức khi được đưa vào trong các đối tượng).
4.	Prototype trong javascrip
-	Prototype là cơ chế mà các object trong javascript kế thừa các tính năng từ một object khác. Tất cả các object trong javascript đều có một prototype, và các object này kế thừa các thuộc tính (properties) cũng như phương thức (methods) từ prototype của mình.
-	Prototype rất quan trọng trong việc giúp ta truy cập tới các thuộc tính và phương thức của đối tượng. Khi chúng ta truy cập vào một Property của một Object, JavaScript sẽ tìm Property đó bên trong chính Object. Nếu không có nó sẽ tiếp tục tìm lên trên Prototype của Object và cứ tiếp tục như thế cho đến khi gặp Object.prototype thì dừng và cho ra kết quả (undefined nếu không tìm thấy).
-	Quá trình lặp lại này được gọi là chuỗi prototype (prototype chain) trong Javascript. Chính điều này cộng thuộc tính prototype của function tạo nên cơ chế kế thừa prototype-based cho Javascript.
