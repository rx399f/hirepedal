class Constants {

    //https://app.perfometer.co/hirePedal/app/partnerlogin

    static URL_BASE = "http://ec2-34-219-160-18.us-west-2.compute.amazonaws.com/api/"
    static URL_LOGIN = Constants.URL_BASE + "" + "partner/login"
    static URL_REGISTER = Constants.URL_BASE + "" + "partner/register"
    static URL_GET_CATEGORY = Constants.URL_BASE + "" + "partner/partner/category"
    static URL_SAVE_INVENTORY = Constants.URL_BASE + "" + "partner/item/save"
    static URL_GET_INVENTORY_LIST = Constants.URL_BASE + "" + "partner/item"
    static URL_SAVE_IMAGE = Constants.URL_BASE + "" + "image/logo"
    static URL_CONTACT_US = Constants.URL_BASE + "" + "partner/sendConversationDetails"

    //http://ec2-34-219-160-18.us-west-2.compute.amazonaws.com/api/partner/partner/category

}

export default Constants;