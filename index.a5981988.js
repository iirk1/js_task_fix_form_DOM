var e=Array.from(document.querySelectorAll("input")),a=!0,r=!1,l=void 0;try{for(var t,o=e[Symbol.iterator]();!(a=(t=o.next()).done);a=!0){var n=t.value;"firstName"===n.name&&(n.name="First Name"),"lastName"===n.name&&(n.name="Last Name"),n.insertAdjacentHTML("beforebegin","<label class = 'field-label' for = \"".concat(n.id,'" > ').concat(n.name," </label>"));var c="".concat(n.name.toLocaleLowerCase()),m=c.charAt(0).toLocaleUpperCase()+c.slice(1);n.placeholder=m,"First name"===n.placeholder&&(n.placeholder="First Name"),"Last name"===n.placeholder&&(n.placeholder="Last Name")}}catch(e){r=!0,l=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}
//# sourceMappingURL=index.a5981988.js.map
