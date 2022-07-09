(()=>{"use strict";const e=[{title:"Project-Title",desc:"Project One"},{title:"Project-Title2",desc:"Project Two"},{title:"Project-Title3",desc:"Project Three"}],t=()=>{const t=document.querySelector("#projects-list");t.textContent="",e.forEach((e=>{const n=m(".header-nav-item",e.title);n.addEventListener("click",(()=>(e=>{const t=document.querySelector(".main"),n=l("main-container"),o=i("project-title"),d=s("project-desc"),c=l("todo-container"),a=u("todo-create");o.innerText=e.title,d.innerText=e.desc,a.innerText="+",a.addEventListener("click",(()=>r())),n.append(o,d,c,a),t.textContent="",t.append(n),S()})(e))),t.append(n)}))},n=document.querySelector(".modal"),o=document.querySelector(".modal-form");document.querySelector(".modal-form-close").addEventListener("click",(()=>{n.classList.add("display-none"),o.removeEventListener("submit",d),o.removeEventListener("submit",c),o.removeEventListener("submit",a)}));const r=()=>{y("Add new todo"),o.addEventListener("submit",d),n.classList.remove("display-none")},d=e=>{const t=document.querySelector(".project-title"),r=document.querySelector(".modal-form-title-input"),c=document.querySelector(".modal-form-date-input");e.preventDefault(),L(t.innerText,r.value,c.value),n.classList.add("display-none"),o.removeEventListener("submit",d)},c=e=>{const t=document.querySelector(".modal-form-title-input"),r=document.querySelector(".modal-form-date-input");e.preventDefault(),E(e.currentTarget.currentIndex,t.value,r.value),n.classList.add("display-none"),o.removeEventListener("submit",c)},a=r=>{const d=document.querySelector(".modal-form-title-input"),c=document.querySelector(".modal-form-desc-input");r.preventDefault(),((n,o)=>{const r=((e,t)=>({title:e,desc:t}))(n,o);e.push(r),t()})(d.value,c.value),n.classList.add("display-none"),o.removeEventListener("submit",a)},l=e=>{const t=document.createElement("div");return t.classList.add(e),t},i=e=>{const t=document.createElement("h2");return t.classList.add(e),t},s=e=>{const t=document.createElement("p");return t.classList.add(e),t},u=e=>{const t=document.createElement("button");return t.classList.add(e),t},m=(e,t)=>{const n=document.createElement("li"),o=document.createElement("a");return n.classList.add(e),o.classList.add(`${e}-link`),o.innerText=t,n.append(o),n},p=e=>{const t=document.createElement("legend");return t.classList.add(e),t},v=e=>{const t=document.createElement("label");return t.classList.add(`${e}-label`),t.setAttribute("for",`${e}-input`),t},f=(e,t)=>{const n=document.createElement("input");return n.classList.add(`${e}-input`),n.setAttribute("type",t),n.setAttribute("id",`${e}-input`),n.setAttribute("name",`${e}-input`),n},y=e=>{const t=document.querySelector(".modal-form-fieldset"),n=p("modal-form-legend"),o=v("modal-form-title"),r=f("modal-form-title","text"),d=v("modal-form-date"),c=f("modal-form-date","date");n.innerText=e,o.innerText="Name",d.innerText="Date",t.textContent="",t.append(n,o,r,d,c)},x=[{type:"General",checked:!1,title:"Todo-Title",date:"2022-07-20"},{type:"General",checked:!1,title:"Todo-Title2",date:"2022-07-21"},{type:"Project-Title",checked:!1,title:"Todo-Title3",date:"2022-07-22"},{type:"General",checked:!1,title:"Todo-Title4",date:"2022-07-22"}],L=(e,t,n)=>{const o=((e,t,n)=>({type:e,checked:!1,title:t,date:n}))(e,t,n);x.push(o),S()},T=e=>{x.splice(e,1),console.log(x),S()},E=(e,t,n)=>{const o=x[e];console.log(o),o.title=t,o.date=n,S()},q=(e,t)=>{x[e].checked=t,console.log(x)},S=()=>{const e=document.querySelector(".project-title");document.querySelector(".todo-container").textContent="";const t=x.filter(((t,n)=>(t.index=n,t.type===e.innerText)));t.sort(((e,t)=>new Date(e.date).valueOf()-new Date(t.date).valueOf())),t.forEach((e=>(e=>{const t=document.querySelector(".todo-container"),r=l("todo-card"),d=(e=>{const t=document.createElement("input");return t.classList.add("todo-card-input"),t.setAttribute("type","checkbox"),t})(),a=s("todo-card-title"),i=s("todo-card-date"),m=u("todo-card-edit"),p=u("todo-card-delete");d.checked=e.checked,d.addEventListener("click",(()=>q(e.index,d.checked))),a.innerText=e.title,i.innerText=e.date,m.innerText="Edit",m.addEventListener("click",(()=>(e=>{y("Edit todo");const t=document.querySelector(".modal-form-title-input"),r=document.querySelector(".modal-form-date-input");t.value=e.title,r.value=e.date,n.classList.remove("display-none"),o.addEventListener("submit",c),o.currentIndex=e.index})(e))),p.innerText="X",p.addEventListener("click",(()=>T(e.index))),r.append(d,a,i,m,p),t.append(r)})(e)))},b=document.querySelector(".header-nav-btn"),k=document.querySelectorAll(".header-main-nav-link");b.addEventListener("click",(()=>{(e=>{const t=document.querySelector(".modal-form-fieldset"),n=p("modal-form-legend"),o=v("modal-form-title"),r=f("modal-form-title","text"),d=v("modal-form-desc"),c=(e=>{const t=document.createElement("textarea");return t.classList.add(`${e}-input`),t.setAttribute("id",`${e}-input`),t.setAttribute("name",`${e}-input`),t})("modal-form-desc");n.innerText=e,o.innerText="Project Name",d.innerText="Project Description",t.textContent="",t.append(n,o,r,d,c)})("Create new Project"),o.addEventListener("submit",a),n.classList.remove("display-none")})),k.forEach((e=>{e.addEventListener("click",(()=>{"General"===e.innerText&&(()=>{const e=document.querySelector(".main"),t=l("main-container"),n=i("project-title"),o=s("project-desc"),d=l("todo-container"),c=u("todo-create");n.innerText="General",o.innerText="A general list of random todos.",c.innerText="+",c.addEventListener("click",(()=>r())),t.append(n,o,d,c),e.textContent="",e.append(t),S()})()}))})),t(),console.log(new Date("2022-06-20").valueOf()),console.log(new Date("2022-07-20").valueOf()),console.log(new Date("2022-08-20").valueOf());const h=x.filter((function(e){return"random"===e.type}));console.log(h)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SVAsaUJBQWlCLFNBQVMsSUFBTVUsTUFFcENSLEVBQWNTLE9BQU90QixFQUFPQyxFQUFNZ0IsRUFBZUMsR0FFakROLEVBQUtOLFlBQWMsR0FDbkJNLEVBQUtVLE9BQU9ULEdBQ1pVLEtLTFlxRixTQVloQjFHLElBRUE2RSxRQUFRQyxJQUFJLElBQUlVLEtBQUssY0FBY0MsV0FDbkNaLFFBQVFDLElBQUksSUFBSVUsS0FBSyxjQUFjQyxXQUNuQ1osUUFBUUMsSUFBSSxJQUFJVSxLQUFLLGNBQWNDLFdBS25DLE1BQU1rQixFQUFPdkMsRUFBTWUsUUFFbkIsU0FBbUJDLEdBQ2YsTUFBcUIsV0FBZEEsRUFBS2YsUUFHaEJRLFFBQVFDLElBQUk2QixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvYnVpbGQtcGFnZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlLWRvbS1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQnRuLCBjcmVhdGVEaXYsIGNyZWF0ZUgyLCBjcmVhdGVQYXJhLCBjcmVhdGVUb2RvQ2FyZCB9IGZyb20gJy4vY3JlYXRlLWRvbS1lbGVtZW50cyc7XG5pbXBvcnQgeyBvcGVuTW9kYWwgfSBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7IHJlbmRlclRvZG9zLCB0b2RvcyB9IGZyb20gJy4vdG9kb3MnO1xuXG5jb25zdCBidWlsZEdlbmVyYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZURpdignbWFpbi1jb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUgyKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgY29uc3QgZGVzYyA9IGNyZWF0ZVBhcmEoJ3Byb2plY3QtZGVzYycpO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBjcmVhdGVEaXYoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYnRuID0gY3JlYXRlQnRuKCd0b2RvLWNyZWF0ZScpO1xuXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ0dlbmVyYWwnO1xuICAgIGRlc2MuaW5uZXJUZXh0ID0gJ0EgZ2VuZXJhbCBsaXN0IG9mIHJhbmRvbSB0b2Rvcy4nO1xuICAgIGJ0bi5pbm5lclRleHQgPSAnKyc7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKCkpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQodGl0bGUsIGRlc2MsIHRvZG9Db250YWluZXIsIGJ0bik7XG5cbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG4gICAgcmVuZGVyVG9kb3MoKTtcbn1cblxuY29uc3QgYnVpbGRQcm9qZWN0UGFnZSA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZURpdignbWFpbi1jb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUgyKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgY29uc3QgZGVzYyA9IGNyZWF0ZVBhcmEoJ3Byb2plY3QtZGVzYycpO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBjcmVhdGVEaXYoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYnRuID0gY3JlYXRlQnRuKCd0b2RvLWNyZWF0ZScpO1xuXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcbiAgICBkZXNjLmlubmVyVGV4dCA9IHByb2plY3QuZGVzYztcbiAgICBidG4uaW5uZXJUZXh0ID0gJysnO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbCgpKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRpdGxlLCBkZXNjLCB0b2RvQ29udGFpbmVyLCBidG4pO1xuXG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kKG1haW5Db250YWluZXIpO1xuICAgIHJlbmRlclRvZG9zKCk7XG59XG5cbmV4cG9ydCB7XG4gICAgYnVpbGRHZW5lcmFsLFxuICAgIGJ1aWxkUHJvamVjdFBhZ2UsXG59IiwiaW1wb3J0IHsgYnVpbGRQcm9qZWN0UGFnZSB9IGZyb20gXCIuL2J1aWxkLXBhZ2VzXCI7XG5pbXBvcnQgeyBjcmVhdGVOYXZJdGVtIH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50c1wiO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUHJvamVjdC1UaXRsZScsXG4gICAgICAgIGRlc2M6ICdQcm9qZWN0IE9uZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUHJvamVjdC1UaXRsZTInLFxuICAgICAgICBkZXNjOiAnUHJvamVjdCBUd28nLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Byb2plY3QtVGl0bGUzJyxcbiAgICAgICAgZGVzYzogJ1Byb2plY3QgVGhyZWUnLFxuICAgIH0sXG5dO1xuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSwgZGVzYykgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjIH07XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlLCBkZXNjKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlLCBkZXNjKTtcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHJlbmRlclByb2plY3ROYXYoKTtcbn07XG5cbmNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xufTtcblxuY29uc3QgcmVuZGVyUHJvamVjdE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWxpc3QnKTtcbiAgICBwcm9qZWN0TmF2LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBuYXZJdGVtID0gY3JlYXRlTmF2SXRlbSgnLmhlYWRlci1uYXYtaXRlbScsIHByb2plY3QudGl0bGUpO1xuICAgICAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYnVpbGRQcm9qZWN0UGFnZShwcm9qZWN0KSk7XG4gICAgICAgIHByb2plY3ROYXYuYXBwZW5kKG5hdkl0ZW0pO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIHJlbmRlclByb2plY3ROYXYsXG59IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdE1vZGFsRWxlbWVudHMsIGNyZWF0ZVRvZG9Nb2RhbEVsZW1lbnRzIH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1lbGVtZW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBlZGl0VG9kbyB9IGZyb20gXCIuL3RvZG9zXCI7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBtb2RhbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybScpO1xuXG5cbmNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybS1jbG9zZScpO1xuY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcbiAgICBtb2RhbEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgbmV3VG9kb0V2ZW50KTtcbiAgICBtb2RhbEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZWRpdFRvZG9FdmVudCk7XG4gICAgbW9kYWxGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG5ld1Byb2plY3RFdmVudCk7XG59KTtcblxuY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIGNyZWF0ZVRvZG9Nb2RhbEVsZW1lbnRzKCdBZGQgbmV3IHRvZG8nKTtcbiAgICBtb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgbmV3VG9kb0V2ZW50KTtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbn1cblxuY29uc3Qgb3BlbkVkaXRNb2RhbCA9ICh0b2RvKSA9PiB7XG4gICAgY3JlYXRlVG9kb01vZGFsRWxlbWVudHMoJ0VkaXQgdG9kbycpO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtLXRpdGxlLWlucHV0Jyk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvcm0tZGF0ZS1pbnB1dCcpO1xuXG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgZGF0ZUlucHV0LnZhbHVlID0gdG9kby5kYXRlO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgIG1vZGFsRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlZGl0VG9kb0V2ZW50KTtcbiAgICBtb2RhbEZvcm0uY3VycmVudEluZGV4ID0gdG9kby5pbmRleDtcbn1cblxuY29uc3Qgb3BlblByb2plY3RNb2RhbCA9ICgpID0+IHtcbiAgICBjcmVhdGVQcm9qZWN0TW9kYWxFbGVtZW50cygnQ3JlYXRlIG5ldyBQcm9qZWN0Jyk7XG4gICAgbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG5ld1Byb2plY3RFdmVudCk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG59XG5cbmNvbnN0IG5ld1RvZG9FdmVudCA9IChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybS10aXRsZS1pbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtLWRhdGUtaW5wdXQnKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjcmVhdGVUb2RvKHByb2plY3ROYW1lLmlubmVyVGV4dCwgdGl0bGVJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcbiAgICBtb2RhbEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgbmV3VG9kb0V2ZW50KTtcbn1cblxuY29uc3QgZWRpdFRvZG9FdmVudCA9IChlKSA9PiB7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtLXRpdGxlLWlucHV0Jyk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvcm0tZGF0ZS1pbnB1dCcpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVkaXRUb2RvKGUuY3VycmVudFRhcmdldC5jdXJyZW50SW5kZXgsIHRpdGxlSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgbW9kYWxGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGVkaXRUb2RvRXZlbnQpO1xufVxuXG5jb25zdCBuZXdQcm9qZWN0RXZlbnQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybS10aXRsZS1pbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtLWRlc2MtaW5wdXQnKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjcmVhdGVQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUsIGRlc2NJbnB1dC52YWx1ZSk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgbW9kYWxGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG5ld1Byb2plY3RFdmVudCk7XG59XG5cbmV4cG9ydCB7XG4gICAgb3Blbk1vZGFsLFxuICAgIG9wZW5FZGl0TW9kYWwsXG4gICAgb3BlblByb2plY3RNb2RhbCxcbn0iLCJpbXBvcnQgeyBvcGVuRWRpdE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgeyByZW1vdmVUb2RvLCB1cGRhdGVTdGF0dXMgfSBmcm9tICcuL3RvZG9zJztcblxuY29uc3QgY3JlYXRlRGl2ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZUgyID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGgyO1xufTtcblxuY29uc3QgY3JlYXRlUGFyYSA9IChjbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBwYXJhO1xufTtcblxuY29uc3QgY3JlYXRlQnRuID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGJ0bjtcbn07XG5cbmNvbnN0IGNyZWF0ZUNoZWNrYm94ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgcmV0dXJuIGNoZWNrYm94O1xufTtcblxuY29uc3QgY3JlYXRlTmF2SXRlbSA9IChjbGFzc05hbWUsIHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGxpLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBsaUxpbmsuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9LWxpbmtgKTtcbiAgICBsaUxpbmsuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XG5cbiAgICBsaS5hcHBlbmQobGlMaW5rKTtcblxuICAgIHJldHVybiBsaTtcbn1cblxuY29uc3QgY3JlYXRlVG9kb0NhcmQgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoJ3RvZG8tY2FyZCcpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlQ2hlY2tib3goJ3RvZG8tY2FyZC1pbnB1dCcpO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlUGFyYSgndG9kby1jYXJkLXRpdGxlJyk7XG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZVBhcmEoJ3RvZG8tY2FyZC1kYXRlJyk7XG4gICAgY29uc3QgZWRpdEJ0biA9IGNyZWF0ZUJ0bigndG9kby1jYXJkLWVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVCdG4oJ3RvZG8tY2FyZC1kZWxldGUnKTtcblxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmNoZWNrZWQ7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB1cGRhdGVTdGF0dXModG9kby5pbmRleCwgY2hlY2tib3guY2hlY2tlZCkpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XG4gICAgZGF0ZS5pbm5lclRleHQgPSB0b2RvLmRhdGU7XG4gICAgZWRpdEJ0bi5pbm5lclRleHQgPSAnRWRpdCc7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5FZGl0TW9kYWwodG9kbykpO1xuICAgIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSAnWCc7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVtb3ZlVG9kbyh0b2RvLmluZGV4KSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGNoZWNrYm94LCB0aXRsZSwgZGF0ZSwgZWRpdEJ0biwgZGVsZXRlQnRuKTtcblxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kKGNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBjcmVhdGVMZWdlbmQgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gbGVnZW5kO1xufTtcblxuY29uc3QgY3JlYXRlTGFiZWwgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfS1sYWJlbGApO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7Y2xhc3NOYW1lfS1pbnB1dGApO1xuICAgIHJldHVybiBsYWJlbDtcbn07XG5cbmNvbnN0IGNyZWF0ZUlucHV0ID0gKGNsYXNzTmFtZSwgaW5wdXRUeXBlKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfS1pbnB1dGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0VHlwZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2NsYXNzTmFtZX0taW5wdXRgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHtjbGFzc05hbWV9LWlucHV0YCk7XG4gICAgcmV0dXJuIGlucHV0O1xufTtcblxuY29uc3QgY3JlYXRlVGV4dEFyZWEgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRBcmVhLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfS1pbnB1dGApO1xuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtjbGFzc05hbWV9LWlucHV0YCk7XG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7Y2xhc3NOYW1lfS1pbnB1dGApO1xuICAgIHJldHVybiB0ZXh0QXJlYTtcbn1cblxuY29uc3QgY3JlYXRlVG9kb01vZGFsRWxlbWVudHMgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBmb3JtRmllbGRzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybS1maWVsZHNldCcpXG4gICAgY29uc3QgbGVnZW5kID0gY3JlYXRlTGVnZW5kKCdtb2RhbC1mb3JtLWxlZ2VuZCcpO1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IGNyZWF0ZUxhYmVsKCdtb2RhbC1mb3JtLXRpdGxlJyk7XG4gICAgY29uc3QgaW5wdXROYW1lID0gY3JlYXRlSW5wdXQoJ21vZGFsLWZvcm0tdGl0bGUnLCAndGV4dCcpO1xuICAgIGNvbnN0IGxhYmVsRGF0ZSA9IGNyZWF0ZUxhYmVsKCdtb2RhbC1mb3JtLWRhdGUnKTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBjcmVhdGVJbnB1dCgnbW9kYWwtZm9ybS1kYXRlJywgJ2RhdGUnKTtcblxuICAgIGxlZ2VuZC5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBsYWJlbE5hbWUuaW5uZXJUZXh0ID0gJ05hbWUnO1xuICAgIGxhYmVsRGF0ZS5pbm5lclRleHQgPSAnRGF0ZSc7XG5cbiAgICBmb3JtRmllbGRzZXQudGV4dENvbnRlbnQgPSAnJztcbiAgICBmb3JtRmllbGRzZXQuYXBwZW5kKGxlZ2VuZCwgbGFiZWxOYW1lLCBpbnB1dE5hbWUsIGxhYmVsRGF0ZSwgaW5wdXREYXRlKTtcbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdE1vZGFsRWxlbWVudHMgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBmb3JtRmllbGRzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybS1maWVsZHNldCcpXG4gICAgY29uc3QgbGVnZW5kID0gY3JlYXRlTGVnZW5kKCdtb2RhbC1mb3JtLWxlZ2VuZCcpO1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IGNyZWF0ZUxhYmVsKCdtb2RhbC1mb3JtLXRpdGxlJyk7XG4gICAgY29uc3QgaW5wdXROYW1lID0gY3JlYXRlSW5wdXQoJ21vZGFsLWZvcm0tdGl0bGUnLCAndGV4dCcpO1xuICAgIGNvbnN0IGxhYmVsRGVzYyA9IGNyZWF0ZUxhYmVsKCdtb2RhbC1mb3JtLWRlc2MnKTtcbiAgICBjb25zdCBpbnB1dERlc2MgPSBjcmVhdGVUZXh0QXJlYSgnbW9kYWwtZm9ybS1kZXNjJyk7XG5cbiAgICBsZWdlbmQuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgbGFiZWxOYW1lLmlubmVyVGV4dCA9ICdQcm9qZWN0IE5hbWUnO1xuICAgIGxhYmVsRGVzYy5pbm5lclRleHQgPSAnUHJvamVjdCBEZXNjcmlwdGlvbic7XG5cbiAgICBmb3JtRmllbGRzZXQudGV4dENvbnRlbnQgPSAnJztcbiAgICBmb3JtRmllbGRzZXQuYXBwZW5kKGxlZ2VuZCwgbGFiZWxOYW1lLCBpbnB1dE5hbWUsIGxhYmVsRGVzYywgaW5wdXREZXNjKTtcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVEaXYsXG4gICAgY3JlYXRlSDIsXG4gICAgY3JlYXRlUGFyYSxcbiAgICBjcmVhdGVCdG4sXG4gICAgY3JlYXRlSW5wdXQsXG4gICAgY3JlYXRlVG9kb0NhcmQsXG4gICAgY3JlYXRlVG9kb01vZGFsRWxlbWVudHMsXG4gICAgY3JlYXRlUHJvamVjdE1vZGFsRWxlbWVudHMsXG4gICAgY3JlYXRlTmF2SXRlbSxcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVUb2RvQ2FyZCB9IGZyb20gJy4vY3JlYXRlLWRvbS1lbGVtZW50cyc7XG5cbmNvbnN0IHRvZG9zID0gW1xuICAgIHtcbiAgICAgICAgdHlwZTogJ0dlbmVyYWwnLFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgdGl0bGU6ICdUb2RvLVRpdGxlJyxcbiAgICAgICAgZGF0ZTogJzIwMjItMDctMjAnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0eXBlOiAnR2VuZXJhbCcsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICB0aXRsZTogJ1RvZG8tVGl0bGUyJyxcbiAgICAgICAgZGF0ZTogJzIwMjItMDctMjEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0eXBlOiAnUHJvamVjdC1UaXRsZScsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICB0aXRsZTogJ1RvZG8tVGl0bGUzJyxcbiAgICAgICAgZGF0ZTogJzIwMjItMDctMjInLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0eXBlOiAnR2VuZXJhbCcsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICB0aXRsZTogJ1RvZG8tVGl0bGU0JyxcbiAgICAgICAgZGF0ZTogJzIwMjItMDctMjInLFxuICAgIH0sXG5dO1xuXG5jb25zdCB0b2RvRmFjdG9yeSA9ICh0eXBlLCB0aXRsZSwgZGF0ZSkgPT4ge1xuICAgIGNvbnN0IGNoZWNrZWQgPSBmYWxzZTtcbiAgICByZXR1cm4geyB0eXBlLCBjaGVja2VkLCB0aXRsZSwgZGF0ZSB9O1xufTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICh0eXBlLCB0aXRsZSwgZGF0ZSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvRmFjdG9yeSh0eXBlLCB0aXRsZSwgZGF0ZSk7XG4gICAgdG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICByZW5kZXJUb2RvcygpO1xufTtcblxuY29uc3QgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgY29uc29sZS5sb2codG9kb3MpXG4gICAgcmVuZGVyVG9kb3MoKTtcbn07XG5cbmNvbnN0IGVkaXRUb2RvID0gKGluZGV4LCB0aXRsZSwgZGF0ZSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gdG9kb3NbaW5kZXhdO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUb2RvKTtcbiAgICBjdXJyZW50VG9kby50aXRsZSA9IHRpdGxlO1xuICAgIGN1cnJlbnRUb2RvLmRhdGUgPSBkYXRlO1xuICAgIHJlbmRlclRvZG9zKCk7XG59O1xuXG5jb25zdCB1cGRhdGVTdGF0dXMgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgdG9kb3NbaW5kZXhdLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICBjb25zb2xlLmxvZyh0b2Rvcylcbn07XG5cbmNvbnN0IHJlbmRlclRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG4gICAgdG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgZmlsdGVyVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIHRvZG8uaW5kZXggPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIHRvZG8udHlwZSA9PT0gY3VycmVudFBhZ2UuaW5uZXJUZXh0O1xuICAgIH0pO1xuXG4gICAgZmlsdGVyVG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5kYXRlKS52YWx1ZU9mKCkgLSBuZXcgRGF0ZShiLmRhdGUpLnZhbHVlT2YoKTtcbiAgICB9KTtcblxuICAgIGZpbHRlclRvZG9zLmZvckVhY2godG9kbyA9PiBjcmVhdGVUb2RvQ2FyZCh0b2RvKSk7XG59O1xuXG5leHBvcnQge1xuICAgIHRvZG9zLFxuICAgIGNyZWF0ZVRvZG8sXG4gICAgcmVtb3ZlVG9kbyxcbiAgICBlZGl0VG9kbyxcbiAgICB1cGRhdGVTdGF0dXMsXG4gICAgcmVuZGVyVG9kb3MsXG59O1xuIiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tICcuL21vZHVsZXMvdG9kb3MuanMnO1xuaW1wb3J0IHsgYnVpbGRHZW5lcmFsIH0gZnJvbSAnLi9tb2R1bGVzL2J1aWxkLXBhZ2VzLmpzJztcbmltcG9ydCB7IG9wZW5Qcm9qZWN0TW9kYWwgfSBmcm9tICcuL21vZHVsZXMvbW9kYWwuanMnO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdE5hdiB9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0cy5qcyc7XG5cbmNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbmF2LWJ0bicpO1xuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLW1haW4tbmF2LWxpbmsnKTtcblxubmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Qcm9qZWN0TW9kYWwoKTtcbn0pXG5cbm5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3dpdGNoIChsaW5rLmlubmVyVGV4dCkge1xuICAgICAgICAgICAgY2FzZSAnR2VuZXJhbCc6XG4gICAgICAgICAgICAgICAgYnVpbGRHZW5lcmFsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUb2RheSc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdVcGNvbWluZyc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUcmFzaCc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgfSk7XG59KTtcblxucmVuZGVyUHJvamVjdE5hdigpXG5cbmNvbnNvbGUubG9nKG5ldyBEYXRlKCcyMDIyLTA2LTIwJykudmFsdWVPZigpKVxuY29uc29sZS5sb2cobmV3IERhdGUoJzIwMjItMDctMjAnKS52YWx1ZU9mKCkpXG5jb25zb2xlLmxvZyhuZXcgRGF0ZSgnMjAyMi0wOC0yMCcpLnZhbHVlT2YoKSlcblxuXG5cblxuY29uc3QgdGVzdCA9IHRvZG9zLmZpbHRlcihjaGVja1R5cGUpXG5cbmZ1bmN0aW9uIGNoZWNrVHlwZSh0b2RvKSB7XG4gICAgcmV0dXJuIHRvZG8udHlwZSA9PT0gJ3JhbmRvbSc7XG59XG5cbmNvbnNvbGUubG9nKHRlc3QpOyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzYyIsInJlbmRlclByb2plY3ROYXYiLCJwcm9qZWN0TmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJmb3JFYWNoIiwicHJvamVjdCIsIm5hdkl0ZW0iLCJjcmVhdGVOYXZJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJtYWluQ29udGFpbmVyIiwiY3JlYXRlRGl2IiwiY3JlYXRlSDIiLCJjcmVhdGVQYXJhIiwidG9kb0NvbnRhaW5lciIsImJ0biIsImNyZWF0ZUJ0biIsImlubmVyVGV4dCIsIm9wZW5Nb2RhbCIsImFwcGVuZCIsInJlbmRlclRvZG9zIiwiYnVpbGRQcm9qZWN0UGFnZSIsIm1vZGFsIiwibW9kYWxGb3JtIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5ld1RvZG9FdmVudCIsImVkaXRUb2RvRXZlbnQiLCJuZXdQcm9qZWN0RXZlbnQiLCJjcmVhdGVUb2RvTW9kYWxFbGVtZW50cyIsInJlbW92ZSIsImUiLCJwcm9qZWN0TmFtZSIsInRpdGxlSW5wdXQiLCJkYXRlSW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVRvZG8iLCJ2YWx1ZSIsImVkaXRUb2RvIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRJbmRleCIsImRlc2NJbnB1dCIsIm5ld1Byb2plY3QiLCJwcm9qZWN0RmFjdG9yeSIsInB1c2giLCJjcmVhdGVQcm9qZWN0IiwiY2xhc3NOYW1lIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImgyIiwicGFyYSIsImxpIiwibGlMaW5rIiwiY3JlYXRlTGVnZW5kIiwibGVnZW5kIiwiY3JlYXRlTGFiZWwiLCJsYWJlbCIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUlucHV0IiwiaW5wdXRUeXBlIiwiaW5wdXQiLCJmb3JtRmllbGRzZXQiLCJsYWJlbE5hbWUiLCJpbnB1dE5hbWUiLCJsYWJlbERhdGUiLCJpbnB1dERhdGUiLCJ0b2RvcyIsInR5cGUiLCJjaGVja2VkIiwiZGF0ZSIsIm5ld1RvZG8iLCJ0b2RvRmFjdG9yeSIsInJlbW92ZVRvZG8iLCJpbmRleCIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VG9kbyIsInVwZGF0ZVN0YXR1cyIsImN1cnJlbnRQYWdlIiwiZmlsdGVyVG9kb3MiLCJmaWx0ZXIiLCJ0b2RvIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInZhbHVlT2YiLCJjb250YWluZXIiLCJjaGVja2JveCIsImNyZWF0ZUNoZWNrYm94IiwiZWRpdEJ0biIsImRlbGV0ZUJ0biIsIm9wZW5FZGl0TW9kYWwiLCJjcmVhdGVUb2RvQ2FyZCIsIm5hdkJ0biIsIm5hdkxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxhYmVsRGVzYyIsImlucHV0RGVzYyIsInRleHRBcmVhIiwiY3JlYXRlVGV4dEFyZWEiLCJjcmVhdGVQcm9qZWN0TW9kYWxFbGVtZW50cyIsImxpbmsiLCJidWlsZEdlbmVyYWwiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==