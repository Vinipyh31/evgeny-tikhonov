const quiz1 = [
    {
        question: 'Что называется алгоритмом?',
        options: ['протокол вычислительной сети', 'описание последовательности действий, строгое исполнение которых приводит к решению поставленной задачи за конечное число шагов', 'правила выполнения определенных действий'],
        correctAnswer: 'описание последовательности действий, строгое исполнение которых приводит к решению поставленной задачи за конечное число шагов',
    },
    {
        question: 'Линейным называется алгоритм, если',
        options: [
            'его команды выполняются в порядке их естественного следования друг за другом независимо от каких-либо условий',
            'он включает в себя вспомогательный алгоритм',
            'он представим в табличной форме',
        ],
        correctAnswer: 'его команды выполняются в порядке их естественного следования друг за другом независимо от каких-либо условий',
    },
    {
        question: 'Цикличным называется алгоритм, если',
        options: [
            'он представим в табличной форме',
            'ход его выполнения зависит от истинности тех или иных условий',
            'он составлен так, что его выполнение предполагает многократное повторение одних и тех же действий',
        ],
        correctAnswer: 'он составлен так, что его выполнение предполагает многократное повторение одних и тех же действий',
    },
    {
        question: 'Алгоритм включает в себя ветвление, если',
        options: [
            'ход его выполнения зависит от истинности тех или иных условий',
            'он включает в себя вспомогательный алгоритм',
            'он представим в табличной форме',
        ],
        correctAnswer: 'ход его выполнения зависит от истинности тех или иных условий',
    },
    {
        question: 'Как называется свойство алгоритма, заключающееся в том, что каждое действие\nи алгоритм в целом должны иметь возможность завершения',
        options: [
            'Результативность',
            'Конечность',
            'Дискретность',
        ],
        correctAnswer: 'Конечность',
    },
    {
        question: 'Как называется свойство алгоритма,\nзаключающееся в том, что один и тот же алгоритм можно\nиспользовать с разными исходными данными',
        options: [
            'Дискретность',
            'Массовость',
            'Детерминированность',
        ],
        correctAnswer: 'Массовость',
    },
    {
        question: 'Графическое задание алгоритма',
        options: [
            'представление алгоритма в форме таблиц и расчетных формул',
            'схематическое изображение в произвольной форме',
            'способ представления алгоритма с помощью геометрических фигур',
        ],
        correctAnswer: 'способ представления алгоритма с помощью геометрических фигур',
    },
    {
        question: 'Как называют программы\nпредназначенные для перевода в машинные коды программы,\nнаписанной на языке высокого уровня?',
        options: [
            'Конденсаторы',
            'Транслитеры',
            'Трансляторы',
        ],
        correctAnswer: 'Трансляторы',
    },
    {
        question: 'Что такое системы программирования?',
        options: [
            'программные средства для обеспечения бесперебойной работы существующих программ',
            'программные средства для создания и отладки новых программ',
            'программные средства для перевода команд с естественного языка в машинные коды',
        ],
        correctAnswer: 'программные средства для создания и отладки новых программ',
    },
    {
        question: 'Какой язык программирования, созданный в 1957 году,\nявляется одним из первых алгоритмических языков и\nдо сих пор применяется для научных вычислений?',
        options: [
            'Ада',
            'Паскаль',
            'Фортран',
        ],
        correctAnswer: '',
    },
    {
        question: 'Какой язык программирования был создан в 1979 году и\nназван в честь первого в мире программиста?',
        options: [
            'Фортран',
            'Ада',
            'Паскаль',
        ],
        correctAnswer: 'Ада',
    },
    {
        question: 'Жизненный цикл программного обеспечения – это',
        options: [
            'процесс от начала создания ПО до полного изъятия из эксплуатации',
            'совокупность данных и действий над ними',
            'проектирование новой программной системы на базе разработанных и отлаженных ранее модулей',
        ],
        correctAnswer: 'процесс от начала создания ПО до полного изъятия из эксплуатации',
    }
]
const quiz2 = [
    {
        question: 'В каком виде представлены данные в python?',
        options: [
            'в виде функций',
            'в виде объектов',
            'в виде массивов',
        ],
        correctAnswer: 'в виде объектов',
    },
    {
        question: 'Python -  это …',
        options: [
            'интерпретируемый, объектно-ориентированный высокоуровневый язык программирования с динамической семантикой.',
            'объектно-ориентированный язык программирования',
            'строго типизированный объектно-ориентированный язык программирования общего назначения',
        ],
        correctAnswer: 'интерпретируемый, объектно-ориентированный высокоуровневый язык программирования с динамической семантикой.',
    },
    {
        question: 'Создание Python было начато…',
        options: [
            'в 1995 году Джеймсом Гослингом',
            'Гвидо ван Россумом (Guido van Rossum) в 1991 году',
            'в 1998—2001 годах',
        ],
        correctAnswer: 'Гвидо ван Россумом (Guido van Rossum) в 1991 году',
    },
    {
        question: 'Программы, разработанные в консольном режиме, имеют расширение:',
        options: [
            '.ру',
            '.pyw',
            '.pc',
        ],
        correctAnswer: '.ру',
    },
    {
        question: "Как вывести ''Hello world!'' в Python?",
        options: [
            "input(''Привет Мир'');",
            "print(''Hello world!'')",
            "print(''Hello world!'');",
        ],
        correctAnswer: "print(''Hello world!'')",
    },
    {
        question: 'Что обозначает тип данных int?',
        options: [
            'Целочисленное',
            'Вещественное',
            'Строковое',
        ],
        correctAnswer: 'Целочисленное',
    },
    {
        question: 'Выберите правильную запись оператора присваивания',
        options: [
            '10 = х',
            'а == b + x',
            'а = 5',
        ],
        correctAnswer: 'а = 5',
    },
    {
        question: 'Укажите оператор ввода',
        options: [
            'input()',
            'print()',
            'int()',
        ],
        correctAnswer: 'input()',
    },
    {
        question: 'Какой оператор здесь используется?\nif n < 100:\n\tb = n + a',
        options: [
            'Условный оператор',
            'Оператор присваивания',
            'Оператор умножения',
        ],
        correctAnswer: 'Условный оператор',
    },
    {
        question: 'Что лучше использовать для множественного ветвления?',
        options: [
            'if – elif –else',
            'Много if',
            'if – else – elif',
        ],
        correctAnswer: 'if – elif –else',
    },
    {

        question: 'Укажите корректно закомментированную строку согласно правил Python',
        options:
            [
                '//(*?---- comments *)',
                '!-- comments –',
                '# comments',
            ],
        correctAnswer: '# comments',
    },
    {

        question: "Выберите правильный вариант добавления в словарь\nmyDict = {0:'zero',1:'one',2:'two',3:'three}' новой пары 4:'four'",
        options: [
            "myDict[4]='four'",
            "myDict[4:'four']",
            "myDict.new(4:'four')",
        ],
        correctAnswer: "myDict[4]='four'",
    },
    {

        question: "Укажите корректный синтаксис соединения слов из списка myList=['Its','my','life']",
        options: [
            "' '.join(myList)",
            "join(' ').myList",
            "myList.join()",
        ],
        correctAnswer: "' '.join(myList)",
    },
    {

        question: 'Укажите, в каком случае используется структура try ... except',
        options: [
            'сложное условие',
            'оптимизация вычисления сложного условия',
            'перехват исключений',
        ],
        correctAnswer: 'перехват исключений',
    },
    {

        question: 'Укажите корректный синтаксис использования строковых методов',
        options: [
            'a=myString.lower()',
            'a=myString.lower',
            'a=lower(myString)',
        ],
        correctAnswer: 'a=myString.lower()',
    },
    {

        question: 'Укажите, какой метод используется для удаления элемента из списка',
        options: [
            'clean()',
            'remove()',
            'delete()',
        ],
        correctAnswer: 'remove()',
    },
    {

        question: "Каков тип переменной myValues в результате работы кода\nmyDict = {0:'zero',1:'one'}\nmyValues=myDict.values()",
        options: [
            'список пар',
            'список значений',
            'массив значений',
        ],
        correctAnswer: 'список значений',
    },
    {

        question: 'Укажите корректный синтаксис подключения внешнего модуля математических \nфункций.',
        options: [
            'import math',
            'include(math)',
            'using mathematics',
        ],
        correctAnswer: 'import math',
    },
    {

        question: "Какое значение НЕ может быть получено в результате выполнения инструкции\nprint(random.randint(0,10))",
        options: [
            '0',
            '10',
            '9',
        ],
        correctAnswer: '10',
    },
    {

        question: 'Объясните функционал метода get на примере инструкции myDict.get(word,0)',
        options: [
            'возвращает значение ключа word, если такой ключ отсутствует, возвращает ноль',
            'обнуляет значение ключа word',
            'помещает в словарь новый ключ 0 присваивает ему значение word',
        ],
        correctAnswer: 'возвращает значение ключа word, если такой ключ отсутствует, возвращает ноль',
    },
    {

        question: 'Укажите корректный синтаксис использование среза строки',
        options: [
            'slice=myString[1-3]',
            'slice=myString[1:3]',
            'slice=myString(1..3)',
        ],
        correctAnswer: 'slice=myString[1:3]',
    },
    {

        question: 'Укажите, какой из нижеприведенных операторов НЕ является\nоператором сравнения',
        options: [
            '!=',
            '>',
            '=',
        ],
        correctAnswer: '=',
    },
    {

        question: 'Укажите на выражение, корректно использующее оператор\nвозведения в степень',
        options: [
            'x*2',
            'x**2',
            'x^2',
        ],
        correctAnswer: 'x**2',
    },
    {

        question: 'Укажите правильный код, выводящий первую пару "ключ-значение"',
        options: [
            'print (myDict.pop(0))',
            'print (myDict.extract(0))',
            'словарь не упорядочен, нет ни первой пары, ни второй',
        ],
        correctAnswer: 'словарь не упорядочен, нет ни первой пары, ни второй',
    },
    {

        question: 'Укажите корректный синтаксис открытия файла',
        options: [
            "myFile=open('mbox.txt', 'r')",
            'myFile== open(box.txt) ',
            "open.myFile('mbox.txt')",
        ],
        correctAnswer: "myFile=open('mbox.txt', 'r')",
    },
    {

        question: 'Что выведет следующий код:\nn = 5 \nwhile(n): \n\tn = n -1 \n\tprint(n, end=" ") \n',
        options: [
            '5 4 3 2 1',
            '4 3 2 1 0',
            '4 3 2 1',
        ],
        correctAnswer: '4 3 2 1 0',
    },
    {

        question: 'Какая функция отвечает за вывод длины списка?',
        options: [
            'size()',
            'len()',
            'length()',
        ],
        correctAnswer: 'len()',
    },
    {

        question: 'В каком из случаев переменная а будет являться кортежем?',
        options: [
            'a = (1,)',
            'a = (1)',
            'a = {1}',
        ],
        correctAnswer: 'a = (1,)',
    },
    {

        question: 'Сколько раз можно изменять содержимое кортежа в Python?',
        options: [
            'неограниченное количество раз',
            'не более двух раз',
            'кортеж нельзя изменять',
        ],
        correctAnswer: 'кортеж нельзя изменять',
    },
    {

        question: 'Какая функция используется для создания кортежа?',
        options: [
            'tuples()',
            'tuple()',
            'tuple_list()',
        ],
        correctAnswer: 'tuple()',
    },
    {

        question: 'Возможные режимы открытия текстовых файлов:',
        options: [
            'r, w, a',
            'r, ab,w+',
            'a,wb,a+',
        ],
        correctAnswer: 'r, w, a',
    },
    {

        question: 'Для записи информации в файл используется метод',
        options: [
            'open()',
            'write()',
            'read()'
        ],
        correctAnswer: 'write()',
    },
    {

        question: ') Обработка файлов в Python выполняется с помощью стандартного модуля ',
        options: [
            'osfile',
            'os',
            'path'
        ],
        correctAnswer: 'os',
    },
]

