import { EXPENSE_CHANGED, INCOME_CHANGED, ERROR_MSG_CHANGED, SHOW_INCOME_KEYBOARD, SHOW_EXPENSE_KEYBOARD, SUBMIT_EXPENSE } from '../actions/types';

const INITIAL_STATE = {
    currentDate: '',
    totalExpense: 0,
    totalIncome: 0,
    expense: '',
    income: '',
    errorMsg: '',
    showIncomeKeyboard: true,
    showExpanseKeyboard: true,
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
            percentage: 0, color: '#800000', name: 'phone'
        },
        {
            percentage: 0, color: '#FF69B4', name: 'gift'
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
        }
    ]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCOME_CHANGED:
            return { ...state, income: action.payload, errorMsg: '' };
        case EXPENSE_CHANGED:
            return { ...state, expense: action.payload, errorMsg: '' };
        case SHOW_INCOME_KEYBOARD:
            return { ...state, showIncomeKeyboard: action.payload };
        case SHOW_EXPENSE_KEYBOARD:
            return { ...state, showExpanseKeyboard: action.payload };
        case SUBMIT_EXPENSE:
            let sections = state.sections;
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
            console.log(sections);
            return { ...state, expense: '', totalExpense, sections };
        case ERROR_MSG_CHANGED:
            return { ...state, errorMsg: action.payload };
        default:
            let monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            let today = new Date();
            let dd = today.getDate();
            let month = monthNames[today.getMonth()];
            var yyyy = today.getFullYear();
            today = month + ', ' + dd + ' ' + yyyy;
            return { ...state, currentDate: today };
    }
};
