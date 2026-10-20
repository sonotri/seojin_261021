// 섬 번호는 지도 위 버튼의 data-id 순서와 일치합니다.
// 재료 및 레시피는 이 배열에서 자유롭게 수정할 수 있습니다.
const recipes = [
  { title:'초콜릿 체리 섬', subtitle:'THE CHOCOLATE CHERRY ISLE',
    ingredients:['고쿠모찌 핫케이크 가루 150g','우유 100ml','계란 1알','모리나가 초코시럽','스프링클','휩크림','통조림 체리 1개'],
    method:['볼에 계란 1알과 우유 100ml를 넣고 골고루 섞어주세요. 고쿠모찌 가루 150g을 넣어 가루가 보이지 않을 정도로 부드럽게 섞습니다.','달군 프라이팬을 잠시 식힌 뒤 반죽을 나누어 붓고 약불에서 약 3분 굽습니다. 표면에 작은 기포가 올라오면 뒤집어 약 2분 더 익혀주세요.','구운 핫케이크를 겹쳐 올리고 충분히 식지 않은 따뜻한 표면에 초코시럽을 원형으로 둘러주세요.','가운데에 휩크림을 소복하게 올린 다음 스프링클을 뿌리고, 물기를 뺀 통조림 체리 한 알을 맨 위에 얹어 완성합니다.'],
    note:'달콤한 초콜릿 해안 위에 새빨간 체리 등대가 서 있는 작은 디저트 섬.' },
  { title:'베리군도', subtitle:'THE BERRY ARCHIPELAGO',
    ingredients:['모리나가 핫케이크 가루 300g','우유 200ml','계란 2알','블루베리 한 주먹','산딸기 8알','바나나 반 개'],
    method:['블루베리와 산딸기를 씻어 물기를 없애고, 바나나 반 개는 동그랗게 썰어주세요.','큰 볼에서 계란 2알과 우유 200ml를 먼저 섞은 뒤 모리나가 가루 300g을 넣어 가볍게 섞습니다. 작은 덩어리가 조금 남아도 괜찮아요.','달군 팬을 잠시 식히고 약불로 낮춘 뒤 반죽을 나누어 붓습니다. 한 면을 약 3분, 뒤집어서 약 2분 동안 노릇하게 구워주세요.','핫케이크를 크기가 다른 섬처럼 겹쳐 펼치고 바나나를 해안선을 따라 놓습니다. 블루베리와 산딸기를 군락처럼 모아 올려 열매 가득한 군도를 완성합니다.'],
    note:'세 가지 과일의 상큼함이 폭신한 핫케이크 사이를 여행하는 가장 커다란 군도.' },
  { title:'황금 시럽 섬', subtitle:'THE GOLDEN SYRUP ISLE',
    ingredients:['모리나가 핫케이크 가루 150g','우유 100ml','계란 1알','모리나가 메이플 시럽','버터 한 덩이'],
    method:['볼에 계란 1알과 우유 100ml를 섞고 모리나가 가루 150g을 넣어 가볍게 섞어주세요.','중불로 예열한 팬을 젖은 행주 위에서 잠시 식힌 후 약불로 줄입니다. 반죽을 동그랗게 부어 약 3분 굽고, 기포가 보이면 뒤집어 약 2분 더 구워주세요.','따뜻한 핫케이크를 포개어 높이를 만들고 꼭대기에 버터 한 덩이를 얹습니다.','모리나가 메이플 시럽을 버터 위에서부터 천천히 부어 가장자리로 흘러내리게 해주세요. 황금빛 시럽 강이 흐르는 섬이 완성됩니다.'],
    note:'버터가 녹아 만든 계곡을 따라 달콤한 메이플 강물이 흐르는 섬.' },
  { title:'붉은 과일 섬', subtitle:'THE RUBY FRUIT ISLE',
    ingredients:['고쿠모찌 핫케이크 가루 300g','우유 200ml','계란 2알','딸기잼','딸기 4알','슬라이스 아몬드'],
    method:['딸기 4알을 씻어 물기를 닦은 뒤 얇게 썰거나 먹기 좋은 크기로 잘라주세요.','볼에 계란 2알과 우유 200ml를 섞고 고쿠모찌 가루 300g을 넣어 뭉친 가루가 풀릴 정도로 섞습니다.','팬을 예열했다가 살짝 식힌 뒤 약불에서 반죽을 나누어 굽습니다. 약 3분 뒤 기포가 올라오면 뒤집고 약 2분 더 익혀주세요.','접시에 핫케이크를 겹치며 층마다 딸기잼을 얇게 발라주세요. 위에는 딸기를 여기저기 펼쳐 붉은 과수원처럼 꾸밉니다.','슬라이스 아몬드를 흩뿌려 바삭한 식감을 더하고 잼을 조금 더 곁들여 마무리합니다.'],
    note:'쫀득한 핫케이크 위로 딸기잼의 붉은 길과 아몬드 조각이 이어지는 과일 섬.' },
  { title:'작은 황금 섬', subtitle:'THE LITTLE GOLDEN ISLE',
    ingredients:['모리나가 핫케이크 가루 150g','우유 100ml','계란 1알'],
    method:['볼에 계란 1알과 우유 100ml를 먼저 섞어주세요. 모리나가 가루 150g을 넣고 너무 오래 휘젓지 않도록 가볍게 섞습니다.','프라이팬을 중불로 달군 뒤 젖은 행주 위에서 잠시 식히고 약불로 줄여주세요.','반죽을 조금씩 나누어 작고 둥글게 붓습니다. 약 3분 구워 윗면에 기포가 올라오면 뒤집어 약 2분 더 구워주세요.','별도의 토핑 없이 노릇하게 구워진 표면 자체가 드러나도록 접시에 담습니다. 따뜻할 때 먹으면 담백하고 폭신한 맛을 즐길 수 있어요.'],
    note:'아무 장식도 필요 없는, 고소한 반죽 본연의 풍경이 남아 있는 작은 섬.' },
  { title:'버터 봉우리', subtitle:'THE BUTTER MOUNTAIN',
    ingredients:['모리나가 핫케이크 가루 300g','우유 200ml','계란 2알','모리나가 메이플 시럽','버터 아이스크림 스쿱으로 한 덩이'],
    method:['볼에 계란 2알과 우유 200ml를 먼저 섞고 모리나가 가루 300g을 넣어 가볍게 섞습니다.','예열했다가 살짝 식힌 팬에서 약불로 앞면 약 3분, 뒷면 약 2분씩 여러 장을 구워주세요.','따뜻한 핫케이크를 차곡차곡 겹쳐 산봉우리처럼 쌓아주세요. 버터가 잘 올라가도록 가장 윗장을 평평하게 놓습니다.','아이스크림 스쿱으로 버터를 한 덩이 떠서 꼭대기에 올립니다. 메이플 시럽을 봉우리에서부터 흘려 보내며 완성합니다.'],
    note:'둥근 버터 정상에서 메이플 시럽이 흘러내리는, 달콤하고 고소한 산맥.' }
];
const $=id=>document.getElementById(id);
const intro=$('intro'),stage=$('rollStage'),atlas=$('atlas'),recipe=$('recipe'),hint=$('hint');
let timers=[];
const later=(fn,ms)=>{const id=setTimeout(fn,ms);timers.push(id)};
function resetTimers(){timers.forEach(clearTimeout);timers=[]}
$('begin').addEventListener('click',()=>{intro.classList.add('hidden');stage.classList.remove('hide');atlas.classList.remove('open','unfurled','alive','selected');atlas.setAttribute('aria-hidden','true');closeRecipe()});
$('unroll').addEventListener('click',()=>{stage.classList.add('hide');atlas.classList.add('open');atlas.setAttribute('aria-hidden','false');later(()=>atlas.classList.add('unfurled'),120);later(()=>{atlas.classList.add('alive');hint.classList.add('show');later(()=>hint.classList.remove('show'),3200)},3300)});
function closeRecipe(){recipe.classList.remove('open');recipe.setAttribute('aria-hidden','true');atlas.classList.remove('selected')}
$('close').addEventListener('click',closeRecipe);
document.querySelectorAll('.islands button').forEach(button=>button.addEventListener('click',()=>{
 if(!atlas.classList.contains('alive'))return;
 const index=Number(button.dataset.id),item=recipes[index];
 $('number').textContent=`ISLAND NO. ${String(index+1).padStart(2,'0')}`;
 $('title').textContent=item.title;$('subtitle').textContent=item.subtitle;
 const ingredients=$('ingredients'),method=$('method');
 ingredients.replaceChildren();method.replaceChildren();
 item.ingredients.forEach(value=>{const li=document.createElement('li');li.textContent=value;ingredients.appendChild(li)});
 item.method.forEach(value=>{const li=document.createElement('li');li.textContent=value;method.appendChild(li)});
 $('recipe-note').textContent=item.note;
 document.querySelector('.recipe-content').scrollTop=0;
 atlas.classList.add('selected');recipe.classList.add('open');recipe.setAttribute('aria-hidden','false');hint.classList.remove('show');
}));
$('home').addEventListener('click',()=>{resetTimers();closeRecipe();intro.classList.remove('hidden');stage.classList.remove('hide');atlas.classList.remove('open','unfurled','alive');atlas.setAttribute('aria-hidden','true');hint.classList.remove('show')});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeRecipe()});