const quiz3 = [
    {
        question: 'Какими навыки должен иметь Python-специалист?',
        options: ['умение строить алгоритмы', 'знание языков программирования', 'умение работать в соответствующей системе программирования', 'все вышеперечисленное'],
        correctAnswer: 'все вышеперечисленное',
    },
    {
        question: 'Что такое основные структуры алгоритмов?',
        options: ['набор блоков и стандартных способов их соединения для выполнения типичных последовательностей действий', 'набор инструкций для выполнения конкретной задачи', 'набор переменных и констант, используемых в программе'],
        correctAnswer: 'набор блоков и стандартных способов их соединения для выполнения типичных последовательностей действий',
    },
    {
        question: 'Какие алгоритмы называют линейными?',
        options: ['алгоритмы, в которых действия выполняются последовательно друг за другом', 'алгоритмы, в которых используются условные операторы', 'алгоритмы, в которых используются циклы'],
        correctAnswer: 'алгоритмы, в которых действия выполняются последовательно друг за другом',
    },
    {
        question: 'Какой алгоритм называется разветвляющимся?',
        options: ['алгоритм, в котором действия выполняются по одной из возможных ветвей решения задачи, в зависимости от выполнения условий', 'алгоритм, в котором используются циклы', 'алгоритм, в котором используются массивы'],
        correctAnswer: 'алгоритм, в котором действия выполняются по одной из возможных ветвей решения задачи, в зависимости от выполнения условий',
    },
    {
        question: 'алгоритм называется циклическим?',
        options: ['алгоритм, в котором действия выполняются последовательно друг за другом', 'алгоритм, в котором используются условные операторы', 'алгоритм, в котором некоторая часть операций выполняется многократно'],
        correctAnswer: 'алгоритм, в котором некоторая часть операций выполняется многократно',
    },
    {
        question: 'Что такое цикл?',
        options: ['последовательность действий, выполняющихся один раз', 'последовательность действий, выполняющихся многократно, каждый раз при новых значениях параметра', 'последовательность действий, выполняющихся в обратном порядке'],
        correctAnswer: 'последовательность действий, выполняющихся многократно, каждый раз при новых значениях параметра',
    },
    {
        question: 'Что такое логика?',
        options: ['наука о формах и способах мышления', 'наука о живых организмах', 'наука о растительных организмах'],
        correctAnswer: 'наука о формах и способах мышления',
    },
    {
        question: 'Что такое язык программирования?',
        options: ['система обозначений, служащая для точного описания алгоритмов решения задач на ЭВМ', 'система обозначений, служащая для описания географических объектов', 'система обозначений, служащая для описания архитектурных проектов'],
        correctAnswer: 'система обозначений, служащая для точного описания алгоритмов решения задач на ЭВМ',
    },
    {
        question: 'Что такое программа?',
        options: ['список задач, которые нужно решить на компьютере', 'упорядоченный список команд для решения некоторой задачи', 'текст, написанный на естественном языке'],
        correctAnswer: 'упорядоченный список команд для решения некоторой задачи',
    },
    {
        question: 'Назовите методы программирования',
        options: ['Структурное программирование', 'Модульное программирование', 'Объектно-ориентированное программирование', 'Все вышеперечисленные методы'],
        correctAnswer: 'Все вышеперечисленные методы',
    },
]

