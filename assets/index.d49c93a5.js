import{aa as C,o as n,i as a,l as s,t as c,ab as _,ac as h,Y as f,n as y,r as k,F as m,j as T,g as E,c as b,Z as w,f as x,e as S}from"./vendor.9e29557b.js";import{_ as v}from"./index.13f0011e.js";const L={name:"Todo",directives:{focus(e,{value:t},{context:l}){t&&l.$nextTick(()=>{e.focus()})}},props:{todo:{type:Object,default:function(){return{}}}},data(){return{editing:!1}},methods:{deleteTodo(e){this.$emit("deleteTodo",e)},editTodo({todo:e,value:t}){this.$emit("editTodo",{todo:e,value:t})},toggleTodo(e){this.$emit("toggleTodo",e)},doneEdit(e){const t=e.target.value.trim(),{todo:l}=this;t?this.editing&&(this.editTodo({todo:l,value:t}),this.editing=!1):this.deleteTodo({todo:l})},cancelEdit(e){e.target.value=this.todo.text,this.editing=!1}}},D={class:"view"},z=["checked"],B=["textContent"],A=["value"];function K(e,t,l,u,i,o){const g=C("focus");return n(),a("li",{class:y([{completed:l.todo.done,editing:i.editing},"todo"])},[s("div",D,[s("input",{checked:l.todo.done,class:"toggle",type:"checkbox",onChange:t[0]||(t[0]=d=>o.toggleTodo(l.todo))},null,40,z),s("label",{onDblclick:t[1]||(t[1]=d=>i.editing=!0),textContent:c(l.todo.text)},null,40,B),s("button",{class:"destroy",onClick:t[2]||(t[2]=d=>o.deleteTodo(l.todo))})]),_(s("input",{value:l.todo.text,class:"edit",onKeyup:[t[3]||(t[3]=f((...d)=>o.doneEdit&&o.doneEdit(...d),["enter"])),t[4]||(t[4]=f((...d)=>o.cancelEdit&&o.cancelEdit(...d),["esc"]))],onBlur:t[5]||(t[5]=(...d)=>o.doneEdit&&o.doneEdit(...d))},null,40,A),[[h,i.editing],[g,i.editing]])],2)}var N=v(L,[["render",K]]);const O="todos",p={all:e=>e,active:e=>e.filter(t=>!t.done),completed:e=>e.filter(t=>t.done)},V=[{text:"star this repository",done:!1},{text:"fork this repository",done:!1},{text:"follow author",done:!1},{text:"vue-element-admin",done:!0},{text:"vue",done:!0},{text:"element-ui",done:!0},{text:"axios",done:!0},{text:"webpack",done:!0}],j={components:{Todo:N},data(){return{visibility:"all",filters:p,todos:V}},computed:{allChecked(){return this.todos.every(e=>e.done)},filteredTodos(){return p[this.visibility](this.todos)},remaining(){return this.todos.filter(e=>!e.done).length}},methods:{pluralize(e,t){return e===1?t:t+"s"},capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)},setLocalStorage(){window.localStorage.setItem(O,JSON.stringify(this.todos))},addTodo(e){const t=e.target.value;t.trim()&&(this.todos.push({text:t,done:!1}),this.setLocalStorage()),e.target.value=""},toggleTodo(e){e.done=!e.done,this.setLocalStorage()},deleteTodo(e){this.todos.splice(this.todos.indexOf(e),1),this.setLocalStorage()},editTodo({todo:e,value:t}){e.text=t,this.setLocalStorage()},clearCompleted(){this.todos=this.todos.filter(e=>!e.done),this.setLocalStorage()},toggleAll({done:e}){this.todos.forEach(t=>{t.done=e,this.setLocalStorage()})}}},F={class:"todoapp"},I={class:"header"},Y={class:"main"},G=["checked"],J=s("label",{for:"toggle-all"},null,-1),M={class:"todo-list"},R={class:"footer"},U={class:"todo-count"},Z={class:"filters"},q=["onClick"];function H(e,t,l,u,i,o){const g=k("todo");return n(),a("section",F,[s("header",I,[s("input",{class:"new-todo",autocomplete:"off",placeholder:"Todo List",onKeyup:t[0]||(t[0]=f((...d)=>o.addTodo&&o.addTodo(...d),["enter"]))},null,32)]),_(s("section",Y,[s("input",{id:"toggle-all",checked:o.allChecked,class:"toggle-all",type:"checkbox",onChange:t[1]||(t[1]=d=>o.toggleAll({done:!o.allChecked}))},null,40,G),J,s("ul",M,[(n(!0),a(m,null,T(o.filteredTodos,(d,r)=>(n(),b(g,{key:r,todo:d,onToggleTodo:o.toggleTodo,onEditTodo:o.editTodo,onDeleteTodo:o.deleteTodo},null,8,["todo","onToggleTodo","onEditTodo","onDeleteTodo"]))),128))])],512),[[h,i.todos.length]]),_(s("footer",R,[s("span",U,[s("strong",null,c(o.remaining),1),E(" "+c(o.pluralize(o.remaining,"item"))+" left ",1)]),s("ul",Z,[(n(!0),a(m,null,T(i.filters,(d,r)=>(n(),a("li",{key:r},[s("a",{class:y({selected:i.visibility===r}),onClick:w(X=>i.visibility=r,["prevent"])},c(o.capitalize(r)),11,q)]))),128))])],512),[[h,i.todos.length]])])}var P=v(j,[["render",H]]);const Q={class:"container"},W={setup(e){return(t,l)=>{const u=k("el-row");return n(),a("div",Q,[x(u,null,{default:S(()=>[x(P)]),_:1})])}}};var te=v(W,[["__scopeId","data-v-668c2164"]]);export{te as default};
