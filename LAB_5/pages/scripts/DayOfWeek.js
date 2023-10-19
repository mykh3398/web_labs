const DaysOfWeek = [-1, "не визначено", 0, "Неділя", 1, "Понеділок", 2, "Вівторок", 3, "Середа", 4, "Четвер", 5, "П'ятниця", 6, "Субота"];

function DayOfWeek(pDate) {

    const date = new Date(pDate);
    // Якщо дата невалідна
    if (isNaN(date))
        return -1;
    
    console.log(date, ", day=", date.getDate(), ", month=", date.getMonth(), ", year=", date.getFullYear());

    // a = (14 − месяц) / 12
    // год = год − a
    // месяц = месяц + 12 * a − 2
    // ДеньНедели = (число + (31 * месяц) / 12 + год + год / 4 − год / 100 + год / 400) ОСТАТОК 7   

    const a = Math.trunc((14 - (date.getMonth() + 1)) / 12);   
    const y = date.getFullYear() - a;
    const m = (date.getMonth() + 1) + 12 * a - 2;
    const dayOfWeek = Math.trunc((date.getDate() + y + Math.trunc(y / 4) - Math.trunc(y / 100) + Math.trunc(y / 400) + Math.trunc((31 * m) / 12)) % 7);

    return dayOfWeek; 
}