const quizItog = [
    {

        question: 'Укажите, какой метод используется для удаления элемента из списка',
        options: [
            'clean()',
            'remove()',
            'delete()',
        ],
        correctAnswer: 'remove()',
    },
    {

        question: "Каков тип переменной myValues в результате работы кода\nmyDict = {0:'zero',1:'one'}\nmyValues=myDict.values()",
        options: [
            'список пар',
            'список значений',
            'массив значений',
        ],
        correctAnswer: 'список значений',
    },
    {

        question: 'Укажите корректный синтаксис подключения внешнего модуля математических \nфункций.',
        options: [
            'import math',
            'include(math)',
            'using mathematics',
        ],
        correctAnswer: 'import math',
    },
    {

        question: "Какое значение НЕ может быть получено в результате выполнения инструкции\nprint(random.randint(0,10))",
        options: [
            '0',
            '10',
            '9',
        ],
        correctAnswer: '10',
    },
    {

        question: 'Объясните функционал метода get на примере инструкции myDict.get(word,0)',
        options: [
            'возвращает значение ключа word, если такой ключ отсутствует, возвращает ноль',
            'обнуляет значение ключа word',
            'помещает в словарь новый ключ 0 присваивает ему значение word',
        ],
        correctAnswer: 'возвращает значение ключа word, если такой ключ отсутствует, возвращает ноль',
    },
    {

        question: 'Укажите корректный синтаксис использование среза строки',
        options: [
            'slice=myString[1-3]',
            'slice=myString[1:3]',
            'slice=myString(1..3)',
        ],
        correctAnswer: 'slice=myString[1:3]',
    },
    {

        question: 'Укажите, какой из нижеприведенных операторов НЕ является\nоператором сравнения',
        options: [
            '!=',
            '>',
            '=',
        ],
        correctAnswer: '=',
    },
    {

        question: 'Укажите на выражение, корректно использующее оператор\nвозведения в степень',
        options: [
            'x*2',
            'x**2',
            'x^2',
        ],
        correctAnswer: 'x**2',
    },
    {

        question: 'Укажите правильный код, выводящий первую пару "ключ-значение"',
        options: [
            'print (myDict.pop(0))',
            'print (myDict.extract(0))',
            'словарь не упорядочен, нет ни первой пары, ни второй',
        ],
        correctAnswer: 'словарь не упорядочен, нет ни первой пары, ни второй',
    },
    {

        question: 'Укажите корректный синтаксис открытия файла',
        options: [
            "myFile=open('mbox.txt', 'r')",
            'myFile== open(box.txt) ',
            "open.myFile('mbox.txt')",
        ],
        correctAnswer: "myFile=open('mbox.txt', 'r')",
    },
    {

        question: 'Что выведет следующий код:\nn = 5 \nwhile(n): \n\tn = n -1 \n\tprint(n, end=" ") \n',
        options: [
            '5 4 3 2 1',
            '4 3 2 1 0',
            '4 3 2 1',
        ],
        correctAnswer: '4 3 2 1 0',
    },
    {

        question: 'Какая функция отвечает за вывод длины списка?',
        options: [
            'size()',
            'len()',
            'length()',
        ],
        correctAnswer: 'len()',
    },
    {

        question: 'В каком из случаев переменная а будет являться кортежем?',
        options: [
            'a = (1,)',
            'a = (1)',
            'a = {1}',
        ],
        correctAnswer: 'a = (1,)',
    },
    {

        question: 'Сколько раз можно изменять содержимое кортежа в Python?',
        options: [
            'неограниченное количество раз',
            'не более двух раз',
            'кортеж нельзя изменять',
        ],
        correctAnswer: 'кортеж нельзя изменять',
    },
    {

        question: 'Какая функция используется для создания кортежа?',
        options: [
            'tuples()',
            'tuple()',
            'tuple_list()',
        ],
        correctAnswer: 'tuple()',
    },
    {
        question: 'Что такое цикл?',
        options: ['последовательность действий, выполняющихся один раз', 'последовательность действий, выполняющихся многократно, каждый раз при новых значениях параметра', 'последовательность действий, выполняющихся в обратном порядке'],
        correctAnswer: 'последовательность действий, выполняющихся многократно, каждый раз при новых значениях параметра',
    },
    {
        question: 'Что такое логика?',
        options: ['наука о формах и способах мышления', 'наука о живых организмах', 'наука о растительных организмах'],
        correctAnswer: 'наука о формах и способах мышления',
    },
    {
        question: 'Что такое язык программирования?',
        options: ['система обозначений, служащая для точного описания алгоритмов решения задач на ЭВМ', 'система обозначений, служащая для описания географических объектов', 'система обозначений, служащая для описания архитектурных проектов'],
        correctAnswer: 'система обозначений, служащая для точного описания алгоритмов решения задач на ЭВМ',
    },
    {
        question: 'Что такое программа?',
        options: ['список задач, которые нужно решить на компьютере', 'упорядоченный список команд для решения некоторой задачи', 'текст, написанный на естественном языке'],
        correctAnswer: 'упорядоченный список команд для решения некоторой задачи',
    },
    {
        question: 'Назовите методы программирования',
        options: ['Структурное программирование', 'Модульное программирование', 'Объектно-ориентированное программирование', 'Все вышеперечисленные методы'],
        correctAnswer: 'Все вышеперечисленные методы',
    },
    {
        question: 'Что называется алгоритмом?',
        options: ['протокол вычислительной сети', 'описание последовательности действий, строгое исполнение которых приводит к решению поставленной задачи за конечное число шагов', 'правила выполнения определенных действий'],
        correctAnswer: 'описание последовательности действий, строгое исполнение которых приводит к решению поставленной задачи за конечное число шагов',
    },
    {
        question: 'Линейным называется алгоритм, если',
        options: [
            'его команды выполняются в порядке их естественного следования друг за другом независимо от каких-либо условий',
            'он включает в себя вспомогательный алгоритм',
            'он представим в табличной форме',
        ],
        correctAnswer: 'его команды выполняются в порядке их естественного следования друг за другом независимо от каких-либо условий',
    },
    {
        question: 'Цикличным называется алгоритм, если',
        options: [
            'он представим в табличной форме',
            'ход его выполнения зависит от истинности тех или иных условий',
            'он составлен так, что его выполнение предполагает многократное повторение одних и тех же действий',
        ],
        correctAnswer: 'он составлен так, что его выполнение предполагает многократное повторение одних и тех же действий',
    },
    {
        question: 'Алгоритм включает в себя ветвление, если',
        options: [
            'ход его выполнения зависит от истинности тех или иных условий',
            'он включает в себя вспомогательный алгоритм',
            'он представим в табличной форме',
        ],
        correctAnswer: 'ход его выполнения зависит от истинности тех или иных условий',
    },
    {
        question: 'Как называется свойство алгоритма, заключающееся в том, что каждое действие\nи алгоритм в целом должны иметь возможность завершения',
        options: [
            'Результативность',
            'Конечность',
            'Дискретность',
        ],
        correctAnswer: 'Конечность',
    },
    {
        question: 'Как называется свойство алгоритма, заключающееся в том,\nчто один и тот же алгоритм можно использовать\nс разными исходными данными',
        options: [
            'Дискретность',
            'Массовость',
            'Детерминированность',
        ],
        correctAnswer: 'Массовость',
    },
    {
        question: 'Графическое задание алгоритма',
        options: [
            'представление алгоритма в форме таблиц и расчетных формул',
            'схематическое изображение в произвольной форме',
            'способ представления алгоритма с помощью геометрических фигур',
        ],
        correctAnswer: 'способ представления алгоритма с помощью геометрических фигур',
    },
    {
        question: 'Как называют программы, предназначенные для перевода\nв машинные коды программы, написанной на языке высокого уровня?',
        options: [
            'Конденсаторы',
            'Транслитеры',
            'Трансляторы',
        ],
        correctAnswer: 'Трансляторы',
    },
    {
        question: 'Что такое системы программирования?',
        options: [
            'программные средства для обеспечения бесперебойной работы существующих программ',
            'программные средства для создания и отладки новых программ',
            'программные средства для перевода команд с естественного языка в машинные коды',
        ],
        correctAnswer: 'программные средства для создания и отладки новых программ',
    },
    {
        question: 'Какой язык программирования, созданный в 1957 году,\nявляется одним из первых алгоритмических языков\nи до сих пор применяется для научных вычислений?',
        options: [
            'Ада',
            'Паскаль',
            'Фортран',
        ],
        correctAnswer: '',
    },
    {
        question: 'Какой язык программирования был создан в 1979 году\nи назван в честь первого в мире программиста?',
        options: [
            'Фортран',
            'Ада',
            'Паскаль',
        ],
        correctAnswer: 'Ада',
    },
]


export default { quiz1, quiz2, quiz3, quizItog }
