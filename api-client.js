/* Static hosting remains a demo; API mode never claims to send to suppliers. */
'use strict';
let apiReady=false;
let submitting=false;
let pendingRequestKey=null;
const apiText={
ru:{offline:'Демо без сервера',online:'База подключена · учебные данные',contact:'Контакт для связи (email или телефон)',send:'Сохранить заявку',note:'Заявка сохраняется на сервере. Производителю не отправляется. Не используйте реальные персональные данные в демонстрации.',saved:'Заявка сохранена',failed:'Не удалось сохранить заявку. Корзина сохранена — повторите попытку.',loading:'Подключение к базе…',demo:'Демонстрация: заявка не сохраняется. Запустите python3 server/app.py.',missing:'Укажите контакт: от 5 до 160 символов.'},
kk:{offline:'Серверсіз демо',online:'База қосылды · оқу деректері',contact:'Байланыс (email немесе телефон)',send:'Сұранысты сақтау',note:'Сұраныс серверде сақталады. Өндірушіге жіберілмейді. Демода нақты жеке деректерді пайдаланбаңыз.',saved:'Сұраныс сақталды',failed:'Сақтау мүмкін болмады. Себет сақталды — қайта көріңіз.',loading:'Базаға қосылу…',demo:'Демо: сұраныс сақталмайды. python3 server/app.py іске қосыңыз.',missing:'5–160 таңбадан тұратын байланыс дерегін енгізіңіз.'},
en:{offline:'Offline demo',online:'Database connected · sample data',contact:'Contact (email or phone)',send:'Save request',note:'Saved on this server; not sent to a manufacturer. Use sample contact details for this demo.',saved:'Request saved',failed:'Could not save. Your cart is intact; please retry.',loading:'Connecting to database…',demo:'Demo: no request saved. Run python3 server/app.py.',missing:'Enter contact details between 5 and 160 characters.'}
};
const at=k=>apiText[lang][k];
function updateApiLabels(){
 const badge=document.querySelector('#apiStatus');if(!badge)return;
 badge.textContent=at(apiReady?'online':'offline');
 document.querySelector('#contactLabel').textContent=at('contact');
 document.querySelector('#checkoutButton').textContent=at('send');
 document.querySelector('[data-i18n="checkoutNote"]').textContent=at('note');
}
async function sendPurchaseRequest(){
 if(submitting)return;
 if(!cart.length){showToast(t('emptyCart'));return;}
 if(!apiReady){showToast(at('demo'));return;}
 const contact=document.querySelector('#requestContact').value.trim();
 if(contact.length<5||contact.length>160){showToast(at('missing'));document.querySelector('#requestContact').focus();return;}
 const items=cart.map(({productId,makerId,qty,destination,mode})=>({productId,makerId,qty,destination,mode}));
 const fingerprint=JSON.stringify({contact,items});
 if(!pendingRequestKey||pendingRequestKey.fingerprint!==fingerprint)pendingRequestKey={fingerprint,key:crypto.randomUUID()};
 submitting=true;const button=document.querySelector('#checkoutButton');button.disabled=true;
 try{
  const response=await fetch('/api/requests',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contact,items,requestKey:pendingRequestKey.key}),signal:AbortSignal.timeout(10000)});
  const result=await response.json();if(!response.ok)throw new Error(result.error||at('failed'));
  document.querySelector('#requestReceipt').textContent=`${at('saved')}: ${result.id} · ${formatPrice(result.total)}`;
  cart=[];saveCart();renderCart();pendingRequestKey=null;document.querySelector('#requestContact').value='';
 }catch(error){showToast(error.name==='TypeError'||error.name==='TimeoutError'?at('failed'):error.message);}
 finally{submitting=false;button.disabled=false;}
}
document.addEventListener('DOMContentLoaded',async()=>{
 const badge=document.createElement('span');badge.id='apiStatus';badge.className='api-status';badge.textContent=at('loading');document.querySelector('.demo-ribbon').after(badge);
 const form=document.createElement('div');form.className='request-form';
 form.innerHTML='<label id="contactLabel" for="requestContact"></label><input id="requestContact" type="text" maxlength="160" autocomplete="off" placeholder="demo@example.com"><p id="requestReceipt" role="status"></p>';
 document.querySelector('#checkoutButton').before(form);
 document.querySelector('#languageSelect').addEventListener('change',updateApiLabels);
 try{
  if(location.protocol==='file:')throw new Error('Static demo');
  const response=await fetch('/api/catalog',{signal:AbortSignal.timeout(4000)});if(!response.ok)throw new Error('No API');
  const data=await response.json();if(!Array.isArray(data.products)||!data.products.length||!Array.isArray(data.manufacturers))throw new Error('Invalid catalog');
  PRODUCTS.splice(0,PRODUCTS.length,...data.products);MANUFACTURERS.splice(0,MANUFACTURERS.length,...data.manufacturers);
  cart=cart.filter(i=>PRODUCTS.some(p=>p.id===i.productId&&p.offers.some(o=>o.maker===i.makerId)));
  apiReady=true;applyI18n();saveCart();
 }catch{apiReady=false;}
 updateApiLabels();
});
