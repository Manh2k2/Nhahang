const menuBar = document.querySelector(".menu-bar")
menuBar.addEventListener("click",function(){
    menuBar.classList.toggle("active")
    document.querySelector(".menu-items").classList.toggle("active")
})
const toP = document.querySelector(".top");

window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 80) //Kiểm tra xem vị trí cuộn dọc có lớn hơn 80 pixel không và thêm hoặc loại bỏ lớp "active" tương ứng với điều kiện này.
    {
        toP.classList.add("active");
    } else {
        toP.classList.remove("active");
    }
});
const menuTitle = document.querySelector(".menu-title");
menuTitle.addEventListener("click",function(x){
    if(x.target.classList.contains("menu-button")){
        const Target = x.target.getAttribute("data-title");
        menuTitle.querySelector(".active").classList.remove("active");
        x.target.classList.add("active");

        const menuTitem = document.querySelector(".menu");
        menuTitem.querySelector(".menu-item-content.active").classList.remove("active");
        menuTitem.querySelector(Target).classList.add("active")
    }
})