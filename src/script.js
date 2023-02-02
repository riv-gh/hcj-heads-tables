const WIDTH = 689
const MAX_FONT_SIZE = 120

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
var personListEl = document.getElementById('person-list')
var personListTranslitEl = document.getElementById('person-list-translate')
const personTableConatinerEl = document.getElementById('person-table-conatiner')
var cbTraslate = document.getElementById('cb_translate')
var cbCreate = document.getElementById('cb_create')
const btnTraslate = document.getElementById('btn_translate')
const btnCreate = document.getElementById('btn_create')
const btnNameReverse = document.getElementById('btn_name_reverse')
const btnToSmallerFont = document.getElementById('btn_to_smaller_font')
const cbImg = document.getElementById('cb_img')
const selTableType = document.getElementById('sel_table_type')
const scrollEl = document.getElementById('scroll')

const setState = () => {
    const state = JSON.parse(localStorage.getItem('state'))
    console.log("🚀 ~ file: script.js:119 ~ setState ~ state", state)
    for (si in state) {
        window[si][state[si]['property']] = state[si]['stateValue']
        console.log("🚀 ~ file: script.js:122 ~ setState ~ si", si)
        
    }
}
setState()

const saveState = () => {
    const state = {
        'cbTraslate': { 
            'property': 'checked', 
            'stateValue': cbTraslate.checked, 
        },
        'cbCreate': { 
            'property': 'checked', 
            'stateValue': cbCreate.checked, 
        },
        'personListEl': { 
            'property': 'value', 
            'stateValue': personListEl.value, 
        },
        'personListTranslitEl': { 
            'property': 'value', 
            'stateValue': personListTranslitEl.value, 
        },
    }
    localStorage.setItem('state', JSON.stringify(state))
    console.log("🚀 ~ file: script.js:145 ~ saveState ~ state", state)
}

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
        let fontSize = WIDTH/width * 70
        fontSize = fontSize>MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize  
        tableItem.style.fontSize =   fontSize+'px'
        
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
            .map(el=>{
                if (el.ua.length<2) {
                    el.ua.push('')
                    el.ua.push('')
                }
                if (el.en.length<2)
                    el.en.push('')
                return el
            })
            .map(n => ({
                ua: {
                    f: n.ua[0],
                    l: n.ua[1],
                    o: n.ua[2],
                },
                en: {
                    f: n.en[0],
                    l: n.en[1],
                },
            }))
            .map((n, i) => [
                selTableType.value==='type_en'?`
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
                `:'',
                selTableType.value==='type_ua'?`
                    ${i%2===0&&i!==0?'<div class="page-break"></div>':''}
                    ${i%2===0?'<div class="line"></div>':''}
                    <div class="table-tiem">
                        <div>
                            <span>${n.ua.f}</span>
                        </div>
                        <div>
                            <span>${n.ua.l}</span>
                        </div>
                        <div>
                            <span>${n.ua.o}</span>
                        </div>    
                        <img alt="background" src="./from_msword/image_type_ua.png">
                        <div class="item-background1"></div>
                        <div class="item-background2"></div>
                        <div class="item-background3"></div>
                    </div>
                `:'',
            ]
            .join('')).join('')
    resizeSpanFont()
}

const onScroll = ()=>{
    scrollEl.style.top = 100 * window.pageYOffset / document.body.clientHeight + 'vh'
    scrollEl.style.height = 90 * document.documentElement.clientHeight /
        document.body.clientHeight + 'vh'
}

const onEdit = ()=>{
    if (cbTraslate.checked)
        translitList()
    if(cbCreate.checked)
        createItemsElements()
    onScroll()
    saveState()
}

// const onLoad = () => {
//     const state = JSON.parse(localStorage.getItem('state'))
//     for (si in state) {
//         window[si][si.property] = si.value
//     }
//     console.log(state)
// }

const onTableTypeChange = ()=>{
    Array.from(selTableType.children)
    .map(option=>option.value)
    .forEach(cl=>{
        document.body.classList.remove(cl)
    })
    document.body.classList.add(selTableType.value)
    onEdit()
}

btnTraslate.addEventListener('click', translitList)
btnCreate.addEventListener('click', createItemsElements)

btnNameReverse.addEventListener('click', ()=>{
    personListEl.value = 
    personListEl.value
    .split('\n')
    .map(line=>line.trim())
    .filter(line=>line!='')
    .map(line=>line.split(' ').filter(word=>word!='').reverse().join(' '))
    .join('\n')
    onEdit()
})

btnToSmallerFont.addEventListener('click', ()=>{
    const tableItems = document.querySelectorAll('.table-tiem')
    const minFont = Math.min(...Array.from(tableItems).map(ti=>parseFloat(ti.style.fontSize)))
    tableItems.forEach(ti=>{ti.style.fontSize=minFont+'px'})
    
    console.log(minFont)
})

personListEl.addEventListener('keyup', onEdit)
personListTranslitEl.addEventListener('keyup', onEdit)

cbImg.addEventListener('change', ()=>{
    if (cbImg.checked) {
        document.body.classList.add('img')
    }
    else {
        document.body.classList.remove('img')
    }
    saveState()
})

cbTraslate.addEventListener('change', saveState)
cbCreate.addEventListener('change', saveState)

selTableType.addEventListener('change', onTableTypeChange)

document.addEventListener('scroll', onScroll)

// onLoad()
onTableTypeChange()