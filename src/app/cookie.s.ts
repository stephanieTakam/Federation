import Cookie from "universal-cookie";

export default class CookieS {

    static get user() {
        return new Cookie().get('user')
    }

    static setUser(value) 
       { 
        new Cookie().set('user', value, {path:'/'})
    }

    static remove() {
        new Cookie().remove('user')
    }
}