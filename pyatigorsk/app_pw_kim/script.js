const conversionRates = {
    // Метрические
    km: 0.001,
    m: 1,
    dm: 10,
    cm: 100,
    mm: 1000,
    um: 1000000,
    nm: 1000000000,
    angstrom: 10000000000,
    
    // Астрономические
    pc: 3.24078e-17,
    ly: 1.057e-16,
    au: 6.68459e-12,
    light_min: 1.799e-11,
    light_sec: 2.998e-9,
    
    // Китайские
    li: 0.0002,
    yin: 0.033333,
    zhang: 0.333333,
    bu: 0.5,
    chi: 3.333333,
    cun: 33.333333,
    fen: 333.333333,
    li_small: 3333.333333,
    hao: 33333.333333,
    si: 333333.333333,
    hu: 3333333.333333,
    
    // Японские
    ri: 0.000246,
    cho: 0.0109,
    jo: 0.303,
    hiro: 0.303,
    ken: 0.606,
    shaku: 3.03,
    sun: 30.3,
    bu_jp: 303,
    rin: 3030,
    mo: 30300,
    
    // Английские/Американские
    league: 0.000179,
    mile: 0.000621371,
    land: 0.000248548,
    furlong: 0.00497097,
    bolt: 0.00497097,
    chain: 0.0497097,
    pole: 0.198839,
    rod: 0.198839,
    perch: 0.198839,
    yard: 1.09361,
    foot: 3.28084,
    span: 4.37445,
    hand: 9.8425,
    inch: 39.3701,
    line: 472.441,
    mil: 39370.1,
    microinch: 39370078.7,
    
    // Морские
    nautical_league: 0.000179,
    nautical_mile: 0.000539957,
    cable: 0.00539957,
    fathom: 0.546807,
    
    // Старорусские
    old_mile: 0.000142,
    verst: 0.000937,
    verst_mezhevaya: 0.000937,
    sazhen_kosaya: 0.197,
    sazhen: 0.4667,
    sazhen_makhovaya: 0.4667,
    arshin: 1.4,
    old_foot: 3.28084,
    pyad: 7,
    vershok: 22.4,
    old_inch: 39.3701
};

// Названия единиц измерения
const unitNames = {
    // Метрические
    km: 'Километр (км)',
    m: 'Метр (м)',
    dm: 'Дециметр (дм)',
    cm: 'Сантиметр (см)',
    mm: 'Миллиметр (мм)',
    um: 'Микрометр (мкм)',
    nm: 'Нанометр (нм)',
    angstrom: 'Ангстрем (А)',
    
    // Астрономические
    pc: 'Парсек (пк)',
    ly: 'Световой год',
    au: 'Астрономическая единица (а.е.)',
    light_min: 'Световая минута',
    light_sec: 'Световая секунда',
    
    // Китайские
    li: 'Ли (市里)',
    yin: 'Инь (引)',
    zhang: 'Жанг (市丈)',
    bu: 'Бу (步)',
    chi: 'Чи (市尺)',
    cun: 'Цунь (市寸)',
    fen: 'Фень (市分)',
    li_small: 'Ли малое (釐/厘)',
    hao: 'Хао (毫)',
    si: 'Сы (丝)',
    hu: 'Ху (忽)',
    
    // Японские
    ri: 'Ри (里)',
    cho: 'Тё (町)',
    jo: 'Дзё (丈)',
    hiro: 'Хиро (尋)',
    ken: 'Кэн (間)',
    shaku: 'Сяку (尺)',
    sun: 'Сун (寸)',
    bu_jp: 'Бу (分)',
    rin: 'Рин (厘)',
    mo: 'Мо (毛/毫)',
    
    // Английские/Американские
    league: 'Лига',
    mile: 'Миля (mi)',
    land: 'Лэнд',
    furlong: 'Фарлонг',
    bolt: 'Болт',
    chain: 'Чейн',
    pole: 'Поль',
    rod: 'Род (rd)',
    perch: 'Перч',
    yard: 'Ярд (yd)',
    foot: 'Фут (ft)',
    span: 'Спан',
    hand: 'Хенд',
    inch: 'Дюйм (in)',
    line: 'Линия',
    mil: 'Мил',
    microinch: 'Микродюйм',
    
    // Морские
    nautical_league: 'Морская лига',
    nautical_mile: 'Морская миля',
    cable: 'Кабельтов',
    fathom: 'Морская сажень',
    
    // Старорусские
    old_mile: 'Миля',
    verst: 'Верста',
    verst_mezhevaya: 'Межевая верста',
    sazhen_kosaya: 'Косая сажень',
    sazhen: 'Сажень',
    sazhen_makhovaya: 'Маховая сажень',
    arshin: 'Аршин',
    old_foot: 'Фут',
    pyad: 'Пядь',
    vershok: 'Вершок',
    old_inch: 'Дюйм'
};

function formatNumber(num) {
    if (Math.abs(num) < 0.000001) {
        return num.toExponential(6);
    } else if (Math.abs(num) > 1000000) {
        return num.toExponential(2);
    }
    return num.toFixed(6);
}

function sortNetwork(arr) {
    const n = arr.length;
    const network = [];
    const sortedArr = [...arr];
 
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            network.push([j, j + 1]);
        }
    }

    network.forEach((comparison) => {
        const [i, j] = comparison;
        if (sortedArr[i] > sortedArr[j]) {
            [sortedArr[i], sortedArr[j]] = [sortedArr[j], sortedArr[i]];
        }
    });
    
    return sortedArr;
}

function convert() {
    const input = document.getElementById('input');
    const fromUnit = document.getElementById('fromUnit');
    const resultsDiv = document.getElementById('results');
    
    if (!input.value) {
        resultsDiv.innerHTML = '';
        return;
    }
    
    const inputValue = parseFloat(input.value);
    const fromRate = conversionRates[fromUnit.value];
   
    const metersValue = inputValue / fromRate;
 
    const allValues = [];
    const results = {};
 
    for (const unit in conversionRates) {
        const convertedValue = metersValue * conversionRates[unit];
        results[unit] = convertedValue;
        allValues.push(convertedValue);
    }

    sortNetwork(allValues);

    resultsDiv.innerHTML = '';
    for (const unit in results) {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <div class="result-unit">${unitNames[unit]}</div>
            <div class="result-value">${formatNumber(results[unit])}</div>
        `;
        resultsDiv.appendChild(card);
    }
}

document.getElementById('input').addEventListener('input', convert);
document.getElementById('fromUnit').addEventListener('change', convert);

convert();