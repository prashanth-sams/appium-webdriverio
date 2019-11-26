import Gestures from '../../helpers/Gestures';
import HomeScreen from '../screenobjects/home.screen';

describe('Validate home page', () => {
    beforeEach(() => {
        HomeScreen.waitForIsShown(true);
    });

    it('should be able to validate calculator', () => {
        HomeScreen.addPlant.click();
    });
});
