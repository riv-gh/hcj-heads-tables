const WIDTH = 689
const transliteration =  (inputText) => {
    const rules = [
        {'pattern': 'а', 'replace': 'a'},
        {'pattern': 'б', 'replace': 'b'},
        {'pattern': 'в', 'replace': 'v'},
        {'pattern': 'зг', 'replace': 'zgh'},
        {'pattern': 'Зг', 'replace': 'Zgh'},
        {'pattern': 'г', 'replace': 'h'},
        {'pattern': 'ґ', 'replace': 'g'},
        {'pattern': 'д', 'replace': 'd'},
        {'pattern': 'е', 'replace': 'e'},
        {'pattern': '^є', 'replace': 'ye'},
        {'pattern': 'є', 'replace': 'ie'},
        {'pattern': 'ж', 'replace': 'zh'},
        {'pattern': 'з', 'replace': 'z'},
        {'pattern': 'и', 'replace': 'y'},
        {'pattern': 'і', 'replace': 'i'},
        {'pattern': '^ї', 'replace': 'yi'},
        {'pattern': 'ї', 'replace': 'i'},
        {'pattern': '^й', 'replace': 'y'},
        {'pattern': 'й', 'replace': 'i'},
        {'pattern': 'к', 'replace': 'k'},
        {'pattern': 'л', 'replace': 'l'},
        {'pattern': 'м', 'replace': 'm'},
        {'pattern': 'н', 'replace': 'n'},
        {'pattern': 'о', 'replace': 'o'},
        {'pattern': 'п', 'replace': 'p'},
        {'pattern': 'р', 'replace': 'r'},
        {'pattern': 'с', 'replace': 's'},
        {'pattern': 'т', 'replace': 't'},
        {'pattern': 'у', 'replace': 'u'},
        {'pattern': 'ф', 'replace': 'f'},
        {'pattern': 'х', 'replace': 'kh'},
        {'pattern': 'ц', 'replace': 'ts'},
        {'pattern': 'ч', 'replace': 'ch'},
        {'pattern': 'ш', 'replace': 'sh'},
        {'pattern': 'щ', 'replace': 'shch'},
        {'pattern': 'ьо', 'replace': 'io'},
        {'pattern': 'ьї', 'replace': 'ii'},
        {'pattern': 'ь', 'replace': ''},
        {'pattern': '^ю', 'replace': 'yu'},
        {'pattern': 'ю', 'replace': 'iu'},
        {'pattern': '^я', 'replace': 'ya'},
        {'pattern': 'я', 'replace': 'ia'},
        {'pattern': 'А', 'replace': 'A'},
        {'pattern': 'Б', 'replace': 'B'},
        {'pattern': 'В', 'replace': 'V'},
        {'pattern': 'Г', 'replace': 'H'},
        {'pattern': 'Ґ', 'replace': 'G'},
        {'pattern': 'Д', 'replace': 'D'},
        {'pattern': 'Е', 'replace': 'E'},
        {'pattern': '^Є', 'replace': 'Ye'},
        {'pattern': 'Є', 'replace': 'Ie'},
        {'pattern': 'Ж', 'replace': 'Zh'},
        {'pattern': 'З', 'replace': 'Z'},
        {'pattern': 'И', 'replace': 'Y'},
        {'pattern': 'І', 'replace': 'I'},
        {'pattern': '^Ї', 'replace': 'Yi'},
        {'pattern': 'Ї', 'replace': 'I'},
        {'pattern': '^Й', 'replace': 'Y'},
        {'pattern': 'Й', 'replace': 'I'},
        {'pattern': 'К', 'replace': 'K'},
        {'pattern': 'Л', 'replace': 'L'},
        {'pattern': 'М', 'replace': 'M'},
        {'pattern': 'Н', 'replace': 'N'},
        {'pattern': 'О', 'replace': 'O'},
        {'pattern': 'П', 'replace': 'P'},
        {'pattern': 'Р', 'replace': 'R'},
        {'pattern': 'С', 'replace': 'S'},
        {'pattern': 'Т', 'replace': 'T'},
        {'pattern': 'У', 'replace': 'U'},
        {'pattern': 'Ф', 'replace': 'F'},
        {'pattern': 'Х', 'replace': 'Kh'},
        {'pattern': 'Ц', 'replace': 'Ts'},
        {'pattern': 'Ч', 'replace': 'Ch'},
        {'pattern': 'Ш', 'replace': 'Sh'},
        {'pattern': 'Щ', 'replace': 'Shch'},
        {'pattern': 'Ь', 'replace': ''},
        {'pattern': '^Ю', 'replace': 'Yu'},
        {'pattern': 'Ю', 'replace': 'Iu'},
        {'pattern': '^Я', 'replace': 'Ya'},
        {'pattern': 'Я', 'replace': 'Ia'},
        {'pattern': '’', 'replace': ''},
        {'pattern': '\'', 'replace': ''},
        {'pattern': '`', 'replace': ''}
    ];

    let words = inputText.split(/[-_ \n]/);
    for (var n in words) {
        var word = words[n];
        for (var ruleNumber in rules) {
            word = word.replace(
                new RegExp(rules[ruleNumber]['pattern'], 'gm'),
                rules[ruleNumber]['replace']
            );
        }
        inputText = inputText.replace(words[n], word);
    }
    return inputText;
};
const personListEl = document.getElementById('person-list')
const personListTranslitEl = document.getElementById('person-list-translate')
const personTableConatinerEl = document.getElementById('person-table-conatiner')
const cbTraslate = document.getElementById('cb_translate')
const cbCreate = document.getElementById('cb_create')
const btnTraslate = document.getElementById('btn_translate')
const btnCreate = document.getElementById('btn_create')
const cbImg = document.getElementById('cb_img')
const scrollEl = document.getElementById('scroll')

