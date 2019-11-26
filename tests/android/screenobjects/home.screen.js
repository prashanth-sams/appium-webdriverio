import AppScreen from './app.screen';

const SELECTORS = {
    ADD_PLANT: 'android=new UiSelector().resourceId("com.google.samples.apps.sunflower:id/add_plant")'
};

class HomeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.ADD_PLANT);
    }

    get addPlant () {
        return $(SELECTORS.ADD_PLANT)
    }
}

export default new HomeScreen();