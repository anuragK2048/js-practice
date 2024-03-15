// const followerSvg = document.querySelector(".followersvg");

// const getViewportSize = function(){
    //     followerSvg.setAttribute("height",`${window.visualViewport.height}`)
    //     followerSvg.setAttribute("width",`${window.visualViewport.width}`)
    // }
const circle = document.querySelector(".cursor__follower");

const onCursorMove = function(e){
    setTimeout(function(){
        circle.style.top = `${e.clientY-35}px`;
        circle.style.left = `${e.clientX-35}px`;
    },50)
}

document.addEventListener("mousemove",onCursorMove);

document.querySelector("h1").addEventListener("mouseover",function(){
    circle.classList.add("newFollower")
    circle.classList.remove("cursor__follower")
})