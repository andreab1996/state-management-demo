import _ from 'loadsh';
import { ADD_FOR_CATEGORY, CHANGE_DATE, CHANGE_ITEM_STATUS, DELETE_EXPENSE, DELETE_INCOME, ERROR_MSG_CHANGED, EXPENSES_FETCH, EXPENSE_CHANGED, INCOME_CHANGED, INCOME_FETCH, SHOW_EXPENSE_KEYBOARD, SHOW_INCOME_KEYBOARD, SHOW_STATE, SUBMIT_EXPENSE, SUBMIT_INCOME, UPDATE_ITEM, IS_EXISTS, RESET_STATE } from '../actions/types';
import { CategoryIcon } from '../util/CategoryIcon';
import { encodeDateWithoutTime } from '../util/encodingDateWithoutTime';

const INITIAL_STATE = {
    currentDate: '',
    date: '',
    totalExpense: 0,
    totalIncome: 0,
    expense: '',
    income: '',
    errorMsg: '',
    showIncomeKeyboard: true,
    showExpanseKeyboard: true,
    showState: false,
    stateDictionary: new Map(),
    stateList: [],
    operation: '',
    category: null,
    itemForUpdate: {},
    sections: [
        {
            percentage: 100, color: '#A9A9A9', name: 'empty'
        },
        {
            percentage: 0, color: 'orange', name: 'bills'
        },
        {
            percentage: 0, color: 'gray', name: 'car'
        },
        {
            percentage: 0, color: '#9370DB', name: 'phone'
        },
        {
            percentage: 0, color: '#FF00FF', name: 'gift'
        },
        {
            percentage: 0, color: '#DC143C', name: 'glass-martini-alt'
        },
        {
            percentage: 0, color: '#6495ED', name: 'home'
        },
        {
            percentage: 0, color: '#8B4513', name: 'dog'
        },
        {
            percentage: 0, color: '#CCCC00', name: 'taxi'
        },
        {
            percentage: 0, color: 'purple', name: 'train'
        },
        {
            percentage: 0, color: '#FFD700', name: 'pizza-slice'
        },
        {
            percentage: 0, color: 'red', name: 'notes-medical'
        },
        {
            percentage: 0, color: '#708090', name: 'running'
        },
        {
            percentage: 0, color: '#DB7093', name: 'tshirt'
        },
        {
            percentage: 0, color: '#A52A2A', name: 'utensils'
        },
        {
            percentage: 0, color: '#483D8B', name: 'taxi'
        }

    ],
    categories: [
        {
            name: 'bills',
            color: 'orange',
            quantity: 0,
        },
        {
            name: 'car',
            color: 'gray',
            quantity: 0,
        },
        {
            name: 'phone',
            color: '#9370DB',
            quantity: 0,
        },
        {
            name: 'gift',
            color: '#FF00FF',
            quantity: 0,
        },
        {
            name: 'glass-martini-alt',
            color: '#DC143C',
            quantity: 0,
        },
        {
            name: 'home',
            color: '#6495ED',
            quantity: 0,
        },
        {
            name: 'dog',
            color: '#8B4513',
            quantity: 0
        },
        {
            name: 'taxi',
            color: '#CCCC00',
            quantity: 0
        },
        {
            name: 'train',
            color: 'purple',
            quantity: 0
        },
        {
            name: 'pizza-slice',
            color: '#FFD700',
            quantity: 0
        },
        {
            name: 'notes-medical',
            color: 'red',
            quantity: 0
        },
        {
            name: 'running',
            color: '#708090',
            quantity: 0
        },
        {
            name: 'tshirt',
            color: '#DB7093',
            quantity: 0
        },
        {
            name: 'utensils',
            color: '#A52A2A',
            quantity: 0
        },
        {
            name: 'taxi',
            color: '#483D8B',
            quantity: 0
        }
    ]
};