String.prototype.getPersonList = function() {
    return this
                .split('\n')
                .map(el=>el.trim())
                .filter(el=>el!=='')
}

const translitList = () => {
    personListTranslitEl.value = 
        personListEl.value
            .getPersonList()
            .map(el=>transliteration(el))
            .join('\n')
}

const resizeSpanFont = () => {
    document.querySelectorAll('.table-tiem').forEach((tableItem => {
        const width = Math.max(
            ...Array.from(tableItem.querySelectorAll('div'))
                .map(div => {
                    let spanWidth = 0
                    div.querySelectorAll('span').forEach(span => {
                        spanWidth+=span.getBoundingClientRect().width
                    })
                    return spanWidth
                })
        )

        tableItem.style.fontSize=`${WIDTH/width * 70}px`
        
    }))
}

const createItemsElements = () => {
    const uaList = personListEl.value.getPersonList()
    const enList = personListTranslitEl.value.getPersonList()
    if (uaList.length !== enList.length) {   
        alert('списки не співпадають за довжиною')
        return 'списки не співпадають за довжиною'
    }
    personTableConatinerEl.innerHTML = 
        uaList
            .map((el,i) => ({
                ua: el.split(' '),
                en: enList[i].split(' '),
            }))
            .map(n => ({
                ua: {
                    f: n.ua[0],
                    l: n.ua[1],
                },
                en: {
                    f: n.en[0],
                    l: n.en[1],
                },
            }))
            .map((n, i) => `
            ${i%3===0&&i!==0?'<div class="page-break"></div>':''}
            ${i%3===0?'<div class="line"></div>':''}
            <div class="table-tiem">
                <div>
                    <span>${n.ua.f}</span>
                    <span>${n.ua.l}</span>
                </div>
                <div>
                    <span>${n.en.f}</span>
                    <span>${n.en.l}</span>
                </div>
                <img alt="background" src="./from_msword/image.png">
                <div class="item-background1"></div>
                <div class="item-background2"></div>
                <div class="item-background3"></div>
            </div>
            `).join('')
    resizeSpanFont()
}

const onScroll = ()=>{
    scrollEl.style.top = 100*window.pageYOffset/document.body.clientHeight+'vh'
    scrollEl.style.height = 
        // document.documentElement.clientHeight /
        100.0 /
        (
            (document.body.clientHeight + document.documentElement.clientHeight) /
            document.documentElement.clientHeight
        )+'vh'
}

const onEdit = ()=>{
    if (cbTraslate.checked)
        translitList()
    if(cbCreate.checked)
        createItemsElements()
    onScroll()
}

btnTraslate.addEventListener('click', translitList)
btnCreate.addEventListener('click', createItemsElements)

personListEl.addEventListener('keyup', onEdit)
personListTranslitEl.addEventListener('keyup', onEdit)

cbImg.addEventListener('change', ()=>{
    document.body.setAttribute('class', cbImg.checked?'img':'')
})

document.addEventListener('scroll', onScroll)
  
onEdit()