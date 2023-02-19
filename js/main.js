let quotes = [
"Ağac yaş ikən əyilməsə, əyilməz.",
"Ağac yeyən sıpa bir də xırmana girməz.",
"Ağac yıxılan gün səs eylər.",
"Ağac yıxılanda baltalı da gələr, baltasız da.",
"Ağacı baltalayanda sapı məndəndir demiş.",
"Ağacı əlinə alarsan oğru və it özünü bildirər.",
"Ağacı kəsərlər, öz səmtinə yıxılar.",
"Ağacı qurd içindən yeyər.",
"Ağacın qurdu özündən olmasaydı, min yaşardı.",
"Ağacın yumşağını qurd yeyər.",
"Ağaclar başın tərpədəndə söyüd deyər: - mən də, mən də.",
"Ağalıq istəyənin verimi gərək, Ululuq istəyənin dözümü gərək.",
"Ağalıq verimlədir, igidlik vurumla!",
"Ağanın malı çıxar, muzdurun canı.",
"Ağası güclü olan qul asi olar.",
"Ağaya ağa desən gülməyi gələr, nökərə nökər desən ağlamağı.",
"Ağçalı adamdan dağlar da qorxar.",
"Ağı gördün, qaranı unutdun?!",
"Ağı qaradan seçəndə gəl.",
"Ağıl ağıldan üstün olar."
];

const generateQuote = () => {
 let element = document.getElementById('soz')   
 let randomIndex = Math.floor(Math.random() * quotes.length)
 element.textContent = quotes[randomIndex]
 element.style.marginBottom = '10px'
}

let btn = document.querySelector('#generateBtn')
btn.addEventListener("click", generateQuote)