export default (state = INITIAL_STATE, action) => {
    let sections = state.sections;
    let now = encodeDateWithoutTime(new Date());
    let date = state.date;
    switch (action.type) {
        case RESET_STATE:
            let choosenDate = state.date;
            return { ...INITIAL_STATE, date: choosenDate };
        case INCOME_CHANGED:
            let incomeKey = action.payload;
            let income = state.income;
            let incomeOperation = state.operation;
            switch (incomeKey) {
                case '+':
                    return { ...state, operation: '+' };
                case '-':
                    return { ...state, operation: '-' };
                case 'x':
                    return { ...state, operation: 'x' };
                case '/':
                    return { ...state, operation: '/' };
                case '.':
                    income = `${income}.`;
                    return { ...state, operation: '.', income };
                default:
                    if (incomeOperation !== '') {
                        if (incomeOperation === '+') { income = (Number(income) + Number(action.payload)).toString(); }
                        if (incomeOperation === '-') { income = (Number(income) - Number(action.payload)).toString(); }
                        if (incomeOperation === 'x') { income = (Number(income) * Number(action.payload)).toString(); }
                        if (incomeOperation === '/') { income = (Number(income) / Number(action.payload)).toString(); }
                    } else {
                        income = `${income}${action.payload}`;
                    }
                    return { ...state, income, operation: '', errorMsg: '' };
            }
        case UPDATE_ITEM:
            let i = action.payload;
            let cat = CategoryIcon.find(f => f.name === i.category);
            let newValue = 0;
            if (i.category !== 'deposits' && i.category !== 'salary' && i.category !== 'savings') {
                newValue = i.expense;
            } else {
                newValue = i.income;
            }
            return { ...state, category: cat, income: newValue, expense: newValue, itemForUpdate: i };
        case EXPENSE_CHANGED:
            let key = action.payload;
            let expense = state.expense;
            let operation = state.operation;
            switch (key) {
                case '+':
                    return { ...state, operation: '+' };
                case '-':
                    return { ...state, operation: '-' };
                case 'x':
                    return { ...state, operation: 'x' };
                case '/':
                    return { ...state, operation: '/' };
                case '.':
                    expense = `${expense}.`;
                    return { ...state, operation: '.', expense };
                default:
                    if (operation !== '') {
                        if (operation === '+') { expense = (Number(expense) + Number(action.payload)).toString(); }
                        if (operation === '-') { expense = (Number(expense) - Number(action.payload)).toString(); }
                        if (operation === 'x') { expense = (Number(expense) * Number(action.payload)).toString(); }
                        if (operation === '/') { expense = (Number(expense) / Number(action.payload)).toString(); }
                    } else {
                        expense = `${expense}${action.payload}`;
                    }
                    return { ...state, expense, operation: '', errorMsg: '' };
            }

        case ADD_FOR_CATEGORY:
            let choosenCategory = action.payload;
            let category = CategoryIcon.find(c => c.name === choosenCategory);
            return { ...state, category };
        case DELETE_INCOME:
            let currentIncome = state.income;
            let newIncome = currentIncome.slice(0, -1);
            return { ...state, income: newIncome };
        case DELETE_EXPENSE:
            let current = state.expense;
            let newExpense = current.slice(0, -1);
            return { ...state, expense: newExpense };
        case SHOW_INCOME_KEYBOARD:
            return { ...state, showIncomeKeyboard: action.payload };
        case SHOW_EXPENSE_KEYBOARD:
            return { ...state, showExpanseKeyboard: action.payload };
        case SHOW_STATE:
            let monefyList = state.stateList;
            monefyList = monefyList.map(m => {
                return {
                    ...m,
                    collapse: false
                };
            });
            return { ...state, showState: action.payload, stateList: monefyList };
        case CHANGE_ITEM_STATUS:
            let updatedList = state.stateList;
            let item = updatedList.find(l => l.category === action.payload.category);
            item.collapse = !action.payload.collapse;

            return { ...state, stateList: updatedList };
        case CHANGE_DATE:
            return { ...state, date: action.payload, now: action.payload };
        case SUBMIT_EXPENSE:
            let totalExpense = state.totalExpense + Number(action.payload.expense);

            state.categories.forEach(element => {
                if (element.name === action.payload.category) {
                    element.quantity += Number(action.payload.expense);
                    let percentage = element.quantity / totalExpense * 100;
                    let color = element.color;
                    let exist = sections.find(s => s.color === element.color);
                    if (!exist) {
                        sections.push({
                            percentage,
                            color
                        });
                    } else {
                        sections.forEach(el => {
                            if (el.color === color) {
                                el.percentage = percentage;
                            }
                        });
                    }
                } else {
                    sections.map(s => {
                        if (s.color === element.color) {
                            s.percentage = (element.quantity / totalExpense * 100);
                        }
                    });
                }
            });

            return {
                ...state,
                expense: '',
                totalExpense,
                sections,
                showExpanseKeyboard: true,
                showState: false,
                category: null
            };
        case EXPENSES_FETCH:
            let totalEx = 0;
            let mapExpense = new Map();
            let list = [];
            let expenses = _.map(action.payload, (val, uid) => {
                let currentDate = new Date(val.date);
                return { uid, ...val, date: encodeDateWithoutTime(currentDate) };
            });
            if (date === '') { expenses = expenses.filter(e => e.date === now); }
            if (date !== '') { expenses = expenses.filter(e => e.date === date); }
            if (expenses.length === 0) {
                return { ...state, sections, totalExpense: totalEx, stateDictionary: mapExpense };
            }

            if (expenses.length > 0) {
                let inTotalExpense = expenses.reduce((total, amount) => {
                    return { expense: Number(total.expense) + Number(amount.expense) };
                });
                totalEx = inTotalExpense.expense;
            }

            sections.map(s => {
                let ex = expenses.filter(e => e.category === s.name);
                let e = ex.reduce((total, amount) => {
                    return { expense: Number(total.expense) + Number(amount.expense) };
                }, { expense: 0 });
                s.percentage = (e.expense / totalEx) * 100;
            });

            expenses.forEach(element => {
                if (!mapExpense.has(element.category)) {
                    let tmp = [];
                    tmp.push(element);
                    mapExpense.set(element.category, tmp);

                    list.push({
                        category: element.category,
                        total: Number(element.expense),
                        items: [element],
                        collapse: false,
                        type: 'expense'
                    });
                } else {
                    let tmp = mapExpense.get(element.category);
                    tmp.push(element);
                    mapExpense.set(element.category, tmp);
                    let el = list.find(e => e.category === element.category);
                    el.items.push(element);
                    el.total += Number(element.expense);
                    el.collapse = false;
                    el.type = 'expense';
                }
            });

            return {
                ...state,
                sections,
                totalExpense: totalEx,
                stateDictionary: mapExpense,
                stateList: list,
                date: date !== '' ? date : now
            };
        case SUBMIT_INCOME:
            let submitedIncome = state.totalIncome + Number(action.payload.income);
            return {
                ...state,
                totalIncome: submitedIncome,
                income: '',
                showIncomeKeyboard: !action.payload.showIncomeKeyboard,
                showState: false
            };
        case INCOME_FETCH:
            let totalIn = 0;
            let mapIncome = state.stateDictionary;
            let listIncome = state.stateList;
            let incomes = _.map(action.payload, (val, uid) => {
                let currentDate = new Date(val.date);
                return { uid, ...val, date: encodeDateWithoutTime(currentDate) };
            });
            if (date === '') { incomes = incomes.filter(e => e.date === now); }
            if (date !== '') { incomes = incomes.filter(e => e.date === date); }

            if (incomes.length === 0) {
                return { ...state, totalIncome: totalIn, stateDictionary: mapIncome };
            }
            // calculate total income
            if (incomes.length > 0) {
                let intTotalIncome = incomes.reduce((total, amount) => {
                    return { income: Number(total.income) + Number(amount.income) };
                });
                totalIn = intTotalIncome.income;

                incomes.forEach(element => {
                    if (!mapIncome.has(element.category)) {
                        let tmp = [];
                        tmp.push(element);
                        mapIncome.set(element.category, tmp);

                        listIncome.push({
                            category: element.category,
                            total: Number(element.income),
                            items: [element],
                            collapse: false,
                            type: 'income'
                        });
                    } else {
                        let tmp = mapIncome.get(element.category);
                        tmp.push(element);
                        mapIncome.set(element.category, tmp);

                        let el = listIncome.find(e => e.category === element.category);
                        el.items.push(element);
                        el.total += Number(element.income);
                        el.collapse = false;
                        el.type = 'income';
                    }
                });
            }
            listIncome.sort(compare);

            return {
                ...state,
                totalIncome: totalIn,
                stateDictionary: mapIncome,
                stateList: listIncome,
                date: date !== '' ? date : now
            };
        case ERROR_MSG_CHANGED:
            return { ...state, errorMsg: action.payload };
        default:
            let monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
            let today = new Date();
            let dd = today.getDate();
            let month = monthNames[today.getMonth()];
            var yyyy = today.getFullYear();
            today = month + ', ' + dd + ' ' + yyyy;
            return { ...state, currentDate: today };
    }
};

function compare(a, b) {
    if (a.total > b.total) { return -1; }
    if (a.total < b.total) { return 1; }

    return 0;
}
