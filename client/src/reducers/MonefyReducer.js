import _ from 'loadsh';
import {
    ERROR_MSG_CHANGED,
    EXPENSES_FETCH,
    EXPENSE_CHANGED,
    INCOME_CHANGED,
    SHOW_EXPENSE_KEYBOARD,
    SHOW_INCOME_KEYBOARD,
    SUBMIT_EXPENSE,
    SUBMIT_INCOME,
    INCOME_FETCH,
    SHOW_STATE,
    CHANGE_ITEM_STATUS
} from '../actions/types';
import { encodeDateWithoutTime } from '../util/encodingDateWithoutTime';

const INITIAL_STATE = {
    currentDate: '',
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
            percentage: 0, color: '#D2481D', name: 'phone'
        },
        {
            percentage: 0, color: '#FF69B4', name: 'gift'
        },
        {
            percentage: 0, color: '#DC143C', name: 'glass-martini-alt'
        },
        {
            percentage: 0, color: '#6495ED', name: 'home'
        },
        {
            percentage: 0, color: '#800000', name: 'dog'
        },
        {
            percentage: 0, color: '#CCCC00', name: 'taxi'
        },
        {
            percentage: 0, color: 'purple', name: 'train'
        },
        {
            percentage: 0, color: '#FF4500', name: 'pizza-slice'
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
            color: '#D2481D',
            quantity: 0,
        },
        {
            name: 'gift',
            color: '#FF69B4',
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
            color: '#800000',
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
            color: '#FF4500',
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
    switch (action.type) {
        case INCOME_CHANGED:
            return { ...state, income: action.payload, errorMsg: '' };
        case EXPENSE_CHANGED:
            return { ...state, expense: action.payload, errorMsg: '' };
        case SHOW_INCOME_KEYBOARD:
            return { ...state, showIncomeKeyboard: action.payload };
        case SHOW_EXPENSE_KEYBOARD:
            return { ...state, showExpanseKeyboard: action.payload };
        case SHOW_STATE:
            return { ...state, showState: action.payload };
        case CHANGE_ITEM_STATUS:
            let listState = state.stateList;
            let item = listState.find(l => l.category === action.payload.category);
            item.collapse = !action.payload.collapse;

            return { ...state, stateList: listState, showState: true };
        case SUBMIT_EXPENSE:
            let totalExpense = state.totalExpense + Number(action.payload.expense);
            console.log('total = ', totalExpense);
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
            return { ...state, expense: '', totalExpense, sections, showExpanseKeyboard: !action.payload.showExpanseKeyboard, showState: !state.showState };
        case EXPENSES_FETCH:
            let totalEx = 0;
            let mapExpense = new Map();
            let list = [];
            let expenses = _.map(action.payload, (val, uid) => {
                let currentDate = new Date(val.date);
                return { ...val, date: encodeDateWithoutTime(currentDate) };
            });
            expenses = expenses.filter(e => e.date === now);
            if (expenses.length === 0) {
                return { ...state, sections, totalExpense: totalEx, stateDictionary: mapExpense };
            }

            if (expenses.length > 0) {
                let expense = expenses.reduce((total, amount) => {
                    return { expense: Number(total.expense) + Number(amount.expense) };
                });
                totalEx = expense.expense;
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

            return { ...state, sections, totalExpense: totalEx, stateDictionary: mapExpense, stateList: list };
        case SUBMIT_INCOME:
            let newIncome = state.totalIncome + Number(action.payload.income);
            return { ...state, totalIncome: newIncome, income: '', showIncomeKeyboard: !action.payload.showIncomeKeyboard, showState: !state.showState };
        case INCOME_FETCH:
            let totalIn = 0;
            let mapIncome = state.stateDictionary;
            let listIncome = state.stateList;
            let incomes = _.map(action.payload, (val, uid) => {
                let currentDate = new Date(val.date);
                return { ...val, date: encodeDateWithoutTime(currentDate) };
            });
            incomes = incomes.filter(e => e.date === now);

            if (incomes.length === 0) {
                return { ...state, totalIncome: totalIn, stateDictionary: mapIncome };
            }
            // calculate total income
            if (incomes.length > 0) {
                let income = incomes.reduce((total, amount) => {
                    return { income: Number(total.income) + Number(amount.income) };
                });
                totalIn = income.income;

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

            // listIncome.forEach(element => {
            //     element.items.forEach(el => {
            //         console.log(el);
            //     });
            // });

            listIncome.sort(compare);
            // console.log(listIncome);
            return { ...state, totalIncome: totalIn, stateDictionary: mapIncome, stateList: listIncome };
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
