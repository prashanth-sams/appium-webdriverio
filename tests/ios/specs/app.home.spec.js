import Gestures from '../../helpers/Gestures';
import HomeScreen from '../screenobjects/home.screen';

describe('Validate home page', () => {
    beforeEach(() => {
        HomeScreen.waitForIsShown(true);
    });

    it('should be able to validate calculator', () => {
        const text = '25';
        HomeScreen.firstInput.setValue(text);
        HomeScreen.secondInput.setValue(text);

        HomeScreen.computeSum.click();

        expect(HomeScreen.result.getText()).toEqual('50');
    });
});
