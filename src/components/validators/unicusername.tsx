import * as Yup from 'yup';
type ValidationResponse = {
    valid: boolean,
    transform?: string
}

const GET_JSON = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

const { AMAX_API_URL } = process.env;

Yup.addMethod(Yup.string, 'unicusername', function (message) {
    return this
        .test({
            name: 'unicusername',
            exclusive: true,
            message: message || 'Username is already taken',  // expect an i18n message to be passed in
            test: async function (value) {
                const response = await fetch(AMAX_API_URL + `/validator/username?value=${value}`, GET_JSON)
                const json:ValidationResponse = await response.json()
                return json.valid
            }
        })
})