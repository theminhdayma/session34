// console.dir(document);
// console.log(document);

//     // query HTML element
// console.log("Thẻ HTML có id là demoID: ", document.getElementById("demoID"));
// console.log("Thẻ div ", document.getElementById("demoID2"));
// Gía trị trả về sẽ là phần tử đầu tiên được tìm thấy

//       //getElementsByClassName
// let lis = document.getElementsByClassName("list-item");
// console.log("Danh sách các thẻ Li", lis);
// Gía trị trả về là một HTML Collection (giống mảng nhuywng khác ở chỗ không sử dụng được các hàm như push, pop,...)

// let firstLi = lis[0];
// let lastLi = lis[lis.length - 1];

// console.log("Thẻ li đầu tiên: ", firstLi);
// console.log("Thẻ li cuối cùng: ", lastLi);
// // Lấy ra toàn bộ thẻ Li nằm trong lis

// for(let i=0; i<lis.length; i++){
//     console.log("Các thẻ li: ", lis[i]);
// }
// // 3. Lấy ra tất cả những thẻ có cùng kiểu ( document.getElementsByTagName (tag))

// let divs = document.getElementsByTagName("div");
// console.log("Danh sách các thẻ divs", divs);


// let h1 = document.getElementById("demoID");
// // h1.innerHTML = "<i>Hello world sau khi được cập nhật</i>";
// // h1.textContent = "<b>Đổi nội dung = text content</b>";
// // h1.textContent = "Hello nội dung đã được cập nhật";
// // console.log(h1.innerHTML);
// // console.log(h1.innerText);
// // console.log(h1.textContent);

// // console.log("id của thẻ h1", h1.id);
// // if(h1.id === "demoID"){
// //     alert("Hello world");
// // }
 
// // class
// // console.log("Danh sách class: ", h1.classList);

// let classList = h1.classList;
// // for(let i=0; i<classList.length; i++){
// //     console.log("Các class con: ", classList[i]);
// // }
// // console.log(classList);
// // classList.add("demo-class-3");
// // classList.remove("demo-class-1");
// // console.log(classList.contains("demo-class-1"));

// let h1 = document.getElementById("demoID");

// console.log(h1.style);
// h1.style.backgroundColor = "red";
// h1.style.fontSize = "20px";
// h1.style.border = "10px solid black";
// h1.style.width = "100%";
// h1.style.height = "100px";
// h1.style.alignItems = "10px";
// h1.style.borderRadius = "50%";
// h1.style.textAlign = "center";
// h1.style.lineHeight = "200px";

// let input = document.getElementById("demo-value");
// console.log("Gía trị nằm trong ô input ở thời điểm hiện tại: ", input.value);
// input.value = "Hello PTIT";

// let div = document.createElement("div");
// let li = document.createElement("li");
// let ul = document.getElementsByTagName("ul")[0]; // [ul]

// li.innerHTML = "<i>Heloo</i>";
// li.classList.add("list-item");

// ul.appendChild(li);

// console.log(div);
// console.log(li);












