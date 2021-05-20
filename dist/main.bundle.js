(()=>{"use strict";var t={};function e(){return null===localStorage.getItem("tasks")?[]:JSON.parse(localStorage.getItem("tasks"))}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.p,t.p,t.p;var r=document.getElementById("task_input"),l=document.getElementById("submit_task"),i=document.getElementById("toggle_completed");var s=document.getElementById("minutes"),c=document.getElementById("pomodoro_counter");function d(){return null===localStorage.getItem("pomodoros")?0:parseInt(localStorage.getItem("pomodoros"))}function m(){return{workTime:null===localStorage.getItem("workTime")?25:parseInt(localStorage.getItem("workTime")),shortBreakTime:null===localStorage.getItem("shortBreakTime")?5:parseInt(localStorage.getItem("shortBreakTime")),longBreakTime:null===localStorage.getItem("longBreakTime")?15:parseInt(localStorage.getItem("longBreakTime"))}}var u,p,g,v=document.getElementById("start_timer"),k=document.getElementById("pause_timer"),b=document.getElementById("pomodoro_counter"),E=document.getElementById("timer"),f=document.getElementById("pomodoro_state"),y=document.getElementById("minutes"),I=document.getElementById("seconds"),S=document.getElementById("sound"),_=document.querySelector(".timer__panel"),x=document.getElementById("work_input"),C=document.getElementById("short_input"),h=document.getElementById("long_input"),L=0,w=d();document.addEventListener("DOMContentLoaded",(function(t){var n,a,B,O;n=document.querySelector(".tasks__list"),a=e(),B=document.createDocumentFragment(),0===a.length?n.innerHTML='\n            <div class="empty">\n                <i class="far fa-clipboard"></i>\n                <span>Start adding some tasks!</span>\n            </div>\n        ':(a.forEach((function(t){var e=document.createElement("li");e.classList.add("task__li"),e.innerHTML='\n                <div class="task '.concat(t.completed?"completed":"",'">\n                    <div class="task__text" data-id="').concat(t.id,'">\n                        ').concat(t.text,'\n                    </div>\n                    <div class="task__controls">\n                        <button id="toggle_task"><i class="fas fa-check"></i></button>\n                        <button id="edit_task"><i class="fas fa-edit"></i></button>\n                        <button id="delete_task"><i class="fas fa-trash"></i></button>\n                    </div>\n                </div>\n            '),B.appendChild(e)})),n.appendChild(B)),document.addEventListener("click",(function(t){switch(t.preventDefault(),t.target.parentElement.id){case"delete_task":return function(t){var n=t.target.parentElement.parentElement.previousElementSibling.dataset.id,o=e().filter((function(t){return t.id!==parseInt(n)}));t.target.parentElement.parentElement.parentElement.parentElement.remove(),localStorage.setItem("tasks",JSON.stringify(o))}(t);case"edit_task":return function(t){var e=t.target.parentElement.parentElement.previousElementSibling.dataset.id,n=t.target.parentElement.parentElement.previousElementSibling.textContent.trim();r.value=n,l.textContent="Edit",r.previousElementSibling.textContent="Edit task",document.getElementById("task_id").value=e,document.querySelector(".task__panel").classList.add("active")}(t);case"toggle_task":return function(t){var n=t.target.parentElement.parentElement.previousElementSibling.dataset.id,a=e().map((function(t){return t.id===parseInt(n)?o(o({},t),{},{completed:!t.completed}):t}));localStorage.setItem("tasks",JSON.stringify(a)),t.target.parentElement.parentElement.parentElement.classList.toggle("completed"),"Show completed"===i.textContent&&(t.target.parentElement.parentElement.parentElement.parentElement.style.display="none")}(t);default:return}})),document.addEventListener("click",(function(t){if(t.preventDefault(),"add_task"===t.target.parentElement.id&&(document.getElementById("task_input").value="",document.getElementById("task_id").value=null,document.getElementById("submit_task").textContent="Add",document.getElementById("form__label").textContent="New task",document.querySelector(".task__panel").classList.add("active")),"cancel_task"===t.target.id&&document.querySelector(".task__panel").classList.remove("active"),"submit_task"===t.target.id){if("Add"===document.getElementById("submit_task").textContent)return function(t){var n=t.target.parentElement.previousElementSibling.value||Date.now(),o={text:t.target.parentElement.previousElementSibling.previousElementSibling.value.trim(),id:n,completed:!1},a=e();a.push(o),localStorage.setItem("tasks",JSON.stringify(a)),document.querySelector(".task__panel").classList.remove("active"),document.body.style.position="initial",location.reload()}(t);if("Edit"===document.getElementById("submit_task").textContent)return function(t){console.log(t.target.parentElement.previousElementSibling.previousElementSibling.value);var n=parseInt(t.target.parentElement.previousElementSibling.value),o=t.target.parentElement.previousElementSibling.previousElementSibling.value,a=e().map((function(t){return t.id===n?{text:o,id:n}:t}));localStorage.setItem("tasks",JSON.stringify(a)),document.querySelector(".task__panel").classList.remove("active"),location.reload()}(t)}})),document.addEventListener("click",(function(t){if("toggle_completed"===t.target.id&&"Hide completed"===t.target.textContent){var e=document.querySelectorAll(".task"),n=document.getElementById("toggle_completed");return e.forEach((function(t){t.classList.contains("completed")&&(t.parentElement.style.display="none")})),void(n.textContent="Show completed")}if("toggle_completed"===t.target.id&&"Show completed"===t.target.textContent){var o=document.querySelectorAll(".task"),a=document.getElementById("toggle_completed");return o.forEach((function(t){t.classList.contains("completed")&&(t.parentElement.style.display="block")})),void(a.textContent="Hide completed")}})),O=m().workTime,s.textContent=O,c.textContent=d()>0?"You've completed ".concat(d()," pomodoros"):null,function(){var t=m(),e=t.workTime,n=t.shortBreakTime,o=t.longBreakTime;document.addEventListener("click",(function(t){if("start_timer"===t.target.id)if(y.textContent==e){E.classList.add("work"),E.classList.remove("break"),f.textContent="Work time",k.textContent="Pause",v.disabled=!0,k.disabled=!1;var a=m().workTime;u=a,p=0,L++,g=setInterval((function(){y.textContent=u,I.textContent=p<10?"0".concat(p):p,0===u&&0===p?(clearInterval(g),S.play(),y.textContent=4===L?o:n,v.disabled=!1,k.disabled=!0,E.classList.add("break"),E.classList.remove("work"),f.textContent=4===L?"Long break":"Short break",w++,localStorage.setItem("pomodoros",w),b.textContent="You've completed ".concat(w," pomodoros")):0===p?(p=59,u--):p--}),1e3)}else if(y.textContent==n)E.classList.add("break"),E.classList.remove("work"),f.textContent="Short break",v.disabled=!0,k.disabled=!1,k.textContent="Skip",u=n,p=0,g=setInterval((function(){y.textContent=u,I.textContent=p<10?"0".concat(p):p,0===u&&0===p?(clearInterval(g),S.play(),y.textContent=e,v.disabled=!1,k.disabled=!0,f.textContent="Work time",E.classList.add("work"),E.classList.remove("break")):0===p?(p=59,u--):p--}),1e3);else if(y.textContent==o){E.classList.add("break"),E.classList.remove("work"),f.textContent="Long break",v.disabled=!0,k.disabled=!1,k.textContent="Skip";var r=m().longBreakTime;u=r,p=0,g=setInterval((function(){y.textContent=u,I.textContent=p<10?"0".concat(p):p,0===u&&0===p?(clearInterval(g),S.play(),y.textContent=e,L=0,v.disabled=!1,k.disabled=!0,f.textContent="Work time",E.classList.add("work"),E.classList.remove("break")):0===p?(p=59,u--):p--}),1e3)}if("pause_timer"===t.target.id&&("Pause"===t.target.textContent?(clearInterval(g),k.textContent="Resume"):"Resume"===t.target.textContent&&(g=setInterval((function(){y.textContent=u,I.textContent=p<10?"0".concat(p):p,0===u&&0===p?(clearInterval(g),S.play(),y.textContent=4===L?o:n,k.textContent="Pause",v.disabled=!1,k.disabled=!0,E.classList.add("break"),E.classList.remove("work"),f.textContent=4===L?"Long break":"Short break",w++,localStorage.setItem("pomodoros",w),b.textContent="You've completed ".concat(w," pomodoros")):0===p?(p=59,u--):p--}),1e3),k.textContent="Pause"),"Skip"===t.target.textContent&&(clearInterval(g),v.disabled=!1,k.disabled=!0,k.textContent="Pause",E.classList.add("work"),E.classList.remove("break"),f.textContent="Work time",y.textContent=e,I.textContent="00")),"timer_config"===t.target.parentElement.id&&_.classList.add("active"),"cancel_timer"===t.target.id&&_.classList.remove("active"),"submit_timer"===t.target.id){var l=Math.floor(parseInt(x.value)),i=Math.floor(parseInt(C.value)),s=Math.floor(parseInt(h.value));localStorage.setItem("workTime",l.toString()),localStorage.setItem("shortBreakTime",i.toString()),localStorage.setItem("longBreakTime",s.toString()),_.classList.remove("active"),location.reload()}"restart_counter"===t.target.id&&(t.preventDefault(),localStorage.setItem("pomodoros","0"),location.reload())}))}()}))})();