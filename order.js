const quickOrder=[
  ['Caffè Latte',4.49,1],
  ['Butter Croissant',3.49,1],
  ['Chicken Pesto Wrap',9.49,0],
  ['Chocolate Brownie',3.99,0],
  ['Cold Brew',4.49,0],
  ['Egg & Cheese Croissant',6.99,0]
];
const list=document.querySelector('#builderList');
list.innerHTML=quickOrder.map((x,i)=>`<div class="builderItem"><div><span class="tag">QUICK PICK</span><h3>${x[0]}</h3><p class="quickPrice">$${x[1].toFixed(2)}</p><input class="notes" id="note${i}" placeholder="Notes (optional)"></div><div class="qtyBlock"><label for="qty${i}">Qty</label><input id="qty${i}" type="number" min="0" value="${x[2]}" aria-label="Quantity for ${x[0]}" oninput="calc()"></div><strong class="lineTotal" id="line${i}">$${(x[1]*x[2]).toFixed(2)}</strong></div>`).join('');
function calc(){let sub=0;quickOrder.forEach((x,i)=>{let q=Math.max(0,+document.querySelector('#qty'+i).value||0),line=x[1]*q;sub+=line;document.querySelector('#line'+i).textContent='$'+line.toFixed(2)});let tax=sub*.06,tip=Math.max(0,+document.querySelector('#tip').value||0);osub.textContent='$'+sub.toFixed(2);otax.textContent='$'+tax.toFixed(2);ototal.textContent='$'+(sub+tax+tip).toFixed(2)}
document.querySelector('#tip').oninput=calc;document.querySelector('#place').onclick=()=>{let q=quickOrder.reduce((a,_,i)=>a+(+document.querySelector('#qty'+i).value||0),0);let t=document.querySelector('#toast');t.textContent=q?'Order demo ready — thank you!':'Choose at least one item';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)};document.querySelector('.menuBtn').onclick=()=>document.querySelector('.nav nav').classList.toggle('open');calc();
