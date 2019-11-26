import AppScreen from './app.screen';

const SELECTORS = {
    FIRST_INPUT: '~IntegerA',
    SECOND_INPUT: '~IntegerB',
    COMPUTE_SUM: '~Compute Sum',
    RESULT: '~Answer'
};

class HomeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.FIRST_INPUT);
    }

    get firstInput () {
        return $(SELECTORS.FIRST_INPUT)
    }

    get secondInput () {
        return $(SELECTORS.SECOND_INPUT)
    }

    get computeSum () {
        return $(SELECTORS.COMPUTE_SUM)
    }

    get result () {
        return $(SELECTORS.RESULT)
    }
}

export default new HomeScreen();