/**
 * Яндекс метрика
 */
class Metrika {

    /**
     * Конструктор
     */
    constructor() {

        /**
         * ID для яндекс метрики
         */
        this.id = 0;
    };

    /**
     * Гол, достижение цели в Метрике
     *
     * @param {string} value    - значение для яндекс метрики
     * @param {string} element  - элемент DOM (необязательный)
     * @return void
     */

    reachGoal(value, element) {

        // проверяем подключена ли яндекс метрики
        if (!window.ym) {
            return false;
        }

        // если аттрибут element не указан счетчик будет срабатывать при каждом вызове
        if (!element) {
            ym(this.id, 'reachGoal', value);
            return false;
        }

        // проверяем наличие метода dataset у элемента
        if (!element.dataset || element.dataset.toString() != '[object DOMStringMap]') {
            return false;
        }

        // определяем имя атрибута одиночных целей
        let ym_attr = 'ym_' + value.toLowerCase();

        // eсли у DOM элемента нет аттрибута
        if (!element.dataset[ym_attr]) {
            // сработает счетчик яндекс метрики и добавится аттрибут
            ym(this.id, 'reachGoal', value);
            element.dataset[ym_attr] = true;
        }
    };
};

export default new Metrika;
